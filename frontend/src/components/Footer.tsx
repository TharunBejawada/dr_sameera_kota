export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand-name">Dr. Sameera Kota</span>
            <p className="footer-credentials">MBBS, MS (General Surgery), FMAS, FISCP</p>
            <p className="footer-role">Consultant General, Laser &amp; Laparoscopic Surgeon</p>

            <div className="footer-info">
              <div className="footer-info-row">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22Z" />
                  <circle cx="12" cy="9.5" r="2.5" />
                </svg>
                <span>
                  Ground Floor, H.No. 11-12-149, Road No. 3, SRK Puram, Kothapet, L.B.
                  Nagar, Hyderabad, Telangana &ndash; 500102
                </span>
              </div>
              <div className="footer-info-row">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4.5 4h4l2 5-2.5 1.5a11 11 0 0 0 5.5 5.5L15 13.5l5 2v4a2 2 0 0 1-2 2C9.5 21.5 2.5 14.5 2.5 6a2 2 0 0 1 2-2Z" />
                </svg>
                <span>
                  Appointments: <a href="tel:+918125205698">+91 81252 05698</a>
                </span>
              </div>
            </div>

            <div className="footer-cta">
              <a href="#contact" className="btn btn-gold">Book an Appointment</a>
              <a href="tel:+918125205698" className="btn btn-outline">Call us at +91 81252 05698</a>
            </div>

            <div className="footer-social">
              <h5>Follow Us</h5>
              <div className="social-links">
                <a
                  href="https://www.facebook.com/dr.sameerakota.generalsurgeon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M13.5 21v-7.8h2.6l.4-3h-3V8.2c0-.87.24-1.46 1.5-1.46h1.6V4.1C15.9 4.03 14.9 3.9 13.8 3.9c-2.3 0-3.9 1.4-3.9 3.98v2.32H7.3v3h2.6V21h3.6Z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/drsameera.generalsurgeon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/918125205698"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.85L3.5 20.5l4.27-1.16A8.5 8.5 0 1 0 12 3.5Zm0 1.6a6.9 6.9 0 0 1 5.86 10.55l-.2.32.53 1.95-1.98-.53-.32.19A6.9 6.9 0 1 1 12 5.1Zm-2.68 3.1c-.17 0-.44.06-.67.32-.23.26-.87.85-.87 2.06s.9 2.39 1.02 2.55c.13.17 1.75 2.78 4.3 3.79 2.12.84 2.56.67 3.02.63.47-.04 1.5-.6 1.71-1.19.21-.58.21-1.08.15-1.19-.06-.1-.23-.16-.48-.29-.25-.13-1.5-.74-1.73-.82-.23-.09-.4-.13-.57.13-.17.26-.65.82-.8 1-.15.16-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.75-.66-1.25-1.48-1.4-1.74-.15-.26-.02-.4.11-.53.11-.11.25-.29.38-.44.13-.15.17-.26.25-.43.08-.17.04-.32-.02-.45-.06-.13-.57-1.4-.79-1.91-.2-.5-.42-.43-.57-.44Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#expertise">Expertise</a></li>
              <li><a href="#procedures">Procedures</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Focus</h5>
            <ul>
              <li>General Surgery</li>
              <li>Laparoscopic Surgery</li>
              <li>Surgical Consultation</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          Copyright &copy; 2026 . Dr. Sameera Kota . All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
