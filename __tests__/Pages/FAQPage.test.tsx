import FAQPage from "@/app/(tabs)/faq/page";
import { render, screen, fireEvent } from "@testing-library/react";

describe("FAQPage - rendering", () => {
  it("should render h1 with text Frequently Asked Questions", () => {
    render(<FAQPage />);
    expect(screen.getByRole("heading", { name: "Frequently Asked Questions" }));
  });
  it("should render element with text /are the qualifications and/", () => {
    render(<FAQPage />);
    expect(screen.getByText(/are the qualifications and/)).toBeInTheDocument();
  });
  it("should not be rendering accordion element text, since it hasnt been clicked on yet", () => {
    render(<FAQPage />);
    const textElement = screen.queryByText(/Our providers come from all/);
    expect(textElement).not.toBeInTheDocument();
  });
  it("should open and reveal new text when clicking on above accordion element", () => {
    render(<FAQPage />);
    const accordionElement = screen.getByText(/are the qualifications and/);
    fireEvent.click(accordionElement);
    expect(screen.getByText(/Our providers come from all/)).toBeInTheDocument();
  });
  it("should render footer text of 2024 U-Well", () => {
    render(<FAQPage />);
    expect(screen.getByText(/2024 U-Well/)).toBeInTheDocument();
  });
  it("should render icon link to youtube in footer", () => {
    render(<FAQPage />);
    expect(screen.getByRole("link", { name: "icon link to YouTube" }));
  });
});
