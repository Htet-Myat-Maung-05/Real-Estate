/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}", "./component/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik-Light", "sans-serif"],
        "rubik-regular": ["Rubik-Regular", "sans-serif"],
        "rubik-medium": ["Rubik-Medium", "sans-serif"],
        "rubik-bold": ["Rubik-Bold", "sans-serif"],
        "rubik-semiBold": ["Rubik-SemiBold", "sans-serif"],
        "rubik-extraBold": ["Rubik-ExtraBold", "sans-serif"],
      },
      colors: {
        primary: {
          100: '#0061ff0A',
          200: '#0061ff1A',
          300: '#0061ff',
        },
        accent: {
          100: "#fbfbfd"
        },
        black: {
          DEFAULT: "#000000",
          100: "#8c8e98",
          200: "#666876",
          300: "#191d31"
        },
        danger: "#f75555",
    },
    },
  },
  plugins: [],
}