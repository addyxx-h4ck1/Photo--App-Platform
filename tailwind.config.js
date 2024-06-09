/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1b1b1b',
        bgPrimary: '#312f2f2e',
      },
    },
  },

  plugins: [require('daisyui')],
}
