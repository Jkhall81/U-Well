"use client";

interface Props {
  height: number;
}

import { Footer } from "@/components/Footer";
import { useFooterStore } from "@/store/store";

export const PatientRegistrationFooter = ({ height }: Props) => {
  const yHeight = useFooterStore((state) => state.pageHeight);

  return (
    <div
      style={{ marginTop: `${yHeight + height}px` }}
      className={`absolute bottom-0 left-0 flex w-full items-center justify-between pb-2`}
    >
      <Footer />
    </div>
  );
};
