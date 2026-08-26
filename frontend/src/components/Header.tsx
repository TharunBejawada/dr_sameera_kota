"use client";

import Image from "next/image";
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
    <header className="site-header">
      <div className="container">
        <a href="#top" className="brand">
          <Image
            src="/susheela-hospitals-logo.webp"
            alt="Susheela Hospitals"
            width={140}
            height={56}
            className="brand-logo"
            priority
          />
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
  );
}
