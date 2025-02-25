import { create } from "zustand";
import { FilterState } from "@/lib/types";

export const useFilterStore = create<FilterState>((set) => ({
  status: "",
  gender: "",
  setStatus: (status) => set({ status }),
  setGender: (gender) => set({ gender }),
  resetFilters: () => set({ status: "", gender: "" }),
}));
