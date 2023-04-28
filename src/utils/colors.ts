export const Colors = {
  primary: {
    light: "#F0CB63",
    DEFAULT: "#F0BA23",
    dark: "#DBAA2D",
  },
  secondary: {
    light: "#D1D5DB",
    DEFAULT: "#6B7280",
    dark: "#4B5563",
  },
  danger: {
    light: "#FECACA",
    DEFAULT: "#EF4444",
    dark: "#B91C1C",
  },
  success: {
    light: "#A7F3D0",
    DEFAULT: "#10B981",
    dark: "#047857",
  },
  black: {
    light: "#9CA3AF",
    DEFAULT: '#4D4D4D',
    dark: "#1F2937",
  }
};

export type ColorTypes = keyof typeof Colors;
