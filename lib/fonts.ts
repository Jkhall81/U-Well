import { Raleway } from "next/font/google";
import { Lusitana } from "next/font/google";

export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});
