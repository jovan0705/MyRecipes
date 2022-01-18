module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#fb9400",
          "primary-focus": "#ffa72d",
          "primary-content": "#fff",
        },
      },
    ],
  },
};
