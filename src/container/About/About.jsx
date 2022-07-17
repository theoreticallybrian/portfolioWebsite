import React, {useState, useEffect } from 'react';
import './About.scss';
import {motion} from 'framer-motion/dist/framer-motion'
import { urlFor, client } from '../../Client';
import { AppWrap } from '../../Wrapper';

const About = () => {

  const [abouts, setAbouts] = useState([]);

useEffect(() => {
  

  client.fetch(`*[_type == "abouts"]`).then((data) => {
    setAbouts(data);
    console.log(data);

  });
  
}, []);

console.log(abouts);


  return (
<>
<h2 className='head-text'> I Know that <span> Good App Dev </span> <br/> means <span> Good Business </span> </h2>

<div  className='app__profiles'>
{abouts.map((About, index)=>(
  <motion.div
  WhileInView={{opacity:1}}
  WhileHover={{scale:1.1}}
transition={{duration:0.5, type:'tween'}}
className="app__profile-item"
key={About.title + index}
  >
<img src={urlFor(About.imgUrl)} alt={About.title} />
<h2 className='bold-text' style={{marginTop:20}}> {About.title}</h2>
<p className='p-text' style={{marginTop:10}}> {About.description}</p>

  </motion.div>
))}

</div>
</>
    )
}

export default AppWrap(About,'About')