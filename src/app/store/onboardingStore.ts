import { create } from "zustand";

type OnboardingState = {
  username: string;
  email: string;
  phone: string;
  referredById: string | null;
  customer_id: string | null;
  setOnboardingData: (data: Partial<OnboardingState>) => void;
  reset: () => void;
};

export const useOnboardingStore = create<OnboardingState>((set) => ({
  username: "",
  email: "",
  phone: "",
  referredById: null,
  customer_id: null,
  setOnboardingData: (data) => set((state) => ({ ...state, ...data })),
  reset: () =>
    set({
      username: "",
      email: "",
      phone: "",
      referredById: null,
      customer_id: null,
    }),
}));
