import React from 'react'
import { Box } from '@mui/material'
import ToggleMode from '../../components/ToggleMode'

export default function NavBar() {
  return (
    <>
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
    </>
  )
}