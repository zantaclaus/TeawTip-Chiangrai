import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { a11yProps, TabPanel } from 'components/common/modal/TabPanel';
import { images } from 'assets/images';

const ClimateModal = () => {
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
        <Tab label='สภาพภูมิอากาศ' {...a11yProps(0)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <h2 className='sukhumvit-semibold mb-5'>สภาพภูมิอากาศ</h2>
        จังหวัดเชียงรายมีอุณหภูมิเฉลี่ยตลอดปีประมาณ 24 °C ฤดูร้อนเริ่มจากเดือนกุมภาพันธ์
        ถึงกลางเดือนพฤษภาคม อุณหภูมิเฉลี่ย 32 °C ฤดูฝนเริ่มจากกลางเดือนพฤษภาคมถึงกลาง เดือนตุลาคม
        อุณหภูมิเฉลี่ย 27 °C ฤดูหนาวเริ่มเดือนพฤษจิกายนถึงเดือนกุมภาพันธ์ อุณหภูมิ เฉลี่ย 15 °C ในปี
        2544 2542 สภาพอากาศของจังหวัดเชียงราย ถือว่าหนาวจัดในพื้นที่ราบ อุณหภูมิจะอยู่ที่ 7 - 9 °C
        ส่วนบนยอดดอย อุณหภูมิต่ำสุดจะอยู่ที่ 0-5 °C อุณหภูมิ -1.5 องศาที่ภูชี้ฟ้า ปลายปี 2556
        จึงทำให้อากาศที่เชียงรายในช่วงฤดูหนาวเป็นพื้นที่ๆ นักท่องเที่ยว อยากมาเป็นอย่างยิ่ง
        <img
          src={images.climateModal}
          alt=''
          className='my-5 mx-auto w-[65%] rounded-xl shadow-md'
        />
      </TabPanel>
    </Box>
  );
};

export default ClimateModal;
