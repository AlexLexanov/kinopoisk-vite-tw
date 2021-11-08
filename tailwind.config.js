module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.TAILWIND_MODE === 'build',
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
