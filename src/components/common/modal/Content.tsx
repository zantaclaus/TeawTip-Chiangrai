import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { a11yProps, TabPanel } from './TabPanel';

const Content = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        height: '50vh',
      }}
    >
      <Tabs
        value={value}
        orientation='vertical'
        onChange={handleChange}
        aria-label='Vertical tabs example'
        sx={{ borderRight: 1, borderColor: 'divider' }}
        TabIndicatorProps={{ style: { backgroundColor: '#14B8A6', color: '#999' } }}
      >
        <Tab label='ข้อมูลสถานที่' {...a11yProps(0)} />
        <Tab label='ลักษณะเด่น' {...a11yProps(1)} />
        <Tab label='ประวัติ' {...a11yProps(2)} />
        <Tab label='การเดินทาง' {...a11yProps(3)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        สวัวาดวกสหฟาดสากหดวาหสกาวสกหาดสวฟกาดวสากหดวาฟกวสหดกหาดสวกฟด่กหาสดหกฟ่ดสด่่สา่หดฟสกา่ดสา
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </Box>
  );
};

export default Content;
