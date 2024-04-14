import slugify from "react-slugify";

let links = [
  {
    title: "Home",
  },
  {
    title: "About Us",
  },
  {
    title: "How It Works",
  },
  {
    title: "Our App",
  },
  {
    title: "Testimonials",
  },
  {
    title: "Contact Us",
  },
];

export const navLinks = links.map((link) => ({
  ...link,
  href: `/${slugify(link.title)}`,
}));
