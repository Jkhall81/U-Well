import { create } from "zustand";

type NavStore = {
  navSolid: boolean;
  setNavSolidTrue: () => void;
  setNavSolidFalse: () => void;
};

// store stuff
export const useNavStore = create<NavStore>((set) => ({
  navSolid: false,
  setNavSolidTrue: () => {
    set({ navSolid: true });
  },
  setNavSolidFalse: () => {
    set({ navSolid: false });
  },
}));
