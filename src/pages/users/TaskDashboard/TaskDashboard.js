import { Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Posted from './Posted';
import Accepted from './Accepted';
import Following from './Following';

export default function TaskDashboard() {
  const [index, setIndex] = React.useState(0);

  return (
    <Box
      sx={{
        bgcolor: 'background.body',
        flexGrow: 1,
        m: -3,
        overflowX: 'hidden',
        borderRadius: 'md',
        marginBottom: '20px',
        border: '1px solid red',
      }}
    >
      <Typography variant="h6" sx={{ px: 4, pt: 4, pb: 1 }}>
        My Task Dashboard
      </Typography>
      <Tabs
        aria-label="Pipeline"
        value={index}
        onChange={(event, value) => setIndex(value)}
        sx={{ '--Tabs-gap': '0px' }}
      >
        <TabList
          variant="plain"
          sx={{
            width: '100%',
            maxWidth: 400,
            mx: 'auto',
            pt: 2,
            alignSelf: 'flex-start',
            [`& .${tabClasses.root}`]: {
              bgcolor: 'transparent',
              boxShadow: 'none',
              '&:hover': {
                bgcolor: 'transparent',
              },
              [`&.${tabClasses.selected}`]: {
                color: 'primary.plainColor',
                fontWeight: 'lg',
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  zIndex: 1,
                  bottom: '-1px',
                  left: 'var(--List-item-paddingLeft)',
                  right: 'var(--List-item-paddingRight)',
                  height: '3px',
                  borderTopLeftRadius: '3px',
                  borderTopRightRadius: '3px',
                  bgcolor: 'primary.500',
                },
              },
            },
          }}
        >
          <Tab>
            Posted{' '}
            <Chip
              size="sm"
              variant="soft"
              color={index === 0 ? 'primary' : 'neutral'}
              sx={{ ml: 1 }}
            >
              2
            </Chip>
          </Tab>
          <Tab>
            Accepted{' '}
            <Chip
              size="sm"
              variant="soft"
              color={index === 1 ? 'primary' : 'neutral'}
              sx={{ ml: 1 }}
            >
              2
            </Chip>
          </Tab>
          <Tab>
            Following{' '}
            <Chip
              size="sm"
              variant="soft"
              color={index === 2 ? 'primary' : 'neutral'}
              sx={{ ml: 1 }}
            >
              3
            </Chip>
          </Tab>
        </TabList>
        {/* <Box
          sx={(theme) => ({
            '--bg': theme.vars.palette.background.level3,
            height: '1px',
            background: 'var(--bg)',
            boxShadow: '0 0 0 100vmax var(--bg)',
            clipPath: 'inset(0 -100vmax)',
          })}
        /> */}
        <Box
          sx={(theme) => ({
            '--bg': theme.vars.palette.background.surface,
            background: 'var(--bg)',
            boxShadow: '0 0 0 100vmax var(--bg)',
            clipPath: 'inset(0 -100vmax)',
            px: 4,
            py: 2,
          })}
        >
          <TabPanel value={0}>
            <Posted />
          </TabPanel>
          <TabPanel value={1}>
            <Accepted />
          </TabPanel>
          <TabPanel value={2}>
            <Following />
          </TabPanel>
        </Box>
      </Tabs>
    </Box>
  );
}
