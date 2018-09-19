export const colors = {
  primary: "#1b3c59",
  secondary: "#456173",
  accent: "#11bfae",
  light: "#f2f2f0"
};

const breakpoints = ["31.25em", "43.75em", "46.875em"];
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64];
const space = [0, 4, 8, 16, 32, 64, 128, 256];
const fonts = {
  sans: "system-ui, sans-serif",
  mono: "Menlo, monospace"
};

interface ITheme {
  breakpoints: string[];
  fontSizes: number[];
  fonts: { sans: string; mono: string };
  space: number[];
  colors: { [key in keyof typeof colors]: string };
}

const theme: ITheme = {
  breakpoints,
  fontSizes,
  fonts,
  space,
  colors
};

export { theme, ITheme };
