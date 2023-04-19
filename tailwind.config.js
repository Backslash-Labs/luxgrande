/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F2BE7E",

          secondary: "#F2F2F2",

          accent: "#0D0D0D",

          neutral: "#010D00",

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
    extend: {
      backgroundImage: {
        "sauna": "url('./images/sauna.JPG')",
        "nails": "url('./images/nails.JPG')",
      }
    },
  },
  plugins: [require('daisyui')],
}