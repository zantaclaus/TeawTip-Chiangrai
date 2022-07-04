import { images } from 'assets/images';
import React from 'react';

const Advice = () => {
  return (
    <section className='relative h-screen w-screen flex justify-center items-center'>
      <div
        style={{ backgroundImage: `url(${images.advice})` }}
        className='w-full h-full absolute brightness-[0.2] bg-cover bg-bottom -z-10'
      ></div>

      <div className='flex gap-8 max-w-[1100px] relative'>
        <img src={images.advice} alt='' className='w-[550px] rounded-xl shadow-xl' />
        <div className='w-[800px] text-white rounded-xl pt-8  shadow-xl relative flex flex-col justify-center'>
          <h1 className='header mb-3'>ข้อแนะนำในการเที่ยวเชียงราย</h1>
          <h3 className='tagline'>
            ในช่วงกลางเดือน ต.ค. – พ.ย. จะเป็นช่วงที่ภูชี้ฟ้ามีโอกาสเกิดทะเลหมอกได้มากที่สุด
            ส่วนจะมากหรือน้อยก็ขึ้นอยู่กับสภาพลมและความใสของท้องฟ้า ถ้าคืนวัน ไหนท้องฟ้าแจ่มไร้เมฆ
            ลมนิ่ง วันนั้นทะเลหมอกจะเยอะมาก แต่ถ้าคืนไหนเมฆเยอะ ลมแรง ทะเลหมอกก็มีน้อย
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Advice;
