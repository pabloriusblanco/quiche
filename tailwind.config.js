/** @type {import('tailwindcss').Config} */

import { Colors } from "./src/utils/colors";

export default {
  safelist: [
    {
      pattern:
        /(bg|text|border|shadow|fill|stroke|outline)-(primary|secondary|black|gray|grayscale|success|alert)[-(ultralight|light|semilight|semidark|dark|graytext|background|body)]?/,
      variants: ["responsive", "hover", "focus", "active", "group-hover"],
    },
    {
      pattern: /grid-cols-(1|2|3|4|5|6|8|9|10|11|12)?/,
      variants: ["sm", "md", "lg", "xl", "2xl"],
    },
    {
      pattern: /col-(1|2|3|4|5|6|8|9|10|11|12)?/,
      variants: ["sm", "md", "lg", "xl", "2xl"],
    },
    {
      pattern: /gap-(1|2|3|4|5|6|8|9|10|11|12)?/,
      variants: ["sm", "md", "lg", "xl", "2xl"],
    },
    {
      pattern: /font-(light|normal|medium|semibold|bold|extrabold|black)/,
      variants: ["responsive", "hover", "focus", "active", "group-hover"],
    },
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: Colors.primary,
        secondary: Colors.secondary,
        danger: Colors.danger,
        success: Colors.success,
        gray: Colors.gray,
        black: Colors.black,
      },
    },
    screens: {
      // <= 639px Mobile
      md: "640px", // > Tablet
      lg: "900px", // Laptop
      xl: "1360px", // Desktop
      "2xl": "1921px",
    },
  },
  plugins: [],
};
