/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#145231",
          950: "#0d3818",
        },
        earth: {
          50: "#fdf8f3",
          100: "#f8f0e8",
          200: "#f2dcc5",
          300: "#edc8a1",
          400: "#e5a873",
          500: "#d9865d",
          600: "#bf6e47",
          700: "#a45a3a",
          800: "#8a4a32",
          900: "#774130",
        },
        dark: "#1f2937",
        cream: "#faf7f2",
      },
      fontFamily: {
        body: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-30px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100% / 3))" },
        },
      },
    },
  },
  plugins: [],
};
