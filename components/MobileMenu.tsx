"use client";

import { useUIState } from "./UIState";

export default function MobileMenu() {
  const { menuOpen, closeMenu } = useUIState();

  return (
    <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
      <div className="mobile-menu-top">
        <div className="wordmark" style={{ textAlign: "left", fontSize: 22 }}>
          HUDUM
        </div>
        <button className="icon-btn" aria-label="Close menu" onClick={closeMenu}>
          <svg viewBox="0 0 24 24">
            <line x1="4" y1="4" x2="20" y2="20" />
            <line x1="20" y1="4" x2="4" y2="20" />
          </svg>
        </button>
      </div>
      <nav>
        <a href="#shop" onClick={closeMenu}>Shop</a>
        <a href="#drop" onClick={closeMenu}>New In</a>
        <a href="#drop" onClick={closeMenu}>Bestsellers</a>
        <a href="#story" onClick={closeMenu}>About</a>
        <a href="#footer" onClick={closeMenu}>Contact</a>
      </nav>
    </div>
  );
}
