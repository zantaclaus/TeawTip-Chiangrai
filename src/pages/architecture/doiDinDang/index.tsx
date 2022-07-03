import { images } from 'assets/images';
import React from 'react';

const DoiDinDang: React.FC = (): JSX.Element => {
  return (
    <section className='relative h-screen w-screen flex justify-center items-center'>
      <div
        style={{ backgroundImage: `url(${images.doiDinDangBg})` }}
        className='w-full h-full absolute brightness-50 bg-cover -z-10'
      ></div>

      <div className='flex items-center'>
        <img
          src={images.doiDinDang}
          alt=''
          className='w-[600px] rounded-xl shadow-2xl 2xl:w-[800px]'
        />
        <div className='w-[550px] h-fit bg-white rounded-xl px-8 py-8 relative right-20 shadow-xl 2xl:w-[620px]'>
          <h1 className='header'>ดอยดินแดง</h1>
          <h3 className='tagline'>
            ก่อตั้งโดยอาจารย์สมลักษณ์ปันติบุญศิลปินเซรามิกระดับนานาชาติโดยอาจารย์ได้ไปศึกษาการปั้นเครื่องปั้นดินเผาจากญี่ปุ่นและกลับมาสร้างที่นี่ขึ้นจุดเด่นของเครื่องปั้นดินเผาที่นี่ก็คือ
            การใช้ส่วนผสมจากธรรมชาติภายในท้องถิ่น โดยคำนึงถึงความปลอดภัย ประโยชน์การใช้งาน
            และคุณค่าทางศิลปะโดยเฉพาะสีและผิวของเครื่องปั้นดินเผาจะมีความโดดเด่นและกลิ่นอายในแบบวิถีเซนของญี่ปุ่นที่มีเอกลักษณ์ในแต่ละชิ้นทำให้เครื่องปั้นดินเผาของที่นี่เป็นงานศิลปะ
            ร่วมสมัยอีกความสวยงามที่เราได้สัมผัสในวันฝนตกแบบนี้ก็คือมอสสีเขียวที่ขึ้นอยู่ตามมุมต่างๆของพิพิธภัณฑ์
            และโรงปั้น ทำให้เพิ่มบรรยากาศของธรรมชาติที่สดชื่นไปอีก
          </h3>
        </div>
      </div>
    </section>
  );
};

export default DoiDinDang;
