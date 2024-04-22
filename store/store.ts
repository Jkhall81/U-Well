import { create } from "zustand";

interface NavStore {
  navSolid: boolean;
  setNavSolidTrue: () => void;
  setNavSolidFalse: () => void;
}

interface FooterStore {
  pageHeight: number;
  setPageHeight: (value: number) => void;
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

export const useFooterStore = create<FooterStore>((set) => ({
  pageHeight: 0,
  setPageHeight: (value: number) => {
    set({ pageHeight: value });
  },
}));
