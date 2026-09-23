export default function FloatingContact() {
  return (
    <div className="floating-contact">
      <a
        href="https://wa.me/918125205698"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.85L3.5 20.5l4.27-1.16A8.5 8.5 0 1 0 12 3.5Zm0 1.6a6.9 6.9 0 0 1 5.86 10.55l-.2.32.53 1.95-1.98-.53-.32.19A6.9 6.9 0 1 1 12 5.1Zm-2.68 3.1c-.17 0-.44.06-.67.32-.23.26-.87.85-.87 2.06s.9 2.39 1.02 2.55c.13.17 1.75 2.78 4.3 3.79 2.12.84 2.56.67 3.02.63.47-.04 1.5-.6 1.71-1.19.21-.58.21-1.08.15-1.19-.06-.1-.23-.16-.48-.29-.25-.13-1.5-.74-1.73-.82-.23-.09-.4-.13-.57.13-.17.26-.65.82-.8 1-.15.16-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.75-.66-1.25-1.48-1.4-1.74-.15-.26-.02-.4.11-.53.11-.11.25-.29.38-.44.13-.15.17-.26.25-.43.08-.17.04-.32-.02-.45-.06-.13-.57-1.4-.79-1.91-.2-.5-.42-.43-.57-.44Z" />
        </svg>
      </a>
      <a
        href="tel:+918125205698"
        className="floating-btn floating-call"
        aria-label="Call Dr. Sameera Kota"
      >
        <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4.5 4h4l2 5-2.5 1.5a11 11 0 0 0 5.5 5.5L15 13.5l5 2v4a2 2 0 0 1-2 2C9.5 21.5 2.5 14.5 2.5 6a2 2 0 0 1 2-2Z" />
        </svg>
      </a>
    </div>
  );
}
