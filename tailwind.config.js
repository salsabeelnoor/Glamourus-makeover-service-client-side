/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pacific: ["'Pacifico'", "cursive"],
        script: ["'Kaushan Script'", "cursive"],
      },
      gridTemplateColumns: {
        layout: "3fr 2fr",
        mobile_layout: "1fr",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        qctheme: {
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
