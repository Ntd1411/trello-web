import React from 'react'
import { Box, Button, IconButton, SvgIcon } from '@mui/material'
import ToggleMode from '~/components/ToggleMode'
import AppsIcon from '@mui/icons-material/Apps'
import TrelloIcon from '~/assets/mdi--trello.svg?react'
import Typography from '@mui/material/Typography'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Templates from './Menus/Templates'
import Starred from './Menus/Starred'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profile from './Menus/Profile'


export default function AppBar() {
  return (
    <>
      <Box px={2} sx={{
        height: (theme) => theme.trello.appBarHeight,
        backgroundColor: 'primary.light',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'text.primary'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <IconButton>
            <AppsIcon sx={{ color: 'primary.dark' }} />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.2rem', cursor: 'pointer' }}>
            <SvgIcon component={TrelloIcon} inheritViewBox sx={{ color: 'primary.dark' }} />
            <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.dark' }}>Trello</Typography>
          </Box>
          <Box>
            <Workspaces />
            <Recent />
            <Starred />
            <Templates />

            <Button variant='outlined' sx={{ color: 'primary.dark', borderColor: 'primary.dark' }}>Create</Button>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <TextField id="outlined-search" label="Search ..." variant="outlined" size='small' />
          <ToggleMode />
          <Tooltip title="Notifications">
            <IconButton>
              <Badge color="error" variant="dot" sx={{ cursor: 'pointer' }}>
                <NotificationsNoneIcon sx={{ color: 'primary.dark' }} />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip title="Helps">
            <IconButton>
              <HelpOutlineIcon sx={{ color: 'primary.dark' }} />
            </IconButton>
          </Tooltip>
          <Profile />
        </Box>
      </Box>
    </>
  )
}
