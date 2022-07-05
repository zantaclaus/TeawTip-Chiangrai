import React from 'react';
import { images } from 'assets/images';
import { motion } from 'framer-motion';

const Hero: React.FC = (): JSX.Element => {
  return (
    <section id='hero' className='w-full h-full relative flex justify-center items-center'>
      <div
        style={{ backgroundImage: `url(${images.hero})` }}
        className='w-full h-full absolute brightness-[0.3] bg-cover bg-center -z-10'
      ></div>

      <div className=''>
        <motion.div
          className='relative top-28 flex justify-center items-center'
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className='text-[2.5rem] sukhumvit-bold relative text-teal-400 stroke'>
            <div className='w-3 h-3 rounded-full bg-teal-400 absolute top-1/2 -translate-y-1/2 -left-10'></div>
            <div className='w-3 h-3 rounded-full bg-teal-400 absolute top-1/2 -translate-y-1/2 -right-10'></div>
            จังหวัด
          </div>
        </motion.div>

        <motion.h1
          className='text-[16rem] text-white drop-shadow-[15px_0px_#222] pachautid tracking-widest'
          initial={{ y: -60 }}
          animate={{ y: 0 }}
        >
          เชียงราย
        </motion.h1>
        <motion.div
          className='relative bottom-20 w-fit mx-auto px-4 py-2 rounded-2xl bg-teal-500'
          initial={{ y: -60 }}
          animate={{ y: 0 }}
        >
          <div className='absolute w-24 h-2 rounded-full bg-white top-1/4 -left-32 '></div>
          <div className='absolute w-24 h-2 rounded-full bg-white top-1/4 -right-32 '></div>
          <div className='absolute w-36 h-2 rounded-full bg-white top-3/4 -left-44 '></div>
          <div className='absolute w-36 h-2 rounded-full bg-white top-3/4 -right-44 '></div>

          <motion.h2 className='text-center text-white sukhumvit-semibold'>
            โครงการเที่ยวทิพย์ท่องไทยไปกับโลกไซเบอร์
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
