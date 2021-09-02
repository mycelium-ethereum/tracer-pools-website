module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          1000: '#0d2bd3'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
