/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: 'Roboto Mono monospace',
        // sans: 'Nunito Sans sans-serif',
      },
      colors: {
        whiteShed: '#FBFBFB',
        lighttestRed: '#fef0e9',
        red: '#ea5858',
        DarkRed: '#EA5858',
        lightGrey: '#989591',
        darkGrey: '#3C3C3D',
        DarkOrange: '#FCCC63',
      },
    },
  },
  plugins: [],
}
