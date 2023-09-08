import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: "0.7rem",
        "2xs": "0.6rem",
      },
      fontFamily: {
        sansAlt: ["Monument Extended", ...defaultTheme.fontFamily.sans],
        pixel: "var(--font-pixel), sans-serif",
        mono: "var(--font-mono), monospace",
      },
      colors: {
        primaryGreen: "var(--primary-green)",
        cardColor: "var(--card-color)",
        borderColor: "var(--border-color)",
        mediumGray: "var(--medium-gray)",
        lightGray: "var(--light-gray)",
        lighterGray: "var(--lighter-gray)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
