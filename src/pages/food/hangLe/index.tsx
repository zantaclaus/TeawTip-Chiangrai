import { images } from 'assets/images';
import React from 'react';

const HengLe: React.FC = (): JSX.Element => {
  return (
    <section className='relative h-screen w-screen flex justify-center items-center'>
      <div
        style={{ backgroundImage: `url(${images.hangLeBg})` }}
        className='w-full h-full absolute brightness-50 bg-cover -z-10'
      ></div>

      <div className='flex items-center'>
        <div className='w-[600px] h-fit bg-white rounded-xl pl-8 pr-32 py-8 shadow-xl  2xl:w-[620px]'>
          <h1 className='header'>แกงฮังเล</h1>
          <h3 className='tagline'>
            แกงฮังเล เมนูอาหารพื้นเมืองของคนภาคเหนือ
            โดยสามารถกินได้ที่ภาคเหนือเป็นเมนูที่หากินได้เฉพาะภาคเท่านั่น
            โดยมีส่วนผสมหลักคือหมูละเครื่องแกงในการทำแกงฮังเลให้ต้อง หมูนุ่ม เปรี้ยวนำ
            เวลาได้กินกับข้าวสวยร้อนๆ นี่เป็นเวลาที่มีความสุขที่สุดเลย
          </h3>
          <button className='px-6 py-2 mt-4 border-2 border-teal-300 rounded-full sukhumvit'>
            เพิ่มเติม
          </button>
        </div>

        <img
          src={images.hangLe}
          alt=''
          className='w-[650px] rounded-xl shadow-xl relative right-20  2xl:w-[800px] scale-[110%]'
        />
      </div>
    </section>
  );
};

export default HengLe;
