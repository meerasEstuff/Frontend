/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors for MeeraEstuff
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9", // Main primary color
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },

        // Secondary colors (complementary to primary)
        secondary: {
          50: "#fdf4ff",
          100: "#fae8ff",
          200: "#f5d0fe",
          300: "#f0abfc",
          400: "#e879f9",
          500: "#d946ef", // Main secondary color
          600: "#c026d3",
          700: "#a21caf",
          800: "#86198f",
          900: "#701a75",
        },

        // Success colors (for referral earnings, payments)
        success: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e", // Main success color
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },

        // Warning colors (for pending actions)
        warning: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b", // Main warning color
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },

        // Error colors (for validation errors)
        error: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444", // Main error color
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },

        // Neutral colors (for text, backgrounds)
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },

        // Custom colors specific to MeeraEstuff
        meera: {
          // Food/organic related colors
          green: "#10b981",
          "green-light": "#6ee7b7",
          "green-dark": "#047857",

          // Payment/money related colors
          gold: "#fbbf24",
          "gold-light": "#fde68a",
          "gold-dark": "#d97706",

          // Referral/reward colors
          purple: "#8b5cf6",
          "purple-light": "#c4b5fd",
          "purple-dark": "#7c3aed",

          // Background variations
          "bg-primary": "#f8fafc",
          "bg-secondary": "#f1f5f9",
          "bg-dark": "#1e293b",
        },

        // Custom semantic colors
        referral: "#8b5cf6", // Purple for referral-related elements
        payment: "#10b981", // Green for payment success
        earnings: "#f59e0b", // Gold for earnings display
        customerid: "#3b82f6", // Blue for customer ID
      },
    },
  },
  plugins: [],
};
