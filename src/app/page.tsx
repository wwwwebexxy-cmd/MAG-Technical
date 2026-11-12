import type { CSSProperties } from "react";
import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ServiceIcon, UiIcon } from "@/components/icons";
import { contact, services, whatsappHref } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className="topline">
        <div className="container topline__inner">
          <p><span className="status-dot" /> Technical services in Quoz, Dubai</p>
          <a href={contact.phoneHref}>Call {contact.phone}</a>
        </div>
      </div>

      <SiteHeader />

      <main id="main-content">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <Image src="/images/ac-technician-dubai.png" alt="" fill priority sizes="100vw" className="hero__image" />
          <div className="container hero__inner">
            <div className="hero__copy">
              <p className="eyebrow eyebrow--hero"><span /> Home &amp; building maintenance</p>
              <h1 id="hero-title">Cool rooms.<br />Reliable <em>repairs.</em></h1>
              <p className="hero__intro">
                Air-conditioning, electrical, plumbing, painting and general maintenance for homes and workspaces in Quoz, Dubai.
              </p>
              <div className="hero__actions">
                <a className="button button--red" href={contact.phoneHref}>
                  Call {contact.phone}<UiIcon name="arrow" />
                </a>
                <a className="text-link" href="#services">Explore services <UiIcon name="arrow" /></a>
              </div>
              <div className="hero__details">
                <span className="hero__rule" />
                <p><strong>Speak directly with {contact.name}</strong><br />For a service enquiry or a quote.</p>
              </div>
            </div>

            <div className="hero__photo-label">
              <span className="photo-label__icon"><ServiceIcon name="air" /></span>
              <span><strong>Air-conditioning</strong><small>Service / Installation / Maintenance</small></span>
            </div>
            <p className="hero__location"><UiIcon name="location" /> Quoz, Dubai</p>
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="container about-grid">
            <div className="about-aside reveal">
              <p className="eyebrow"><span /> About MAG</p>
              <p className="about-aside__line">A practical point of contact for the work that keeps a property running.</p>
              <div className="about-aside__mark" aria-hidden="true"><span>MAG</span><i /></div>
            </div>

            <div className="about-copy reveal">
              <h2 id="about-title">Maintenance, made <em>straightforward.</em></h2>
              <p>
                MAG Technical Services brings essential property work together under one name: air-conditioning, electrical work, plumbing, painting and general maintenance.
              </p>
              <p>
                Based in Quoz, Dubai, the company is led by {contact.name}. Get in touch to explain what needs attention and discuss the right service for your space.
              </p>
              <dl className="about-facts">
                <div><dt>Lead contact</dt><dd>{contact.name}</dd></div>
                <div><dt>Service location</dt><dd>{contact.location}</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="services-section" id="services" aria-labelledby="services-title">
          <div className="container">
            <div className="services-heading reveal">
              <div>
                <p className="eyebrow"><span /> Services</p>
                <h2 id="services-title">The work your property <em>needs.</em></h2>
              </div>
              <p>Choose a service to ask about, or call and describe the job in your own words.</p>
            </div>

            <div className="service-cards">
              {services.map((service, index) => (
                <article className="service-card reveal" key={service.title} style={{ "--reveal-index": index } as CSSProperties}>
                  <div className="service-card__image">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 560px) 100vw, (max-width: 960px) 50vw, 33vw"
                      className="service-card__photo"
                    />
                  </div>
                  <div className="service-card__content">
                    <h3>{service.title}</h3>
                    <p className="service-card__description">{service.description}</p>
                    <div className="service-card__footer">
                      <span>Ask about this service</span>
                      <a className="service-card__link" href={whatsappHref} target="_blank" rel="noreferrer" aria-label={`Ask MAG about ${service.title}`}>
                        <UiIcon name="arrow-up-right" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="services-footnote">
              <span>Need help choosing?</span>
              <a href={contact.phoneHref}>Call {contact.phone} <UiIcon name="arrow" /></a>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="container contact-grid">
            <div className="contact-copy reveal">
              <p className="eyebrow eyebrow--light"><span /> Contact</p>
              <h2 id="contact-title">Tell us what needs <em>attention.</em></h2>
              <p>Call or message {contact.name} to talk through your service request.</p>
              <a className="button button--light" href={whatsappHref} target="_blank" rel="noreferrer">
                Start a WhatsApp chat <UiIcon name="arrow-up-right" />
              </a>
            </div>

            <address className="contact-card reveal">
              <a className="contact-item" href={contact.phoneHref}>
                <span className="contact-item__icon"><UiIcon name="phone" /></span>
                <span><small>Phone</small><strong>{contact.phone}</strong></span>
                <UiIcon name="arrow-up-right" />
              </a>
              <a className="contact-item" href={`mailto:${contact.email}`}>
                <span className="contact-item__icon"><UiIcon name="mail" /></span>
                <span><small>Email</small><strong>{contact.email}</strong></span>
                <UiIcon name="arrow-up-right" />
              </a>
              <div className="contact-item contact-item--static">
                <span className="contact-item__icon"><UiIcon name="location" /></span>
                <span><small>Location</small><strong>{contact.location}</strong></span>
              </div>
              <div className="contact-card__footer">
                <span>Company contact</span>
                <strong>{contact.name}</strong>
              </div>
            </address>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
