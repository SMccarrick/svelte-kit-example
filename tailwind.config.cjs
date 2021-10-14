module.exports = {
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  mode: "jit",
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
