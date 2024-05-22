import { Metadata } from "next";
import { PatientRegistrationIntroUseClient } from "@/components/useClientComponents/PatientRegistrationIntroUseClient";

export const metadata: Metadata = {
  title: "Patient Registration",
};

const PatientRegistrationPage = () => {
  return (
    <main className="main-container">
      <PatientRegistrationIntroUseClient />
    </main>
  );
};

export default PatientRegistrationPage;
