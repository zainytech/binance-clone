import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Waoverview.css';
import './Wafutures.css'

import waover from './Img/waover.png';
import waover1 from './Img/waover1.png';
import rect3 from './Img/rect3.png';
import future from './Img/future.png';

import Wasidebar from './Wasidebar';

const Waoverview = ( ) => {
    return(
        <>
            <div className='waoverview'>
                <Wasidebar/>	
                <Waoverviewsec/>		
            </div>
        </>
    );
}


const Waoverviewsec = () => {
    const [show, setShow] = useState(true);
    const [show1, setShow1] = useState(true);

    const showBalance = () => {
		setShow(!show);
	};

    const showBalance1 = () => {
		setShow1(!show1);
	};
    return(
        <>
           <div className='waoverview-sec'>
                    <h1>Wallet Overview</h1>
                    <div className='waoverview-sec-full'>
                        <div className='waoverviewsec-col1'>
                            <div className='waoverview-sec-col1-row1'>
                                <div>
                                    <h6>Estimated Balance</h6>
                                    <button onClick={showBalance}>
                                        {show ? (
                                            <i className="fa-solid fa-eye"></i>
                                        ) : (
                                            <i className="fa-solid fa-eye-slash"></i>
                                        )}
                                    </button>
                                </div>
                                {show ? (
                                        <h4>
                                            0.00BTC ≅ <span>$0.00000000</span>
                                        </h4>
                                ) : (
                                    <h4>*** Balance hidden ***</h4>
                                )}

                            </div>

                            <div className='waoverview-sec-col1-row2'>
                                    <div className='waoverview-sec-col1-row2-col'>
                                        <p>Fund Your Wallet</p>
                                        <a href='#guide'>Skip Guide</a>
                                    </div>
                                    <p>Binance supports multiple options to fund your account. Find a method that suits you the best.</p>
                            </div>

                            <div className='waoverview-sec-col1-row3'>
                                <div className='waoverview-sec-col1-row3-full'>
                                    <img src={waover1} className='waoverview-sec-col1-row3-img'/>
                                    <div className='waoverview-sec-col1-row3-col'>
                                        <div>
                                            <div className='waoverview-sec-col1-row3-hot'>HOT</div>
                                            <div className='waoverview-sec-col1-row3-weight'>Buy Crypto</div>
                                            <a>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-ivry7e"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 12a9 9 0 1118 0 9 9 0 01-18 0zm8.934 3.5H10v-7h1.934L16 12l-4.066 3.5z" fill="currentColor"></path></svg>
                                            <p>Video Tutorial</p>
                                            </a>
                                        </div>
                                        <p>Buy crypto directly with cash, hassle-free and suggested for new users.</p>
                                    </div>
                                </div>
                                <button className='waoverview-sec-col1-row3-button'>Buy</button>
                            </div>
                            <div className='waoverview-sec-col1-row3'>
                                <div className='waoverview-sec-col1-row3-full'>
                                    <img src={waover} className='waoverview-sec-col1-row3-img'/>
                                    <div className='waoverview-sec-col1-row3-col'>
                                        <div>
                                            <div className='waoverview-sec-col1-row3-weight'>Crypto Deposit</div>
                                            <a>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-ivry7e"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 12a9 9 0 1118 0 9 9 0 01-18 0zm8.934 3.5H10v-7h1.934L16 12l-4.066 3.5z" fill="currentColor"></path></svg>
                                            <p>Video Tutorial</p>
                                            </a>
                                        </div>
                                        <p>Conveniently deposit crypto from another account to your Binance account.</p>
                                    </div>
                                </div>
                                <button className='waoverview-sec-col1-row3-button1'>Deposit</button>
                            </div>
                            <div className='waoverview-sec-col1-row3'>
                                <div className='waoverview-sec-col1-row3-full'>
                                    <img src={waover1} className='waoverview-sec-col1-row3-img'/>
                                    <div className='waoverview-sec-col1-row3-col'>
                                        <div>
                                            <div className='waoverview-sec-col1-row3-weight'>Fiat Deposit</div>
                                        </div>
                                        <p>Deposit fiat currency (e.g. EUR, AUD, etc.) from a bank account to Binance.</p>
                                    </div>
                                </div>
                                <button className='waoverview-sec-col1-row3-button1'>Deposit</button>
                            </div>
                            <div className='waoverview-sec-col1-row4'>
                                <div className='waoverview-sec-col1-row4-col1'>
                                    <p>My Assets</p>
                                    <div>
                                        <input type="checkbox" onClick={showBalance1}/>
                                        <label for="balance1"> Hide 0 Balance Wallets</label>
                                    </div>
                                </div>
                                { show1 ?  <>
                                <div className='waoverview-sec-col1-row4-col2'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 3.5a5.502 5.502 0 00-5.302 4.032 7.502 7.502 0 016.77 6.77A5.502 5.502 0 0015 3.5zM14.5 15a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-8 0L9 17.5l2.5-2.5L9 12.5 6.5 15zM9 4H4v5l5-5zm11 16h-5l5-5v5z" fill="currentColor"></path></svg>
                                        <p>Fiat and Sport</p>
                                    </div>
                                    <div className='waoverview-sec-col1-row4-col2-flex'>
                                        <p>0.00000000BTC</p>
                                        <img src={rect3}/>
                                    </div>
                                </div>
                                <div className='waoverview-sec-col1-row4-col2'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-4l4 4-4 4-4-4 4-4z" fill="currentColor"></path></svg>
                                        <p>Funding</p>
                                    </div>
                                    <div  className='waoverview-sec-col1-row4-col2-flex'>
                                        <p>0.00000000BTC</p>
                                        <img src={rect3}/>
                                    </div>
                                </div>  
                                </> : null }
                                
                            </div>
                            <div className='waoverview-sec-col1-row5'>
                                <div className='waoverview-sec-col1-row4-col1'>
                                    <p>NFTs</p>
                                </div>
                                <div className='waoverview-sec-col1-row5-col'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-1rurn1s"><path fill="#76808F" d="M46 57h4v31h-4z"></path><path d="M42 48c0-17.673 14.327-32 32-32h2v21c0 17.673-14.327 32-32 32h-2V48z" fill="url(#cooling-period-light_svg__paint0_linear_22059_28251)"></path><path d="M54 48c0-17.673-14.327-32-32-32h-2v21c0 17.673 14.327 32 32 32h2V48z" fill="url(#cooling-period-light_svg__paint1_linear_22059_28251)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M48 8l8.686 8.686A52.284 52.284 0 0172 53.656L50 72h-4L24 53.657a52.284 52.284 0 0115.314-36.97L48 8z" fill="#E6E8EA"></path><path d="M50 57c0-17.673 14.327-32 32-32h2v15c0 17.673-14.327 32-32 32h-2V57z" fill="url(#cooling-period-light_svg__paint2_linear_22059_28251)"></path><path d="M46 57c0-17.673-14.327-32-32-32h-2v15c0 17.673 14.327 32 32 32h2V57z" fill="url(#cooling-period-light_svg__paint3_linear_22059_28251)"></path><path d="M8 57c0 10.493 8.507 19 19 19h19v-4c0-8.284-6.716-15-15-15H8zM88 57c0 10.493-8.507 19-19 19H50v-4c0-8.284 6.716-15 15-15h23z" fill="#76808F"></path><path d="M73 92c-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15z" fill="url(#cooling-period-light_svg__paint4_linear_22059_28251)"></path><path d="M74.502 86h-3v-3h3v3zM71.502 80V68h3v12h-3z" fill="#14151A"></path><defs><linearGradient id="cooling-period-light_svg__paint0_linear_22059_28251" x1="55" y1="37" x2="76" y2="16" gradientUnits="userSpaceOnUse"><stop stop-color="#FAFAFA"></stop><stop offset="1" stop-color="#E6E8EA"></stop></linearGradient><linearGradient id="cooling-period-light_svg__paint1_linear_22059_28251" x1="41" y1="37" x2="20" y2="16" gradientUnits="userSpaceOnUse"><stop stop-color="#FAFAFA"></stop><stop offset="1" stop-color="#E6E8EA"></stop></linearGradient><linearGradient id="cooling-period-light_svg__paint2_linear_22059_28251" x1="67" y1="25" x2="67" y2="64" gradientUnits="userSpaceOnUse"><stop stop-color="#76808F"></stop><stop offset="1" stop-color="#929AA5"></stop></linearGradient><linearGradient id="cooling-period-light_svg__paint3_linear_22059_28251" x1="29" y1="25" x2="29" y2="64" gradientUnits="userSpaceOnUse"><stop stop-color="#76808F"></stop><stop offset="1" stop-color="#929AA5"></stop></linearGradient><linearGradient id="cooling-period-light_svg__paint4_linear_22059_28251" x1="58" y1="77" x2="88" y2="77" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>
                                    <div>
                                        <p>Unlock your NFT wealth</p>
                                        <button>Explore Binance NFT</button>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className='waoverview-sec-col2'>
                            <div className='waoverview-sec-col2-2p'>
                                <div>Recent Transactions</div>
                                <div>View All</div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-1c070tq"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 8H26v80h58V28H64V8zM36 37h38v4H36v-4zm0 9h38v4H36v-4zm38 9H36v4h38v-4zm-8 12l4 4-4 4-4-4 4-4zM50 18l-3 3 3 3 3-3-3-3z" fill="url(#not-found-data_svg__paint0_linear_22059_32288)"></path><path opacity="0.3" d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z" fill="#929AA5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z" fill="url(#not-found-data_svg__paint1_linear_22059_32288)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z" fill="url(#not-found-data_svg__paint2_linear_22059_32288)"></path><defs><linearGradient id="not-found-data_svg__paint0_linear_22059_32288" x1="55" y1="8" x2="55" y2="88" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5" stop-opacity="0.1"></stop><stop offset="1" stop-color="#929AA5" stop-opacity="0.25"></stop></linearGradient><linearGradient id="not-found-data_svg__paint1_linear_22059_32288" x1="4.172" y1="68.75" x2="24.328" y2="68.75" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="not-found-data_svg__paint2_linear_22059_32288" x1="15" y1="48" x2="55" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg>
                            <div className='waoverview-sec-col2-trans'>
                                <div>No recent transactions</div>
                                <div>Deposit hasn't arrived ? <a href='#'>Click here</a></div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
}


export {Waoverviewsec, Waoverview};

