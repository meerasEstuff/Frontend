import { create } from "zustand";

type OnboardingState = {
  username: string;
  phone: string;
  referredById: string | null;
  customer_id: string | null;
  setOnboardingData: (data: Partial<OnboardingState>) => void;
  reset: () => void;
};

export const useOnboardingStore = create<OnboardingState>((set) => ({
  username: "",
  phone: "",
  referredById: null,
  customer_id: null,
  setOnboardingData: (data) => set((state) => ({ ...state, ...data })),
  reset: () =>
    set({
      username: "",
      phone: "",
      referredById: null,
      customer_id: null,
    }),
}));
