export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  xxxl: string;
  enm: string;
  nav: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  card: string;
  inset: string;
};

export type Gradients = {
  bubblegum: string;
};

export type Colors = {
  primary: string;
  primaryBright: string;
  primaryDark: string;
  secondary: string;
  secondaryBright: string;
  secondaryDark: string;
  tertiary: string;
  tertiaryDark: string;
  success: string;
  failure: string;
  warning: string;
  contrast: string;
  invertedContrast: string;
  input: string;
  background: string;
  backgroundDisabled: string;
  text: string;
  textDisabled: string;
  textSubtle: string;
  textSubtleMenu: string;
  textSubtleSubMenu: string;
  borderColor: string;
  card: string;
  toggleHandle: string;

  // Gradients
  gradients: Gradients;

  // Brand colors
  binance: string;
};

export type ZIndices = {
  dropdown: number;
  modal: number;
};
