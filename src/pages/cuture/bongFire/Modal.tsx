import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { a11yProps, TabPanel } from 'components/common/modal/TabPanel';
import { images } from 'assets/images';

const BongFireModal = () => {
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
        <h2 className='sukhumvit-semibold mb-2'>ชนิดของบอกไฟ</h2>
        <span className='sukhumvit text-teal-400'>บอกไฟยิง </span>
        คือบอกไฟเล็กชนิดหนึ่งที่อัดดินปืนลงในกระบอกไม้ขนาดเล็ก ยาวประมาณ 8 นิ้ว คาดด้วยหวาย
        และเจาะรูใส่ชนวน บ้างเรียกบอกไฟชนิดนี้ว่า “บอกไฟลูกหนู” เป็นบอกไฟชนิด หนึ่งในหลายชนิด
        ที่ประชาชนนิยมเล่นในภาคเหนือ ในงานเทศกาลต่างๆ เช่น ปีใหม่เมือง ประเพณียี่เป็ง
        งานเทศน์มหาชาติ ปัจจุบันนิยมแข่งขันกันโดยกำหนดระยะทางให้ บอกไฟ ยิงไปยังจุดหมายที่กำหนด
        ถ้าบอกไฟยิงของใครใกล้จุดที่กำหนดมากที่สุด จะเป็นผู้ชนะ ถ้าพ้นเลยจุดที่กำหนดไว้
        จะไม่ได้รับการพิจารณา
        <div className='my-7 flex flex-col justify-center items-center sukhumvit-semibold text-lg'>
          <img
            src={images.bongFireModal3}
            alt=''
            className='w-[45%] mb-3 mx-auto rounded-xl shadow-lg'
          />
          บอกไฟข้าวต้ม
        </div>
        <span className='sukhumvit text-teal-400'>บอกไฟข้าวต้ม</span> เป็นบอกไฟขนาดเล็ก
        เป็นที่นิยมอย่างมากของเด็กๆในล้านนา วิธีการทำ ใช้ดินปืน ห่อด้วยกาบกล้วยแห้ง หรือใบกล้วยแห้ง
        ใส่สายชนวนตรงส่วนท้าย แล้วพันด้วย เชือกฟางหรือเชือกกล้วยให้แน่น เหมือนข้าวต้มมัด
        นำมามัดกับก้านใบมะพร้าว การจุด ให้จับที่ตัวบอกไฟอย่างหลวมๆ ใช้ไม้ขีดหรือก้านธูปจุดสายชนวน
        พอสายชนวนไหม้เข้าสู่ตัว บอกไฟ บอกไฟจะพุ่งขึ้น หรือใช้วิธีจุดสายชนวน
        โดยจับส่วนปลายก้านมะพร้าวแล้วแกว่ง เหวี่ยงขึ้นไป เพื่อให้บอกไฟพุ่งขึ้นในแนวดิ่งมากขึ้น
        <div className='my-7 grid grid-cols-2 gap-4 items-center'>
          <div className=''>
            <img src={images.bongFireModal2} alt='' className='w-full rounded-xl shadow-lg' />
            <div className='text-center mt-3 sukhumvit-semibold text-lg'>บอกไฟดอก</div>
          </div>
          <div className='w-full h-full'>
            <div
              style={{ backgroundImage: `url(${images.bongFireModal1})` }}
              className='w-full h-[83.5%] bg-center rounded-xl shadow-lg'
            ></div>
            <div className='text-center mt-3 sukhumvit-semibold text-lg'>บอกบอกไฟบะขี้เบ้า</div>
          </div>
        </div>
        <span className='sukhumvit text-teal-400'>บอกไฟดอกและบอกไฟบะขี้เบ้า</span> บอกไฟ 2 ชนิดนี้
        เป็นบอกไฟที่ใช้วัสดุในการทำเหมือนกัน
        แต่ต่างกันที่ภาชนะที่ใช้และจำนวนของวัสดุที่ใช้บรรจุลงไปในบอกไฟ เพื่อให้เกิดดอกเป็นพุ่ม
        สูงและกว้าง กล่าวคือ ด้านภาชนะที่ใช้บรรจุขี้เฝ่า บอกไฟดอก ใช้กระบอกไม้ไผ่หรือกระป๋อง
        สเปรย์เป็นภาชนะบรรจุขี้เฝ่า สำหรับบอกไฟบะขี้เบ้า ใช้ภาชนะดินเหนียวเผา คล้ายโอ่งเล็ก
        จึงมีผู้เรียกว่า บอกไฟโอ่ง ส่วนด้านจำนวนวัสุดขี้เฝ่า บอกไฟดอกบรรจุขี้เฝ่ามากกว่า
        เมื่อจุดจึงมีความแรง
      </TabPanel>
    </Box>
  );
};

export default BongFireModal;
