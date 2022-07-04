import { images } from 'assets/images';
import Modal from 'components/common/modal';
import React from 'react';
import RoomIcon from '@mui/icons-material/Room';
import BongFireModal from './Modal';
import AnimateInView from 'components/common/animateInView';
import { transition } from 'service/transation.service';

const BongFire: React.FC = (): JSX.Element => {
  return (
    <section className='relative h-screen w-screen flex justify-center items-center'>
      <div
        style={{ backgroundImage: `url(${images.bongFireBg})` }}
        className='w-full h-full absolute brightness-[0.2] bg-cover bg-bottom -z-10'
      ></div>

      <div className='flex p-12 gap-6 max-w-[1200px] relative '>
        <img src={images.bongFire} alt='' className='w-[400px] rounded-xl shadow-xl ' />
        <div className='w-[800px] text-white px-8 py-12 shadow-xl border-y-8 border-r-8 relative flex flex-col justify-center'>
          <AnimateInView variants={transition.variantUpToDown}>
            <h1 className='header mb-3 mt-8'>งานลิ้จุดบ้องไฟ (จิบอกไฟ)</h1>
            <h3 className='tagline'>
              จิบอกไฟ หรือการจุดบั้งไฟ เป็นประเพณีเก่าแก่ของชาวล้านนา
              เป็นการสักการะบูชาพระเกษแก้วจุฬามณีบนสวรรค์ชั้นดาวดึงส์
              และเป็นประเพณีที่สร้างความสนุกสนานให้กับชุมชนล้านนา
              ประเพณีจิบอกไฟนิยมจัดในงานเทศกาลต่างๆ
            </h3>
            <Modal
              title='งานลิ้จุดบ้องไฟ (จิบอกไฟ)'
              titleIcon={<RoomIcon sx={{ position: 'relative', bottom: '3px' }} />}
              titleTagline='เชียงราย'
              tabs={<BongFireModal />}
            />
          </AnimateInView>
        </div>
      </div>
    </section>
  );
};

export default BongFire;
