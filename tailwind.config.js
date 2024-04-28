/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      tb: "700px",
      dk: "1200px",
    },
    extend: {
      fontFamily: {
        akhzid: "Akzid",
        recoleta: "Poppins",
      },
    },
  },
  plugins: [],
};
