import React,{useState,useEffect} from 'react';
import './Protfolio.scss';
import ProtfolioList from '../protfolioList/protfolioList';

import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data/data";
import { margin } from '@mui/system';


export default function Protfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);


  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className='protfolio' id='Protfolio'>
        <h1>Prtfolio</h1>
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
                <h3>{d.title}</h3>
                <br/>
                
                <h2 >{d.SchoolName}</h2>
          </div>
         
          
        ))
        
       
        }
      </div>
   </div>


       
  )
}
