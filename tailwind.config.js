/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
        'display': ['Anton', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-fluid-type'),
  ],
}

