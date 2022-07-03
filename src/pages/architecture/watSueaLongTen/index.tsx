import { images } from 'assets/images';
import React from 'react';

const WatSueaLongTen: React.FC = (): JSX.Element => {
  return (
    <section className='relative h-screen w-screen flex justify-center items-center'>
      <div
        style={{ backgroundImage: `url(${images.watSueaLongTenBg})` }}
        className='w-full h-full absolute brightness-50 bg-cover bg-top -z-10'
      ></div>

      <div className='flex items-center'>
        <div className='w-[600px] h-fit bg-white rounded-xl pl-8 pr-24 py-8 shadow-xl  2xl:w-[620px]'>
          <h1 className='header'>วัดร่องเสือเต้น</h1>
          <h3 className='tagline'>
            เป็นหนึ่งในวัดที่มีความสวยงามทางพุทธศิลป์โดยเกิดจากการสร้างสรรค์ของศิลปินชาวบ้าน
            คือ“นายพุทธากาบแก้ว”หรือ“สล่านก”เป็นศิลปินท้องถิ่นชาวเชียงรายที่มีโอกาสเข้าไปศึกษา
            และเป็นลูกศิษย์อาจารย์เฉลิมชัยโฆษิตพิพัฒน์ในการสร้างวัดร่องขุ่นจนมีโอกาสได้มาสร้าง
            วิหารวัดร่องเสือเต้นจนเป็นวัดที่มีความสวยงามและเป็นสถานที่เที่ยวของคนไทยและชาวต่าง
            ชาติโดยเฉพาะชาวจีนจุดเด่นของวัดแห่งนี้คือ “วิหารร่องเสือเต้น” ซึ่งมีความโดดเด่นของวิหาร
            ที่มีศิลปะของตัววิหารที่สวยงามและมีเอกลักษณ์เป็นศิลปะแนวประยุกต์โดยใช้โทนสีน้ำเงินและสีฟ้าเป็นหลัก
            พระพุทธรูปสีขางองค์ใหญ่ และภาพเขียนฝาผนังที่มีความงดงาม อ่อนช้อย
          </h3>
          <button className='px-6 py-2 mt-4 border-2 border-teal-300 rounded-full sukhumvit'>
            เพิ่มเติม
          </button>
        </div>

        <img
          src={images.watSueaLongTen}
          alt=''
          className='w-[550px] rounded-xl shadow-xl relative right-20  2xl:w-[800px]'
        />
      </div>
    </section>
  );
};

export default WatSueaLongTen;
