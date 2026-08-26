# Dr. Sameera Kota — Surgical Care Website

Monorepo for the Dr. Sameera Kota (Consultant General & Laparoscopic Surgeon)
website. Currently a single Next.js (SSR) landing page, structured so
backend services can be layered in later without moving anything.

```
.
├── amplify.yml           # Amplify Hosting build spec (monorepo, appRoot: frontend)
├── frontend/              # Next.js app (App Router, SSR)
│   ├── src/app/           # layout.tsx, page.tsx, globals.css
│   └── src/components/    # Header, Footer, Reveal (scroll animations), etc.
└── backend/
    └── infra/             # AWS CDK (TypeScript) — provisions DynamoDB + S3
        ├── bin/app.ts
        └── lib/backend-stack.ts
```

## Frontend

Next.js 16 (App Router), TypeScript, server-rendered. No CSS framework —
hand-written CSS in `src/app/globals.css` matching the reference design,
plus scroll-in-view animations (`src/components/Reveal.tsx`) and a sticky
header with smooth in-page scrolling + active-section highlighting
(`src/components/Header.tsx`).

```bash
cd frontend
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start   # production SSR server
```

## Backend (scaffolded, not yet wired up)

`backend/infra` is an AWS CDK app that provisions the data layer the site
will need once it grows beyond static content: a DynamoDB table
(`dr-sameera-kota-<env>`) and a private S3 bucket for assets
(`dr-sameera-kota-assets-<env>-<account>`). No API/Lambda yet — add those
here when the first dynamic feature (e.g. appointment requests) is built.

```bash
cd backend/infra
npm install
npx cdk deploy --context envName=dev
```

Requires AWS credentials for the target account (`aws configure` or an
assumed role) and CDK bootstrap (`npx cdk bootstrap`) in that
account/region once.

## Deploying to AWS Amplify

This repo is set up as an Amplify **monorepo** app so the frontend deploys
on its own while `backend/` stays independent (deployed via CDK, not
Amplify's built-in backend). `amplify.yml` at the repo root builds the
Next.js app (`npm ci && npm run build`) with `appRoot: frontend`; Amplify
Hosting auto-detects the `.next` output as an SSR app and provisions the
compute (Lambda) needed to serve it — no extra config required.

1. **AWS Console → Amplify → Create app → Host a web app**, connect this
   GitHub repository and the branch to deploy (e.g. `main`).
2. Amplify will detect `amplify.yml` at the repo root and the app root
   `frontend` (already set in `amplify.yml`).
3. Deploy. Amplify builds and serves the Next.js app with SSR.
4. **Custom domain**: App settings → Domain management → Add domain →
   enter the domain, verify ownership (DNS records Amplify gives you,
   either auto-added if the domain is in Route 53 or manually added at
   your registrar), then wait for SSL cert validation + propagation.
5. Every subsequent push to the connected branch redeploys automatically.

> This environment doesn't have real AWS credentials attached (no
> `aws sts get-caller-identity` access), so the Amplify app, DynamoDB
> table, S3 bucket, and domain attachment need to be created from an AWS
> account you control — either via the Console steps above or by running
> the CDK/Amplify CLI commands with your own credentials.

## Roadmap

- Wire up an API (API Gateway + Lambda, or Next.js Route Handlers backed
  by the DynamoDB table) for appointment requests / content management.
- Point the frontend at real contact details (currently placeholders:
  `[Hospital Name]`, `[Location]`, `[Phone Number]`, `[Email Address]`).
- Replace the hero illustration with an approved photo, once available,
  served from the S3 assets bucket.
