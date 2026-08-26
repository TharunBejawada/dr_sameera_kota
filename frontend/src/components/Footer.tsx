export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand-name">Dr. Sameera Kota</span>
            <p>
              Consultant General &amp; Laparoscopic Surgeon
              <br />
              MBBS, MS &ndash; General Surgery
            </p>
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
          Website content and listed procedures should be finalised against the
          doctor&rsquo;s verified qualifications, hospital affiliation and currently
          offered services.
        </div>
      </div>
    </footer>
  );
}
