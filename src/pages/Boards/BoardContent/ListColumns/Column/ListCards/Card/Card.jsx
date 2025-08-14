import React from 'react'
import Button from '@mui/material/Button'
import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

Card.propTypes = {
  temporaryHideMedia: PropTypes.bool
}

function Card({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <>
        <MuiCard
          sx={{
            cursor: 'pointer',
            boxShadow: '0 1px 1px rgba(0, 0 , 0, 0.2)',
            color: 'text.card',
            overflow: 'unset'
          }}>
          <CardContent sx={{ p: 1, '&:last-child': { paddingBottom: 1 } }}>
            <Typography>Test card</Typography>
          </CardContent>
        </MuiCard>
      </>
    )
  }
  return (
    <MuiCard
      sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0 , 0, 0.2)',
        color: 'text.card',
        overflow: 'unset'
      }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://i.pinimg.com/1200x/e6/34/d3/e634d384fb0c31d7245d70d6f70f830d.jpg"
        title="green iguana"
      />
      <CardContent sx={{ p: 1, '&:last-child': { paddingBottom: 1 } }}>
        <Typography>Lizard</Typography>
      </CardContent>
      <CardActions sx={{ p: '0 4px 8px' }}>
        <Button
          sx={{ color: (theme) => `${theme.vars.palette.primary.light} !important` }}
          startIcon={<GroupIcon sx={{ color: (theme) => `${theme.vars.palette.primary.light} !important` }} />}
          size="small"
        >20</Button>
        <Button
          sx={{ color: (theme) => `${theme.vars.palette.primary.light} !important` }}
          startIcon={<CommentIcon sx={{ color: (theme) => `${theme.vars.palette.primary.light} !important` }} />}
          size="small"
        >20</Button>
        <Button
          sx={{ color: (theme) => `${theme.vars.palette.primary.light} !important` }}
          startIcon={<AttachmentIcon sx={{ color: (theme) => `${theme.vars.palette.primary.light} !important` }} />}
          size="small"
        >20</Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card