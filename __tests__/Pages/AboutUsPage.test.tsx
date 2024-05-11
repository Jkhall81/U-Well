import AboutUsPage from "@/app/(tabs)/about-us/page";
import { render, screen } from "@testing-library/react";

describe("AboutUsPage - Rendering", () => {
  it("should render h1 with text About Us", () => {
    render(<AboutUsPage />);
    expect(screen.getByRole("heading", { name: "About Us" }));
  });
  it("should render footer link with text Privacy Policy", () => {
    render(<AboutUsPage />);
    expect(screen.getByRole("link", { name: "Privacy Policy" }));
  });
  it("should render h2 with text What is U-Well Health?", () => {
    render(<AboutUsPage />);
    expect(screen.getByRole("heading", { name: "What is U-Well Health?" }));
  });
  it("should render image with alt text of smiling woman", () => {
    render(<AboutUsPage />);
    expect(screen.getByRole("img", { name: "smiling woman" }));
  });
});
