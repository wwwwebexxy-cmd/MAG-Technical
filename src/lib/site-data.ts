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
    title: "A/C Service, Maintenance & Installation",
    description: "Air-conditioner service for all brands, plus installation and ongoing maintenance.",
    icon: "air",
    image: "/images/ac-technician-dubai.png",
    imageAlt: "A technician servicing a split air conditioner in a Dubai apartment",
  },
  {
    title: "Electrical Work",
    description: "Electrical work for homes and workspaces.",
    icon: "electrical",
    image: "/images/electrical-work.png",
    imageAlt: "An electrician testing a residential electrical panel",
  },
  {
    title: "Plumbing Work",
    description: "Plumbing support for everyday property needs.",
    icon: "plumbing",
    image: "/images/plumbing-work.png",
    imageAlt: "A plumber checking pipe fittings beneath a kitchen sink",
  },
  {
    title: "Painting Work",
    description: "Painting work for your property.",
    icon: "painting",
    image: "/images/painting-work.png",
    imageAlt: "A painter applying a fresh coat of paint to an interior wall",
  },
  {
    title: "All Maintenance Work",
    description: "General maintenance for homes and workspaces.",
    icon: "maintenance",
    image: "/images/general-maintenance.png",
    imageAlt: "A maintenance technician adjusting a door handle",
  },
] as const;
