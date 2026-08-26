import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import HeroIllustration from "@/components/HeroIllustration";

const EXPERTISE = [
  {
    title: "General Surgery",
    desc: "Diagnosis and surgical management of a wide range of general surgical conditions.",
  },
  {
    title: "Laparoscopic Surgery",
    desc: "Minimally invasive surgical procedures where clinically appropriate.",
  },
  {
    title: "Surgical Consultation",
    desc: "Detailed evaluation and treatment planning based on the patient’s condition.",
  },
  {
    title: "Pre & Post-Surgical Care",
    desc: "Guidance and support throughout the surgical journey, from consultation to recovery.",
  },
];

const PROCEDURES = [
  { title: "Laparoscopic Cholecystectomy", desc: "Gallbladder removal surgery." },
  { title: "Hernia Repair", desc: "Inguinal, umbilical and other abdominal hernias." },
  { title: "Laparoscopic Hernia Repair", desc: "Minimally invasive repair of selected hernias." },
  { title: "Appendectomy", desc: "Surgical removal of the appendix." },
  { title: "Laparoscopic Appendectomy", desc: "Minimally invasive appendix removal." },
  { title: "Piles Surgery", desc: "Surgical treatment of haemorrhoids." },
  { title: "Fissure Surgery", desc: "Surgical treatment of chronic anal fissures." },
  { title: "Fistula Surgery", desc: "Surgical treatment of anal fistula." },
  { title: "Hydrocele Surgery", desc: "Surgical treatment of hydrocele." },
  { title: "Lipoma Excision", desc: "Removal of benign fatty lumps." },
  { title: "Sebaceous Cyst Excision", desc: "Removal of selected skin and subcutaneous cysts." },
  { title: "Breast Lump Excision", desc: "Removal and evaluation of selected breast lumps." },
  { title: "Thyroid Surgery", desc: "Surgical treatment of selected thyroid conditions." },
  { title: "Varicose Vein Procedures", desc: "Management of selected symptomatic varicose veins." },
  { title: "Abscess Drainage", desc: "Drainage of abscesses and infected collections." },
];

export default function Home() {
  return (
    <>
      <Header />

      <main id="top">
        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="hero-copy">
              <span className="eyebrow">Consultant General &amp; Laparoscopic Surgeon</span>
              <h1>
                Experienced Surgical
                <br />
                Care.
                <br />
                <em>Focused on You.</em>
              </h1>
              <p className="hero-lede">
                MBBS, MS &ndash; General Surgery. A patient-centred approach to the
                diagnosis and surgical management of general surgical conditions.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary">Book an Appointment</a>
                <a href="#contact" className="btn btn-outline">Contact Now</a>
              </div>
              <div className="hero-stats">
                <div>
                  <div className="stat-num">15<span className="accent">+</span></div>
                  <div className="stat-label">Years Overall</div>
                </div>
                <div>
                  <div className="stat-num">10<span className="accent">+</span></div>
                  <div className="stat-label">Years Specialist</div>
                </div>
                <div>
                  <div className="stat-num">15</div>
                  <div className="stat-label">Procedures</div>
                </div>
              </div>
            </div>
            <div className="hero-media">
              <div className="hero-media-frame">
                <HeroIllustration />
              </div>
              <div className="hero-badge">
                <span className="eyebrow">Credentials</span>
                <strong>MBBS, MS &ndash; General Surgery</strong>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-tint">
          <div className="container about-grid">
            <Reveal>
              <span className="eyebrow">(a) About</span>
              <h2>
                Experienced Hands.
                <br />
                Personalised Surgical Care.
              </h2>
              <div className="rule" />
            </Reveal>
            <Reveal delay={0.1} className="about-copy">
              <p>
                Dr. Sameera Kota is a Consultant General and Laparoscopic Surgeon
                with extensive experience in the diagnosis and surgical management
                of a wide range of general surgical conditions.
              </p>
              <p>
                With 15 years of overall experience and 10 years of specialist
                experience in General Surgery, she combines clinical expertise with
                a patient-centred approach to surgical care.
              </p>
              <p>
                She believes in understanding each patient&rsquo;s concerns,
                explaining treatment options clearly and recommending the most
                appropriate treatment based on their individual condition.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Areas of expertise */}
        <section id="expertise">
          <div className="container">
            <Reveal className="section-head">
              <span className="eyebrow">(b) Areas of Expertise</span>
              <h2>Comprehensive General &amp; Laparoscopic Surgical Care</h2>
            </Reveal>
            <div className="card-grid-2">
              {EXPERTISE.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="expertise-card">
                    <span className="card-index">{String(i + 1).padStart(2, "0")}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Procedures */}
        <section id="procedures" className="bg-tint">
          <div className="container">
            <Reveal className="section-head">
              <span className="eyebrow">(c) Surgical Procedures</span>
              <h2>Advanced Surgical Care for a Wide Range of Conditions</h2>
              <p className="procedures-lede">
                Dr. Sameera Kota provides surgical consultation and treatment for a
                variety of general and laparoscopic surgical conditions.
              </p>
            </Reveal>
            <div className="procedure-grid">
              {PROCEDURES.map((item, i) => (
                <Reveal key={item.title} delay={(i % 3) * 0.06}>
                  <div className="procedure-item">
                    <span className="procedure-index">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose */}
        <section id="experience">
          <div className="container">
            <Reveal className="section-head">
              <span className="eyebrow">(d) Why Choose Dr. Sameera Kota</span>
              <h2>Experience That Makes a Difference</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="experience-card">
                <div className="experience-top">
                  <div>
                    <div className="experience-num">15<span className="accent">+</span></div>
                    <div className="stat-label">Years Overall Clinical Experience</div>
                  </div>
                  <div>
                    <h3>General Surgery</h3>
                    <p>Comprehensive surgical expertise across a full range of conditions.</p>
                  </div>
                  <div>
                    <h3>Laparoscopic Surgery</h3>
                    <p>Minimally invasive surgical care where clinically appropriate.</p>
                  </div>
                </div>
                <div className="experience-note">
                  Patient-centred care &mdash; clear communication, personalised
                  treatment planning and dedicated support throughout your surgical
                  journey.
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="container">
            <Reveal>
              <span className="eyebrow">Your Surgical Journey</span>
              <h2>Get Expert Guidance. Make an Informed Decision.</h2>
              <p className="cta-lede">
                Whether you have been advised to undergo surgery or are looking for
                an expert evaluation of a surgical condition, Dr. Sameera Kota
                provides personalised consultation and treatment planning based on
                your individual needs.
              </p>
              <div className="cta-actions">
                <a href="#contact" className="btn btn-gold">Book an Appointment</a>
                <span className="cta-signature">
                  Dr. Sameera Kota &mdash; MBBS, MS &ndash; General Surgery
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <div className="container">
            <Reveal className="section-head">
              <span className="eyebrow">(e) Contact Dr. Sameera Kota</span>
              <h2>Book Your Consultation</h2>
            </Reveal>
            <div className="contact-grid">
              <Reveal delay={0.05} className="contact-fields">
                <div className="contact-field">
                  <span className="eyebrow">Clinic / Hospital</span>
                  <span className="value">Susheela Hospitals</span>
                </div>
                <div className="contact-field">
                  <span className="eyebrow">Location</span>
                  <span className="value">[Location]</span>
                </div>
                <div className="contact-field">
                  <span className="eyebrow">Phone</span>
                  <span className="value">
                    <a href="tel:+918125205698">+91 81252 05698</a>
                  </span>
                </div>
                <div className="contact-field">
                  <span className="eyebrow">Email</span>
                  <span className="value">
                    <a href="mailto:drsameerakota64@gmail.com">drsameerakota64@gmail.com</a>
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="contact-card">
                  <h3>Dr. Sameera Kota</h3>
                  <p className="role">Consultant General &amp; Laparoscopic Surgeon</p>
                  <div className="btn-row">
                    <a href="#contact" className="btn btn-primary">Book Appointment</a>
                    <a href="tel:+918125205698" className="btn btn-outline">Call Now</a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
