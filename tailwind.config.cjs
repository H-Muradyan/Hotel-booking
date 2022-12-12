/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        headerbg: "rgb(23 20 20 / 78%)",
        navText: "rgb(255 255 255 / 60%)",
        borderColor: "rgba(255, 255, 255, 0.25)",
      },
    },
    fontFamily: {
      allison: ["Allison", "cursive"],
    },
    boxShadow: {
      headershadow: "0 6px 13px 0px grey",
    },
  },
  plugins: [],
};
