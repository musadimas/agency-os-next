import type { Config } from "tailwindcss";

import { nextui } from "@nextui-org/react";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            100: "#008E4C",
            200: "#006A39",
          },
          blue: {
            100: "#00BBF1",
          },
          yellow: { 100: "#FFCC29" },
        },
        logo: "#244A61",
        success: {
          DEFAULT: "#008E4C",
          foreground: "#FFFFFF",
        },
        primary: {
          DEFAULT: "#00BBF1",
        },
        default: {
          DEFAULT: "#FFFFFF",
          foreground: "#FFFFFF",
        },
      },
      borderRadius: {
        card: "var(--border-radius-card)",
        // button: "var(--border-radius-button)",
        // input: "var(--border-radius-input)",
        // panel: "var(--border-radius-panel)",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Poppins", ...defaultTheme.fontFamily.serif],
        mono: ["Fira Code", ...defaultTheme.fontFamily.mono],
        signature: ["signature", "cursive", "sans-serif"],
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
