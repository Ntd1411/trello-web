/* eslint-disable react/prop-types */
import React from 'react'
import { Box, Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from '@mui/material/Typography'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import Cloud from '@mui/icons-material/Cloud'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddCardIcon from '@mui/icons-material/AddCard'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ListCard from './ListCards/ListCard'
import { mapOrder } from '~/utils/sort'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

function Column({ column }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: column._id, data: { ...column } })

  const dndKitColumnStyles = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? '0.5' : undefined
    // touchAction: 'none',

  }

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <div
        ref={setNodeRef}
        style={dndKitColumnStyles}
        {...attributes}>
        <Box
          {...listeners}
          sx={{
            minWidth: '300px',
            maxWidth: '300px',
            bgcolor: (theme) => theme.vars.palette.background.card,
            color: (theme) => theme.vars.palette.text.card,
            ml: 1,
            borderRadius: '6px',
            height: 'fit-content',
            maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(2)})`
          }}>
          {/* Column header */}
          <Box
            sx={{
              height: (theme) => `${theme.trello.columnHeaderHeight}`,
              p: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
            <Typography
              sx={{
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
              variant='h6'
            >{column?.title}</Typography>
            {/* option button */}
            <Box>
              <Tooltip title='Option'>
                <ExpandMoreIcon
                  sx={{
                    color: (theme) => `${theme.vars.palette.text.card} !important`
                  }}
                  id="basic-clomn-dropdown"
                  aria-controls={open ? 'basic-menu-column' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                />
              </Tooltip>
              <Menu
                id="basic-menu-column"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                  paper: {
                    sx: {
                      bgcolor: 'primary.dark'
                    }
                  },
                  list: {
                    'aria-labelledby': 'basic-button'
                  }
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <AddCardIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Add new card</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Archive this column</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <DeleteForeverIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Remove this column</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
          {/* Column list card */}
          <ListCard cards={mapOrder(column.cards, column.cardOrderIds, '_id')} />
          {/* Column footer */}
          <Box
            sx={{
              height: (theme) => `${theme.trello.columnFooterHeight}`,
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: 'text.card'
            }}>
            <Button
              sx={{
                color: 'text.card'
              }}
              startIcon={<AddCardIcon sx={{ color: (theme) => `${theme.vars.palette.text.card} !important` }} />}>Add new card</Button>
            <Tooltip title='Drag to move'>
              <DragHandleIcon sx={{ cursor: 'pointer', color: (theme) => `${theme.vars.palette.text.card} !important` }} />
            </Tooltip>
          </Box>
        </Box>
      </div>
    </>
  )
}

export default Column