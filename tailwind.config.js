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
      "5xl": "3840px",
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
          darkblue: "#00003C",
          midblue: "#3535DC",
          navy: "#00005E",
          cyan: "#00D9E9",
          primaryblue: "#0000B0",
        },
        primary: "#192130",
        secondary: "#F9FAFA",
        tertiary: "#7D8795",
        highlight: "#1C64F2",
        footnote: "#D6DFE6",
        action: {
          active: "#1C64F2",
          inactive: "#C8DCFA",
          cell: "#F1F7FF",
        },
        cell: {
          tertiary: "#E7ECF0",
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
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "100%",
          },
          "@screen md": {
            maxWidth: "100%",
          },
          "@screen lg": {
            maxWidth: "100%",
          },
          "@screen xl": {
            maxWidth: "1340px",
          },
          "@screen 3xl": {
            maxWidth: "1600px",
          },
          "@screen 4xl": {
            maxWidth: "2370px",
          },
        },
      });
    },
  ],
};
