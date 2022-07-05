import { images } from 'assets/images';
import Modal from 'components/common/modal';
import React from 'react';
import KuaySaRarkModal from './Modal';
import RoomIcon from '@mui/icons-material/Room';
import AnimateInView from 'components/common/animateInView';
import { transition } from 'service/transation.service';
import { Lowlight } from 'components/common/highlight';

const KuaySaRark: React.FC = (): JSX.Element => {
  return (
    <section className='relative h-screen w-screen flex justify-center items-center'>
      <div
        style={{ backgroundImage: `url(${images.kuaySaRarkBg})` }}
        className='w-full h-full absolute brightness-[0.1] bg-cover bg-bottom -z-10'
      ></div>

      <div className='flex p-12 gap-6 max-w-[1200px] relative '>
        <div className='w-32 h-2 bg-white absolute top-0 left-0' />
        <div className='w-2 h-40 bg-white absolute top-0 left-0' />
        <div className='w-32 h-2 bg-white absolute bottom-0 right-0' />
        <div className='w-2 h-40 bg-white absolute bottom-0 right-0' />

        <img src={images.kuaySaRark} alt='' className='w-[500px] rounded-xl shadow-xl' />
        <div className='w-[800px] text-white rounded-xl px-8 pt-8  shadow-xl relative'>
          <AnimateInView variants={transition.variantDownToUP}>
            <h1 className='header mb-3'>ประเพณีตานก๋วยสลาก</h1>
            <h3 className='tagline'>
              ประเพณีตานก๋วยสลากเป็น<Lowlight>การถวายทานโดยไม่เจาะจงผู้รับ</Lowlight>โดยจัดขึ้น
              ตั้งแต่วันเพ็ญเดือน 10 จนไปถึงแรม 15 ค่ำ เดือน 11 ที่มาของประเพณี
              ตานก๋วยสลากมาจากมีนางยักตนหนึ่งมักทำร้ายและเบียดผู้อื่นอยู่เสมอ
              แต่เมื่อได้ฟังธรรมคำสอนของพระพุทธเจ้าแล้ว นางยักตนนี้ก็เกิดความ
              เลื่อมใสและกลายเป็นนางยักที่โอบอ้อมอารีช่วยเหลือผู้อื่น จนชาวบ้านซาบซึ่ง
              ในความดีจึงนำของมาให้นางยักจำนวนมาก
            </h3>

            <Modal
              title='ประเพณีตานก๋วยสลาก'
              titleIcon={<RoomIcon sx={{ position: 'relative', bottom: '3px' }} />}
              titleTagline='เชียงราย'
              tabs={<KuaySaRarkModal />}
            />
          </AnimateInView>
        </div>
      </div>
    </section>
  );
};

export default KuaySaRark;
