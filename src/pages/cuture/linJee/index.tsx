import { images } from 'assets/images';
import Modal from 'components/common/modal';
import RoomIcon from '@mui/icons-material/Room';
import React from 'react';
import LinJeeModal from './Modal';
import AnimateInView from 'components/common/animateInView';
import { transition } from 'service/transation.service';
import { Lowlight } from 'components/common/highlight';

const LinJee: React.FC = (): JSX.Element => {
  return (
    <section className='relative h-screen w-screen flex justify-center items-center'>
      <div
        style={{ backgroundImage: `url(${images.linJeeBg})` }}
        className='w-full h-full absolute brightness-[0.2] bg-cover bg-bottom -z-10'
      ></div>

      <div className='flex gap-6 max-w-[1100px] relative'>
        <div className='w-96 h-2 bg-white absolute -top-10 left-0' />
        <div className='w-60 h-2 bg-white absolute -bottom-20 right-0' />

        <div className='w-[800px] text-white rounded-xl pt-8  shadow-xl relative'>
          <AnimateInView variants={transition.variantLeftToRight}>
            <h1 className='header mb-3'>งานลิ้นจี่เชียงราย</h1>
            <h3 className='tagline'>
              งานลิ้นจี่เชียงรายของดีเมืองเชียงรายจะจัดขึ้นในช่วงเดือนพฤษภาคม
              ถึงเดือนมิถุนายนเนื่องจากเป็นช่วงที่ลิ้นจี่ออกผล ในงานมีการจำหน่าย
              ลิ้นจี่และพืชผลและผลิตภัณฑ์ทางการเกษตรอื่นๆ จากชาวสวนในท้องถิ่น และมี
              <Lowlight>การประกวดธิดาลิ้นจี่</Lowlight>ด้วย โดยจังหวัดเชียงราย
              มีพื้นที่ปลูกลิ้นจี่รวมกัน ทั้งจังหวัดประมาณ 32,000 ไร่ ให้ผลผลิตรวมกันปีละประมาณ
              60,000 ตัน โดยจะให้ผลผลิตตั้งแต่เดือน พ.ค.-มิ.ย.ปีละเพียงประมาณ 1 เดือน
            </h3>

            <Modal
              title='งานลิ้นจี่เชียงราย'
              titleIcon={<RoomIcon sx={{ position: 'relative', bottom: '3px' }} />}
              titleTagline='เชียงราย'
              tabs={<LinJeeModal />}
            />
          </AnimateInView>
        </div>
        <img src={images.linJee} alt='' className='w-[500px] rounded-xl shadow-xl' />
      </div>
    </section>
  );
};

export default LinJee;
