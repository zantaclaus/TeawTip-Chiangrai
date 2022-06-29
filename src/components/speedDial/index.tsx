import React from 'react';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
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
        <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
      ))}
    </SpeedDial>
  );
};

export default MySpeedDial;
