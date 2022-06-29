import { motion } from 'framer-motion';
import React from 'react';
import Highlight from 'components/highlight';
import AnimateInView from 'components/animateInView';
import temple from 'assets/images/temple4.jpg';

const Example: React.FC = (): JSX.Element => {
  const variantText = {
    hidden: { x: 50 },
    visible: { x: 0, transition: { duration: 0.3 } },
  };

  const variantImage = {
    hidden: { x: -50 },
    visible: { x: 0, transition: { duration: 0.3 } },
  };

  return (
    <section className='w-full h-full relative flex justify-center items-center gap-20'>
      <AnimateInView variants={variantImage}>
        <img src={temple} alt='' className='h-[400px] shadow-xl' />
      </AnimateInView>
      <div className='w-[500px] h-fit'>
        <AnimateInView variants={variantText}>
          <motion.h1 className='sukhumvit-bold mb-2'>วัดร่องขุ่น</motion.h1>
          <h3 className='sukhumvit'>
            ออกแบบและสร้างโดย อาจารย์เฉลิมชัย โฆษิตพิพัฒน์ มีการผสาน
            <br />
            <Highlight>วัฒนธรรมล้านนา</Highlight>ได้อย่างกลมกลืน
            ทั้งลวดลายปูนปั้นประดับกระจกและจิตรกรรรมฝาผนังขนาดใหญ่
            ความงดงามของอุโบสถสีขาวประดับด้วยกระจกสีเงินแวววาว
            และลวดลายปูนปั้นอันวิจิตรเป็นเอกลักษณ์ รวมถึงประดับด้วย
            <Highlight>ภาพจิตรกรรมฝาผนัง</Highlight>
            ที่งดงามประณีตที่เห็นแล้วต้องตะลึง
          </h3>
        </AnimateInView>
      </div>
    </section>
  );
};

export default Example;
