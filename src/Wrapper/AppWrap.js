import React, { Component } from 'react';
import {NavigationDots, SocialMedia} from '../components/Navbar'

const AppWrap = ( Component, idName, classNames) => function HOC () {
  return (
    <div id={idName} className={`app__container ${classNames}`}>

        <SocialMedia/>

        <div className='app__wrapper app__flex'>
            <Component/>
            <div className='copright'>
            <p className='p-text'>@2022 Koech</p>
            <p className='All rights reserved'>@2022 Koech</p>
            </div>
        </div>

        <NavigationDots active={idName}/>
    </div>
  )
}

export default AppWrap