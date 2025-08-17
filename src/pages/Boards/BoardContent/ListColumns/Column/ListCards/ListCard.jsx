/* eslint-disable react/prop-types */
import React from 'react'
import { Box } from '@mui/material'
import Card from './Card/Card'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

function ListCard({ cards }) {
  return (
    <>
      <SortableContext items={cards.map(c => c._id)} strategy={verticalListSortingStrategy}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            p: '0 5px',
            m: '0 5px',
            overflowX: 'hidden',
            overflowY: 'auto',
            maxHeight: (theme) => `calc(
              ${theme.trello.boardContentHeight} - 
              ${theme.spacing(2)} - 
              ${theme.trello.columnHeaderHeight} - 
              ${theme.trello.columnFooterHeight}
              )`
          }}>
          {cards.map(card => <Card key={card._id} card={card} />)}

        </Box>
      </SortableContext>
    </>
  )
}

export default ListCard