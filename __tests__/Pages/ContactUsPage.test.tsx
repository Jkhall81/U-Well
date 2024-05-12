import { ContactUsUseClient } from "@/components/useClientComponents/ContactUsUseClient";
import ContactUsPage from "@/app/(tabs)/contact-us/page";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

describe("Contact us form - rendering", () => {
  it("should render an input field with the name First Name", () => {
    render(<ContactUsPage />);
    expect(screen.getByRole("textbox", { name: "First Name" }));
  });
  it("should render an input field with the name Email Address", () => {
    render(<ContactUsPage />);
    expect(screen.getByRole("textbox", { name: "Email Address" }));
  });
});

describe("Contact us form - form submission", () => {
  it("should add data to form and submit", async () => {
    const consoleLogSpy = jest.spyOn(console, "log");
    render(<ContactUsUseClient />);

    fireEvent.change(screen.getByPlaceholderText("John"), {
      target: { value: "Jason" },
    });
    fireEvent.change(screen.getByPlaceholderText("Doe"), {
      target: { value: "Hall" },
    });
    fireEvent.change(screen.getByPlaceholderText("John.Doe@gmail.com"), {
      target: { value: "jason.kei.hall@gmail.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("ACME inc."), {
      target: { value: "Clave web studios" },
    });
    fireEvent.click(screen.getByText("Member"), {
      target: { value: "Member" },
    });
    fireEvent.change(screen.getByPlaceholderText("How may we help you?"), {
      target: { value: "This is a test comment.  Test this comment." },
    });

    fireEvent.click(screen.getByText("Submit"));

    await waitFor(() => {
      expect(consoleLogSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          firstName: "Jason",
          lastName: "Hall",
          email: "jason.kei.hall@gmail.com",
          companyName: "Clave web studios",
          senderStatus: "Member",
          comments: "This is a test comment.  Test this comment.",
        }),
      );
    });
    consoleLogSpy.mockRestore();
  });
});
