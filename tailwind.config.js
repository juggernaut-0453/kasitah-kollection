/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      height:{
        44: "448px",
      },
      maxHeight:{
        450: "450px",
        500: "500px",
        650: "650px",
        800: "800px",
        90: "90%",
      },
      padding:{
        ti: "8%"
      }
    },
  },
  plugins: [],
};
