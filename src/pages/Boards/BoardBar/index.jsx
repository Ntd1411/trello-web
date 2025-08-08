import React from 'react'
import { Box } from '@mui/material'

function BoardBar() {
  return (
    <>
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
    </>
  )
}

export default BoardBar