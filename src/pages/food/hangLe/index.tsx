import { images } from 'assets/images';
import Modal from 'components/common/modal';
import React from 'react';
import RoomIcon from '@mui/icons-material/Room';
import HangLeModal from './Modal';
import AnimateInView from 'components/common/animateInView';
import { transition } from 'service/transation.service';
import Highlight from 'components/common/highlight';

const HengLe: React.FC = (): JSX.Element => {
  return (
    <section className='relative h-screen w-screen flex justify-center items-center'>
      <div
        style={{ backgroundImage: `url(${images.hangLeBg})` }}
        className='w-full h-full absolute brightness-[0.3] bg-cover bg-center -z-10'
      ></div>

      <div className='flex items-center'>
        <div className='w-[600px] h-fit bg-white rounded-xl pl-8 pr-32 py-8 shadow-xl  2xl:w-[620px]'>
          <AnimateInView variants={transition.variantLeftToRight}>
            <h1 className='header'>แกงฮังเล</h1>
            <h3 className='tagline'>
              แกงฮังเล เมนูอาหารพื้นเมืองของคนภาคเหนือ โดยสามารถกินได้ที่ภาคเหนือเป็นเมนูที่
              <Highlight>หากินได้เฉพาะภาคเท่านั้น</Highlight>
              โดยมีส่วนผสมหลักคือหมูละเครื่องแกงในการทำแกงฮังเลให้ต้อง หมูนุ่ม เปรี้ยวนำ
              เวลาได้กินกับข้าวสวยร้อนๆ นี่เป็นเวลาที่มีความสุขที่สุดเลย
            </h3>

            <Modal
              title='แกงฮังเล'
              titleIcon={<RoomIcon sx={{ position: 'relative', bottom: '3px' }} />}
              titleTagline='เชียงราย'
              tabs={<HangLeModal />}
            />
          </AnimateInView>
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
