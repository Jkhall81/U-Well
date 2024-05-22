import PatientRegistrationPage from "@/app/(tabs)/patient-registration/page";
import { MultiStepForm } from "@/components/MultiStepForm";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";

describe("Patient Registration Page - Rendering", () => {
  it("should render heading element with text Patient Registration", () => {
    render(<PatientRegistrationPage />);
    expect(screen.getByRole("heading", { name: "Patient Registration" }));
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

    setTimeout(() => {
      expect(screen.getByText("How do you identify?")).toBeInTheDocument();
      fireEvent.click(screen.getByText("Bi or Pan"));
    }, 1500);
  });
});

describe("MultiStepForm", () => {
  it("renders step 3", async () => {
    render(<MultiStepForm />);

    fireEvent.click(screen.getByRole("button", { name: "Man" }));
    await waitFor(() => {
      fireEvent.click(screen.getByRole("combobox"));
    });
    expect(screen.getByText("21")).toBeInTheDocument();
    fireEvent.click(screen.getByText("21"));

    setTimeout(() => {
      expect(screen.getByText("How do you identify?")).toBeInTheDocument();
      fireEvent.click(screen.getByRole("button", { name: "Booty Town" }));
    }, 800);

    setTimeout(() => {
      expect(
        screen.getByText("What is your relationship status?"),
      ).toBeInTheDocument();
      fireEvent.click(screen.getByRole("button", { name: "Divorced" }));
    }, 800);

    expect(
      screen.getByText("Do you consider yourself to be religious?"),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Ta Doo Doo" }));
  });
});
