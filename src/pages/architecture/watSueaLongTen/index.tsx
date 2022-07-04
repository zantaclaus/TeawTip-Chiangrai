import { images } from 'assets/images';
import AnimateInView from 'components/common/animateInView';
import Modal from 'components/common/modal';
import React from 'react';
import WatLongSueaTenModal from './Modal';
import RoomIcon from '@mui/icons-material/Room';

const WatSueaLongTen: React.FC = (): JSX.Element => {
  const variantText = {
    hidden: { y: -50 },
    visible: { y: 0, transition: { duration: 0.5 } },
  };

  const variantImage = {
    hidden: { y: 50 },
    visible: { y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className='relative h-screen w-screen flex justify-center items-center'>
      <div
        style={{ backgroundImage: `url(${images.watSueaLongTenBg})` }}
        className='w-full h-full absolute brightness-[0.3] bg-cover bg-center -z-10'
      ></div>

      <div className='flex items-center'>
        <AnimateInView variants={variantText}>
          <div className='w-[600px] h-fit bg-white rounded-xl pl-8 pr-24 py-8 shadow-xl  2xl:w-[620px]'>
            <h1 className='header'>วัดร่องเสือเต้น</h1>
            <h3 className='tagline'>
              เป็นหนึ่งในวัดที่มีความสวยงามทางพุทธศิลป์โดยเกิดจากการสร้างสรรค์ของศิลปินชาวบ้าน
              คือ“นายพุทธากาบแก้ว”หรือ“สล่านก”เป็นศิลปินท้องถิ่นชาวเชียงรายที่มีโอกาสเข้าไปศึกษา
              และเป็นลูกศิษย์อาจารย์เฉลิมชัยโฆษิตพิพัฒน์ในการสร้างวัดร่องขุ่นจนมีโอกาสได้มาสร้าง
              วิหารวัดร่องเสือเต้นจนเป็นวัดที่มีความสวยงามและเป็นสถานที่เที่ยวของคนไทยและชาวต่าง
              ชาติโดยเฉพาะชาวจีนจุดเด่นของวัดแห่งนี้คือ “วิหารร่องเสือเต้น”
              ซึ่งมีความโดดเด่นของวิหาร
              ที่มีศิลปะของตัววิหารที่สวยงามและมีเอกลักษณ์เป็นศิลปะแนวประยุกต์โดยใช้โทนสีน้ำเงินและสีฟ้าเป็นหลัก
              พระพุทธรูปสีขาวองค์ใหญ่ และภาพเขียนฝาผนังที่มีความงดงาม อ่อนช้อย
            </h3>

            <Modal
              title='วัดร่องเสือเต้น'
              titleIcon={<RoomIcon sx={{ position: 'relative', bottom: '3px' }} />}
              titleTagline='ต.ริมกก อ.เมืองเชียงราย จ.เชียงราย 57100'
              tabs={<WatLongSueaTenModal />}
            />
          </div>
        </AnimateInView>
        <AnimateInView variants={variantImage}>
          <img
            src={images.watSueaLongTen}
            alt=''
            className='w-[550px] rounded-xl shadow-xl relative right-20  2xl:w-[800px]'
          />
        </AnimateInView>
      </div>
    </section>
  );
};

export default WatSueaLongTen;
