import { teal } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  trello : {
    navbarHeight: '48px',
    boardbarHeight: '58px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#dfbc66ff'
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
          main: '#2e2323ff'
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
  cssVariables: true,
  colorSchemeSelector: 'class'
})

export default theme