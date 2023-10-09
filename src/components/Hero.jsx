import {motion} from 'framer-motion'
import {styles} from '../styles'
import {ComputersCanvas} from './canvas'
// import React from 'react'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto flex flex-row item-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 voilet-gradient'/>
        </div>
        <div className={`${styles.heroHeadText} text-white`}>
          <h1>Hi, I'm <span className='text-[#915eff]'>Piyush</span></h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}> I'm front-End developer <br className='sm:block hidden'/></p>
        </div>
      </div>
      <ComputersCanvas/>
    </section>
  )
}

export default Hero