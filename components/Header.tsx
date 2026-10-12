"use client";

import { useUIState } from "./UIState";

export default function Header() {
  const { openMenu, openCart, totalCount, isHydrated } = useUIState();

  return (
    <header>
      <div className="header-inner">
        <div className="header-left">
          <button
            className="icon-btn"
            aria-label="Open menu"
            onClick={openMenu}
          >
            <svg viewBox="0 0 24 24">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          </button>
          <nav className="desktop-nav">
            <a href="#shop">SHOP</a>
            <a href="#drop">NEW IN</a>
            <a href="#drop">BESTSELLERS</a>
            <a href="#story">ABOUT</a>
            <a href="#footer">CONTACT</a>
          </nav>
        </div>

        <a href="#" className="wordmark">
          HUDUM
        </a>

        <div className="header-right">
          <button
            className="icon-btn"
            aria-label="Search"
            onClick={() => {
              const el = document.getElementById("shop");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            title="Browse collection"
          >
            <svg viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <button
            className="icon-btn"
            aria-label="Shopping bag"
            onClick={openCart}
            style={{ position: "relative" }}
          >
            <svg viewBox="0 0 24 24">
              <path d="M6 8h12l-1 12H7L6 8z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
            {isHydrated && totalCount > 0 && (
              <span className="cart-badge">{totalCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
