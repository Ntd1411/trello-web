import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  defaultColorScheme: 'light',
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#dfbc66ff',
          light: '#ffffff',
          dark: '#d59f16ff'
        },
        background: {
          default: '#f9f9f9'
        },
        text: {
          primary: '#1f1d1dff'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#2e2323ff',
          light: '#bfbdbdff',
          dark: '#2c2929ff'
        },
        background: {
          default: '#212121'
        },
        text: {
          primary: '#ffffff'
        }
      }
    }
  },
  trello: {
    appBarHeight: '58px',
    boardbarHeight: '65px'
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
          color: theme.vars.palette.primary.main,
          // Viền mặc định
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.vars.palette.primary.main
          },

          // Viền khi hover
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.vars.palette.primary.dark
          }

        })
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.vars.palette.primary.main, // label thường
          '&.Mui-focused': {
            color: theme.vars.palette.primary.main // label khi focus
          }
        })
      }
    }
  }
})

export default theme
