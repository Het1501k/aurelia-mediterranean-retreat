/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0A0A0A",
        terracotta: "#D4A373",
        warmwhite: "#FAFAFA"
      },
      fontFamily: {
        sans: ["Manrope", "Inter", "sans-serif"],
        display: ["Instrument Serif", "Georgia", "serif"],
        mono: ["DM Mono", "monospace"]
      },
      borderRadius: { "4xl": "2rem" }
    }
  },
  plugins: []
}
