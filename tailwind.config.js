/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      bigShoulders: ['"Big Shoulders Display"'],
      lexendDeca: ['"Lexend Deca"'],
    },
    extend: {
      colors: {
        light: "#F2F2F2",
      },
    },
  },
  plugins: [],
}
