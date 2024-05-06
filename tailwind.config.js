/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      tb: "700px",
      tbl: "1000px",
      dk: "1224px",
    },
    extend: {
      textStrokeWidth: {
        // Define custom property for stroke width
        2: "2px",
      },
      textStrokeColor: {
        // Define custom property for stroke color
        white: "#FFFFFF",
        green: "#B2FF02",
      },
      fontFamily: {
        akhzid: "Akzid",
        recoleta: "Recoleta",
      },
      boxShadow: {
        greenish: "0px 4px 40px 0px #B2FF0233",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme, e }) {
      const newUtilities = {};
      Object.entries(theme("textStrokeWidth")).forEach(([key, value]) => {
        Object.entries(theme("textStrokeColor")).forEach(
          ([colorKey, color]) => {
            const className = `.text-stroke-${key}-${colorKey}`; // e.g., text-stroke-2-black
            newUtilities[className] = {
              "text-shadow": `0 0 ${value} ${color}, 0 0 ${value} ${color}, 0 0 ${value} ${color}, 0 0 ${value} ${color}`,
            };
          }
        );
      });
      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};
