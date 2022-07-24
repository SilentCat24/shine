import React from 'react';
import './protfolioList.scss';

export default function protfolioList({ id, title, active, setSelected }) {
  return (
    <div>
 <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>



    </div>
  )
}
