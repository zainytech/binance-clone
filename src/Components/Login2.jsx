import React from 'react'
import './Login2.css';

import { Link } from 'react-router-dom';

import google from './Img/google.png';
import apple from './Img/apple.png';
import code from './Img/code.png';
import circles1 from './Img/circles1.png';
import circles2 from './Img/circles2.png';
import { useState } from 'react';

const Login2 = () => {
    const [email, setEmail] = useState(true);
  return (
    <div className='login2'>
        <div className='caccount1row1'><img src={circles2}/></div>
        <div className='caccount1row2'><img src={circles1}/></div>
        <div className='login2col1'>
            <h4>Log In</h4>
            <div className='login2row1'>
                <button onClick={()=> setEmail(true)} className={email ? 'login2row1active' : 'login2row1btn'}>Email</button>
                <button onClick={()=> setEmail(false)} className={email ? 'login2row1btn' : 'login2row1active'}>Phone</button>
            </div>
            { email ? <>
                <p>Email</p>
                <div className='verify1row1'>
                    <input type='text'></input>
                    <button>Send</button>
                </div>
                </> : <>
                <p>Phone No.</p>
                <div className='verify1row1'>
                    <input type='number'></input>
                    <button>Send</button>
                </div>
            </>}
            <p>Password</p>
            <div className='verify1row1'>
                <input type='password'></input>
                <button>Send</button>
            </div>
            <p className='login2forgot'>Forgot Password ?</p>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="signed-in"/>
            <label for="vehicle1"> Keep me signed in</label>
            <Link to='/dashboard3' style={{textDecoration: 'none', color: 'white', fontWeight: 'bold'}}><button className='verify1btn'>Login</button></Link>
            <p className='login2up'>Don't have an account <Link to='/welcome-login' style={{textDecoration: 'none', color: 'blue'}}><span>Sign up</span></Link></p>
            <p className='login2p'>or continue with</p>
            <div className='login2btn'>
                <button><img src={google}/><p>Google</p></button>
                <button><img src={apple}/><p>Apple</p></button>
            </div>
        </div>

        <div className='login2col2'>
            <img src={code}/>
            <p>Download App</p>
            <p>Scan QR code to download our application</p>
        </div>
    </div>
  )
}

export default Login2