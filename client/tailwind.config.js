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
        celeste: "#CCEAF7",
        blue: "rgb(59,130,246)",
      },
      boxShadow: {
        "custom-md": "5px 13px 20px black",
      },
    },
  },
  plugins: [],
};
