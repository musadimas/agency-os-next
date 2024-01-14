import type { Config } from "tailwindcss";

import { nextui } from "@nextui-org/react";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        card: "var(--border-radius-card)",
        // button: "var(--border-radius-button)",
        // input: "var(--border-radius-input)",
        // panel: "var(--border-radius-panel)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-display)", ...defaultTheme.fontFamily.serif],
        mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
        signature: ["var(--font-signature)", "cursive", "sans-serif"],
      },
      animation: {
        "fade-in": "fade-in 0.5s linear forwards",
      },
      keyframes: {
        "fade-in": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("@tailwindcss/typography")],
};
export default config;
