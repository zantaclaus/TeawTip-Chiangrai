import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { a11yProps, TabPanel } from 'components/common/modal/TabPanel';
import { images } from 'assets/images';

const AdviceModal = () => {
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
        <Tab label='คำแนะนำ' {...a11yProps(0)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <h2 className='sukhumvit-semibold my-5'>คำแนะนำ</h2>
        สำหรับน้ำแข็งและเหมยขาบในเชียงราย จะเกิดขึ้นได้ก็ต่อเมื่อความกดอากาศสูงลงมาจากจีน แรง
        ๆเท่านั้น บริเวณที่เกิดเหมยขาบมากที่สุดจะอยู่บนทางเดินขึ้นภูชี้ฟ้า และตามหุบเขาต่างๆ
        และช่วงที่เกิดน้ำค้างแข็ง ทะเลหมอกตามหุบเขาต่างๆ รวมถึงภูชี้ฟ้าจะมีปริมาณไม่เยอะ ดังนั้น
        ต้องเลือกเอาระหว่างเจอหมอกสวยๆ หรือเหมยขาบ
        <img
          src={images.adviceModal1}
          alt=''
          className='w-[40%] rounded-xl mx-auto my-5 shadow-md'
        />
        ดอยแม่สลองและดอยช้างจะสวยที่สุดในช่วงปลายฝนต้นหนาว เพราะจะมีเมฆหมอกปกคลุม ภูเขาสีเขียว
        ยิ่งเย็นวันไหนมีฝนตกเช้าวันต่อมาเตรียมพบกับโคตรทะเลหมอกได้เลย แต่ถ้าจะ
        มาดูดอกพญาเสือโคร่งต้องมาช่วงต้นๆ เดือนมกราคม ที่นี่ดอกพญาเสือโคร่งจะออกเร็วกว่า ที่อื่นๆ
        ประมาณ 1-2 สัปดาห์
        <div className='flex'>
          <img
            src={images.adviceModal2}
            alt=''
            className='w-[40%] rounded-xl mx-auto my-5 shadow-md'
          />
          <img
            src={images.adviceModal3}
            alt=''
            className='w-[40%] rounded-xl mx-auto my-5 shadow-md'
          />
        </div>
      </TabPanel>
    </Box>
  );
};

export default AdviceModal;
