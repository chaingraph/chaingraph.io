const breakpoints = ['640px', '832px', '1024px', '1200px', '1600px']

const colors = {
  main: {
    background: {
      default: '#fff',
      light: '#fff',
      dark: '#151325',
    },
    primary: {
      100: '#003A65',
      200: '#960088',
      300: '#009085',
    },
    secondary: {
      100: '#ffffff',
      200: '#000000',
    },
    black: {
      100: '#414141',
      200: '#303030',
      300: '#232323',
      400: '#121212',
      500: '#010101',
    },
    white: {
      100: '#ffffff',
      200: '#f5f5f5',
      300: '#eeeeee',
      400: '#e5e5e5',
      500: '#dbdbdb',
    },
  },
  cards: {
    light: {
      default:
        'linear-gradient(180deg, #fff 100%, rgba(255, 255, 255, 0) 100%)',
      active:
        'linear-gradient(180deg, #D7DBF1 0%, rgba(255, 255, 255, 0) 100%)',
      color: '#0E144A',
    },
    dark: {
      default: 'linear-gradient(180deg, #151325 0%, rgba(70, 68, 87, 0) 100%)',
      active: 'linear-gradient(180deg, #211E3E 0%, rgba(70, 68, 87, 0) 100%)',
      color: '#fff',
    },
  },
  buttons: {
    primary: {
      default: '#2CD5C4',
      light: '#fff',
      dark: '#151325',
    },
    secondary: {
      default: '#2CD5C4',
      light: '#fff',
      dark: '#151325',
    },
  },
  input: {
    error: {
      default: '#F41',
      light: '',
      dark: '',
    },
    background: {
      default: '#333145',
      light: '#F9F9F9',
      dark: '#333145',
    },
    success: {
      default: '#388e3c',
      light: '#F9F9F9',
      dark: '#333145',
    },
    warning: {
      default: '#fff176',
      light: '',
      dark: '',
    },
  },
}

/**
 * Space for margin/padding
 */
const space = [
  '0px',
  '4px',
  '8px',
  '16px',
  '32px',
  '64px',
  '128px',
  '256px',
  '512px',
]

/**
 * Typographic scale
 */
const fontSizes = [
  '12px',
  '14px',
  '16px',
  '20px',
  '24px',
  '32px',
  '48px',
  '64px',
  '96px',
  '128px',
]
const lineHeights = [1, 1.125, 1.25, 1.5]
const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
}
const letterSpacings = {
  normal: 'normal',
  caps: '0.25em',
  labels: '0.05em',
}

/**
 * Border-radius
 */
const radii = ['0px', '2px', '4px', '8px', '16px']

export const theme = {
  name: 'Default',
  breakpoints,
  colors,
  space,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii,
}
