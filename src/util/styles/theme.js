const breakpoints = ['40em', '52em', '64em', '75em'];

const colors = {
  primary: {
    100: '#003A65',
    200: '#960088',
    300: '#009085'
  },
  secondary: {
    100: '#ffffff',
    200: '#000000'
  },
  black: {
    100: '#414141',
    200: '#303030',
    300: '#232323',
    400: '#121212',
    500: '#010101'
  },
  error: {
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
  },
  warning: {
    100: '#fff9c4',
    200: '#fff59d',
    300: '#fff176',
    700: '#fbc02d',
    800: '#f9a825',
    900: '#f57f17',
  },
  success: {
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
  },
};

/**
 * Space for margin/padding
 */
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

/**
 * Typographic scale
 */
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96, 128];
const lineHeights = [1, 1.125, 1.25, 1.5];
const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800
};
const letterSpacings = {
  normal: 'normal',
  caps: '0.25em',
  labels: '0.05em',
};

/**
 * Border-radius
 */
const radii = [0, 2, 4, 8, 16];

export const theme = {
  name: 'Default',
  breakpoints,
  colors,
  space,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii
};
