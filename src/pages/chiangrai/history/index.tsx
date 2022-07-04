import { images } from 'assets/images';
import Modal from 'components/common/modal';
import React from 'react';
import RoomIcon from '@mui/icons-material/Room';
import HistoryModal from './Modal';
import AnimateInView from 'components/common/animateInView';
import { transition } from 'service/transation.service';

const History: React.FC = (): JSX.Element => {
  return (
    <section className='relative h-screen w-screen flex justify-center items-center'>
      <div
        style={{ backgroundImage: `url(${images.historyBg})` }}
        className='w-full h-full absolute brightness-[0.2] bg-cover bg-bottom -z-10'
      ></div>

      <div className='flex gap-8 max-w-[1100px] relative'>
        <img src={images.history} alt='' className='w-[550px] rounded-xl shadow-xl' />

        <div className='w-[800px] text-white rounded-xl pt-8  shadow-xl relative'>
          <AnimateInView variants={transition.variantUpToDown}>
            <h1 className='header mb-3'>ประวัติจังหวัดเชียงราย</h1>
            <h3 className='tagline'>
              &nbsp; &nbsp; เป็นจังหวัดที่ตั้งอยู่ทางทิศเหนือสุดของประเทศไทยในเชิงภูมิศาสตร์
              จังหวัดเชียงรายแบ่งการปกครองออกเป็น 18 อำเภอมีแม่น้ำกกแม่น้ำอิง แม่น้ำรวก และแม่น้ำโขง
              เป็นแม่น้ำสายสำคัญ ทำเลที่ตั้งของจังหวัดเชียงรายอยู่บริเวณรอยต่อระหว่าง ประเทศไทย
              ประเทศพม่าและประเทศลาวหรือ รู้จักกันในนามของดินแดนสามเหลี่ยมทองคำ
              ในอดีตเคยเป็นแหล่งผลิตและขนส่งฝิ่นที่สำคัญของโลก
              ปัจจุบันจังหวัดเชียงรายเป็นหนึ่งในสถานที่ท่องเที่ยวสำคัญของประเทศไทย โดยในปี พ.ศ. 2561
              มี จำนวนนักท่องเที่ยวรวมมากเป็นอันดับสองในภาคเหนือ รองจากจังหวัดเชียงใหม่
              สร้างรายได้ให้กับ จังหวัดราว 28,500 ล้านบาท
              โดยเศรษฐกิจของจังหวัดเชียงรายมาจากเกษตรกรรมเป็นหลัก ซึ่งมีมูลค่ารวมกว่า 32,500 ล้านบาท
            </h3>
            <Modal
              title='ประวัติจังหวัดเชียงราย'
              titleIcon={<RoomIcon sx={{ position: 'relative', bottom: '3px' }} />}
              titleTagline='เชียงราย'
              tabs={<HistoryModal />}
            />
          </AnimateInView>
        </div>
      </div>
    </section>
  );
};

export default History;
