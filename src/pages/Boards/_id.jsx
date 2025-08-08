import React from 'react'
import { Container } from '@mui/material'
import NavBar from '../../components/Navbar'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent'


export default function Board() {
  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ height: '100vh', backgroundColor: 'primary.main' }}>
        <NavBar />
        <BoardBar />
        <BoardContent />
      </Container>
    </>
  )
}
