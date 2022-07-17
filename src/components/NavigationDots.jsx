import React from 'react'

const NavigationDots = (active,index) => {
  return (
    <div className='app__navigation'>
{['home', 'About',  'Work', 'skills','testimonials','contact'].map((item)=> (
      
      <a
       href={`#${item}`}
       key={item+ index}
       className='app__navigation-dot'
       style={active === item ? {background:'#313BAC'}:{}}
       >
           
       
       </a>
      
    ))}
    </div>
  )
}

export default NavigationDots