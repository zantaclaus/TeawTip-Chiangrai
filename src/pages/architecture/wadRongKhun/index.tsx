import React from 'react';
import { images } from 'assets/images';
import { motion } from 'framer-motion';
import Highlight from 'components/common/highlight';
import AnimateInView from 'components/common/animateInView';
import Modal from 'components/common/modal';
import RoomIcon from '@mui/icons-material/Room';
import WadRongKhunModal from './Modal';

const WadRongKhun: React.FC = (): JSX.Element => {
  const variantText = {
    hidden: { x: 50 },
    visible: { x: 0, transition: { duration: 0.5 } },
  };

  const variantImage = {
    hidden: { x: -50 },
    visible: { x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className='relative h-screen w-screen flex justify-center items-center'>
      <div
        style={{ backgroundImage: `url(${images.wadRongKhun})` }}
        className='w-full h-full absolute brightness-[0.3] bg-cover -z-10'
      ></div>

      <div className='flex items-center'>
        <AnimateInView variants={variantImage}>
          <img
            src={images.temple}
            alt=''
            className='w-[650px] rounded-xl shadow-xl 2xl:w-[800px]'
          />
        </AnimateInView>
        <AnimateInView variants={variantText}>
          <div className='w-[550px] h-fit bg-white rounded-xl px-8 py-8 relative right-20 shadow-xl 2xl:w-[620px]'>
            <motion.h1 className='header'>วัดร่องขุ่น</motion.h1>
            <h3 className='tagline'>
              ออกแบบและสร้างโดย อาจารย์เฉลิมชัย โฆษิตพิพัฒน์ มีการผสาน
              <Highlight>วัฒนธรรมล้านนา</Highlight>ได้อย่างกลมกลืน
              ทั้งลวดลายปูนปั้นประดับกระจกและจิตรกรรรมฝาผนังขนาดใหญ่
              ความงดงามของอุโบสถสีขาวประดับด้วยกระจกสีเงินแวววาว
              และลวดลายปูนปั้นอันวิจิตรเป็นเอกลักษณ์ รวมถึงประดับด้วย
              <Highlight>ภาพจิตรกรรมฝาผนัง</Highlight>
              ที่งดงามประณีตที่เห็นแล้วต้องตะลึง
            </h3>

            <Modal
              title='วัดร่องขุ่น'
              titleIcon={<RoomIcon sx={{ position: 'relative', bottom: '3px' }} />}
              titleTagline='ต.ป่าอ้อดอนชัย อ.เมืองเชียงราย จ.เชียงราย 57000'
              tabs={<WadRongKhunModal />}
            />
          </div>
        </AnimateInView>
      </div>
    </section>
  );
};

export default WadRongKhun;
