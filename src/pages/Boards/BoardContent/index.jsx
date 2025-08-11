import React from 'react'
import { Box } from '@mui/material'

function BoardContent() {
  return (
    <>
      <Box sx={{
        height: (theme) => `calc( 100% - ${theme.trello.appBarHeight} - ${theme.trello.boardbarHeight})`,
        backgroundColor: 'primary.main',
        width: '100%',
        display: 'flex',
        alignItems: 'center'
      }}>
        content
      </Box>
    </>
  )
}

export default BoardContent
