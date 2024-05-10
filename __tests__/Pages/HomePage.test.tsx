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
  // need to wait for the animation to bring the text in
  it("should have designed to fit in a p tag", () => {
    render(<HomePage />);
    setTimeout(() => {
      expect(screen.getByText(/designed to fit/)).toBeInTheDocument();
    });
  }, 3000);
});
