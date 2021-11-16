module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          1000: "#0d2bd3",
          1100: "#0000b0",
        },
        tracer: {
          50: "#F0F0FF",
          100: "#DEDEFF",
          200: "#A6A6F2",
          300: "#8383EB",
          400: "#3DA8F5",
          500: "#3535DC",
          600: "#2A2AC7",
          700: "#0d29ff",
          800: "#0000B0",
          900: "#00007A",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "720px",
          },
          "@screen lg": {
            maxWidth: "900px",
          },
          "@screen xl": {
            maxWidth: "1160px",
          },
          "@screen 2xl": {
            maxWidth: "1240px",
          },
        },
      });
    },
    require("@tailwindcss/typography"),
  ],
};
