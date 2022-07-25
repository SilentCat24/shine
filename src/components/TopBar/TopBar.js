import React from 'react';
import './TopBar.scss';



 

export default function TopBar({ menuOpen, setMenuOpen }) {



  return (
    // top bar starts
    <div className={"topBar " + (menuOpen && "active")}>
      <div className='wrapper'>

        {/* topbar left part */}
        <div className='left'>
    <a href='#Intro' className='logo'><img src='images/Arun.png' alt='images' className='logoImg'
    /></a>
    <div className='itemContainer'>
   
    <span>+91 7019411969</span>
    </div>

    <div className='itemContainer'>
    
    <span>arunmahi921@gmail.com</span>
    </div>
      </div>


      {/* top bar right part */}

      <div className='right'>
      <div className='content'onClick={()=>setMenuOpen(!menuOpen)}>
      <span className='line1'></span>
      <span className='line2'></span>
      <span className='line3'></span>



      </div>

      </div>



      </div>
      
      
      </div>
  )
}
