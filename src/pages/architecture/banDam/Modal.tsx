import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { a11yProps, TabPanel } from 'components/common/modal/TabPanel';
import { images } from 'assets/images';

const BanDamModal = () => {
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
        <Tab label='สิ่งก่อสร้าง' {...a11yProps(1)} />
        <Tab label='การเข้าชม' {...a11yProps(2)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <h2 className='sukhumvit-semibold mb-2'>ข้อมูลสถานที่</h2>
        บ้านดำ หรือ พิพิธภัณฑ์บ้านดำ เป็นพิพิธภัณฑ์ศิลปะบนพื้นที่กว่า 100 ไร่ ตั้งอยู่ที่ ต.นางแล
        อ.เมือง จ.เชียงราย สร้างขึ้นโดย อ.ถวัลย์ ดัชนี ศิลปินแห่งชาติ ที่มีฝีมือ ทางด้าน จิตรกรรม
        ปฏิมากรรม ได้สร้างงานด้านศิลปะไว้มากมาย ทั้งทางด้านภาพเขียน และ ด้านปฏิมากรรมหลายชิ้น
        ลักษณะของบ้านดำจะเป็นกลุ่มบ้านไม้ ศิลปะแบบล้านนา บ้านปูนรูปทรงแปลกตา
        บ้านเกือบทุกหลังทาด้วยสีดำ ซึ่งเป็นที่มาของคำว่า “บ้านดำ” และยังเป็นสีที่ อ. ถวัลย์ โปรดปราน
        อีกด้วย ในบ้านแต่ละหลังจะประดับด้วยไม้แกะสลัก ที่มีลวดลายงดงาม
        นอกจากไม้แกะสลักแล้วยังประดับด้วยเขาสัตว์ เช่น เขาควาย มากกว่า 100 ชิ้น เขากวาง หนังจระเข้
        เปลือกหอยขนาดใหญ่ และยังมีกระดูกสัตว์ เช่น กระดูกช้าง เป็นต้น ด้วยโทนสีของบ้านที่เป็นสีดำ
        ซึ่งตรงกันข้ามกับวัดร่องขุ่นของ อ.เฉลิมชัย มีคำพูด เปรียบเทียบสองสถานที่นี้ว่า “เฉลิมสร้าง
        สวรรค์ ถวัลย์สร้าง นรก”
        <img
          src={images.banDamModal1}
          alt=''
          className='w-[60%] mx-auto my-7 rounded-xl shadow-md'
        />
        ภายในบริเวณบ้านดำ มีต้นไม้นานาชนิด บรรยากาศที่ร่มรื่น ซึ่งในบริเวณประกอบไป ด้วยบ้านทั้งหมด
        36 หลัง แต่ละหลังจะมีลักษณะที่แตกต่างกันไป สามารถเดินเข้าชม ในบ้านได้เพียง 2-3 หลัง
        ส่วนหลังอื่นๆ มองเข้าไปได้จากหน้าประตูเท่านั้น สิ่งของที่
        สะสมและจัดแสดงภายในบ้านก็จะมีแนวคิดแตกต่างกันออกไป ซึ่งบ้านเหล่านี้ไม่ได้สร้าง
        ไว้สำหรับอยู่อาศัยแต่สร้างไว้สำหรับเก็บสิ่งของสะสมต่างๆ ของอาจารย์ถวัลย์ ส่วนภาพ เขียนของ
        อ.ถวัลย์ ดัชนี ที่อยู่ในบ้านดำ มีเพียงไม่กี่ภาพ
        <img src='' alt='' />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h2 className='sukhumvit-semibold mb-2'>สิ่งก่อสร้างในพิพิธภัณฑ์บ้านดำ</h2>
        <div className='sukhumvit text-center grid grid-cols-[60%_40%] gap-4 items-center'>
          <img
            src={images.banDamModal3}
            alt=''
            className='w-[100%] mx-auto mt-6 mb-3 rounded-xl shadow-md'
          />
          มหาวิหาร บ้านทรงไทย ล้านนาที่ใหญ่ที่สุดในพิพิธภัณฑ์ เข้าชมด้านในได้
        </div>
        <div className='sukhumvit text-center grid grid-cols-[60%_40%] gap-4 items-center'>
          <img
            src={images.banDamModal2}
            alt=''
            className='w-[100%] mx-auto mt-6 mb-3 rounded-xl shadow-md'
          />
          ภายในมหาวิหาร มีภาพวาด ไม้แกะสลัก หนังสัตว์ เขากวาง ซากจระเข้ ฯลฯ
        </div>
        <div className='sukhumvit text-center grid grid-cols-[60%_40%] gap-4 items-center'>
          <img
            src={images.banDamModal4}
            alt=''
            className='w-[100%] mx-auto mt-6 mb-3 rounded-xl shadow-md'
          />
          ห้องจิตวิญญาณ (อูบปรภพ) – หยาดน้ำตาบนแก้มกาลเวลา (อูบก๊อกตด)
        </div>
        <div className='sukhumvit text-center grid grid-cols-[60%_40%] gap-4 items-center'>
          <img
            src={images.banDamModal5}
            alt=''
            className='w-[100%] mx-auto mt-6 mb-3 rounded-xl shadow-md'
          />
          สิ่งของภายในห้อง หนังจระเข้ เปลือกหอย หนังสัตว์ และ เขาควาย
        </div>
        <div className='sukhumvit text-center grid grid-cols-[60%_40%] gap-4 items-center'>
          <img
            src={images.banDamModal6}
            alt=''
            className='w-[100%] mx-auto mt-6 mb-3 rounded-xl shadow-md'
          />
          บ้านดำกาแลเกี่ยวฟ้า
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h2 className='sukhumvit-semibold mb-2'>การเข้าชม</h2>
        เวลาทำการ : ทุกวัน จันทร์ – อาทิตย์ ตั้งแต่เวลา 09.00 – 17.00 น. <br />
        ช่วงเวลาเที่ยว : ตลอดทั้งปี <br /> ค่าเข้าชม : ค่าเข้าชม 80 บาท ราคาเดียว
        ทั้งชาวไทยและชาวต่างชาติ
      </TabPanel>
    </Box>
  );
};

export default BanDamModal;
