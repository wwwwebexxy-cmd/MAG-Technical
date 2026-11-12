import { UiIcon } from "@/components/icons";
import { contact, navigation } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-block">
          <a className="brand brand--footer" href="#home" aria-label="MAG Technical Services home">
            <span className="brand__mark" aria-hidden="true" />
            <span className="brand__wordmark" aria-hidden="true" />
          </a>
          <p>Air-conditioning, electrical, plumbing, painting and general maintenance in Quoz, Dubai.</p>
        </div>

        <div className="footer-column">
          <h2>Explore</h2>
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </div>

        <div className="footer-column footer-column--contact">
          <h2>Get in touch</h2>
          <a href={contact.phoneHref}>{contact.phone}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <span>{contact.location}</span>
          <a href={contact.facebook} target="_blank" rel="noreferrer" className="facebook-link"><UiIcon name="facebook" /> Facebook</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {contact.company}</span>
        <a href="#home">Back to top <UiIcon name="arrow" /></a>
      </div>
    </footer>
  );
}
