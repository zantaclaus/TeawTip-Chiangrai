import { images } from 'assets/images';
import React from 'react';

const BanDam: React.FC = (): JSX.Element => {
  return (
    <section className='relative h-screen w-screen flex justify-center items-center'>
      <div
        style={{ backgroundImage: `url(${images.banDamBg})` }}
        className='w-full h-full absolute brightness-50 bg-cover bg-bottom -z-10'
      ></div>

      <div className='max-w-[1000px]'>
        <img
          src={images.banDam}
          alt=''
          className='w-[550px] relative left-1/2 top-16 -translate-x-1/2 rounded-xl shadow-lg'
        />
        <div className='bg-white px-16 py-10 rounded-xl shadow-xl'>
          <h1 className='header pt-16 pb-4 text-center'>พิพิธภัณฑ์บ้านดำ</h1>
          <h3 className='tagline'>
            สร้างขึ้นโดยอ.ถวัลย์ ดัชนี ศิลปินแห่งชาติ ลักษณะของบ้านดำจะเป็นกลุ่มบ้านแบบล้านนา
            ทุกหลังทาด้วยสีดำ
            เป็นที่มาของคำว่า“บ้านดำ”โดยในแต่ละหลังจะประดับด้วยไม้แกะสลักที่มีลวดลายงดงามเขาสัตว์
            เช่น เขาควาย เขากวางและกระดูกสัตว์ เช่น กระดูกช้าง เป็นต้น
            ภายในบริเวณบ้านเต็มไปด้วยต้นไม้ บรรยากาศร่มเย็นสบาย
            โดยในบริเวณบ้านประกอบไปด้วยบ้านทั้งหมด36หลังที่มีลักษณะแตกต่างกันไปซึ่งยังมีอีกหนึ่งหลังที่ยังสร้างไม่เสร็จคือพิพิธภัณฑ์ที่ใช้แสดงผลงานของอ.ถวัลย์สร้างด้วยไม้สักทั้งหลังมีลวดลายแกะสลักที่สวยงามอย่างยิ่งนับว่าเป็นอีกสถานที่หนึ่งที่แสดงถึงเอกลักษณ์และศิลปะแบบล้านนาที่ทรงคุณค่าและควรอนุรักษ์ในจังหวัดเชียงราย
          </h3>
        </div>
      </div>
    </section>
  );
};

export default BanDam;
