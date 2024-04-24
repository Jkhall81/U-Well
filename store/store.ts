import { create } from "zustand";

// NavStore, set NavBar to hidden when scrolling is detected in ScrollDetector component

interface NavStore {
  navSolid: boolean;
  setNavSolidTrue: () => void;
  setNavSolidFalse: () => void;
}

export const useNavStore = create<NavStore>((set) => ({
  navSolid: false,
  setNavSolidTrue: () => {
    set({ navSolid: true });
  },
  setNavSolidFalse: () => {
    set({ navSolid: false });
  },
}));

// Used to store total screen height to dynamically set footer location
interface FooterStore {
  pageHeight: number;
  setPageHeight: (value: number) => void;
}

export const useFooterStore = create<FooterStore>((set) => ({
  pageHeight: 0,
  setPageHeight: (value: number) => {
    set({ pageHeight: value });
  },
}));
