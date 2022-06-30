import React from 'react'

export const ScrollContainer: React.FC = ({ children }): JSX.Element => {
  return <div className='snap-y snap-mandatory overflow-y-scroll h-screen w-screen overflow-x-hidden'>{children}</div>
}
