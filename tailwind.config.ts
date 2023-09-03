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
      fontFamily: {
        sansAlt: ["Monument Extended", ...defaultTheme.fontFamily.sans],
        pixel: "var(--font-pixel), sans-serif",
      },
      colors: {
        primaryGreen: "var(--primary-green)",
        cardColor: "var(--card-color)",
        borderColor: "var(--border-color)",
      },
    },
  },
  plugins: [],
};
export default config;
