/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ["Roboto"],
      megrim: ["Megrim"],
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F1F7ED",
          secondary: "#7CA982",
          accent: "#243E36",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
