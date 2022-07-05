import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { a11yProps, TabPanel } from 'components/common/modal/TabPanel';
import { images } from 'assets/images';

const HistoryModal = () => {
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
        <Tab label='คำขวัญ' {...a11yProps(0)} />
        <Tab label='ประวัติ' {...a11yProps(1)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <h2 className='sukhumvit-semibold'>คำขวัญจังหวัดเชียงราย</h2>
        <div className='flex items-center'>
          <img
            src={images.historyModal3}
            alt=''
            className='w-[40%] rounded-xl mx-auto my-5 shadow-md'
          />
          <h2 className='sukhumvit text-center my-5'>
            “ เหนือสุดในสยาม ชายแดนสามแผ่นดิน <br />
            ถิ่นวัฒนธรรมล้านนา ล้ำค่าพระธาตุดอยตุง ”
          </h2>
        </div>
        คำขวัญจังหวัดกล่าวถึงการที่เชียงรายเป็นจังหวัดที่อยู่เขตแดนเหนือสุดของประเทศไทย อีกทั้งยังมี
        สามเหลี่ยมทองคำ ซึ่งเป็นจุดที่ตั้งอยู่ระหว่างเขตชายแดนของทั้ง 3 ประเทศ ไทย ลาว และเมียนมา
        นอกจากนี้ก็เป็นที่ตั้งของ พระธาตุดอยตุง สถานที่ศักดิ์สิทธิ์คู่บ้านคู่
        เมืองเชียงรายเป็นเวลาช้านาน ตามตำนานกล่าวไว้ว่า พระมหากัสสปะได้อัญเชิญพระบรม
        สารีริกธาตุมามอบให้กับ พระเจ้าอชุตราช กษัตริย์ผู้ครองเมืองโยนกนาคพันธุ์
        (อำเภอแม่จันในปัจจุบัน) พระองค์จึงได้สร้าง เจดีย์พระธาตุดอยตุง ขึ้นเพื่อบรรจุพระบรม
        สารีริกธาตุนับแต่นั้นมา
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h2 className='sukhumvit-semibold mb-2'>ประวัติจังหวัดเชียงราย</h2>
        หลายคนคงพอทราบแล้วว่า เชียงราย เป็นเมืองเก่าแห่งอาณาจักรล้านนาที่มีประวัติ
        ความเป็นมายาวมากกก เรียกว่านานกว่า 700 ปีเลยทีเดียว ตามหลักฐานทางประวัติศาสตร์ บันทึกไว้ว่า
        เมื่อวันที่ 26 มกราคม พ.ศ. 1805 หลังจากที่พญามังรายได้รวบรวมหัวเมือง
        ทางเหนือและเสด็จไปรวมพลที่ เมืองลาวกู่ต้า ช้างก็พระองค์ก็ได้พลัดหายไปทางทิศตะวันออก
        พระองค์จึงเสด็จตามรอยช้างไปจนถึง ดอยจอมทอง ที่ตั้งอยู่ตรงริ่มฝั่ง แม่น้ำกกนัทธี
        เห็นว่าชัยภูมิเหมาะแก่การสร้างเมือง จึงให้สร้างเวียงโอบล้อม ดอยจอมทองไว้ ขนานนามว่า
        “เวียงเชียงราย”
        {/* <Divider sx={{ marginY: '10px' }} /> */}
        <img
          src={images.historyModal1}
          alt=''
          className='my-5 mx-auto w-1/2 rounded-xl shadow-md'
        />
        จนกระทั่งปี พ.ศ. 1839 ก็มีการสร้างเมืองใหม่ขึ้น ชื่อว่า &ldquo; นพบุรีศรีนครพิงค์
        เชียงใหม่&rdquo; หรือ เชียงใหม่ และตั้งให้เป็นราชธานีแห่ง อาณาจักรล้านนา นับแต่นั้น หลังจาก
        ที่พญามังรายย้ายไปครองราชสัมบัติที่เชียงใหม่แล้ว เมืองเชียงรายก็ขึ้นต่อเมืองเชียงใหม่ โดยมี
        ขุนคราม หรือพระไชยสงคราม พระราชโอรสของพญามังรายครองราชสมบัติที่ เชียงรายสืบต่อมา
        {/* <Divider sx={{ marginY: '10px' }} /> */}
        <img
          src={images.historyModal2}
          alt=''
          className='my-5 mx-auto w-1/2 rounded-xl shadow-md'
        />
        ในกาลต่อมาแคว้นล้านนาไทยได้ตกอยู่ในการปกครองของพม่า ยาวนานมาจนถึงปี พ.ศ. 2330
        ที่เกิดสงครามระหว่างไทยและพม่ากันอย่างต่อเนื่อง จนกระทั่งทัพจาก
        แคว้นเชียงตุงโดนไทยตีจนแตกพ่ายกลับไป เมืองเชียงรายก็ถูกทิ้งร้างมาตลอด จนในปี พ.ศ. 2386
        พระบาทสมเด็จพระนั่งเกล้าเจ้าอยู่หัว รัชกาลที่ 3 ทรงโปรดให้ตั้งเมืองเชียง
        รายให้เป็นเมืองในสังกัดเมืองเชียงใหม่ ก่อนจะกลายมาเป็นจังหวัดตั้งแต่ปี พ.ศ. 2453
        จนถึงปัจจุบัน
      </TabPanel>
    </Box>
  );
};

export default HistoryModal;
