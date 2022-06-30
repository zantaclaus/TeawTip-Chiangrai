import React from 'react';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

const actions = [
  { icon: <AccessibilityIcon />, name: 'เครื่องแต่งกาย', href: 'dress' },
  { icon: <AutoAwesomeIcon />, name: 'ความเชื่อ', href: 'belief' },
  { icon: <FastfoodIcon />, name: 'อาหาร', href: 'food' },
  { icon: <ApartmentIcon />, name: 'สถาปัตยกรรม', href: 'architecture' },
  { icon: <HomeIcon />, name: 'หน้าแรก', href: 'hero' },
];

const MySpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel='SpeedDial basic example'
      sx={{ position: 'absolute', bottom: 32, right: 32 }}
      icon={<SpeedDialIcon />}
      FabProps={{
        sx: {
          bgcolor: '#26a69a',
          '&:hover': {
            bgcolor: '#26a69a',
          },
        },
      }}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => {
            const destination = document.getElementById(action.href);
            destination?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ))}
    </SpeedDial>
  );
};

export default MySpeedDial;
