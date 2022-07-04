import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { a11yProps, TabPanel } from 'components/common/modal/TabPanel';
import { images } from 'assets/images';

const HangLeModal = () => {
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
            1.เนื้อสันคอหมูหั่นเต๋า 300 กรัม <br />
            2.เนื้อหมูสามชั้นหั่นเต๋า 200 กรัม <br />
            3.น้ำตาลทราย <br />
            4.น้ำมะขามเปียก 3 ช้อนโต๊ะ <br />
            5.ขิงซอย 1/2 ถ้วย <br />
            6.กระเทียม 1/2 ถ้วย <br />
            7.ถั่วลิสงคั่ว 2 ช้อนโต๊ะ <br />
            8.สับปะรด 2 ช้อนโต๊ะ <br />
          </div>
          <div className='sukhumvit'>
            <h2 className='sukhumvit-semibold mb-2'>วัตถุดิบเครื่องแกง</h2>
            1.พริกแห้ง 7 เม็ด <br />
            2.พิซซ่า <br />
            3.หอมแดง 3 หัว <br />
            4.กระเทียม 20 กลีบ <br />
            5.ตะไคร้ซอย 2 ช้อนโต๊ะ <br />
            6.ข่าซอย 1 ช้อนโต๊ะ <br />
            7.เกลือ 1 ช้อนชา <br />
            8.กะปิหยาบ ½ ช้อนโต๊ <br />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h2 className='sukhumvit-semibold mb-2'>วิธีการทำ</h2>
        STEP 1 : ตำพริกแกง <br />
        นำพริกแห้ง ข่าซอย กระเทียม ตะไคร้ซอย หอมแดง และเกลือ โขลกรวมกันให้ละเอียด
        หลังจากนั้นใส่กะปิหยาบลงไป โขลกให้ทุกอย่างเข้ากัน ตักขึ้นพักไว้
        <img
          src={images.hangLeModal1}
          alt=''
          className='mt-4 mb-7 w-[50%] mx-auto rounded-xl shadow-lg'
        />
        STEP 2 : หมักหมู <br />
        นำพริกแกงที่ขโลกไว้มาผสมกับสับปะรด เนื้อสันคอหมูหั่นเต๋า และเนื้อหมูสามชั้นหั่นเต๋า
        คลุกเคล้าให้เข้ากัน หมักประมาณ 1 ชั่วโมง
        <img
          src={images.hangLeModal2}
          alt=''
          className='mt-4 mb-7 w-[50%] mx-auto rounded-xl shadow-lg'
        />
        STEP 3 : ปรุงแกงฮังเล <br />
        นำหมูที่หมักไว้มาตั้งไฟ ใส่น้ำเล็กน้อย ผัดต่อจนหมูเริ่มสุก คอยเติมน้ำเรื่อยๆ เคี่ยวต่อจน
        หมูเปื่อยได้ที่ ปรุงรสด้วยน้ำมะขามเปียก หลังจากนั้นใส่กระเทียม และขิงซอย คนให้ทุกอย่าง
        เข้ากัน เคี่ยวต่ออีกสักครู่ สุดท้ายใส่ถั่วลิสงคั่ว ปล่อยให้เดือดต่ออีก 15 นาที ตักแกงฮังเล
        เสิร์ฟได้เลย
        <img
          src={images.hangLeModal3}
          alt=''
          className='mt-4 mb-7 w-[50%] mx-auto rounded-xl shadow-lg'
        />
      </TabPanel>
    </Box>
  );
};

export default HangLeModal;
