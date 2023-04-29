/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        verde: "#e0ffcd",
        verdeurban: "#76F900",
        celeste: "#07BABF",
        blue: "rgb(59,130,246)",
        blueGray: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#334155",
          500: "#64748B",
          600: "#334155", // Added blueGray-600 color
          700: "#334155",
          800: "#343746",
          900: "#1F2933",
        },
      },
      boxShadow: {
        "custom-md": "5px 13px 20px black",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
      },
    },
  },
  plugins: [],
};
