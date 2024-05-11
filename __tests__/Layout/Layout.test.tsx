import RootLayout from "@/app/layout";
import { render, screen } from "@testing-library/react";

describe("Layout - Rendering", () => {
  // check the navBar
  it("should have a link in the navbar with the text About Us", () => {
    render(
      <RootLayout>
        <div>Dummy child component</div>
      </RootLayout>,
    );
    const elements = screen.getAllByText("About Us");
    elements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });
});
