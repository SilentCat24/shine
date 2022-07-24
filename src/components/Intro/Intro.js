import React,{useEffect,useRef} from 'react';
import './Intro.scss';
import { init } from 'ityped';


export default function Intro() {
const textRef =useRef();

useEffect(()=>{
init(textRef.current,{
showCursor:true,
cursorChar:"|",
backDelay:2100,
backSpeed:60,
loop:false,
strings:["designer"]

})

},[])


  return (
    <div className='Intro' id='Intro'>
     <div className='left'>
    <div className='ImgContainer'>
    <img src="images/myimage.png" alt="image" className='img' />
    </div>
     </div>
    
     <div className='right'>
    <div className='wrapper'>
      <h2>Hi there I am </h2>
      <h1>Arun Kumar R</h1>
      <h3>Professional <span ref={textRef}></span>
      </h3>

    </div>
<a href="#Protfolio">
<img src='images/down.png' alt="image"/>

</a>
 

     </div>
      
      </div>
  )
}
