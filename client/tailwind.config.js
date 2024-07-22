/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        'custom-lg': { 'max': '1400px' },
        'xs': { 'max': '450px' },
      },
      colors: {
        'DGXgreen': '#76B900',
        'DGXblue': '#013D54',
        'DGXwhite': '#FFFFFF',
        'DGXblack': '#000000',
        'DGXgray': '#6b7280'
      },
      backgroundImage: theme => ({
        'dgx-gradient': `linear-gradient(135deg, ${theme('colors.DGXblue')}, ${theme('colors.DGXgreen')})`,
      }),
    },
  },
  plugins: [],
}
