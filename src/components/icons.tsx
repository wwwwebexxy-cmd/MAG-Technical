import type { ReactNode } from "react";

export type ServiceIconName = "air" | "electrical" | "plumbing" | "painting" | "maintenance";
export type UiIconName = "arrow" | "arrow-up-right" | "location" | "phone" | "mail" | "facebook";

const serviceArtwork: Record<ServiceIconName, ReactNode> = {
  air: (
    <>
      <path d="M24 5v38M7.5 14.5l33 19M7.5 33.5l33-19" />
      <path d="m24 5-4 5m4-5 4 5m-4 33-4-5m4 5 4-5M7.5 14.5l6.5.5m-6.5-.5 1 6.5m31.5 12 1-6.5m-1 6.5-6.5-.5m-25 0 1-6.5m-1 6.5 6.5-.5m25-19-6.5.5m6.5-.5-1 6.5" />
    </>
  ),
  electrical: <path d="M27 4 11 27h11l-2 17 17-24H26l1-16Z" />,
  plumbing: (
    <>
      <path d="M8 17h30v7H8zM13 17V9h17v8M30 9h7M8 24v5a7 7 0 0 0 7 7h7" />
      <path d="M22 36v6m-3-3 3 3 3-3" />
    </>
  ),
  painting: (
    <>
      <path d="M8 13h25v8H8zM33 17h4a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2h27V8H9" />
      <path d="M20.5 21v21m-4 0h8" />
    </>
  ),
  maintenance: (
    <>
      <path d="m29 7 5 5-8 8-5-5 8-8ZM23 17 9 31a5 5 0 0 0 7 7l14-14" />
      <path d="m27 22 6 6M9 31l7 7" />
    </>
  ),
};

export function ServiceIcon({ name }: { name: ServiceIconName }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {serviceArtwork[name]}
    </svg>
  );
}

const uiArtwork: Record<UiIconName, ReactNode> = {
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  "arrow-up-right": <path d="M7 17 17 7M8 7h9v9" />,
  location: <><path d="M19 10.5c0 5.2-7 11.5-7 11.5s-7-6.3-7-11.5a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10.5" r="2.2" /></>,
  phone: <path d="M7.5 4h3l1.6 5-2 1.7a16 16 0 0 0 7.2 7.2l1.7-2 5 1.6v3c0 1.1-.9 2-2 2C12.2 20.5 3.5 11.8 3.5 6c0-1.1.9-2 2-2h2Z" />,
  mail: <><rect x="3.5" y="5.5" width="17" height="13" rx="1.5" /><path d="m4.5 7 7.5 6 7.5-6" /></>,
  facebook: <path d="M13.2 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a21 21 0 0 0-2.5-.1c-2.5 0-4.1 1.5-4.1 4.3V10H7.2v3h2.7v8h3.3Z" />,
};

export function UiIcon({ name }: { name: UiIconName }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {uiArtwork[name]}
    </svg>
  );
}
