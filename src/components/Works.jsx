import {motion} from 'framer-motion';
import {styles} from '../styles';
import {github} from '../assets';
import {SectionWraper} from '../hoc';
import {projects} from '../constants';
import {fadeIn, textVariant} from '../utils/motion.js';
import { Tilt } from 'react-tilt';
import {isMobile} from 'react-device-detect'


const ProjectCard = ( {index, name, description, tags, image, source_code_link, link} ) => {

  return (
    <motion.div  variants={ !isMobile && fadeIn("up", "spring", index * 0.5, 0.75)}  >
      <Tilt options = {{max: 45, scale:1, speed:450}} className='bg-tertiary p-5 rounded-2xl sm:w-[340px] w-full'>
        <div className='relative w-full h-[230px] '>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl'/>
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover '>
            <div onClick={() => window.open(source_code_link, 'blank')} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer '>
              <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
        </div>
        <div className='mt-5'>
         <h3 className='text-white font-bold text-[24px]'><a href={link} target="_blank" rel="noopener noreferrer">{name}</a></h3>
         <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag)=> (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {

  return (
    <>
      <motion.div  variants={!isMobile && textVariant()}>
      <p className={styles.sectionSubText}>
      My work</p>
      <h2 className={styles.sectionHeadText}>
      Projects</h2>
     </motion.div>
     <div className='w-full flex'>
      <motion.p variants={ !isMobile && fadeIn('', '', 0.1, 1) } className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      These are some of the applications built by me. Over time, I've had experiences that have been valuable learning opportunities. I invite you to check them out, and if you have any questions or suggestions, please contact me using the form below.
      </motion.p>
     </div>
     <div className='mt-20 flex flex-wrap gap-7 '>
      {
        projects.map((project, index )=> (
            <ProjectCard key={`project-${index}`} index={index}
          {...project}
          />
        ))
      }
     </div>
    </>
  )
}

export default SectionWraper(Works, '') 