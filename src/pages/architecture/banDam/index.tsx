import { images } from 'assets/images';
import AnimateInView from 'components/common/animateInView';
import React from 'react';

const BanDam: React.FC = (): JSX.Element => {
  const variantText = {
    hidden: { y: 50 },
    visible: { y: 0, transition: { duration: 0.5 } },
  };

  const variantImage = {
    hidden: { y: -50 },
    visible: { y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className='relative h-screen w-screen flex justify-center items-center'>
      <div
        style={{ backgroundImage: `url(${images.banDamBg})` }}
        className='w-full h-full absolute brightness-50 bg-cover bg-bottom -z-10'
      ></div>

      <div className='max-w-[1000px] relative bottom-3'>
        <AnimateInView variants={variantImage}>
          <img
            src={images.banDam}
            alt=''
            className='w-[440px] relative left-1/2 top-8 -translate-x-1/2 rounded-xl shadow-lg z-20 2xl:w-[550px]'
          />
        </AnimateInView>
        <AnimateInView variants={variantText}>
          <div className='bg-white px-16 pt-4 pb-8 rounded-xl shadow-xl -z-10 flex flex-col items-center'>
            <h1 className='header pt-14 pb-4 text-center'>พิพิธภัณฑ์บ้านดำ</h1>
            <h3 className='tagline'>
              สร้างโดยอ.ถวัลย์ ดัชนี ศิลปินแห่งชาติ ลักษณะบ้านเป็นกลุ่มบ้านแบบล้านนา
              ทุกหลังทาด้วยสีดำเป็นที่มาของ“บ้านดำ”
              ในแต่ละหลังประดับด้วยไม้แกะสลักลวดลายงดงามเขาสัตว์ เช่น เขาควาย
              เขากวางและกระดูกสัตว์ต่างๆ บริเวณบ้านเต็มไปด้วยต้นไม้ บรรยากาศร่มเย็นสบาย
              บ้านดำประกอบไปด้วยบ้านทั้งหมด36หลังที่มีลักษณะแตกต่างกันไป
              ซึ่งมีหลังที่ยังสร้างไม่เสร็จคือพิพิธภัณฑ์ที่ใช้แสดงผลงานของอ.ถวัลย์สร้างด้วยไม้สักทั้งหลังมีลวดลายแกะสลักที่
              สวยงามนับว่าเป็นสถานที่หนึ่งที่แสดงถึงเอกลักษณ์และศิลปะแบบล้านนาที่ทรงคุณค่าและควรอนุรักษ์ในจังหวัดเชียงราย
            </h3>

            <button className='px-6 py-2 mt-2 border-2 border-teal-300 rounded-full sukhumvit'>
              เพิ่มเติม
            </button>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
};

export default BanDam;
