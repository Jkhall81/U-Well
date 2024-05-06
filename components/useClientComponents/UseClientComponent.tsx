"use client";

interface Props {
  height: number;
}

import { Footer } from "@/components/Footer";
import { useFooterStore } from "@/store/store";

export const UseClientComponent = ({ height }: Props) => {
  const yHeight = useFooterStore((state) => state.pageHeight);
  return (
    <div
      style={{ marginTop: `${yHeight + height}px` }}
      className={`absolute left-0 flex w-full items-center justify-between pb-2`}
    >
      <Footer />
    </div>
  );
};
