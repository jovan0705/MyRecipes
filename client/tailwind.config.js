module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#fb9400",
          "primary-focus": "#ffecd1",
          "primary-content": "#fff",
        },
      },
    ],
  },
};
