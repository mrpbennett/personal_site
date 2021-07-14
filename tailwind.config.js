module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: (theme) => ({
      primary: '#282d41',
      secondary: '#030305',
    }),
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              marginBottom: 0,
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
