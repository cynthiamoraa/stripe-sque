const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  theme: {
    extend: {
      colors: {
        squeBlue: "#4f46e5", // Example brand gradient start
        squePurple: "#7c3aed", // Example brand gradient end
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        gradient: "gradient 12s ease infinite",
      },
    },
  },
  safelist: ["invert", "filter", "blur-[10px]"],
};

export default config;
