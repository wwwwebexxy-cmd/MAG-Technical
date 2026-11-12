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
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`menu-toggle__icon${menuOpen ? " is-open" : ""}`} aria-hidden="true"><i /><i /></span>
        </button>

        <nav id="primary-navigation" className={`primary-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          {contact.phones.map((phone) => (
            <a className="primary-nav__phone" href={phone.href} key={phone.number} onClick={() => setMenuOpen(false)}>
              <span>Call us</span><strong>{phone.number}</strong>
            </a>
          ))}
        </nav>

        <div className="header-call">
          <span>Call us</span>
          <div className="header-call__numbers">
            {contact.phones.map((phone, index) => (
              <span className="header-call__number" key={phone.number}>
                {index > 0 && <span aria-hidden="true">·</span>}
                <a href={phone.href}>{phone.number}</a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
