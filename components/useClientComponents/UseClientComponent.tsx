"use client";

import { useWindowDimensions } from "@/lib/useWindowDimension";
import { useState, useEffect } from "react";

interface Props {
  height: number;
}

import { Footer } from "@/components/Footer";
import { useFooterStore } from "@/store/store";

export const UseClientComponent = ({ height }: Props) => {
  const { width } = useWindowDimensions();
  const yHeight = useFooterStore((state) => state.pageHeight);
  const [loading, setLoading] = useState(true);
  const [marginTopValue, setMarginTopValue] = useState(0);

  useEffect(() => {
    if (typeof width === "number") {
      const newMarginTopValue =
        width <= 968 ? 6000 + yHeight : yHeight + height;
      setMarginTopValue(newMarginTopValue);
      setLoading(false);
    }
  }, [width, yHeight, height]);

  return (
    <div
      style={{ marginTop: `${marginTopValue}px` }}
      className={`absolute left-0 flex w-full items-center justify-between pb-2`}
    >
      <Footer />
    </div>
  );
};
