/* eslint-disable react/prop-types */
import React from 'react'
import { Box, Button } from '@mui/material'
import Column from './Column/Column'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import { horizontalListSortingStrategy, SortableContext } from '@dnd-kit/sortable'

function ListColumns({ columns }) {

  return (
    <>
      <SortableContext items={columns.map(c => c._id)} strategy={horizontalListSortingStrategy}>
        {/* container list column */}
        <Box
          sx={{
            overflowX: 'auto',
            overflowY: 'hidden',
            display: 'flex',
            justifyContent: 'space-evenly',
            height: (theme) => `calc(${theme.trello.boardContentHeight} - 5px)`,
            p: '10px 0'
          }}>
          {columns.map(column => <Column key={column._id} column={column} />)}
          <Box
            sx={{
              color: 'text.primary',
              bgcolor: '#ffffff3d',
              height: 'fit-content',
              ml: 1,
              mr: 2,
              borderRadius: '5px'
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
      </SortableContext>
    </>
  )
}

export default ListColumns