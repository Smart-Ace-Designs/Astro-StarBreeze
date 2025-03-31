/** @type {import("prettier").Config} */
export default {
  printWidth: 100,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  tailwindFunctions: ["tv"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
