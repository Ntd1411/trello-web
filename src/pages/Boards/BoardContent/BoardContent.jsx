import React from 'react'
import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'

function BoardContent() {

  return (
    <>
      <Box sx={{
        height: (theme) => `calc(${theme.trello.boardContentHeight})`,
        backgroundColor: 'primary.main',
        width: '100%',
        display: 'flex',
        alignItems: 'center'
      }}>
        <ListColumns />
      </Box >
    </>
  )
}

export default BoardContent
