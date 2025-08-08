import React from 'react'
import { useColorScheme } from '@mui/material/styles'
import { Box, Container, IconButton } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
// import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

function ToggleMode() {
  const { mode, setMode } = useColorScheme()
  if (!mode) {
    return null
  }
  const getIcon = (mode) => {
    if (mode === 'dark') {
      return <LightModeIcon />
    } else if (mode === 'light') {
      return <DarkModeIcon />
    }
    // else if (mode === 'system') {
    //   return <SettingsBrightnessIcon />
    // }
  }
  function toggle() {
    if (mode === 'dark') {
      setMode('light')
    } else if (mode === 'light') {
      setMode('dark')
    }
    // else if (mode === 'system') {
    //   setMode('dark')
    // }
  }
  return (
    <IconButton
      size='small'
      sx={{
        border: '1px solid',
        borderColor: 'primary',
        borderRadius: '13px',
        color: 'text.primary'
      }}
      onClick={toggle}
    >
      {getIcon(mode)}
    </IconButton>
  )
}

export default function MyApp() {
  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ height: '100vh', backgroundColor: 'primary.main' }}>
        <Box sx={{
          height: (theme) => theme.trello.navbarHeight,
          backgroundColor: 'primary.light',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          color: 'text.primary'
        }}>
          <ToggleMode />
        </Box>
        <Box sx={{
          height: (theme) => theme.trello.boardbarHeight,
          backgroundColor: 'primary.dark',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          color: 'text.primary'
        }}>
          board bar
        </Box>
        <Box sx={{
          height: (theme) => `calc( 100% - ${theme.trello.navbarHeight} - ${theme.trello.boardbarHeight})`,
          backgroundColor: 'primary.main',
          width: '100%',
          display: 'flex',
          alignItems: 'center'
        }}>
          content
        </Box>

      </Container>
    </>
  )
}

