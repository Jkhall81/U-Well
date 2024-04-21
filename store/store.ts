import { create } from "zustand";

type NavStore = {
  navSolid: boolean;
  setNavSolidTrue: () => void;
  setNavSolidFalse: () => void;
};

// trying version 4.4.3
export const useNavStore = create<NavStore>((set) => ({
  navSolid: false,
  setNavSolidTrue: () => {
    set({ navSolid: true });
  },
  setNavSolidFalse: () => {
    set({ navSolid: false });
  },
}));
