/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#0e064b", 
        secondary: "#9c9aad", 
        accent: "#0e064b", 
        textPrimary: "#212121",
        textSecondary: "#666666",

        darkBg: "#121212", 
        darkCard: "#1E1E1E", 
        darkTextPrimary: "#FFFFFF", 
        darkTextSecondary: "#B0B0B0",
      },
    },
  },
  darkMode: "class", 
  plugins: [],
};
