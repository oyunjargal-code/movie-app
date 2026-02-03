// const config = {
//   theme: {
//     screens: {
//       sm: "480px",
//       md: "768px",
//       lg: "1440px",
//       xl: "1440px",
//       "2xl": "1440px",
//     },
//   },
//   plugins: {
//     "@tailwindcss/postcss": {},
//   },
// };

// export default config;

const config = {
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1440px",
      },
      maxWidth: {
        desktop: "1440px",
      },
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
