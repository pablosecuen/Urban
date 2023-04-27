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
      },
      boxShadow: {
        "custom-md": "5px 13px 20px black",
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
  },
  plugins: [],
};
