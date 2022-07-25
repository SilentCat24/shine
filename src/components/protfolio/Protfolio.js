import React,{useState,useEffect} from 'react';
import './Protfolio.scss';
import ProtfolioList from '../protfolioList/protfolioList';

import {
  EDUCATION,
  SKILLS,
 INTERNSHIP,
 
} from "../../data/data";



export default function Protfolio() {
  const [selected, setSelected] = useState("EDUCATION");
  const [data, setData] = useState([]);


  const list = [
    {
      id: "EDUCATION",
      title: "Education",
    },
    {
      id: "SKILLS",
      title: "SKILLS",
    },
    {
      id: "INTERNSHIP",
      title: "INTERNSHIP",
    },
    
  ];

  useEffect(() => {
    switch (selected) {
      case "EDUCATION":
        setData(EDUCATION);
        break;
      case "SKILLS":
        setData(SKILLS);
        break;
        case "INTERNSHIP":
        setData(INTERNSHIP);
        break;
     
      default:
        setData(EDUCATION);
    }
  }, [selected]);

  return (
    <div className='protfolio' id='Protfolio'>
      
        <h1>About Me</h1>
        <marquee width ="50%">Hover on BOX to get Information</marquee>

      <ul>
        {list.map((item) => (
            
          <ProtfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
                <h3>{d.title}<br/>{d.title2}
                <br/>{d.title3}
                </h3>
               
   <img src={d.img}/>
  
                
                
          </div>
         
          
        ))
        
        
        }
      </div>
   </div>


       
  )
}
