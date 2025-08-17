/* eslint-disable react/prop-types */
import React from 'react'
import { Box, Tooltip } from '@mui/material'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalize } from '~/utils/formatter'

function BoardBar({ board }) {
  return (
    <>
      <Box px={2} sx={{
        height: (theme) => theme.trello.boardbarHeight,
        backgroundColor: 'primary.main',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        color: 'text.primary',
        justifyContent: 'space-between',
        gap: 1,
        overflowX: 'auto'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Chip sx={{
            color: 'text.primary',
            backgroundColor: 'transparent'
          }} icon={<DashboardIcon />} label={board?.title} clickable />
          <Chip sx={{
            color: 'text.primary',
            backgroundColor: 'transparent'
          }} icon={<VpnLockIcon />} label={capitalize(board?.type)} clickable />
          <Chip sx={{
            color: 'text.primary',
            backgroundColor: 'transparent'
          }} icon={<AddToDriveIcon />} label="Add to Drive" clickable />
          <Chip sx={{
            color: 'text.primary',
            backgroundColor: 'transparent'
          }} icon={<BoltIcon />} label="Automation" clickable />
          <Chip sx={{
            color: 'text.primary',
            backgroundColor: 'transparent'
          }} icon={<FilterListIcon />} label="Filter" clickable />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button variant='outlined' sx={{ color: 'text.primary', borderColor: 'text.primary' }} startIcon={<PersonAddIcon />}>Invite</Button>
          <AvatarGroup
            max={4}
            sx={{
              '& .MuiAvatar-root': {
                width: 34,
                height: 34,
                fontSize: 16,
                border: 'none',
                color: 'text.primary',
                cursor: 'pointer'
              }
            }}
          >
            <Tooltip title='User 1'>
              <Avatar sx={{ bgcolor: 'primary.dark' }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Tooltip>
            <Tooltip title='User 1'>
              <Avatar sx={{ bgcolor: 'primary.dark' }} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </Tooltip>
            <Tooltip title='User 1'>
              <Avatar sx={{ bgcolor: 'primary.dark' }} alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </Tooltip>
            <Tooltip title='User 1'>
              <Avatar sx={{ bgcolor: 'primary.dark' }} alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            </Tooltip>
            <Tooltip title='User 1'>
              <Avatar sx={{ bgcolor: 'primary.dark' }} alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            </Tooltip>
          </AvatarGroup>
        </Box>
      </Box>
    </>
  )
}

export default BoardBar
