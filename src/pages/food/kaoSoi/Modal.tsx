import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { a11yProps, TabPanel } from 'components/common/modal/TabPanel';

const KaoSoiModal = () => {
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
        <h2 className='sukhumvit-semibold mb-2'>วัตถุดิบ</h2>
        <div className='flex gap-16'>
          <div className='sukhumvit'>
            1. น่องไก่ 3 น่องใหญ่ <br />
            2. น้ำพริกข้าวซอย 100 กรัม <br />
            3. กะทิ 500 กรัม <br />
            4. เส้นข้าวซอยหรือเส้นหมี่ไข่อิสลาม 100 กรัม <br />
            5. น้ำมันพืช 3 ถ้วยตวง <br />
            6. น้ำปลา 3 ช้อนโต๊ะ <br />
            7. เกลือ 2 ช้อนชา
          </div>
          <div className='sukhumvit'>
            8. น้ำตาลมะพร้าว 1.5 ช้อนโต๊ะ <br />
            9. พริกผัด 1 ช้อนโต๊ะ <br />
            10. น้ำสะอาด 1.5 ลิตร <br />
            11. หอมแขกซอย <br />
            12. ผักกาดดองซอย 13. ต้นหอมผักชี
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h2 className='sukhumvit-semibold mb-2'>วิธีการทำ</h2>
        STEP 1: ปรุงน้ำข้าวซอย <br /> - ตั้งหม้อหรือกระทะใบใหญ่ให้ร้อน ใส่กะทิลงไปเคี่ยวสักพัก
        ตามด้วยเครื่องแกง จากนั้น เคี่ยวจนกะทิให้แตกมัน <br />
        - ใส่น่องไก่ลงไปผัดให้เข้ากับกะทิ แล้วเติมกะทิลงไปจนหมด เคี่ยวต่อให้ไก่เปื่อย สัก 30-40 นาที
        <br />
        STEP 2 : ลวกเส้น + ทอดเส้นข้าวซอย <br /> - ลวกเส้นข้าวซอยให้นุ่มก่อนนำไปทอดค่ะ
        โดยเราจะนำไปลวกในน้ำเดือด โดยใช้เวลา ประมาณ 8 นาที <br /> - โดยแบ่งเส้นข้าวซอยที่ลวกแล้วสัก
        2 หยิบมือ ผึ่งให้แห้งแล้วนำลงทอดในน้ำมันปาล์ม เดือด ๆ สักพักให้กรอบ แล้วตักขึ้นพักไว้
        <br />
        STEP 3 : จัดเสิร์ฟ <br /> - ตักเส้นข้าวซอยลวกลงในชาม แล้วตักน้ำข้าวซอย พร้อมน่องไก่ราดลงไป
        <br /> - ตกแต่งด้วยข้าวซอยทอดและต้นหอมผักชีซอย ทานพร้อมพริกผัด หอมแดงซอย และผักกาดดอง
      </TabPanel>
    </Box>
  );
};

export default KaoSoiModal;
