import React from 'react'
import hero from 'assets/images/hero.jpeg'

const Hero: React.FC = (): JSX.Element => {
  return (
    <section
      style={{ backgroundImage: `url(${hero})`, objectFit: 'cover' }}
      className='h-full'
    ></section>
  )
}

export default Hero
