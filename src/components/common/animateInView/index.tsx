import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface IAnimateInView {
  variants: {
    hidden: any;
    visible: any;
  };
  children: React.ReactNode;
}

const AnimateInView: React.FC<IAnimateInView> = ({
  children,
  variants,
}: IAnimateInView): JSX.Element => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      console.log('inView');
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref} animate={controls} initial='hidden' variants={variants}>
      {children}
    </motion.div>
  );
};

export default AnimateInView;
