import React from 'react';

interface IPageHeader {
  id: string;
  image: string;
  text: React.ReactNode;
}

const PageHeader: React.FC<IPageHeader> = ({ id, image, text }: IPageHeader): JSX.Element => {
  return (
    <section id={id} className='w-screen h-screen flex justify-center items-center relative'>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className='w-full h-full absolute brightness-[0.4] bg-cover bg-center -z-10'
      ></div>

      <div className='relative'>
        <h1 className='text-[13rem] text-white pachautid tracking-widest'>{text}</h1>
        <h3 className='bg-teal-300 px-5 absolute top-14 right-5 sukhumvit rounded'>เชียงราย</h3>
      </div>
    </section>
  );
};

export default PageHeader;
