import slugify from "react-slugify";

let links = [
  {
    title: "Home",
  },
  {
    title: "About Us",
  },
  {
    title: "Provider Registration",
  },
  {
    title: "Patient Registration",
  },
  {
    title: "Contact Us",
  },
  {
    title: "Testimonials",
  },
];

export const navLinks = links.map((link) => ({
  ...link,
  href: `/${slugify(link.title)}`,
}));
