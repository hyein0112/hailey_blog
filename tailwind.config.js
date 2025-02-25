/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "500px",
        xl: "1200px",
      },
      fontFamily: {
        notoSansKr: ["var(--font-noto-sans-kr)"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        md: "1.125rem",
        lg: "1.25rem",
        xl: "1.5rem",
        xxl: "1.75rem",
      },
      colors: {
        background1: "#fafafa",
        background2: "#f2f2f2",
        background3: "#E4E6E8",
        background4: "#BCC0C5",
        background5: "#8F979E",

        border1: "#eaeaed",
        border2: "#D6D6D7",
        border3: "#ADACAC",
        border4: "#343a40",

        text1: "#626D77",
        text2: "#414D5A",
        text3: "#1B2937",
        text4: "#121D27",

        red: {
          50: "#ffebee",
          100: "#ffcdd2",
          200: "#ef9a9a",
          300: "#e57373",
          400: "#ef5350",
          500: "#f42434",
          600: "#e53935",
          700: "#d32f2f",
          800: "#c62828",
          900: "#b71c1c",
        },
        green: {
          50: "#E8F7EE",
          100: "#C5EBD5",
          200: "#A2DFBC",
          300: "#7FD3A3",
          400: "#5CC78A",
          500: "#17B169",
          600: "#129456",
          700: "#0D7743",
          800: "#085A30",
          900: "#033D1D",
        },
        yellow: {
          50: "#fffde7",
          100: "#fff9c4",
          200: "#fff59d",
          300: "#fff176",
          400: "#ffee58",
          500: "#fee500",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/line-clamp")],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
