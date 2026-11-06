/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        summate: {
          teal: "#1C5E6E",
          aqua: "#9FDEAF",
          coral: "#F2A93B",
          amber: "#F2A93B",
          mint: "#9FDEAF",
          dark: "#0F2A31",
          elevated: "#14454F",
          surface: "#123F49",
        },
      },
      zIndex: {
        // React Bits components layer their glow/grain with negative z-index.
        "1": "1",
        "-1": "-1",
        "-10": "-10",
      },
      fontFamily: {
        sans: ["var(--su-font-body)", "sans-serif"],
        display: ["var(--su-font-display)", "sans-serif"],
        mono: ["var(--su-font-mono)", "monospace"],
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(250%)" },
        },
      },
      animation: {
        shimmer: "shimmer 1.2s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};