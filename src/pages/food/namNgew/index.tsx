import { images } from 'assets/images';
import React from 'react';

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
          <h1 className='header mb-3'>น้ำเงียว</h1>
          <h3 className='tagline'>
            น้ำเงี้ยว หรือ น้ำงิ้ว เป็นอาหารภาคเหนือของประเทศไทย
            เป็นน้ำแกงที่รับประทานกับขนมจีนหรือเส้นก๋วยเตี๋ยว ถ้าเป็นก๋วยเตี๋ยว
            เรียกก๋วยเตี๋ยวน้ำเงี้ยว บางสูตรใช้ถั่วเน่าแข็บย่างไฟ โขลกลงในเครื่องแกง
            บางสูตรใส่เต้าเจี้ยว ชาวไทใหญ่ เรียกอาหารชนิดนี้ว่า “เข้าเส้นน้ำหมากเขือส้ม”
          </h3>
          <button className='px-6 py-2 mt-4 border-2 border-teal-300 rounded-full sukhumvit relative -right-1/2 -translate-x-1/2'>
            เพิ่มเติม
          </button>
        </div>
      </div>
    </section>
  );
};

export default NamNgew;
