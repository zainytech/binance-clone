import React from 'react'
import './Login.css';

import { Link } from 'react-router-dom';

import binance10 from './Img/binance10.png';
import google from './Img/google.png';
import apple from './Img/apple.png';
import circles2 from './Img/circles2.png';
import circles1 from './Img/circles1.png';

const Login = () => {
  return (
    <div className='login'>
      <div className='caccount1row1'><img src={circles2}/></div>
      <div className='caccount1row2'><img src={circles1}/></div>
        <div className='logincol1'>
            <h4>Welcome to<span>Domain Name</span></h4>
            <p>Login your account or register your account if you don’t have one</p>
            <Link to='/signup' style={{textDecoration: 'none'}}><button>Sign up with Domain Name account</button></Link>
            <p className='login1p'>or Continue with</p>
            <div className='login1btn'>
                <button><img src={google}/><p>Google</p></button>
                <button><img src={apple}/><p>Apple</p></button>
            </div>
            <p>Already Registered? <Link to='/login' style={{textDecoration: 'none'}}>Login</Link></p>
            {/* <p><a>Signup for an entity account</a></p> */}
        </div>
        <div className='logincol2'>
            <img src={binance10}/>
        </div>
    </div>
  )
}

export default Login