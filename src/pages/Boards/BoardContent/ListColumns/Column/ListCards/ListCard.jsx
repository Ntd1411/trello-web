import React from 'react'
import { Box } from '@mui/material'
import Card from './Card/Card'

function ListCard() {
  return (
    <>
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
        <Card />
        <Card temporaryHideMedia />
        <Card temporaryHideMedia />
        <Card temporaryHideMedia />
        <Card temporaryHideMedia />
        <Card temporaryHideMedia />
        <Card temporaryHideMedia />
        <Card temporaryHideMedia />
        <Card temporaryHideMedia />
        <Card temporaryHideMedia />
        <Card temporaryHideMedia />
        <Card temporaryHideMedia />
        <Card temporaryHideMedia />
      </Box>
    </>
  )
}

export default ListCard