/* eslint-disable react/prop-types */
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
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

Card.propTypes = {
  temporaryHideMedia: PropTypes.bool
}

function Card({ card }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: card._id, data: { ...card } })

  const dndKitCardStyles = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? '0.5' : undefined,
    border: isDragging ? '1px solid #593dbeff' : undefined,
    // zIndex: isDragging ? 1000 : undefined,
    boxShadow: isDragging ? 'rgba(149, 157, 165, 0.2) 0px 8px 24px' : undefined
    // touchAction: 'none',
  }
  function shouldShowCardAction() {
    return !!card?.memberIds?.length && !!card?.comments?.length && !!card?.attachments?.length
  }
  return (
    <MuiCard
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={dndKitCardStyles}
      sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0 , 0, 0.2)',
        color: 'text.card',
        overflow: card.FE_PlaceholderCard ? 'hidden' : 'unset',
        height: card.FE_PlaceholderCard ? '0px' : 'unset'
      }}>
      {card?.cover &&
        <CardMedia
          sx={{ height: 140 }}
          image={card.cover}
          title="green iguana"
        />
      }
      <CardContent sx={{ p: card.FE_PlaceholderCard ? 0 : 1, '&:last-child': { paddingBottom: 1 } }}>
        <Typography>{card?.title}</Typography>
      </CardContent>
      {shouldShowCardAction() &&
        <CardActions sx={{ p: '0 4px 8px' }}>
          {card?.memberIds?.length > 0 &&
            <Button
              sx={{ color: (theme) => `${theme.vars.palette.primary.light} !important` }}
              startIcon={<GroupIcon sx={{ color: (theme) => `${theme.vars.palette.primary.light} !important` }} />}
              size="small"
            >{card?.memberIds?.length}</Button>
          }

          {card?.comments?.length > 0 &&
            <Button
              sx={{ color: (theme) => `${theme.vars.palette.primary.light} !important` }}
              startIcon={<CommentIcon sx={{ color: (theme) => `${theme.vars.palette.primary.light} !important` }} />}
              size="small"
            >{card?.comments?.length}</Button>
          }
          {card?.attachments?.length > 0 &&
            <Button
              sx={{ color: (theme) => `${theme.vars.palette.primary.light} !important` }}
              startIcon={<AttachmentIcon sx={{ color: (theme) => `${theme.vars.palette.primary.light} !important` }} />}
              size="small"
            >{card?.attachments?.length}</Button>
          }
        </CardActions>
      }
    </MuiCard>
  )
}

export default Card