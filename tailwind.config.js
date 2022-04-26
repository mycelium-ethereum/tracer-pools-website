module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "370px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
      "4xl": "2560px",
    },
    extend: {
      colors: {
        tracer: {
          purple: {
            light: "#7223FF",
            dark: "#26006B",
          },
          pink: "#E05CFF",
          lightblue: "#0094F8",
          midblue: "#3535DC",
          darkblue: "#00005E",
          navy: "#00005E",
          cyan: "#00D9E9",
          primaryblue: "#0000B0",
        },
        tertiary: "#7D8795",
        highlight: "#1C64F2",
        action: {
          active: "#1C64F2",
          cell: "#F1F7FF",
        },
      },
      fontFamily: {
        sans: ["'aileron'", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "1240px",
        },
      });
    },
  ],
};
