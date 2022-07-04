import { images } from 'assets/images';
import Modal from 'components/common/modal';
import React from 'react';
import RoomIcon from '@mui/icons-material/Room';
import NamNgewModal from './Modal';
import AnimateInView from 'components/common/animateInView';
import { transition } from 'service/transation.service';

const NamNgew: React.FC = (): JSX.Element => {
  return (
    <section className='relative h-screen w-screen flex justify-center items-center'>
      <div
        style={{ backgroundImage: `url(${images.namNgewBg})` }}
        className='w-full h-full absolute brightness-[0.3] bg-cover bg-center -z-10'
      ></div>

      <div className='flex flex-col justify-center items-center'>
        <div className='flex items-end relative top-5 z-10'>
          <img src={images.namNgew1} alt='' className='w-[550px] rounded-xl shadow-xl' />
          <img src={images.namNgew2} alt='' className='w-[550px] rounded-xl shadow-xl' />
        </div>

        <div className='w-[720px] bg-white rounded-xl px-8 pt-16 pb-8 shadow-xl relative 2xl:w-[620px] '>
          <AnimateInView variants={transition.variantDownToUP}>
            <h1 className='header mb-3'>น้ำเงี้ยว</h1>
            <h3 className='tagline'>
              น้ำเงี้ยว หรือ น้ำงิ้ว เป็นอาหารภาคเหนือของประเทศไทย
              เป็นน้ำแกงที่รับประทานกับขนมจีนหรือเส้นก๋วยเตี๋ยว ถ้าเป็นก๋วยเตี๋ยว
              เรียกก๋วยเตี๋ยวน้ำเงี้ยว บางสูตรใช้ถั่วเน่าแข็บย่างไฟ โขลกลงในเครื่องแกง
              บางสูตรใส่เต้าเจี้ยว ชาวไทใหญ่ เรียกอาหารชนิดนี้ว่า “เข้าเส้นน้ำหมากเขือส้ม”
            </h3>

            <Modal
              title='น้ำเงี้ยว'
              titleIcon={<RoomIcon sx={{ position: 'relative', bottom: '3px' }} />}
              titleTagline='ต.ป่าอ้อดอนชัย อ.เมืองเชียงราย จ.เชียงราย 57000'
              tabs={<NamNgewModal />}
            />
          </AnimateInView>
        </div>
      </div>
    </section>
  );
};

export default NamNgew;
