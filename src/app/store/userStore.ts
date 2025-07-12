"use client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface User {
  id: string; // uuid
  customer_id: string; // e.g., MEERA1234
  username: string;
  email: string;
  phone: string;
  referred_by_id: string | null;
  created_at: string; // timestamp as string
}

interface AuthState {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null, // Initial state: no user logged in
      setUser: (user: User) => set(() => ({ user })), // Update state with new user
      clearUser: () => set(() => ({ user: null })), // Clear user data
    }),
    {
      name: "auth-storage", // Key for localStorage
      storage: createJSONStorage(() => localStorage), // Persist to localStorage
    }
  )
);
