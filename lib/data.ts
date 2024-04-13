import slugify from "react-slugify";

let navLinks = [
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

navLinks = navLinks.map((link) => ({
  ...link,
  href: `/${slugify(link.title)}`,
}));

export { navLinks };
