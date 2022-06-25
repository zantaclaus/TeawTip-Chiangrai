import React from 'react'

export const ScrollContainer: React.FC = ({ children }): JSX.Element => {
  return <div className='snap-y snap-mandatory overflow-x-scroll h-screen'>{children}</div>
}
