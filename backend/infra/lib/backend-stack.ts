import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import * as s3 from "aws-cdk-lib/aws-s3";

export interface BackendStackProps extends cdk.StackProps {
  envName: string;
}

/**
 * Foundational data-layer stack for the Dr. Sameera Kota site.
 * Provisions the DynamoDB table and S3 asset bucket the site will
 * use once dynamic features (appointment requests, content, media)
 * are added. No API/Lambda yet — this only stands up storage so the
 * frontend can grow into it incrementally.
 */
export class BackendStack extends cdk.Stack {
  public readonly appTable: dynamodb.Table;
  public readonly assetsBucket: s3.Bucket;

  constructor(scope: Construct, id: string, props: BackendStackProps) {
    super(scope, id, props);

    const { envName } = props;

    this.appTable = new dynamodb.Table(this, "AppTable", {
      tableName: `dr-sameera-kota-${envName}`,
      partitionKey: { name: "PK", type: dynamodb.AttributeType.STRING },
      sortKey: { name: "SK", type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy:
        envName === "prod" ? cdk.RemovalPolicy.RETAIN : cdk.RemovalPolicy.DESTROY,
      pointInTimeRecovery: envName === "prod",
    });

    this.assetsBucket = new s3.Bucket(this, "AssetsBucket", {
      bucketName: `dr-sameera-kota-assets-${envName}-${this.account}`,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
      cors: [
        {
          allowedMethods: [s3.HttpMethods.GET, s3.HttpMethods.PUT, s3.HttpMethods.POST],
          allowedOrigins: ["*"],
          allowedHeaders: ["*"],
        },
      ],
      removalPolicy:
        envName === "prod" ? cdk.RemovalPolicy.RETAIN : cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: envName !== "prod",
    });

    new cdk.CfnOutput(this, "AppTableName", { value: this.appTable.tableName });
    new cdk.CfnOutput(this, "AssetsBucketName", { value: this.assetsBucket.bucketName });
  }
}
