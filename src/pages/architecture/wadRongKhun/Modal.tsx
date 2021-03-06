import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { a11yProps, TabPanel } from 'components/common/modal/TabPanel';
import { images } from 'assets/images';

const WadRongKhunModal = (): JSX.Element => {
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
        <Tab label='ชมภายใน' {...a11yProps(3)} />
        <Tab label='การเดินทาง' {...a11yProps(4)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <h2 className='sukhumvit-semibold mb-2'>ข้อมูลสถานที่</h2>
        ออกแบบและสร้างโดยอาจารย์เฉลิมชัย โฆษิตพิพัฒน์ ศิลปินที่มีชื่อเสียง ของไทย
        สร้างขึ้นด้วยแรงปณิธานที่มุ่งมั่น รังสรรค์งานศิลปะที่งดงามแปลก
        ตาผสานวัฒนะธรรมล้านนาอย่างกลมกลืน ทั้งลวดลายปูนปั้นประดับกระจก และจิตรกรรรมฝาผนังขนาดใหญ่
        ลักษณะเด่นของ วัดคือ พระอุโบสถถูกแต่ง ด้วยลวดลายกระจกสีเงินแวววาวเป็นเชิงชั้นลดหลั่นกันไป
        หน้าบันประดับด้วย พญานาคมีงวงงาดูแปลกตาน่าสนใจมาก ภาพจิตรกรรมฝาผนังภายในพระอุโบสถ
        เป็นฝีมือภาพเขียนของ อาจารย์เอง
        <div className='flex gap-8 items-center justify-center my-5'>
          <img src={images.wadRongKhunModal1} alt='' className='w-[30%] rounded-xl shadow-md' />
          <img src={images.wadRongKhunModal2} alt='' className='w-[60%] rounded-xl shadow-md' />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h2 className='sukhumvit-semibold mb-2'>ลักษณะเด่น</h2>
        {
          'ชมความงดงามของพระอุโบสถสีขาว -ชมภาพวาดฝีมือ อ.เฉลิมชัย โฆษิตพิพัฒน์ ความหมายของอุโบสถ สีขาว : พระบริสุทธิคุณของพระพุทธเจ้า สะพาน : การเดินข้ามจากวัฎสงสารสู่พุทธภูมิ เขี้ยว หรือ ปากพญามาร : กิเลสในใจ สันของสะพาน : มีอสูรอมกัน ข้างละ 8 ตัว 2 ข้าง รวมกันแทนอุปกิเลส 16 กึ่งกลางของสะพาน :เขาพระสุเมรุดอกบัวทิพย์ : มี 4 ดอกใหญ่ตรงทางขึ้นด้านข้างอุโบสถแทนซุ้มพระอริยเจ้า 4 พระองค์ คือ พระโสดาบัน พระสกิทาคามี พระอนาคามี และพระอรหันต์ บันไดทางขึ้น : มี 3 ขั้นแทน อนิจจัง ทุกขัง อนัตตา'
        }
        <img
          src={images.wadRongKhunModal3}
          alt=''
          className='w-[60%] mt-5 mx-auto rounded-xl shadow-md'
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h2 className='sukhumvit-semibold mb-2'>ประวัติ</h2>
        {
          'เป็นวัดที่สร้างขึ้นจากแรงศรัทธาของ อ.เฉลิมชัย โฆษิตพิพัฒน์ ศิลปินของจังหวัด เชียงรายเพื่อมุ่งสร้างงานพุทธศิลป์ที่มีเอกลักษณ์ของตัวเองและประกาศความยิ่งใหญ่ต่อคนทั้งโลกเพื่อถวายต่อพระบาทสมเด็จพระเจ้าอยู่หัว วัดร่องขุ่น เป็นวัดที่มีความสวยงามโดดเด่นต่างจากวัดอื่นๆ ด้วยฝีมือการออกแบบ และก่อสร้างของ อ. เฉลิมชัยโฆษิตพิพัฒน์ ศิลปินชื่อดัง เพื่อเป็นวัดประจำบ้านเกิด สร้างโดยจินตนา การของอาจารย์จัดเป็นงานพุทธศิลป์ที่ยิ่งใหญ่ และงดงามน่าแวะชมมากแห่งหนึ่ง อ. เฉลิมชัย โฆษิตพิพัฒน์มีแรงบันดาลใจในการสร้างวัดแห่งนี้อยู่ 3 ประการ คือ เพื่อชาติ ศาสนา และพระมหากษัตริย์ซึ่งอาจารย์บอกว่า จึงตั้งความปรารถนาที่จะ ถวายชีวิต ใช้ช่วงเวลาที่ดีที่สุดของตนเองสร้างงานพุทธศิลป์ เพื่อเป็นงานประจำ รัชกาลของ พระบาทสมเด็จพระเจ้าอยู่หัวให้ได้และจะถวายชีวิตไปจนตายคาวัด" (จากเอกสารของวัดร่องขุ่น) ความงดงามของวัดแห่งนี้อยู่ที่ "โบสถ์"เพราะอาจารย ์อยากจะเนรมิตวัดให้เหมือนเมืองสวรรค์ เป็นวิมานบนดินที่มนุษย์สามารถสัมผัสได้โบสถ์ เปรียบเหมือนบ้านของพระพุทธเจ้า สีขาว แทนพระบริสุทธิคุณของพระพุทธเจ้า กระจกขาว หมายถึงพระปัญญาธิคุณของพระพุทธเจ้าที่เปล่งประกายไปทั่วโลกมนุษย์ และจักรวาล'
        }
        <img
          src={images.wadRongKhunModal4}
          alt=''
          className='w-[60%] mt-5 mx-auto rounded-xl shadow-md'
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h2 className='sukhumvit-semibold mb-7'>ภายในวัดร่องขุ่น</h2>
        <a
          href='https://www.youtube.com/watch?v=52WDG7bxxZQ&t=0s'
          target='_blank'
          rel='noreferrer'
          className='px-7 py-2 border border-teal-300 rounded-full hover:bg-teal-300 active:bg-teal-400'
        >
          คลิกเพื่อรับชม Video
        </a>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <h2 className='sukhumvit-semibold mb-2'>การเดินทาง</h2>
        - จักรยาน <br />- มอเตอร์ไซด์ <br />- รถโดยสารประจำทาง <br />- รถยนต์ <br />
        หมายเหตุการเดินทาง: จากตัวเมืองเชียงราย ให้มาทางทิศใต้ ทางไป อ.พาน จ.เชียงราย ทางไป จ.พะเยา
        เมื่อออกจากตัวเมืองเชียงราย จะผ่านแยกไฟแดงสถานี ขนส่งแห่งที่ 2 ขับตรงมาเรื่อยๆ จนถึงไฟแดง
        แยกขวา แยกขุนกรณ์ (ทางไปน้ำตกขุนกรณ์) ให้เลี้ยวขวาเข้ามา
        ซึ่งใช้เวลาเดินทางจากตัวเมืองเชียงรายไม่ กี่นาทีก็จะถึงวัดร่องขุ่น
      </TabPanel>
    </Box>
  );
};

export default WadRongKhunModal;
