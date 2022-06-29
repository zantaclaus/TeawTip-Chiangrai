import React from 'react';

export const ScrollPage: React.FC = ({ children }): JSX.Element => {
  return <div className='w-screen h-screen snap-start'>{children}</div>;
};
