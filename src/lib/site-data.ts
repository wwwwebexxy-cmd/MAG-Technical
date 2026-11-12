export const contact = {
  name: "Mr Ambrose",
  company: "MAG Technical Services",
  phone: "0559954323",
  phoneHref: "tel:+971559954323",
  email: "ambrosearakkal@gmail.com",
  location: "Quoz, Dubai",
  facebook: "https://www.facebook.com/share/18qx9N4SPt/",
} as const;

export const whatsappHref =
  "https://wa.me/971559954323?text=Hello%20MAG%20Technical%20Services%2C%20I%20have%20a%20service%20enquiry.";

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

export const services = [
  {
    title: "A/C Service",
    description: "Air-conditioner service for all brands.",
    icon: "air",
  },
  {
    title: "A/C Maintenance & Installation",
    description: "Installation and ongoing maintenance for your cooling system.",
    icon: "air",
  },
  {
    title: "Electrical Work",
    description: "Electrical work for homes and workspaces.",
    icon: "electrical",
  },
  {
    title: "Plumbing Work",
    description: "Plumbing support for everyday property needs.",
    icon: "plumbing",
  },
  {
    title: "Painting Work",
    description: "Painting work for your property.",
    icon: "painting",
  },
  {
    title: "All Maintenance Work",
    description: "General maintenance for homes and workspaces.",
    icon: "maintenance",
  },
] as const;
