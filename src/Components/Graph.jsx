import React from 'react'
import './Graph.css';

import frame4 from './Img/frame4.png';
import frame5 from './Img/frame5.png';

const Graph = () => {
  return (
    <div className='graph'>
        <img src={frame4} className='graphimg1'/>
        <img src={frame5} className='graphimg2'/>
    </div>
  )
}

export default Graph