import { createTheme } from '@mui/material/styles'

export const primary = '#000000'
export const secondary = '#ffffff'
export const error = '#cc0000'
export const warning = '#f39c12'
export const success = '#007f4f'
export const lightRed = '#ff6961'
export const ligthYellow = '#ffd700'
export const lightGreen = '#2ecc71'

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
})
