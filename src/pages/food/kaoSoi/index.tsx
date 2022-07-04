import { images } from 'assets/images';
import Modal from 'components/common/modal';
import React from 'react';
import RoomIcon from '@mui/icons-material/Room';
import KaoSoiModal from './Modal';
import AnimateInView from 'components/common/animateInView';
import { transition } from 'service/transation.service';

const KaoSoi: React.FC = (): JSX.Element => {
  return (
    <section className='relative h-screen w-screen flex justify-center items-center'>
      <div
        style={{ backgroundImage: `url(${images.kaosoiBg})` }}
        className='w-full h-full absolute brightness-[0.3] bg-cover bg-bottom -z-10'
      ></div>

      <div className='flex flex-col justify-center items-center'>
        <div className='w-[800px] bg-white rounded-xl px-8 pt-8 pb-16 shadow-xl relative'>
          <AnimateInView variants={transition.variantDownToUP}>
            <h1 className='header mb-3'>ข้าวซอย</h1>
            <h3 className='tagline'>
              ข้าวซอย คืออาหารพื้นเมืองทางภาคเหนือของประเทศไทย เดิมเรียกว่า
              &apos;ก๋วยเตี๋ยวฮ่อ&lsquo; เป็นอาหารที่ได้รับอิทธิพลมาจากชาวจีนยูนนานหรือฮ่อ
              มีลักษณะคล้ายเส้นบะหมี่ ในน้ำซุปที่ใส่เครื่องแกง รสจัดจ้าน มีเครื่องเคียง ได้แก่
              ผักกาดดอง หอมหัวแดง ยำกะหล่ำปลีและมีเครื่องปรุงรส เช่น พริกผัดน้ำมัน น้ำมะนาว น้ำปลา
              น้ำตาล ในตำรับดั้งเดิมเนื้อที่ใช้เป็นเนื้อไก่หรือเนื้อวัว
              แต่ในปัจจุบันร้านอาหารหลายแห่งได้มีการใช้เนื้อหมูแทน
              บางแห่งอาจเพิ่มอาหารทะเลหรือเต้าหู้เป็นส่วนประกอบ
            </h3>
            <Modal
              title='ข้าวซอย'
              titleIcon={<RoomIcon sx={{ position: 'relative', bottom: '3px' }} />}
              titleTagline='ต.ป่าอ้อดอนชัย อ.เมืองเชียงราย จ.เชียงราย 57000'
              tabs={<KaoSoiModal />}
            />
          </AnimateInView>
        </div>
        <div className='flex items-center relative bottom-10'>
          <img
            src={images.kaosoi2}
            alt=''
            className='w-[450px] rounded-xl shadow-xl relative left-32'
          />
          <img
            src={images.kaosoi1}
            alt=''
            className='w-[550px] rounded-xl shadow-xl relative z-50'
          />

          <img
            src={images.kaosoi3}
            alt=''
            className='w-[450px] rounded-xl shadow-xl relative right-32'
          />
        </div>
      </div>
    </section>
  );
};

export default KaoSoi;
