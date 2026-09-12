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
          cobalt: "#1E3ABA",
          purple: "#7C3AED",
          magenta: "#FF2D75",
          orange: "#FF8A00",
          teal: "#00D4C8",
          sky: "#00B4FF",
          dark: "#0D1222",
          elevated: "#151D36",
          surface: "#111827",
        },
      },
      fontFamily: {
        sans: ["Poppins", "var(--su-font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};