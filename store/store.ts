import { create } from "zustand";

type NavStore = {
  navSolid: boolean;
  setNavSolidTrue: () => void;
  setNavSolidFalse: () => void;
};

// trying version 4.5.1
export const useNavStore = create<NavStore>((set) => ({
  navSolid: false,
  setNavSolidTrue: () => {
    set({ navSolid: true });
  },
  setNavSolidFalse: () => {
    set({ navSolid: false });
  },
}));
