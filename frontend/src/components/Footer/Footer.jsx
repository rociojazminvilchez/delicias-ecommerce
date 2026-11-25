import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__contenido">
        <Link to="/" className="footer__logo">
          Delicias
        </Link>

        <p className="footer__info">San Luis - Argentina</p>

        <div className="footer__redes">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__icono footer__icono--rosa"
            aria-label="Instagram"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </a>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__icono footer__icono--verde"
            aria-label="WhatsApp"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21l1.7-5A8.5 8.5 0 1 1 8 19.3L3 21z" />
              <path d="M9 10c0 3 2 5 5 5l1.2-1.2-2-1-.8.7c-.8-.4-1.6-1.2-2-2l.7-.8-1-2L9 10z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}