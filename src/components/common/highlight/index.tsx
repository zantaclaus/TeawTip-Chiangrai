import React from 'react';

const Highlight: React.FC = ({ children }): JSX.Element => {
  return <span className='sukhumvit-semibold bg-teal-100'>{children}</span>;
};

export default Highlight;
