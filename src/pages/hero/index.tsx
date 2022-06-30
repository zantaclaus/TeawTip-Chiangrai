import React from 'react';
import { images } from 'assets/images';
import { motion } from 'framer-motion';

const Hero: React.FC = (): JSX.Element => {
  return (
    <section
      id='hero'
      style={{ backgroundImage: `url(${images.hero})` }}
      className='w-full h-full relative flex justify-center items-center bg-cover'
    >
      <div className=''>
        <motion.h2
          className='text-center text-4xl text-white relative top-14'
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
        >
          จังหวัด
        </motion.h2>
        <motion.h1
          className='text-[10rem] text-teal-400 drop-shadow-[15px_0px_#222]'
          initial={{ y: -60 }}
          animate={{ y: 0 }}
        >
          เชียงราย
        </motion.h1>
        <motion.div
          className='relative bottom-5 w-fit mx-auto px-4 py-2 rounded-2xl bg-teal-500'
          initial={{ y: -60 }}
          animate={{ y: 0 }}
        >
          <motion.h2 className=' text-center text-white'>
            โครงการเที่ยวทิพย์ท่องไทยไปกับโลกไซเบอร์
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
