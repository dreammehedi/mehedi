/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      kanit: ["Kanit", "sans-serif"],
      nunito: ["Nunito", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#c026d3",
        dark: "#020617",
        border: "#64748b",
      },
    },
  },
  plugins: [require("daisyui")],
};
