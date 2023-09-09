import { createTheme } from '@mui/material/styles'

export const primary = '#000000'
export const secondary = '#ffffff'
export const error = '#cc0000'
export const warning = '#f39c12'
export const success = '#007f4f'
export const lightRed = '#ff6961'
export const ligthYellow = '#ffd700'
export const lightGreen = '#2ecc71'

export const mobleView = '600px'
export const tabletView = '850px'
export const desktopView = '1280px'

export const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    error: {
      main: error,
    },
    warning: {
      main: warning,
    },
    success: {
      main: success,
    },
  },
  typography: {
    fontFamily: ['Playfair Display', 'serif'].join(','),
    h1: {
      fontFamily: 'Playfair Display',
      fontSize: '2.5rem',
      fontWeight: 'bold',
    },
    h2: {
      fontFamily: 'Playfair Display',
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    h3: {
      fontFamily: 'Playfair Display',
      fontSize: '1.75rem',
      fontWeight: 'bold',
    },
    h4: {
      fontFamily: 'Playfair Display',
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    h5: {
      fontFamily: 'Playfair Display',
      fontSize: '1.25rem',
      fontWeight: 'bold',
    },
    h6: {
      fontFamily: 'Playfair Display',
      fontSize: '1rem',
      fontWeight: 'bold',
    },
    body1: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: '1.5rem',
    },
    body2: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: '1rem',
    },
    subtitle1: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: '1.1rem',
    },
    subtitle2: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: '1rem',
    },
    caption: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: '1rem',
    },
    button: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: '1rem',
    },
    overline: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: '1rem',
    },
  },
})
