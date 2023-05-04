import React from 'react'
import './Verify.css';

import { Link } from 'react-router-dom';

import circles1 from './Img/circles1.png';
import circles2 from './Img/circles2.png';

const Verify = () => {
  return (
    <div className='verify'>
        <div className='caccount1row1'><img src={circles2}/></div>
        <div className='caccount1row2'><img src={circles1}/></div>
        <div className='verifycol1'>
            <h6>Verify</h6>
            <p>Enter OTP to verify your Email and Password</p>
            <p>Email</p>
            <div className='verify1row1'>
                <input type='text'></input>
                <button>Send</button>
            </div>
            <p>Phone Number</p>
            <div className='verify1row1'>
                <input type='text'></input>
                <button>Send</button>
            </div>
            <p>Resending will be available later</p>
            <Link to="/dashboard3" style={{textDecoration: 'none', color: 'white'}}><button className='verify1btn'>Verify</button></Link>
        </div>
    </div>
  )
}

export default Verify