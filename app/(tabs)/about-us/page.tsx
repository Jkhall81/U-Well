import { Metadata } from "next";
import { AnimationContent } from "@/components/aboutUs/AnimationContent";

export const metadata: Metadata = {
  title: "About Us",
};

const AboutUsPage = () => {
  return (
    <main className="main-container">
      {/* Above Background Content */}
      <div className="content-container flex flex-col">
        {/* Left Heading and Paragraph Text */}
        <AnimationContent />
        {/* <UseClientComponent height={4500} /> */}
      </div>
    </main>
  );
};

export default AboutUsPage;
