"use client";

import Image from "next/image";
import { useState } from "react";
import { UiIcon } from "@/components/icons";
import { services, whatsappHref } from "@/lib/site-data";
import type { CSSProperties } from "react";

export function ServiceCarousel() {
  const [paused, setPaused] = useState(false);

  const renderCards = (duplicate = false) => services.map((service, index) => (
    <article
      className={`service-card${duplicate ? "" : " reveal"}`}
      key={service.title}
      style={{ "--reveal-index": index } as CSSProperties}
    >
      <div className="service-card__image">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 560px) 240px, (max-width: 1200px) 300px, 33vw"
          className="service-card__photo"
        />
      </div>
      <div className="service-card__content">
        <h3>{service.title}</h3>
        <p className="service-card__description">{service.description}</p>
        <div className="service-card__footer">
          <span>Ask about this service</span>
          <a
            className="service-card__link"
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            aria-label={`Ask MAG about ${service.title}`}
            tabIndex={duplicate ? -1 : undefined}
          >
            <UiIcon name="arrow-up-right" />
          </a>
        </div>
      </div>
    </article>
  ));

  return (
    <>
      <div className="service-cards__toolbar">
        <button
          className="service-cards__toggle"
          type="button"
          aria-pressed={paused}
          onClick={() => setPaused((current) => !current)}
        >
          {paused ? "Resume cards" : "Pause cards"}
        </button>
      </div>
      <div className={`service-cards${paused ? " is-paused" : ""}`} role="region" aria-label="Property maintenance services" tabIndex={0}>
        <div className="service-cards__track">
          <div className="service-cards__set">
            {renderCards()}
          </div>
          <div className="service-cards__set service-cards__set--duplicate" aria-hidden="true">
            {renderCards(true)}
          </div>
        </div>
      </div>
    </>
  );
}
