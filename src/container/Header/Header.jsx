import React from 'react'
import './Header.scss'
import {motion} from 'framer-motion/dist/framer-motion'
import { images } from '../../constants'
import { AppWrap } from '../../Wrapper'

const scaleVariants ={
  whileInView: {
    scale:[0, 1],
    opacity:[0, 1],
    transition:{
      duration:1,
      ease:'easeInOut'
    }

  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
<motion.div
whileInView={{x:[-100,0], opacity:[0,1]}}
transition={{duration:0.5}}
className="app__header-info"
>
<div className='app__header-badge'>
<div className='badge-cmp app__flex'>
  <span role="img">👋🏾Sasa</span>
  <div style= {{marginLeft:20}} > 
  
  <p className='p-text'> Hello, I am</p>
   <h1>Brian Koech</h1>
   </div>
  
<div className='tag-cmp app__flex'>
<p className='p-text'> Web Developer</p>
<p className='p-text'>Freelancer</p>

</div>

</div>
</div>
</motion.div>

<motion.div
whileInView={{ opacity:[0,1]}}
transition={{duration:0.5, delayChildren:0.5}}
className="app__header-img"
>

<motion.img
hileInView={{ scale:[0,1]}}
transition={{duration:1, ease:"easeInOut"}}
src={images.circle}
alt="profile_circle"
className='overlay_circle'
/>
</motion.div>
<motion.div
variants={scaleVariants }

whileInView={scaleVariants.whileInView}
className='app__header-circles'
>
  {[images.flutter, images.redux, images.sass ].map((circle, index)=> (
    <div className='circle-cmp app_flex' key={`circle-index`}>

<img src={circle} alt='circle'/>

    </div>
  ))}
</motion.div>

    </div>
  )
}

export default  AppWrap(Header, 'home');