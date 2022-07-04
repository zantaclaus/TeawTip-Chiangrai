import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { a11yProps, TabPanel } from 'components/common/modal/TabPanel';
import { images } from 'assets/images';

const KuaySaRarkModal = () => {
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
        ประเพณีตานก๋วยสลากหรือสลากภัตนี้เป็นประเพณีที่ชาวล้านนาแสดงความระลึกถึงบรรพบุรุษ
        ญาติมิตรผู้ล่วงลับไปแล้วด้วยการทำบุญอุทิศส่วนกุศลไปให้ผ่านสิ่งที่เรียกว่า ก๋วยสลาก ก๋วยสลาก
        สานจากไม้ไผ่เป็นรูปทรงกระบอก (ชะลอม) ข้างในกรุด้านข้างด้วยใบตอง สำหรับ บรรจุข้าวสาร
        อาหารแห้ง ผลหมากรากไม้ ของใช้จำเป็น ดอกไม้ธูปเทียนโดยชาวบ้านจะนำก๋วย
        สลากของแต่ละคนไปรวมกันที่วัดเพื่อทำพิธีทางศาสนา
        จากนั้นก็จะมีการสุ่มแจกสลากให้กับพระแต่ละรูปโดยที่ไม่มีใครทราบว่าในตานก๋วยสลากนั้นมี
        อะไรอยู่ข้างในบ้าง พระรูปใดจับได้ตานก๋วยสลากของใครก็จะเรียกชื่อเจ้าของตานก๋วยสลาก
        นั้นออกมารับศีลรับพร และกรวดน้ำอุทิศบุญกุศลให้กับผู้ล่วงลับไปแล้ว ส่วนสิ่งของในตาน ก๋วยสลาก
        หากมีเหลือเฟือมากพระภิกษุก็จะนำไปแจกจ่ายให้กับผู้ยากไร้อีกต่อหนึ่ง คำว่า ตานก๋วยสลาก
        เป็นภาษาของชาวล้านนา หากเป็นภาษาภาคกลางจะตรงกับคำว่า สลากภัต
        ประเพณีตานก๋วยสลากทางภาคเหนือนิยมจัดกันในช่วงเดือน ๑๒ เหนือถึงเดือนยี่เหนือ
        หรือตั้งแต่เดือนกันยายนจนถึงเดือนตุลาคมของทุกปี
        <img
          src={images.kuaySaRarkModal1}
          alt=''
          className='w-[45%] my-7 mx-auto rounded-xl shadow-lg'
        />
        <h3 className='sukhumvit mt-4 mb-2'>สำหรับก๋วยสลากที่ทำกัน แบ่งได้ ๓ แบบ</h3>
        ก๋วยน้อย ใช้สำหรับอุทิศให้กับบรรพบุรุษ หรือผู้ที่ล่วงลับไปแล้ว จะเป็นญาติพี่น้อง เป็นมิตร
        สหาย หรือแม้แต่สัตว์เลี้ยงที่เคยอยู่ด้วยกันมาก็ได้ ทั้งช้าง ม้า วัว ควาย แมว และสุนัข หรือ
        ถ้าไม่ได้ถวายทานให้กับใครเป็นพิเศษ ก็สามารถถวายเอาไว้ภายภาคหน้าก็ได้ ส่วน ก๋วยใหญ่
        จะเป็นก๋วยที่ทำขึ้นมาเป็นพิเศษ สามารถจุของได้มากกว่าส่วนใหญ่แล้วจะเป็นผู้
        ที่มีฐานะดีที่ต้องการทำบุญอุทิศบุญกุศลไปให้กับพ่อแม่หรือญาติผู้ใหญ่ที่ล่วงลับไปแล้ว สลากโชค
        จะต่างจากก๋วยสองแบบแรกอย่างชัดเจน สลากโชคจะทำเลียนแบบต้นไม้สูงใหญ่ แล้วนำสิ่งของต่างๆ
        ไปแขวนไว้บนต้นไม้ เช่น ผ้าห่ม ที่นอน หมอน มุ้ง ถ้วยขาม เครื่องนุ่งหุ่ม อาหารแห้ง และเงินทอง
        <img
          src={images.kuaySaRarkModal2}
          alt=''
          className='w-[45%] my-7 mx-auto rounded-xl shadow-lg'
        />
      </TabPanel>
    </Box>
  );
};

export default KuaySaRarkModal;
