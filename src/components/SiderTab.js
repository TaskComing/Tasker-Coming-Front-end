import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsInputCompositeOutlinedIcon from '@mui/icons-material/SettingsInputCompositeOutlined';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import * as React from 'react';

const data = [
  { icon: <Person2OutlinedIcon />, label: 'My Task Dashboard' },
  { icon: <NotificationsOutlinedIcon />, label: 'Notifications' },
  { icon: <SettingsInputCompositeOutlinedIcon />, label: 'Settings' },
];

function SiderTab({ value, handleChange }) {
  console.log(value);
  return (
    <Tabs
      onChange={handleChange}
      value={value}
      aria-label="Tabs where selection follows focus"
      selectionFollowsFocus
      TabIndicatorProps={{
        style: { display: 'none' },
      }}
      textColor="secondary"
      sx={{
        '& .MuiTab-root': {
          fontWeight: '400',
          justifyContent: 'flex-start',
          textTransform: 'none',
          fontSize: '1.4rem',
        },
        '& .Mui-selected': { fontWeight: '700' },
      }}
      orientation="vertical"
    >
      {data.map(({ ...props }) => (
        <Tab
          iconPosition="start"
          {...props}
          sx={{
            '& .MuiSvgIcon-root': { marginRight: '16px' },
          }}
          key={props.label}
        />
      ))}
    </Tabs>
  );
}

export default SiderTab;
