import HomePage from "@/app/(tabs)/home/page";
import { render, screen } from "@testing-library/react";

describe("HomePage - Rendering", () => {
  it("should have h1 with text U-Well", () => {
    render(<HomePage />);
    expect(screen.getByText("U-Well")).toBeInTheDocument();
  });

  it("should have footer link with text Terms & Conditions", () => {
    render(<HomePage />);
    expect(screen.getByText("Terms & Conditions")).toBeInTheDocument();
  });
  it("should be a image with smiling man alt", () => {
    render(<HomePage />);
    const smilingManImages = screen.getAllByRole("img", {
      name: "smiling man",
    });
    expect(smilingManImages.length).toBeGreaterThan(1);
  });
});

describe("HomePage - Footer link", () => {
  it("should have a link in the footer with the text jason hall", () => {
    render(<HomePage />);
    expect(screen.getByRole("link", { name: "Jason Hall" }));
  });
  it("should have a facebook icon link", () => {
    render(<HomePage />);
    expect(screen.getByRole("link", { name: "icon link to Meta" }));
  });
});
