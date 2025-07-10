/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary-500) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary-500) / <alpha-value>)",
        accent: "rgb(var(--color-accent-500) / <alpha-value>)",
        earnings: "rgb(var(--color-earnings) / <alpha-value>)",
        food: "rgb(var(--color-food) / <alpha-value>)",
        referral: "rgb(var(--color-referral) / <alpha-value>)",
        payment: "rgb(var(--color-payment) / <alpha-value>)",
        premium: "rgb(var(--color-premium) / <alpha-value>)",
        neutral: {
          50: "rgb(var(--color-neutral-50) / <alpha-value>)",
          100: "rgb(var(--color-neutral-100) / <alpha-value>)",
          200: "rgb(var(--color-neutral-200) / <alpha-value>)",
          300: "rgb(var(--color-neutral-300) / <alpha-value>)",
          400: "rgb(var(--color-neutral-400) / <alpha-value>)",
          500: "rgb(var(--color-neutral-500) / <alpha-value>)",
          600: "rgb(var(--color-neutral-600) / <alpha-value>)",
          700: "rgb(var(--color-neutral-700) / <alpha-value>)",
          800: "rgb(var(--color-neutral-800) / <alpha-value>)",
          900: "rgb(var(--color-neutral-900) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
