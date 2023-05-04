import React from 'react'
import './Idnpx.css';
import { useState } from 'react';

import rectangle1 from './Img/Rectangle462.png';
import binance2 from './Img/binance2.png';
import binance1 from './Img/binance1.png';
import binance3 from './Img/binance3.png';


const Idnp = () => {

    const [data, setData] = useState('');
    const [data1, setData1] = useState("");
    const [data2, setData2] = useState("");
    const [data3, setData3] = useState("");
    const [data4, setData4] = useState("");
    const [data5, setData5] = useState("");
    const [data6, setData6] = useState("");

  return (
    <div className='domain'>
        <div className='dom-row1'>
            <div className='dom1-col1'>
                <h2>Pay and get paid with crypto</h2>
                <h2>Welcome to the #CryptoLifestyle</h2>
                <p>Binance Futures is launching a new promotion where all eligible users can share a total rewards pool of up to 20,000 BUSD! The first 2,000 eligible users who create a futures grid strategy for the first time will be eligible to win a 5 BUSD Futures Bonus Voucher. Top 20 eligible users will be ranked based on their trading volume on the futures grid strategy to share a dynamic prize pool that goes up to 10,000 BUSD in Futures Bonus Voucher</p>
                <div>
                    <button>Shop Now</button>
                    <button>Download Now</button>
                </div>
            </div>
            <div className='dom1-col2'>
                <img src={rectangle1} alt='dashboard rectangle'/>
            </div>
        </div>

        <div className='dom-row2'>
            <div className='dom2h'><h1>Introducing  <span> domain name </span>  pay</h1></div>
            <div className='dom2col'>
                <div className='dom2-rec'>
                    <div className='dom2-img'></div>
                    <div className='dom2-data'>
                        <h2>New: Trade Bitcoin for free</h2>
                        <p>0 trading fee on selected Bitcoin (BTC) spot trading pairs now</p>
                    </div>
                </div>  
                <div className='dom2-rec'>
                    <div className='dom3-img'></div>
                    <div className='dom3-data'>
                        <h2>New: Trade Bitcoin for free</h2>
                        <p>0 trading fee on selected Bitcoin (BTC) spot trading pairs now</p>
                        <a href='#'><h6>Shop Now</h6></a>                   
                    </div>
                </div> 
                <div className='dom2-rec'>
                    <div className='dom2-img'></div>
                    <div className='dom2-data'>
                        <h2>New: Trade Bitcoin for free</h2>
                        <p>0 trading fee on selected Bitcoin (BTC) spot trading pairs now</p>
                        <a href='#'><h6>Send Crypto</h6></a> 
                    </div>
                </div>                 
            </div>
        </div>

        <div className='dom-row3'>
            <div className='dom3h'><h1>Introducing  <span> domain name </span>  pay</h1></div>
            <div className='dom5grid'>
                <div className='trade5col'>
                    <img src={binance2} alt='Broker Partners'/>
                    <h6>Market Update (2022-08-10)</h6>
                    <p>Binance Futures is launching a new promotion where all eligible users can share a total rewards </p>
                    <button>Read Now</button>
                </div>
                <div className='trade5col'>
                    <img src={binance2} alt='Broker Partners'/>
                    <h6>Market Update (2022-08-10)</h6>
                    <p>Binance Futures is launching a new promotion where all eligible users can share a total rewards </p>
                    <button>Read Now</button>
                </div>
                <div className='trade5col'>
                    <img src={binance2} alt='Broker Partners'/>
                    <h6>Market Update (2022-08-10)</h6>
                    <p>Binance Futures is launching a new promotion where all eligible users can share a total rewards </p>
                    <button>Read Now</button>
                </div>
           </div>
        </div>

        <div className='domrow4 hidedata'>
            <div className='dom4col1'>
                <h4>get pay for your business</h4>
                <p>Binance Futures is launching a new promotion where all eligible users can share a total rewards pool of up to 20,000 BUSD! The first 2,000 eligible users who create a futures grid strategy for the first time will be eligible to win a 5 BUSD Futures Bonus Voucher. Top 20 eligible users will be ranked based on their trading volume on the futures grid strategy to share a dynamic prize pool that goes up to 10,000 BUSD in Futures Bonus Voucher</p>
                <button className='dom-btn'>Learn More</button>
            </div>
            <div className='dom4col2'>
                <img src={binance3} alt='binance futures trading' className='dombin3'/>
            </div>
        </div>

        <div className='traderow4 trade4rres'>
                <div className='trade4col2 trade4c2res'>
                    <img src={binance1} alt='binance futures trading'/>
                </div>
                <div className='trade4col1 trade4c1res'>
                    <h4>get pay for your business</h4>
                    <p>Binance Futures is launching a new promotion where all eligible users can share a total rewards pool of up to 20,000 BUSD! The first 2,000 eligible users who create a futures grid strategy for the first time will be eligible to win a 5 BUSD Futures Bonus Voucher. Top 20 eligible users will be ranked based on their trading volume on the futures grid strategy to share a dynamic prize pool that goes up to 10,000 BUSD in Futures Bonus Voucher</p>
                    <button className='dom-btn'>Get Started</button>
                </div>
            </div>

        <div className='domrow6'>
            <h2>Blog</h2>
            <div className='dom6flex'>
              <p>Latest Articles</p>
              <p>Futures 101</p>
              <p>Futures Decrypted</p>
              <p>Futures Activities</p>
              <p>Future Analysis</p>
              <p>Crypto Futures Overview</p>
            </div>
            <div className='dom5grid'>
                <div className='trade5col'>
                    <img src={binance2} alt='Broker Partners'/>
                    <h6>Market Update (2022-08-10)</h6>
                    <p>Binance Futures is launching a new promotion where all eligible users can share a total rewards </p>
                    <button>Read Now</button>
                </div>
                <div className='trade5col'>
                    <img src={binance2} alt='Broker Partners'/>
                    <h6>Market Update (2022-08-10)</h6>
                    <p>Binance Futures is launching a new promotion where all eligible users can share a total rewards </p>
                    <button>Read Now</button>
                </div>
                <div className='trade5col'>
                    <img src={binance2} alt='Broker Partners'/>
                    <h6>Market Update (2022-08-10)</h6>
                    <p>Binance Futures is launching a new promotion where all eligible users can share a total rewards </p>
                    <button>Read Now</button>
                </div>
           </div>
        </div>

        <div className='domrow5'>
            <div className='traderow4'>
                <div className='trade4col2'>
                    <img src={binance1} alt='binance futures trading'/>
                </div>
                <div className='trade4col1'>
                    <h4>get pay for your business</h4>
                    <p>Binance Futures is launching a new promotion where all eligible users can share a total rewards pool of up to 20,000 BUSD! The first 2,000 eligible users who create a futures grid strategy for the first time will be eligible to win a 5 BUSD Futures Bonus Voucher. Top 20 eligible users will be ranked based on their trading volume on the futures grid strategy to share a dynamic prize pool that goes up to 10,000 BUSD in Futures Bonus Voucher</p>
                    <button className='dom-btn'>Get Started</button>
                </div>
            </div>

            <div className='traderow4'>
                <div className='trade4col1'>
                    <h4>get pay for your business</h4>
                    <p>Binance Futures is launching a new promotion where all eligible users can share a total rewards pool of up to 20,000 BUSD! The first 2,000 eligible users who create a futures grid strategy for the first time will be eligible to win a 5 BUSD Futures Bonus Voucher. Top 20 eligible users will be ranked based on their trading volume on the futures grid strategy to share a dynamic prize pool that goes up to 10,000 BUSD in Futures Bonus Voucher</p>
                    <button className='dom-btn'>Get Started</button>
                </div>
                <div className='trade4col2'>
                    <img src={binance1} alt='binance futures trading'/>
                </div>
            </div>

            <div className='traderow4'>
                <div className='trade4col2'>
                    <img src={binance1} alt='binance futures trading'/>
                </div>
                <div className='trade4col1'>
                    <h4>get pay for your business</h4>
                    <p>Binance Futures is launching a new promotion where all eligible users can share a total rewards pool of up to 20,000 BUSD! The first 2,000 eligible users who create a futures grid strategy for the first time will be eligible to win a 5 BUSD Futures Bonus Voucher. Top 20 eligible users will be ranked based on their trading volume on the futures grid strategy to share a dynamic prize pool that goes up to 10,000 BUSD in Futures Bonus Voucher</p>
                    <button className='dom-btn'>Get Started</button>
                </div>
            </div>

            <div className='traderow4'>
                <div className='trade4col1'>
                    <h4>get pay for your business</h4>
                    <p>Binance Futures is launching a new promotion where all eligible users can share a total rewards pool of up to 20,000 BUSD! The first 2,000 eligible users who create a futures grid strategy for the first time will be eligible to win a 5 BUSD Futures Bonus Voucher. Top 20 eligible users will be ranked based on their trading volume on the futures grid strategy to share a dynamic prize pool that goes up to 10,000 BUSD in Futures Bonus Voucher</p>
                    <button className='dom-btn'>Get Started</button>
                </div>
                <div className='trade4col2'>
                    <img src={binance1} alt='binance futures trading'/>
                </div>
            </div>
        </div>

        <div className='domrow7'>
            <h5>People Also Ask: Other Questions About Bitcoin</h5>
            <div className='dom7row1'>
                <div className='bitcoin'>
                    <button className='bit1' onClick={()=>setData(!data)}>
                        { data ? <i class="fa-solid fa-minus"></i> : 
                        <i class="fa-solid fa-plus"></i> 
                        } 
                        <p>How Many Bitcoins Are There?</p>                        
                    </button>
                    {data ? <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    : null}
                </div>

                <div className='bitcoin'>
                    <button className='bit1' onClick={()=>setData1(!data1)}>
                        { data1 ? <i class="fa-solid fa-minus"></i> : 
                        <i class="fa-solid fa-plus"></i> 
                        } 
                        <p>Question</p>                        
                    </button>
                    {data1 ? <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    : null}
                </div>

                <div className='bitcoin'>
                    <button className='bit1' onClick={()=>setData2(!data2)}>
                        { data2 ? <i class="fa-solid fa-minus"></i> : 
                        <i class="fa-solid fa-plus"></i> 
                        } 
                        <p>Question</p>                        
                    </button>
                    {data2 ? <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    : null}
                </div>

                <div className='bitcoin'>
                    <button className='bit1' onClick={()=>setData3(!data3)}>
                        { data3 ? <i class="fa-solid fa-minus"></i> : 
                        <i class="fa-solid fa-plus"></i> 
                        } 
                        <p>Question</p>                        
                    </button>
                    {data3 ? <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    : null}
                </div>

                <div className='bitcoin'>
                    <button className='bit1' onClick={()=>setData4(!data4)}>
                        { data4 ? <i class="fa-solid fa-minus"></i> : 
                        <i class="fa-solid fa-plus"></i> 
                        } 
                        <p>Question</p>                        
                    </button>
                    {data4 ? <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    : null}
                </div>

                <div className='bitcoin'>
                    <button className='bit1' onClick={()=>setData5(!data5)}>
                        { data5 ? <i class="fa-solid fa-minus"></i> : 
                        <i class="fa-solid fa-plus"></i> 
                        } 
                        <p>Question</p>                        
                    </button>
                    {data5 ? <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    : null}
                </div>
            </div>
        </div>

        <div className='domrow8'>
            <h5>Start Earning Today</h5>
            <button>Sign Up</button>
        </div>

    </div>
  )
}

export default Idnp