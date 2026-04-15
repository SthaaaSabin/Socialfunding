import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F0E8",
        charcoal: "#1a1a1a",
        saffron: "#D4943A",
        "saffron-dark": "#B87A2A",
        "card-white": "#FFFFFF",
        mountain: "#E8EEF2",
        hills: "#4A7C59",
        terai: "#C4A265",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"DM Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
