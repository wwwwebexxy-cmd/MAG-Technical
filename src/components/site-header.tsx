"use client";

import { useState } from "react";
import { contact, navigation } from "@/lib/site-data";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="#home" aria-label="MAG Technical Services home" onClick={() => setMenuOpen(false)}>
          <span className="brand__mark" aria-hidden="true" />
          <span className="brand__wordmark" aria-hidden="true" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <span className={`menu-toggle__icon${menuOpen ? " is-open" : ""}`} aria-hidden="true"><i /><i /></span>
        </button>

        <nav id="primary-navigation" className={`primary-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <a className="primary-nav__phone" href={contact.phoneHref} onClick={() => setMenuOpen(false)}>
            <span>Call us</span><strong>{contact.phone}</strong>
          </a>
        </nav>

        <a className="header-call" href={contact.phoneHref}><span>Call us</span><strong>{contact.phone}</strong></a>
      </div>
    </header>
  );
}
