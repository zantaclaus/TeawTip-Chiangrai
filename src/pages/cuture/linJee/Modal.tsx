import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { a11yProps, TabPanel } from 'components/common/modal/TabPanel';
import { images } from 'assets/images';

const LinJeeModal = () => {
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
        <Tab label='ข้อมูลประเพณี' {...a11yProps(0)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <h2 className='sukhumvit-semibold mb-2'>ข้อมูลประเพณี</h2>
        เพื่อสร้างรายได้ให้กับเกษตรกรและประชาชน กลุ่มผลิตสินค้าเกษตร สินค้า OTOP ตลอด
        จนเพื่อส่งเสริมพัฒนาคุณภาพของผลผลิตทางการเกษตรให้ได้มาตรฐานและเพิ่มช่องทางการ
        จำหน่ายผลผลิตทางการเกษตร สร้างรายได้ให้กับเกษตรกรจังหวัดเชียงรายได้มากขึ่้น โดย
        ภายในงานจัดให้มีกิจกรรมการประกวด ประกอบด้วย การประกวดผลผลิตทางการเกษตร
        การประกวดชุดผ้าไทยครีเอทีฟ การประกวดหนูน้อยชาวสวน การประกวดการแปรรูปอาหาร
        จากสับปะรดและลิ้นจี่ลีลา การประกวดร้องเพลงพร้อมนักร้องและหางเครื่องและการประกวด
        เชียงรายทาเล้นท์โชว์ สามารถติดต่อสอบถามข้อมูลได้ที่ ณ กองส่งเสริมคุณภาพชีวิต
        องค์การบริหารส่วนจังหวัดเชียงราย
        <img
          src={images.linJeeModal}
          alt=''
          className='w-[45%] my-7 mx-auto rounded-xl shadow-lg'
        />
      </TabPanel>
    </Box>
  );
};

export default LinJeeModal;
