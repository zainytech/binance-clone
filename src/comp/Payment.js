import React, { useState } from 'react'
import './Payment.css';

import '../Components/Sidebar'
import Sidebar from '../Components/Sidebar';


const Payment = () => {
    const [show, setShow] = useState(1);

  return (
    <div className='payment'>
        <div className='payment-second'>
            <Sidebar/>
        </div>
        <div className='payment-first'>
            <div>
                <h2>Payment</h2>
            </div>
            <div className='pay2'>
                <button className='buttons-btn1' onClick={()=>setShow(1)}>P2P</button>
                <button className='buttons-btn1' onClick={()=>setShow(2)}>Buy Crypto</button>
            </div>


            { show === 1 && (
                <div className= 'p2p'>
                <p>P2P payment methods: When you sell cryptocurrencies, the payment method added will be displayed to buyer as options to accept payment, please ensure that the account owner’s name is consistent with your verified name on Binance. You can add up to 20 payment methods.</p>
                <button>+ Add a payment method</button>
            </div>
            )}

            {
                show === 2 && (
                    <div className= 'crypto'>
                        <p>
                            Manage the payment method of your credit and debit card on the buy crypto page
                        </p>
                    </div> 
                )
            }
    
            <div className='searchg'>
                <div>
                    <i class="fa-brands fa-searchengin"></i>
                </div>
                <p>You have not added any payment methods</p>
            </div>
            
        </div>
    </div>
  )
}

export default Payment