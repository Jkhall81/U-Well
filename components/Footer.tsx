import Link from "next/link";

import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="flex justify-evenly">
      <Link href="/">
        <FaYoutube color="white" size={70} />
      </Link>
      <Link href="/">
        <FaFacebook color="white" size={70} />
      </Link>
      <Link href="/">
        <FaLinkedin className="text-white" size={70} />
      </Link>
    </footer>
  );
};
