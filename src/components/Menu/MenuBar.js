import React from 'react';
import './MenuBar.scss';

export default function MenuBar({ menuOpen, setMenuOpen }) {
  return (
  
         <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#Intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#Protfolio">About ME</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">Projects</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#Test">Links</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      </div>
  )
}
