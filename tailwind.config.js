/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      screens: {
        '2xl': '1800px',   // default
        '3xl': '1920px',   // Full HD / large desktop
        '4xl': '2560px',   // 2K / 4K monitors
      },
    },
  },
  plugins: [],
};
