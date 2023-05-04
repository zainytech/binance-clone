import React, {useState} from 'react';
import './Signup.css';

import { Link } from 'react-router-dom';

import circles1 from './Img/circles1.png';
import circles2 from './Img/circles2.png';

const Signup = () => {
  const [email, setEmail] = useState(true);
  return (
    <div className='signup'>
        <div className='caccount1row1'><img src={circles2}/></div>
        <div className='caccount1row2'><img src={circles1}/></div>
        <div className='signupcol1'>
            <h4>Create your account</h4>
            <div className='login2row1'>
                <button onClick={()=> setEmail(true)} className={email ? 'login2row1active' : 'login2row1btn'}>Email</button>
                <button onClick={()=> setEmail(false)} className={email ? 'login2row1btn' : 'login2row1active'}>Phone</button>
            </div>
            { email ? <>
              <p>Email:</p>
              <input type='text' className='signupinput'></input>
            </> : <>
              <p>Phone:</p>
              <input type='number' className='signupinput'></input>
            </>}
            <p>Password:</p>
            <input type='password' className='signupinput'></input>
            <p>Confirm Password:</p>
            <input type='password' className='signupinput'></input>
            <p>Referral ID (optional) : </p>
            <input type='text'  className='signupinput'></input>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="signed-in"/>
            <label for="vehicle1" className='signupagree'> I have read and agree to Binance’s Terms of Service and Privacy Policy.</label><br/>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="signed-in"/>
            <label for="vehicle2" className='signupagree'> I have read and agree to Binance’s Terms of Service and Privacy Policy.</label>
            <Link to='/verify-login' style={{textDecoration: 'none', color: 'white'}}><button className='verify1btn'>Verify</button></Link>
        </div>
    </div>
  )
}

export default Signup