import { images } from 'assets/images';
import Modal from 'components/common/modal';
import RoomIcon from '@mui/icons-material/Room';
import React from 'react';
import ClimateModal from './Modal';
import AnimateInView from 'components/common/animateInView';
import { transition } from 'service/transation.service';

const Climate: React.FC = (): JSX.Element => {
  return (
    <section className='relative h-screen w-screen flex justify-center items-center'>
      <div
        style={{ backgroundImage: `url(${images.climateBg})` }}
        className='w-full h-full absolute brightness-[0.2] bg-cover bg-bottom -z-10'
      ></div>

      <div className='flex gap-6 max-w-[1100px] relative'>
        <div className='w-[800px] text-white rounded-xl pt-4  shadow-xl relative flex flex-col justify-center'>
          <AnimateInView variants={transition.variantUpToDown}>
            <h1 className='header mb-6'>สภาพภูมิศาสตร์</h1>
            <h2 className='sub__header'>ที่ตั้งและอาณาเขต</h2>
            <h3 className='tagline'>
              จังหวัดเชียงรายมีอาณาเขตติดต่อกับประเทศพม่าและประเทศลาว
              ทางตอนเหนือและตะวันออกจังหวัดพะเยาและ จังหวัดลำปาง ทางทิศใต้ และจังหวัดเชียงใหม่
              ทางทิศตะวันตก
            </h3>
          </AnimateInView>
          <AnimateInView variants={transition.variantDownToUP}>
            <h2 className='sub__header mt-4'>สภาพภูมิประเทศ</h2>
            <h3 className='tagline'>
              จังหวัดเชียงรายมีพื้นที่ทั้งสิ้น 11,678.369 ตารางกิโลเมตร หรือประมาณ 7,290,000 ไร่
              มีภูมิประเทศเป็น เทือกเขาสูงประมาณ 1,500 – 2,000 เมตร จากระดับน้ำทะเล ในทวีปตอนเหนือ
              มีพื้นที่ราบสูงเป็นหย่อมๆ ในเขตอำเภอแม่สรวย เวียงป่าเป้า และเชียงของ
              บริเวณส่วนที่ราบตามลุ่มน้ำสำคัญในตอนกลางของพื้นที่ ได้แก่ อำเภอพาน เมือง แม่จัน แม่สาย
              เชียงแสน และเชียงของมีความสูงประมาณ 410 – 580 เมตร จากระดับน้ำทะเล มีที่ราบเป็นหย่อม ๆ
              ในระหว่างหุบเขา และตามลุ่มน้ำสำคัญ
            </h3>

            <Modal
              title='สภาพภูมิอากาศ'
              titleIcon={<RoomIcon sx={{ position: 'relative', bottom: '3px' }} />}
              titleTagline='เชียงราย'
              tabs={<ClimateModal />}
            />
          </AnimateInView>
        </div>
        <img src={images.climate} alt='' className='w-[400px] rounded-xl shadow-xl' />
      </div>
    </section>
  );
};

export default Climate;
