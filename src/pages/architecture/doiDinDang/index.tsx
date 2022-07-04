import { images } from 'assets/images';
import AnimateInView from 'components/common/animateInView';
import Modal from 'components/common/modal';
import React from 'react';
import RoomIcon from '@mui/icons-material/Room';
import DoiDinDangModal from './Modal';
import Highlight from 'components/common/highlight';

const DoiDinDang: React.FC = (): JSX.Element => {
  const variantText = {
    hidden: { x: 50 },
    visible: { x: 0, transition: { duration: 0.5 } },
  };

  const variantImage = {
    hidden: { x: -50 },
    visible: { x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className='relative h-screen w-screen flex justify-center items-center'>
      <div
        style={{ backgroundImage: `url(${images.doiDinDangBg})` }}
        className='w-full h-full absolute brightness-[0.3] bg-cover -z-10'
      ></div>

      <div className='flex items-center'>
        <AnimateInView variants={variantImage}>
          <img
            src={images.doiDinDang}
            alt=''
            className='w-[600px] rounded-xl shadow-2xl 2xl:w-[800px]'
          />
        </AnimateInView>
        <AnimateInView variants={variantText}>
          <div className='w-[550px] h-fit bg-white rounded-xl px-8 py-8 relative right-20 shadow-xl 2xl:w-[620px]'>
            <h1 className='header'>ดอยดินแดง</h1>
            <h3 className='tagline'>
              ก่อตั้งโดยอาจารย์สมลักษณ์ปันติบุญศิลปินเซรามิกระดับนานาชาติโดยอาจารย์ได้ไปศึกษา
              <Highlight>การปั้นเครื่องปั้นดินเผาจากญี่ปุ่น</Highlight>
              และกลับมาสร้างที่นี่ขึ้นจุดเด่นของเครื่องปั้นดินเผาที่นี่ก็คือ
              การใช้ส่วนผสมจากธรรมชาติภายในท้องถิ่น โดยคำนึงถึงความปลอดภัย ประโยชน์การใช้งาน
              และคุณค่าทางศิลปะโดยเฉพาะสีและผิวของเครื่องปั้นดินเผาจะมีความโดดเด่นและกลิ่นอายในแบบ
              <Highlight>วิถีเซนของญี่ปุ่น</Highlight>
              ที่มีเอกลักษณ์ในแต่ละชิ้นทำให้เครื่องปั้นดินเผาของที่นี่เป็นงานศิลปะ
              ร่วมสมัยอีกความสวยงามที่เราได้สัมผัสในวันฝนตกแบบนี้ก็คือมอสสีเขียวที่ขึ้นอยู่ตามมุมต่างๆของพิพิธภัณฑ์
              และโรงปั้น ทำให้เพิ่มบรรยากาศของธรรมชาติที่สดชื่นไปอีก
            </h3>

            <Modal
              title='ดอยดินแดง'
              titleIcon={<RoomIcon sx={{ position: 'relative', bottom: '3px' }} />}
              titleTagline='49 หมู่ 6 ซอย 3 บ้านป่าอ้อ ถนนพหลโยธิน ต.นางแล อ.เมืองเชียงราย จ.เชียงราย'
              tabs={<DoiDinDangModal />}
            />
          </div>
        </AnimateInView>
      </div>
    </section>
  );
};

export default DoiDinDang;
