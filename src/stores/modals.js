import { AUTH_MODAL } from "@/constants";
import { create } from "zustand";
import { createSelectors } from "./create-selectors";

const state = {
  [AUTH_MODAL]: false
};

export const useModalStoreBase = create((set) => ({
  ...state,
  onClose: (modal) => set(() => ({ [modal]: false })),
  onShow: (modal) => set(() => ({ [modal]: true }))
}));

export const useModalStore = createSelectors(useModalStoreBase)
