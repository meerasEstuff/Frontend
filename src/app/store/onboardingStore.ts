import { create } from "zustand";

type OnboardingState = {
  username: string;
  phone: string;
  referredById: string | null;
  customer_id: string | null;
  payment_amount: number | null;
  customer_type: "standard" | "student";
  setOnboardingData: (data: Partial<OnboardingState>) => void;
  reset: () => void;
};

export const useOnboardingStore = create<OnboardingState>((set) => ({
  username: "",
  phone: "",
  referredById: null,
  customer_id: null,
  payment_amount: null,
  customer_type: "standard",
  setOnboardingData: (data) => set((state) => ({ ...state, ...data })),
  reset: () =>
    set({
      username: "",
      phone: "",
      referredById: null,
      customer_id: null,
      payment_amount: null,
      customer_type: "standard",
    }),
}));
