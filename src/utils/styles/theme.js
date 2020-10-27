const breakpoints = ['640px', '832px', '1024px', '1200px', '1600px'];

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
  main: {
    background: {
      default: '#fff',
      light: '#fff',
      dark: '#151325'
    },
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
  },
  cards: {
    light: {
      default: '#0E144A',
      active: '#2CD5C4',
      color: '#fff',
    },
    dark: {
      default: 'linear-gradient(180deg, #524F67 0%, rgba(70, 68, 87, 0) 100%)',
      active: 'linear-gradient(180deg, #2CD5C4 0%, rgba(70, 68, 87, 0) 100%)',
      color: '#fff'
    }
  },
  buttons: {
    primary: {
      default: '#2CD5C4',
      light: '',
      dark: ''
    },
    secondary: {
      default: '#2CD5C4',
      light: '',
      dark: ''
    },
  },
  input: {
    error: '#F41',
    background: {
      default: '',
      light: '#333145',
      dark: '#333145'
    },
    success: {
      default: '#388e3c',
      light: '',
      dark: ''
    },
    warning: {
      default: '#fff176',
      light: '',
      dark: ''
    }
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
