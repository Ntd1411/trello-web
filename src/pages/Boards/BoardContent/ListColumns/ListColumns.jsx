import React from 'react'
import { Box, Button } from '@mui/material'
import Column from './Column/Column'
import NoteAddIcon from '@mui/icons-material/NoteAdd'

function ListColumns() {

  return (
    <>
      {/* container list column */}
      <Box
        sx={{
          overflowX: 'auto',
          overflowY: 'hidden',
          display: 'flex',
          justifyContent: 'space-evenly',
          gap: 1,
          height: (theme) => `calc(${theme.trello.boardContentHeight} - 5px)`,
          p: '10px 0'
        }}>
        <Column />
        <Column />
        <Box
          sx={{
            color: 'text.primary',
            bgcolor: '#ffffff3d',
            height: 'fit-content',
            ml: 2,
            mr: 3
          }}
        >
          <Button
            sx={{
              color: 'text.primary',
              minWidth: '200px',
              pl: 1,
              pr: 1,
              py: 0.5
            }}
            startIcon={<NoteAddIcon />}
          >
            Add new column</Button>
        </Box>
      </Box>
    </>
  )
}

export default ListColumns