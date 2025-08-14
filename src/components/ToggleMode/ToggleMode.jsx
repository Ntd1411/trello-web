import React from 'react'
import { useColorScheme } from '@mui/material/styles'
import { IconButton } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import Tooltip from '@mui/material/Tooltip'
import theme from '~/theme'

function ToggleMode() {
  const { mode, setMode } = useColorScheme()
  if (!mode) {
    return null
  }
  if (mode === 'system') {
    setMode('light')
  }
  const getIcon = (mode) => {
    if (mode === 'dark') {
      return (
        <Tooltip title="Light mode">
          <LightModeIcon />
        </Tooltip>
      )
    } else if (mode === 'light') {
      return (
        <Tooltip title="Dark mode">
          <DarkModeIcon />
        </Tooltip>
      )
    }
  }
  function toggle() {
    if (mode === 'dark') {
      setMode('light')
    } else if (mode === 'light') {
      setMode('dark')
    }
  }
  return (
    <IconButton
      sx={{
        color: 'primary.dark',
        fontSize: '1rem'
      }}
      onClick={toggle}
    >
      {getIcon(mode)}
    </IconButton>
  )
}

export default ToggleMode
