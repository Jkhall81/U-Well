"use client";

import { Footer } from "@/components/Footer";
import { useFooterStore } from "@/store/store";

export const UseClientComponent = () => {
  const yHeight = useFooterStore((state) => state.pageHeight);
  return (
    <div
      style={{ marginTop: `${yHeight + 500}px` }}
      className={`absolute left-0 flex w-full items-center justify-between pb-2`}
    >
      <Footer />
    </div>
  );
};
