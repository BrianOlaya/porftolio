import React from 'react';
import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion';
import {SectionWraper} from '../hoc/index'

const ServiceCard= ({index, tittle, icon})=>{

  return (
    <Tilt className="xs:w-[250px] w-full">
       <motion.div variants={fadeIn ("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card' >

        <div options={{
          max:45,
          scale:1,
          speed:450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={tittle}  className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{tittle}</h3>
        </div>
       </motion.div>
    </Tilt>
   
  )
  }

const About = () => {

  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
      Introduction
      </p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>

    <motion.p variants={fadeIn("", "", 0.1, 1)}
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
    Passionate	about	the	development	of technological tools. With a high interest in continuous learning. I like facing new challenges in web development. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, hic? Ad, ducimus earum et expedita ab commodi inventore animi dignissimos, officiis explicabo, nobis dolores magni at vero! Illo, unde sunt.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
    {services.map((service, index) =>(
      <ServiceCard key={service.title} index={index} tittle={service.title}
      {...service}/>
    )
    )}
    </div>
    </>
  )
}

export default SectionWraper (About, 'about')