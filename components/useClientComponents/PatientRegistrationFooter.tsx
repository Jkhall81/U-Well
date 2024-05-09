"use client";

interface Props {
  height: number;
}

import { Footer } from "@/components/Footer";

export const PatientRegistrationFooter = ({ height }: Props) => {
  return (
    <div
      style={{ marginTop: `${1500}px` }}
      className={`absolute left-0 flex w-full items-center justify-between pb-2`}
    >
      <Footer />
    </div>
  );
};
