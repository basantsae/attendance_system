/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'white': '#f9fafb',
          'Blue': {
            100: '#cffafe',
            200: '#a5f3fc',
            300: '#67e8f9',
            400: '#22d3ee',
            500: '#06b6d4',
            600: '#2563eb',
            700: '#0e7490',
            800: '#6b21a8',
            900: '#164e63',
          },
          'bgcolor':'#023549'
          // ...
        },
      },
    },
  plugins: [],
}
