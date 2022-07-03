import { images } from 'assets/images';
import React from 'react';

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
          <h1 className='header mb-3 mt-8'>งานลิ้จุดบ้องไฟ (จิบอกไฟ)</h1>
          <h3 className='tagline'>
            จิบอกไฟ หรือการจุดบั้งไฟ เป็นประเพณีเก่าแก่ของชาวล้านนา
            เป็นการสักการะบูชาพระเกษแก้วจุฬามณีบนสวรรค์ชั้นดาวดึงส์
            และเป็นประเพณีที่สร้างความสนุกสนานให้กับชุมชนล้านนา
            ประเพณีจิบอกไฟนิยมจัดในงานเทศกาลต่างๆ
          </h3>
          <button className='px-6 py-2 mt-6 mb-8 w-fit border-2 border-teal-300 rounded-full sukhumvit '>
            เพิ่มเติม
          </button>
        </div>
      </div>
    </section>
  );
};

export default BongFire;
