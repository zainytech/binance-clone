import React from 'react'
import './Deposit.css';
import { useState } from 'react';

import currency from './assets/currency.png';
import bank1 from './assets/bank1.png';
import deposit1 from './assets/deposit1.png';
import deposit2 from './assets/deposit2.png';
import deposit3 from './assets/deposit3.png';


const Deposit = () => {

  const [data, setData] = useState('');
  const [data1, setData1] = useState("");

  return (
    <div className='deposit'>
      <div className='depo-row1'>
        <div>
          <h3>Deposit Fiat</h3>
          <button>Order History<i class="fa-solid fa-arrow-right"></i></button>
        </div>
        <button>Deposit Crypto<i class="fa-solid fa-arrow-right"></i></button>
      </div>

      <div className='depo-row2'>
        <div className='dprow-col1'>
          <h6>1. Select Currency</h6>
          <div className='dprowbtn'>
            <div className='dprowbtn1'>
              <p>Currency</p>
              <button>
                <div>
                  <img src={currency} alt='currency'/>
                  <p>EURO</p>
                </div>
                <i class="fa-sharp fa-solid fa-greater-than"></i>
              </button>
            </div>
            <div className='dprowbtn2'>
              <p>Deposit with</p>
              <div>
                <button>Recommended</button>
                <button>Other Methods</button>
              </div>
            </div>
            <div className='dprowbtn3'>
              <input type="radio" id="bank" name="bank" value="bank"/>
              <img src={bank1} alt='bank' className='bankimg1'/>
              <div>
                <h6>Bank Card(Visa/MC)</h6>
                <p>1.8% Transaction Fee</p>
              </div>
            </div>
          </div>
          <button className='conbtn'>Continue</button>
          <div className='dprowbtn4'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-marlfd"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 16V4h16v12l-8 5-8-5zm10-6.24a2 2 0 01-1 1.732v2.506h-2v-2.506a2 2 0 113-1.732z" fill="currentColor"></path></svg>
            <p>The deposit with card service is powered by Bifinity UAB (Company Registration Number: 305595206, registered office address: Didžioji g. 18, Vilnius, Lithuania).</p>
          </div>
        </div>

        <div className='dprow-col2'>
          <p>Appeal</p>
          <div className='dprow-faq'><h6>FAQ</h6><button>View More</button></div>
          <button onClick={()=>setData(!data)} className='col2-btn'>
            <p>How to deposit fiat with Credit/Debit Card?</p>
            { data ? <svg aria-hidden="true" class="svg-icon iconArrowDownLg css-18aifpu" width="36" height="36" viewBox="0 0 36 36"><path d="M2 11h32L18 27 2 11Z"></path></svg>: 
              <svg aria-hidden="true" class="svg-icon iconArrowUpLg css-18aifpu" width="36" height="36" viewBox="0 0 36 36" ><path d="M2 25h32L18 9 2 25Z"></path></svg>
            } 
          </button>
          {data ? <a href='#'>Show Details</a> : null}
          <button onClick={()=>setData1(!data1)} className='col2-btn'>
            <p>How long does the deposit take?</p>
            { data1 ? <svg aria-hidden="true" class="svg-icon iconArrowDownLg css-18aifpu" width="36" height="36" viewBox="0 0 36 36"><path d="M2 11h32L18 27 2 11Z"></path></svg>: 
              <svg aria-hidden="true" class="svg-icon iconArrowUpLg css-18aifpu" width="36" height="36" viewBox="0 0 36 36" ><path d="M2 25h32L18 9 2 25Z"></path></svg>
            } 
          </button>
          {data1 ? <p className='col2p'>Usually within 5 minutes. It could take up to 24 hours on some occasions.</p> : null}
        </div>
      </div>

      <div className='depo-ro3'>
         <h4>Fund Your Account with Fiat Currencies</h4> 
         <div>
            <img src={deposit1} alt='trader'/>
            <h6>Easy for both new & experienced trader</h6>
            <p>You will find that our fiat currency funding options make for a seamless experience that will have you trading in as little as 24 hours from the time of your deposit.</p>
         </div>
         <div>
            <img src={deposit2} alt='trader'/>
            <h6>Easy for both new & experienced trader</h6>
            <p>You will find that our fiat currency funding options make for a seamless experience that will have you trading in as little as 24 hours from the time of your deposit.</p>
         </div>
         <div>
            <img src={deposit3} alt='trader'/>
            <h6>Easy for both new & experienced trader</h6>
            <p>You will find that our fiat currency funding options make for a seamless experience that will have you trading in as little as 24 hours from the time of your deposit.</p>
         </div>
      </div>


    </div>
  )
}

export default Deposit