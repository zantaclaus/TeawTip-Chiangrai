import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { a11yProps, TabPanel } from 'components/common/modal/TabPanel';
import { images } from 'assets/images';

const NamNgewModal = () => {
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
        <Tab label='วัตถุดิบ' {...a11yProps(0)} />
        <Tab label='วิธีการทำ' {...a11yProps(1)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <div className='flex gap-16'>
          <div className='sukhumvit'>
            <h2 className='sukhumvit-semibold mb-2'>วัตถุดิบ</h2>
            1.หมูบด 1/2 กก <br />
            2.ซี่โครงอ่อน 1/2 กก <br />
            3.ตรีนไก่ 1/2 กก <br />
            4.เลือดไก่ 3 ก้อน <br />
            5.มะเขือเทศสีดา 1 กก <br />
            6.ดอกงิ้วตามชอบ
          </div>
          <div className='sukhumvit'>
            <h2 className='sukhumvit-semibold mb-2'>เครื่องแกล้ม</h2>
            1.ผักชีต้นหอม 3 กำ <br />
            2.ผักกาดดองซอย 1/2 กก <br />
            3.ถั่วงอก 15 บาท <br />
            4.เลือดไก่ 3 ก้อน <br />
            5.กะหล่ำปลีซอย 1 หัว <br />
            6.พริกแห้งทอด 20 เม็ด <br />
            7.ถั่วเน่าแข็บย่างไฟ 2 กรัม <br />
            8.กระเทียมไทยสำหรับเจียว 1-2 ขีด <br />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h2 className='sukhumvit-semibold mb-2'>วิธีการทำ</h2>
        STEP 1 <br />
        - เริ่มเคี่ยวกระดูกอ่อนและตีนไก่รอไว้ก่อนกว่าจะเปื่อยหั่นของเสร็จพอดี และหั่นเลือด
        ไก่เตรียมหมูบด <br />- แช่ดอกงิ้วรอไว้ นานๆหน่อยสักชั่วโมงนึงเวลาต้มจะได้เปื่อยง่ายๆ
        หั่นมะเขือเทศทั้งหมด ก่อนหั่นล้างให้สะอาด
        <div className='my-7 flex justify-center gap-8 items-center'>
          <img src={images.namNgewModal1} alt='' className='w-[35%] rounded-xl shadow-lg' />
          <img src={images.namNgewModal2} alt='' className='w-[35%] rounded-xl shadow-lg' />
        </div>
        Step 2 <br />
        - เจียวกระเทียมเตรียมไว้ <br />
        - นำพริกแกงมาผัดกับน้ำมันที่ได้จากการเจียวกระเทียม <br />-
        ใส่มะเขือเทศลงไปผัดกับพริกแกงให้ยุบ เมื่อมะเขือเทศสุกแล้ว เทลงในหม้อที่เคี่ยวกระดูก
        ตามด้วยหมูบดและเลือดไก่
        <div className='my-7 flex justify-center gap-8 items-center'>
          <img src={images.namNgewModal3} alt='' className='w-[35%] rounded-xl shadow-lg' />
          <img src={images.namNgewModal4} alt='' className='w-[35%] rounded-xl shadow-lg' />
        </div>
        Step 3 <br />
        - ใส่ถั่วเน่าแข็บย่างไฟ ลงไปแต่หากไม่ชอบก็สามารถใส่กะปิแทนลงไปได้ <br />
        - คนทุกอย่างให้ละลายเข้ากัน ปรุงรสตามชอบ ออกเค็มหวาน ปล่อยให้เดือด ลดไฟลงเคี่ยว ไปเรื่อยๆ
        ใส่ดอกงิ้วที่แช่น้ำลงไปเคี่ยวด้วยจะได้นิ่มอร่อย <br />
        <div className='my-7 flex justify-center gap-8 items-center'>
          <img src={images.namNgewModal5} alt='' className='w-[20%] rounded-xl shadow-lg' />
          <img src={images.namNgewModal6} alt='' className='w-[35%] rounded-xl shadow-lg' />
        </div>
        Step 4 <br />
        - เตรียมขนมจีน ตักราด โรยด้วยเครื่องเคียงต่างๆ <br />
        <img
          src={images.namNgewModal7}
          alt=''
          className='w-[45%] my-7 mx-auto rounded-xl shadow-lg'
        />
      </TabPanel>
    </Box>
  );
};

export default NamNgewModal;
