import React from 'react';
import { images } from 'assets/images';
import { motion } from 'framer-motion';
import Highlight from 'components/common/highlight';

const WadRongKhun = () => (
  <section className='relative h-screen w-screen flex justify-center items-center'>
    <div
      style={{ backgroundImage: `url(${images.wadRongKhun})` }}
      className='w-full h-full absolute brightness-50 bg-cover -z-10'
    ></div>

    <div className='flex items-center'>
      <img src={images.temple} alt='' className='w-[650px] rounded-xl shadow-xl 2xl:w-[800px]' />
      <div className='w-[550px] h-fit bg-white rounded-xl px-8 py-8 relative right-20 shadow-xl 2xl:w-[620px]'>
        <motion.h1 className='header'>วัดร่องขุ่น</motion.h1>
        <h3 className='tagline'>
          ออกแบบและสร้างโดย อาจารย์เฉลิมชัย โฆษิตพิพัฒน์ มีการผสาน
          <Highlight>วัฒนธรรมล้านนา</Highlight>ได้อย่างกลมกลืน
          ทั้งลวดลายปูนปั้นประดับกระจกและจิตรกรรรมฝาผนังขนาดใหญ่
          ความงดงามของอุโบสถสีขาวประดับด้วยกระจกสีเงินแวววาว และลวดลายปูนปั้นอันวิจิตรเป็นเอกลักษณ์
          รวมถึงประดับด้วย
          <Highlight>ภาพจิตรกรรมฝาผนัง</Highlight>
          ที่งดงามประณีตที่เห็นแล้วต้องตะลึง
        </h3>
        <button className='px-6 py-2 mt-4 border-2 border-teal-300 rounded-full sukhumvit'>
          เพิ่มเติม
        </button>
      </div>
    </div>
  </section>
);

export default WadRongKhun;
