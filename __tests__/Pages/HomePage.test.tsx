import HomePage from "@/app/(tabs)/home/page";
import { render, screen } from "@testing-library/react";

describe("HomePage - Rendering", () => {
  it("should have h1 with text U-Well", () => {
    render(<HomePage />);
    expect(screen.getByText("U-Well")).toBeInTheDocument();
  });
});
