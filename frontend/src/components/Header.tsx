"use client";

import { useEffect, useState, type MouseEvent } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#procedures", label: "Procedures" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.href.slice(1))).filter(
      (el): el is HTMLElement => Boolean(el)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-96px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", href);
    }
    setOpen(false);
  };

  return (
    <div className="site-topband">
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-info">
            <a href="tel:+918125205698" className="topbar-item">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4.5 4h4l2 5-2.5 1.5a11 11 0 0 0 5.5 5.5L15 13.5l5 2v4a2 2 0 0 1-2 2C9.5 21.5 2.5 14.5 2.5 6a2 2 0 0 1 2-2Z" />
              </svg>
              +91 81252 05698
            </a>
            <a href="mailto:drsameerakota64@gmail.com" className="topbar-item topbar-email">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m4 6.5 8 6.5 8-6.5" />
              </svg>
              drsameerakota64@gmail.com
            </a>
            <span className="topbar-item">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="8.5" />
                <path d="M12 7.5V12l3 2" />
              </svg>
              10 AM &ndash; 8 PM
            </span>
          </div>
          <div className="topbar-social">
            <span className="topbar-follow">Follow Us:</span>
            <a
              href="https://www.facebook.com/dr.sameerakota.generalsurgeon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M13.5 21v-7.8h2.6l.4-3h-3V8.2c0-.87.24-1.46 1.5-1.46h1.6V4.1C15.9 4.03 14.9 3.9 13.8 3.9c-2.3 0-3.9 1.4-3.9 3.98v2.32H7.3v3h2.6V21h3.6Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/drsameera.generalsurgeon/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8">
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
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.85L3.5 20.5l4.27-1.16A8.5 8.5 0 1 0 12 3.5Zm0 1.6a6.9 6.9 0 0 1 5.86 10.55l-.2.32.53 1.95-1.98-.53-.32.19A6.9 6.9 0 1 1 12 5.1Zm-2.68 3.1c-.17 0-.44.06-.67.32-.23.26-.87.85-.87 2.06s.9 2.39 1.02 2.55c.13.17 1.75 2.78 4.3 3.79 2.12.84 2.56.67 3.02.63.47-.04 1.5-.6 1.71-1.19.21-.58.21-1.08.15-1.19-.06-.1-.23-.16-.48-.29-.25-.13-1.5-.74-1.73-.82-.23-.09-.4-.13-.57.13-.17.26-.65.82-.8 1-.15.16-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.75-.66-1.25-1.48-1.4-1.74-.15-.26-.02-.4.11-.53.11-.11.25-.29.38-.44.13-.15.17-.26.25-.43.08-.17.04-.32-.02-.45-.06-.13-.57-1.4-.79-1.91-.2-.5-.42-.43-.57-.44Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container">
          <a href="#top" className="brand">
            <span className="brand-text">
              <span className="brand-name">Dr. Sameera Kota</span>
              <span className="brand-role">SURGEON</span>
            </span>
          </a>
          <nav className={`nav-links${open ? " nav-open" : ""}`}>
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={active === link.href ? "active" : ""}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <a
              href="#contact"
              className="btn btn-gold"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              Book Appointment
            </a>
            <button
              className="nav-toggle"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
