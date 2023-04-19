/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F2BE7E",

          secondary: "#F2F2F2",

          accent: "#0D0D0D",

          neutral: "#010D00",

          // "base-100": "#00010D",

          info: "#6091D2",

          success: "#138167",

          warning: "#9E6105",

          error: "#F31616",
        },
      },
    ],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}