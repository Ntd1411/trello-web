import { createTheme } from '@mui/material/styles'

const APPBAR_HEIGHT = '58px'
const BOARDBAR_HEIGHT = '65px'
const CONTENT_HEIGHT = `calc(100vh - ${APPBAR_HEIGHT} - ${BOARDBAR_HEIGHT})`

const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

const theme = createTheme({
  spacing: 16,
  defaultColorScheme: 'light',
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#552df4ff'
        },
        background: {
          default: '#f9f9f9',
          card: '#ebecf0'
        },
        text: {
          primary: '#fff',
          card: '#2c2929ff'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#433e3eff',
          light: '#bfbdbdff',
          dark: '#2c2929ff'
        },
        background: {
          default: '#212121',
          card: '#2a2c35ff'
        },
        text: {
          primary: '#ffffff',
          card: '#ffffff'
        }
      }
    }
  },
  trello: {
    appBarHeight: APPBAR_HEIGHT,
    boardbarHeight: BOARDBAR_HEIGHT,
    boardContentHeight: CONTENT_HEIGHT,
    columnHeaderHeight: COLUMN_HEADER_HEIGHT,
    columnFooterHeight: COLUMN_FOOTER_HEIGHT
  },
  cssVariables: true,
  colorSchemeSelector: 'class',
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem',
          textTransform: 'none'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.vars.palette.text.primary,
          // Viền mặc định
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.vars.palette.text.primary
          },

          // Viền khi hover
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.vars.palette.text.primary
          },

          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.vars.palette.text.primary
          }

        })
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.vars.palette.text.primary, // label thường
          '&.Mui-focused': {
            color: theme.vars.palette.text.primary // label khi focus
          }
        })
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-body1': { fontSize: '0.875rem' }
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '5px',
            height: '5px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#a1a1a1ff',
            borderRadius: '10px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#808080ff',
            borderRadius: '10px'
          }
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: `${theme.vars.palette.text.primary} !important`
        })
      }
    }
  }
})

export default theme
