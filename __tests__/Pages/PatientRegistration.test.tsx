import PatientRegistrationPage from "@/app/(tabs)/patient-registration/page";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Patient Registration Page - Rendering", () => {
  it("should render heading element with text Patient Registration", () => {
    render(<PatientRegistrationPage />);
    expect(screen.getByRole("heading", { name: "Registration" }));
  });
  it("should render button with text of Man", () => {
    render(<PatientRegistrationPage />);
    expect(screen.getByRole("button", { name: "Man" }));
  });
  it("should not be rendering text of How old are you?", () => {
    render(<PatientRegistrationPage />);
    expect(screen.queryByText("How old are you?")).toBeNull();
  });
});

describe("form submission test", () => {
  it("should find and click all appropriate elements and return correct form data", () => {
    render(<PatientRegistrationPage />);
    fireEvent.click(screen.getByRole("button", { name: "Man" }));

    expect(screen.getByText("How old are you?")).toBeInTheDocument();
    expect(screen.getByRole("combobox"));

    fireEvent.click(screen.getByRole("combobox"));

    expect(screen.getByText("21")).toBeInTheDocument();
    fireEvent.click(screen.getByText("21"));

    expect(screen.getByText("How do you identify?")).toBeInTheDocument();
  });
});
