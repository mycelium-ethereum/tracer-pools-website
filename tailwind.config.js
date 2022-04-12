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
    },
    extend: {
      colors: {
        tracer: {
          purple: "#7223FF",
          pink: "#E05CFF",
          lightblue: "#0094F8",
          midblue: "#3535DC",
          navy: "#00005E",
          cyan: "#00D9E9",
          primaryblue: "#0000B0",
        },
        action: {
          active: "#1C64F2",
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
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "1240px",
        },
      });
    },
  ],
};
