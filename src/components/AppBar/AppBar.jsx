import React, { useState } from 'react'
import { Box, Button, IconButton, SvgIcon } from '@mui/material'
import ToggleMode from '~/components/ToggleMode/ToggleMode'
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
import AddBoxIcon from '@mui/icons-material/AddBox'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'


export default function AppBar() {
  const [value, setValue] = useState('')

  function handleClear() {
    setValue('')
  }
  return (
    <>
      <Box px={1} sx={{
        height: (theme) => theme.trello.appBarHeight,
        backgroundColor: 'primary.dark',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 1,
        overflowX: 'auto'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <IconButton>
            <AppsIcon sx={{ color: 'text.primary' }} />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.2, cursor: 'pointer' }}>
            <SvgIcon component={TrelloIcon} inheritViewBox sx={{ color: 'text.primary' }} />
            <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'text.primary' }}>Trello</Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
            <Workspaces />
            <Recent />
            <Starred />
            <Templates />

            <Button variant='outlined' sx={{ color: 'text.primary', borderColor: 'text.primary' }} startIcon={<AddBoxIcon />}>Create</Button>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <TextField
            id="outlined-search"
            label="Search ..."
            variant="outlined" size='small'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            sx={{ minWidth: '100px' }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start" >
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    {value && (
                      <IconButton onClick={handleClear} edge="end">
                        <ClearIcon />
                      </IconButton>
                    )}
                  </InputAdornment>
                )
              }
            }}
          />
          <ToggleMode />
          <Tooltip title="Notifications">
            <IconButton>
              <Badge color="error" variant="dot" sx={{ cursor: 'pointer' }}>
                <NotificationsNoneIcon sx={{ color: 'text.primary' }} />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip title="Helps">
            <IconButton>
              <HelpOutlineIcon sx={{ color: 'text.primary' }} />
            </IconButton>
          </Tooltip>
          <Profile />
        </Box>
      </Box >
    </>
  )
}
