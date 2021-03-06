import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { a11yProps, TabPanel } from 'components/common/modal/TabPanel';
import { images } from 'assets/images';

const WatLongSueaTenModal = () => {
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
        <h2 className='sukhumvit-semibold mb-2'>ข้อมูลสถานที่</h2>
        ขอแนะนำสถานที่ท่องเที่ยวแห่งใหม่ วัดร่องเสือเต้น ต.ริมกก อ.เมือง จ.เชียงราย
        พบพระวิหารหลังใหม่ ที่มีศิลปะที่มีความสวยงดงามแปลกตา เป็นศิลปะประยุกต์ท ี่เป็นเอกลักษณ์
        ใช้เฉดสีเป็นสีน้ำเงินฟ้า รูปแบบของศิลปะส่วนหนึ่งมีความคล้ายกับ ผลงานของ อ.เฉลิมชัย
        โฆษิตพิพัฒน์ และ อ.ถวัลย์ ดัชนีย์ สองศิลปินแห่งชาติชื่อดัง
        ชาวเชียงรายที่รังสรรค์ผลงานอยู่ที่วัดร่องขุ่น ต.ป่าอ้อดอนชัย และพิพธภัณฑ์บ้านดำ ต.นางแล
        อ.เมือง จ.เชียงราย รวมอยู่ด้วย ผลงานดังกล่าวเป็นฝีมือการรังสรรค์ของ นายพุทธา กาบแก้ว หรือ
        สล่านก ศิลปินท้องถิ่นชาวเชียงราย ซึ่งเคยเป็นลูกศิษย์ของ อ.เฉลิมชัย โฆษิตพิพัฒน์
        ศิลปินแห่งชาติ สาขาทัศนศิลป์ ปี พ.ศ.2554
        <div className='flex gap-8 justify-center items-center my-7'>
          <img src={images.watSueaLongTenModal1} alt='' className='w-[30%] rounded-xl shadow-md' />
          <img src={images.watSueaLongTenModal2} alt='' className='w-[50%] rounded-xl shadow-md' />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h2 className='sukhumvit-semibold mb-2'>ลักษณะเด่น</h2>
        พระวิหารหลังใหม่ ที่มีศิลปะที่มีความสวยงดงามแปลกตา เป็นศิลปะประยุกต์ที่เป็น เอกลักษณ์
        ใช้เฉดสีเป็นสีน้ำเงินฟ้า รูปแบบของศิลปะส่วนหนึ่งมีความคล้ายกับผลงาน ของ อ.เฉลิมชัย
        โฆษิตพิพัฒน์ และ อ.ถวัลย์ ดัชนีย์ สองศิลปินแห่งชาติชื่อดัง
        <img
          src={images.watSueaLongTenModal3}
          alt=''
          className='w-[70%] mt-7 mx-auto rounded-xl shadow-md'
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h2 className='sukhumvit-semibold mb-2'>ประวัติ</h2>
        {
          'วัดร่องเสือเต้น ตั้งอยู่ ในตำบลริมกก อำเภอเมือง จังหวัดเชียงราย โดยตั้งอยู่ริมแม่น้ำกก ฝั่งด้านซ้ายทางทิศตะวันออกของเทศบาลนครเมืองเชียงราย ในอดีตสถานที่แห่งนี้เคยเป็นที่ตั้งของวัดร้าง ได้ถูกบูรณะขึ้นมาใหม่และให้ชื่อว่า“วัดร่องเสือเต้น” เพื่อเป็นศูนย์รวมจิตใจของชาวบ้านในบริเวณบ้านร่องเสือเต้น จุดดึงดูดนักท่องเที่ยวที่สุด “วิหารร่องเสือเต้น” ซึ่งเริ่มก่อสร้างเมื่อวันที่ 27 ตุลาคม 2548 แล้วเสร็จเมื่อ วันที่ 22 มกราคม 2559 เวลาสร้างร่วม 10 ปี ถูกสร้างสรรค์ขึ้นโดย ฝีมือของศิลปินชาวพื้นบ้าน นายพุทธา กาบแก้ว หรือ สล่านกศิษย์และลูกมือของ อาจารย์เฉลิมชัย ผู้สร้างวัดร่องขุน ตัววิหารได้ถูกสร้างด้วยศิลปะแนวศาสนาศิลป์ร่วมสมัย แฝงไว้ด้วยคติธรรมของพระพุทธองค์ นอกจากตัววิหารแล้วภายในวัดยังเป็นที่ประดิษฐาน "พระธาตุเกศแก้วจุฬามณีห้าพระองค์" ซึ่งมีความสูง 20 เมตร โดยยอดขององค์พระธาตุได้บรรจุพระบรมสาริกธาตุ จากสมเด็จพระญาณสังวรสมเด็จพระสังฆราช สกลมหาสงฆปรินายก เป็นอีกจุดหนึ่งที่ไม่ควรพลาด'
        }
        <img
          src={images.watSueaLongTenModal4}
          alt=''
          className='w-[70%] mt-7 mx-auto rounded-xl shadow-md'
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h2 className='sukhumvit-semibold mb-2'>การเดินทาง</h2>
        - จักรยาน <br />- มอเตอร์ไซด์ <br />- รถโดยสารประจำทาง <br />- รถยนต์ หมายเหตุการเดินทาง:
        จากตัวเมืองเชียงราย ลงสะพานน้ำกก เลี้ยวซ้ายไปทาง ต.แม่ยาว ประมาณ 300 เมตร วัดร่องเสือเต้น
        จะอยู่ด้านซ้ายมือ ถ้าหากมาทางแม่จัน ก็จะเจอสามแยกไฟแดง ก่อนขึ้นสะพานน้ำกก ให้เลี้ยวขวา
        ไปทางตำบลแม่ยาว วัดร่องเสือเต้น จะอยู่ซ้ายมือ
      </TabPanel>
    </Box>
  );
};

export default WatLongSueaTenModal;
