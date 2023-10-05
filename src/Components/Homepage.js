import React from 'react'
import './Homepage.css';
import { useState } from 'react';
import Music from './Music';
import All from './All';
import Animation from './Animation';

const Homepage = () => {
  const [all,setAll]=useState(true);
  const [music,setMusic]=useState(false);
  const [animation,setAnimation]=useState(false);
  return (
    <div className='homepage'>
          <div className='homeline'>
            <button onClick={()=>{setAll(true);setMusic(false);}} id='line'>All</button>
            <button onClick={()=>{setAll(false);setMusic(true);}} id='line'>Music</button>
            <button id='line'>Live</button>
            <button id='line'>Cricket</button>
            <button id='line'>Movies</button>
            <button onClick={()=>{setAnimation(true);setAll(false);setMusic(false);}}id='line'>Animation</button>
            <button id='line'>Cooking</button>
            <button id='line'>Programming</button>
           
          </div>
          {all?
        (
          <All/>
        ):null
        }
        {music?
        (
          <Music/>
        ):null
        }
        {animation?
        (
          <Animation/>
        ):null
        }
       
    </div>
        
  
  )
}

export default Homepage