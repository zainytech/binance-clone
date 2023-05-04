import React, {useState, useEffect} from 'react'
import './Caccount.css';
import ReactFlagsSelect from "react-flags-select";

import { Link } from 'react-router-dom';

import binance11 from './Img/binance11.png';
import icon from './Img/icon.png';
import icon1 from './Img/icon1.png';
import icon2 from './Img/icon2.png';
import icon3 from './Img/icon3.png';
import icon4 from './Img/icon4.png';
import icon5 from './Img/icon5.png';
import icon7 from './Img/icon7.png';
import icon8 from './Img/icon8.png';
import circles1 from './Img/circles1.png';
import circles2 from './Img/circles2.png';
import upic from './Img/upic.png';
import upic1 from './Img/upic1.png';
import upic2 from './Img/upic2.png';
import upic3 from './Img/upic3.png';
import upicLeft from './Img/upicLeft.png';
import upicRight from './Img/upicRight.png';

const Caccount = () => {

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [select, setSelect] = useState("SE");
  const onSelect = (code) => setSelect(code);

    const openDiv=()=>{
      setOpen(true);
    }
    const openCountry=()=>{
      setOpen1(true);
      setOpen(false);
    }
    const personalInfo=()=>{
      setOpen2(true);
      setOpen1(false);
    }
    const verifyIden=()=>{
      setOpen3(true);
      setOpen2(false);
    }
    const upPics=()=>{
      setOpen4(true);
      setOpen3(false);
    }
    const idCard=()=>{
      setOpen5(true);
      setOpen4(false);
    }
    const faceRecog=()=>{
      setOpen6(true);
      setOpen5(false);
    }
    const docSent=()=>{
      setOpen7(true);
      setOpen6(false);
    }

    // useEffect(() => {    
    //   return()=>{
    //     let btn = document.getElementById("login3-btn");
    //     btn.addEventListener('click', event => {
    //       document.body.style.overflowY= 'hidden';
    //     }); 
    //   }
    // }, [document.body.style.overflowY= 'hidden'])

    const customStyles = {
      indicatorContainer:base =>({
        ...base,
        color:'#08699B',
     }),
    };

  return (
    <div className='caccount'>
      <div className='caccount1row1'><img src={circles2}/></div>
      <div className='caccount1row2'><img src={circles1}/></div>
        <div className='logincol1'>
            <h4>Account Created</h4>
            <p>Please proceed to complete your account</p>
            <div className='login1btn'>
                <button><img src={icon}/><div><h6>Create your account</h6><p>Enter your account details</p></div></button>
                <button><img src={icon1}/><div><h6>Verify Identity</h6><p>Verify Identity to protect your account</p></div></button>
                <button><img src={icon2}/><div><h6>Unclock Prize</h6><p>Get your prize and start trading</p></div></button>
            </div>
            <button className='caccountvbtn' onClick={openDiv}>Verify</button>
        </div>

        <div className='logincol2'>
            <img src={binance11}/>
        </div>
        
        { open ? <>
          <div className='blurbackground'></div>
          <div className='logincol3'>
            <div className='rfpopupcol1'>
                <h5>Select your country of residence</h5>
                <button onClick={()=>setOpen(false)}><i class="fa-solid fa-xmark"></i></button>
            </div>
            <p className='login3p3'>Please proceed to complete your account Please proceed to complete your account</p>
                <ReactFlagsSelect className='search-flags'
                    selected={select}
                    onSelect={onSelect}
                    countries={["fi", "GB", "IE", "IT", "NL", "SE", 'PA', 'PK', 'IN', 'US', 'PG', 'PW', 'PQ', 
                    'NC', 'NF', 'NL', 'MY', 'MZ', 'MW', 'MX', 'MO', 'MP', 'MF', 'ML', 'LS', 'LT','LT',
                    'LS', 'LB', 'LA', 'FR', 'IT', 'DE']}
                    optionsSize={16}
                    selectButtonClassName="menu-flags-button"
                    searchable={true}
                    styles={customStyles}
                    classNamePrefix='myDropDown'
                   />
            <div className='login3row1'>
              <p className='login3p1'>Verification process</p>
              <div className='login3col1'>
                <img src={icon3}/>
                <p>Enter your accoun details</p>
              </div>
              <div className='login3col1'>
                <img src={icon4}/>
                <p>Verify identity to protect your account</p>
              </div>
              <div className='login3col1'>
                <img src={icon5}/>
                <p>Verify identity to protect your account</p>
              </div>
              <div className='login3col1'>
                <img src={icon8}/>
                <p>Review time 2 days</p>
              </div>
            </div>
            <div className='login3row1'>
              <p className='login3p1'>Guidance</p>
              <div className='login3col1'>
                <img src={icon7}/>
                <p><a href='#'>How to verify my identity</a></p>
              </div>
            </div>
            <button className='login3-btn' onClick={openCountry}>Verify</button>
        </div>
        </> : null}

        { open1 ? <>
          <div className='blurbackground'></div>
          <div className='logincol3'>
            <div className='rfpopupcol1'>
                <h5>Select your country of residence</h5>
                <button onClick={()=>setOpen1(false)}><i class="fa-solid fa-xmark"></i></button>
            </div>
            <p className='login3p3'>Please proceed to complete your account Please proceed to complete your account</p>
            <ReactFlagsSelect className='search-flags'
                    selected={select}
                    onSelect={onSelect}
                    countries={["fi", "GB", "IE", "IT", "NL", "SE", 'PA', 'PK', 'IN', 'US', 'PG', 'PW', 'PQ', 
                    'NC', 'NF', 'NL', 'MY', 'MZ', 'MW', 'MX', 'MO', 'MP', 'MF', 'ML', 'LS', 'LT','LT',
                    'LS', 'LB', 'LA', 'FR', 'IT', 'DE']}
                    optionsSize={16}
                    selectButtonClassName="menu-flags-button"
                    searchable={true}
                    styles={customStyles}
                    classNamePrefix='myDropDown'
                   />
            <div className='login3col33'>
              <p>Full name:</p>
              <input type='text' placeholder='Enter your name' required/>
            </div>
            <div className='login3col33'>
              <p>Date of birth:</p>
              <input type='text' placeholder='YYYY/MM/DD' required/>
            </div>
            <button className='login3-btn' onClick={personalInfo}>Continue</button>
        </div>
        </> : null}

        { open2 ? <>
          <div className='blurbackground'></div>
          <div className='logincol3'>
            <div className='rfpopupcol1'>
                <h5>Personal Information</h5>
                <button onClick={()=>setOpen2(false)}><i class="fa-solid fa-xmark"></i></button>
            </div>
            <p className='login3p3'> Additional Information </p>
            <ReactFlagsSelect className='search-flags'
                    selected={select}
                    onSelect={onSelect}
                    countries={["fi", "GB", "IE", "IT", "NL", "SE", 'PA', 'PK', 'IN', 'US', 'PG', 'PW', 'PQ', 
                    'NC', 'NF', 'NL', 'MY', 'MZ', 'MW', 'MX', 'MO', 'MP', 'MF', 'ML', 'LS', 'LT','LT',
                    'LS', 'LB', 'LA', 'FR', 'IT', 'DE']}
                    optionsSize={16}
                    selectButtonClassName="menu-flags-button"
                    searchable={true}
                    styles={customStyles}
                    classNamePrefix='myDropDown'
                   />
            <div className='login3col33'>
              <p>Residential Information:</p>
              <input type='text' placeholder='Enter your residential information'/>
            </div>
            <div className='login3col33sub'>
              <div className='login3col33'>
                <p>Full name:</p>
                <input type='text' placeholder='Enter name'/>
              </div>
              <div className='login3col33'>
                <p>Full name:</p>
                <input type='text' placeholder='Enter name'/>
              </div>
            </div>
            <div className='login3col33'>
              <p>Pan Card Number</p>
              <input type='number' placeholder='10 Digits' min="0" maxlength="10"/>
            </div>
            <div className='login3row1'>
              <p className='login3p1'>Guidance</p>
              <div className='login3col1'>
                <img src={icon7}/>
                <p><a href='#'>How to verify my identity</a></p>
              </div>
            </div>
            <button className='login3-btn' onClick={verifyIden}>Continue</button>
        </div>
        </> : null}

        { open3 ? <>
          <div className='blurbackground'></div>
          <div className='logincol3'>
            <div className='rfpopupcol1'>
                <h5>Verify Identity</h5>
                <button onClick={()=>setOpen3(false)}><i class="fa-solid fa-xmark"></i></button>
            </div>
            <p className='login3p3'>Verify identity to protect your account.</p>
            <p className='login3p3h3'>Use a valid government issued document</p>
            <p className='login3p32'>Only the following documents listed will be accepted. All other documents will be rejected.</p>
            <form className='login3radio3'>
              <button>Emirated ID <input type='radio'/></button>
              <button>Passport <input type='radio'/></button> 
            </form>         
            <button className='login3-btn' onClick={upPics}>Continue</button>
        </div>
        </> : null}

        { open4 ? <>
          <div className='blurbackground'></div>
          <div className='logincol3'>
            <div className='rfpopupcol1'>
                <h5>Verify Identity</h5>
                <button onClick={()=>setOpen4(false)}><i class="fa-solid fa-xmark"></i></button>
            </div>
            <p className='login3p3'>Verify identity to protect your account.</p>
            <p className='login3idcard3'>Upload your ID Card</p>
            <div className='login3pics3'>
              <div>
                <p>Front side:</p>
                <button><img src={upic}/>Take Photo</button>
              </div>
              <div>
                <p>Back side:</p>
                <button><img src={upic}/>Take Photo</button>
              </div>
            </div>
            <a href='#'>My device don’t have camera</a>   
            <div className='login3col33'>
              <p>ID Card Number:</p>
              <input type='number' placeholder='ID Card Number here'/>
            </div> 
            <div>
              <p className='login3point3'>Ensure mentioned points</p>
              <ul className='login3ul3'>
                <li>Readable clear and well lit</li>
                <li>Not reflective, Not blury</li>
                <li>No black and white images, No editing</li>
                <li>Document is placed against solid background</li>
              </ul>
            </div>
            <button className='login3-btn' onClick={idCard}>Continue</button>
        </div>
        </> : null}

        { open5 ? <>
          <div className='blurbackground'></div>
          <div className='logincol3'>
            <div className='rfpopupcol1'>
                <h5>Verify Identity</h5>
                <button onClick={()=>setOpen5(false)}><i class="fa-solid fa-xmark"></i></button>
            </div>
            <p className='login3p3'>Please proceed to complete your account Please proceed to complete your account</p>
            <img src={upic1} className='login3upic1'/>
            <div>
              <p className='login3point3'>You are about to upload your ID card. Please ensure that:</p>
              <ul className='login3ul3'>
                <li>This is your own government-issued document that is not expired</li>
                <li>Ths is an original document, not a scan or copy</li>
                <li>Remove any card holders or covers to avoid reflections or blur</li>
                <li>Place document against a solid-colored background</li>
              </ul>
            </div>
            <button className='login3-btn' onClick={faceRecog}>Continue</button>
        </div> 
        </> : null}

        { open6 ? <>
          <div className='blurbackground'></div>
          <div className='logincol3'>
            <div className='rfpopupcol1'>
                <h5>Face Recognization</h5>
                <button onClick={()=>setOpen6(false)}><i class="fa-solid fa-xmark"></i></button>
            </div>
            <p className='login3p3'>Please proceed to complete your account Please proceed to complete your account</p>
            <img src={upic2} className='login3upic2'/>
            <div>
              <p className='login3point3'>While Taking a selfie ensure that:</p>
              <ul className='login3ul3'>
                <li>Take a selfie of yourself with a neutral expression</li>
                <li>Make sure your face is visible,centered and your eyes are open</li>
                <li>Do not crop your ID or use screenshots of your ID</li>
                <li>Do not hide or alter parts of your face (No hats/beauti images/filters/headgears)</li>
              </ul>
            </div>
            <div className='login3rights3'>
              <div>
                <p>Front side:</p>
                <button><img src={upic2} className='login3right-upic2'/><p><img src={upic}/>Open Camera</p></button>
              </div>
              <div>
                <p>Right side selfie:</p>
                <button><img src={upicRight} className='login3right-upic2'/><p><img src={upic}/>Open Camera</p></button>
              </div>
              <div>
                <p>Left side selfie:</p>
                <button><img src={upicLeft} className='login3right-upic2'/><p><img src={upic}/>Open Camera</p></button>
              </div>
            </div>
            <button className='login3-btn' onClick={docSent}>Continue</button>
        </div>
        </> : null}
        
        { open7 ? <>
          <div className='blurbackground'></div>
          <div className='logincol3'>
            <div className='rfpopupcol1'>
                <h5>Documents Sent</h5>
                <button onClick={()=>setOpen7(false)}><i class="fa-solid fa-xmark"></i></button>
            </div>
            <p className='login3p3'>Your documents ahve been sent for review. we’ll get back to you in maximum 2 days.</p>
            <img src={upic3} className='login3upic3'/>
            <Link to="/dashboard3" style={{textDecoration: 'none', color: 'white'}}><button className='login3-btn'>Continue</button></Link>
        </div>
        </> : null}
    </div>
  )
}

export default Caccount