import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#F0B90B", //Primary button, Details, Menu left-markup, OpenALink, Text h1,
  primaryBright: "#f8d33a",
  primaryDark: "#aa8929",
  secondary: "#111",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f1f1f3",
  backgroundDisabled: "#edeef2",
  contrast: "#111422",
  invertedContrast: "#FFFFFF",
  input: "#aaa",
  tertiary: "#f0b90b", // DarkMode button, Menu hover color
  text: "#000422",
  textDisabled: "#BDC2C4",
  textSubtle: "#ffcd34",
  textSubtleMenu: "#5555",
  textSubtleSubMenu: "#5551",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  toggleHandle: "#fff",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#eeee",
  background: "#151935",
  backgroundDisabled: "#335",
  contrast: "#FFFFFF",
  invertedContrast: "#111422",
  input: "#000422dd",
  primaryDark: "#0098A1",
  tertiary: "#f0b90bb3", // hover (menu item, ButtonMenuItem)
  text: "#eef",
  textDisabled: "#667",
  textSubtle: "#eee5",
  textSubtleMenu: "#eeec",
  textSubtleSubMenu: "#eee8",
  borderColor: "#1a2246",
  card: "#000422",
  toggleHandle: "#ffcd34",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
