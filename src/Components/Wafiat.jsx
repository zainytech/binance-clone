import React, {useState} from 'react';
import './Wafiat.css';

import rect3 from './Img/rect3.png';
import waover from './Img/waover.png';
import waover1 from './Img/waover1.png';
import reward from './Img/reward.png';
import over1 from './Img/over1.png';
import over2 from './Img/over2.png';
import over3 from './Img/over3.png';
import over4 from './Img/over4.png';
import over5 from './Img/over5.png';
import over6 from './Img/over6.png';
import over7 from './Img/over7.png';
import over8 from './Img/over8.png';
import over9 from './Img/over9.png';
import over10 from './Img/over10.png';
import over11 from './Img/over11.png';
import over12 from './Img/over12.png';
import over13 from './Img/over13.png';
import over14 from './Img/over14.png';
import Wasidebar from './Wasidebar';

const Wafiat = () => {
    return(
        <>
           <div className='wafiat'>
                <Wasidebar/>
                <Wafiatfirst/>
           </div>
        </>
    );
}

const Wafiatfirst = () => {
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
            <div className='wafiat-first'>
                    <div className='wafiat-first-col1'>
                        <h3>Fiat and Sport</h3>
                        <div className='wafiat-first-col1-scrollsec'>
                            <div className='wafiat-first-col1-scroll'>
                                <button>Deposit</button>
                                <button>Withdraw</button>
                                <button>Send</button>
                                <button>Transfer</button>
                                <button>Transaction History</button>
                                <button>Wallet Direct</button>
                            </div>
                        </div>
                    </div>
                    <div className='wafiat-first-col2'>
                        <div className='wafiat-first-col2-row1'>
                            <div>Estimated Balance</div>
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
                                0.00BTC ≅ <span className='wafiat-first-col2-row2-color'>$0.00000000</span>
                            </h4>
                            ) : (
                            <h4>*** Balance hidden ***</h4>
                        )}
                        <div className='wafiat-first-col2-row2'>
                             <div>
                                <p>Spot balance</p>
                                { show ? (<><h5>0.00000000BTC</h5>
                                <div className='wafiat-first-col2-row2-color'>≈ $0.00000000</div> </>) : (<><h5>********</h5>
                                <div>********</div></>)}                               
                             </div>
                             <div>
                                <p>Fiat balance</p>
                                { show ? (<><h5>0.00000000BTC</h5>
                                <div className='wafiat-first-col2-row2-color'>≈ $0.00000000</div> </>) : (<><h5>********</h5>
                                <div>********</div></>)}                                 
                             </div>
                             <div>
                                <div className='wafiat-first-col2-row2--last-flex'>Today's PNL <img src={rect3}/></div>
                                { show ? (<><h5>-- --</h5>
                                <div>-- --</div> </>) : (<><h5>********</h5>
                                <div>********</div></>)}                                 
                             </div> 
                        </div>
                    </div>
                    <hr className='wafiat-hr1'/>  
                    <div className='wafiat-first-col3'>
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
                    </div>

                    <div className='wafiat-first-col4'>
                        <div className='wafiat-first-col4-tab-row2'>
                            <div className='wafiat-first-col4-row1'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1t3tnrj"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 6a5 5 0 110 10 5 5 0 010-10zm0-3a8 8 0 017.021 11.838l3.07 3.07-1.59 1.591-1.591 1.591-3.07-3.07A8 8 0 1111 3z" fill="currentColor"></path></svg>
                                    <input type='text' placeholder='Search Coin'/>
                                </div>
                                <div>
                                    <input type="checkbox" onClick={showBalance1}/>
                                    <label for="balance1"> Hide Small Balances</label>
                                </div>
                                <a href='#'>Convert Small Balance to BNB</a>
                                <a href='#'>Auto-Invest</a>
                            </div>
                            <div className='wafiat-first-col4-row2'>
                                <div className='wafiat-first-col4-row3-col1-div1'>
                                    <div>Coin</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-czxcdk"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 8.849V10.5h6.5V8.85L12 5.348l-3.25 3.5zm6.5 6.303V13.5h-6.5v1.652l3.25 3.5 3.25-3.5z" fill="currentColor"></path></svg>
                                </div>
                                <div className='wafiat-first-col4-row3-col1-div2'>
                                    <div>Total</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-czxcdk"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 8.849V10.5h6.5V8.85L12 5.348l-3.25 3.5zm6.5 6.303V13.5h-6.5v1.652l3.25 3.5 3.25-3.5z" fill="currentColor"></path></svg>
                                </div>
                                <div className='wafiat-first-col4-row3-col1-div3'>
                                    <div>Available</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-czxcdk"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 8.849V10.5h6.5V8.85L12 5.348l-3.25 3.5zm6.5 6.303V13.5h-6.5v1.652l3.25 3.5 3.25-3.5z" fill="currentColor"></path></svg>
                                </div>
                                <div className='wafiat-first-col4-row3-col1-div4'>
                                    <div>In Order</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-czxcdk"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 8.849V10.5h6.5V8.85L12 5.348l-3.25 3.5zm6.5 6.303V13.5h-6.5v1.652l3.25 3.5 3.25-3.5z" fill="currentColor"></path></svg>
                                </div>
                                <div className='wafiat-first-col4-row3-col1-div5'>
                                    <div>BTC Value</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-czxcdk"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 8.849V10.5h6.5V8.85L12 5.348l-3.25 3.5zm6.5 6.303V13.5h-6.5v1.652l3.25 3.5 3.25-3.5z" fill="currentColor"></path></svg>
                                </div>
                                <div className='wafiat-first-col4-row3-col1-last'>
                                    <div>Action</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-czxcdk"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 8.849V10.5h6.5V8.85L12 5.348l-3.25 3.5zm6.5 6.303V13.5h-6.5v1.652l3.25 3.5 3.25-3.5z" fill="currentColor"></path></svg>
                                </div>
                            </div>
                            { show1 ? <div className='wafiat-first-col4-row3'>
                                <div className='wafiat-first-col4-row3-col1'>
                                    <div className='wafiat-first-col4-row3-col1-div1'>
                                        <img src={over1}/>
                                        <div>
                                            <h6>BTC</h6>
                                            <a>Bitcoin</a>
                                        </div>
                                    </div>
                                    <div className='wafiat-first-col4-row3-col1-div2'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div3'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div4'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div5'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-last'>
                                        <button>Buy</button>
                                        <button>Sell</button>
                                        <button>Deposit</button>
                                        <button>Withdraw</button>
                                        <button>Trade</button>
                                        <button>Earn</button>
                                        <button>Convert</button>
                                    </div>
                                </div>

                                <div className='wafiat-first-col4-row3-col1'>
                                    <div className='wafiat-first-col4-row3-col1-div1'>
                                        <img src={over2}/>
                                        <div>
                                            <h6>ETH</h6>
                                            <a>Ethereum</a>
                                        </div>
                                    </div>
                                    <div className='wafiat-first-col4-row3-col1-div2'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div3'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div4'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div5'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-last'>
                                        <button>Buy</button>
                                        <button>Sell</button>
                                        <button>Deposit</button>
                                        <button>Withdraw</button>
                                        <button>Trade</button>
                                        <button>Earn</button>
                                        <button>Convert</button>
                                    </div>
                                </div>

                                <div className='wafiat-first-col4-row3-col1'>
                                    <div className='wafiat-first-col4-row3-col1-div1'>
                                        <img src={over3}/>
                                        <div>
                                            <h6>BNB</h6>
                                            <a>BNB</a>
                                        </div>
                                    </div>
                                    <div className='wafiat-first-col4-row3-col1-div2'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div3'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div4'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div5'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-last'>
                                        <button>Buy</button>
                                        <button>Sell</button>
                                        <button>Deposit</button>
                                        <button>Withdraw</button>
                                        <button>Trade</button>
                                        <button>Earn</button>
                                        <button>Convert</button>
                                    </div>
                                </div>

                                <div className='wafiat-first-col4-row3-col1'> 
                                    <div className='wafiat-first-col4-row3-col1-div1'>
                                        <img src={over4}/>
                                        <div>
                                            <h6>BUSD</h6>
                                            <a>BUSD</a>
                                        </div>
                                    </div>
                                    <div className='wafiat-first-col4-row3-col1-div2'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div3'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div4'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div5'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-last'>
                                        <button>Buy</button>
                                        <button>Sell</button>
                                        <button>Deposit</button>
                                        <button>Withdraw</button>
                                        <button>Trade</button>
                                        <button>Earn</button>
                                        <button>Convert</button>
                                    </div>
                                </div>

                                <div className='wafiat-first-col4-row3-col1'>
                                    <div className='wafiat-first-col4-row3-col1-div1'>
                                        <img src={over5}/>
                                        <div>
                                            <h6>USTD</h6>
                                            <a>TetherUS</a>
                                        </div>
                                    </div>
                                    <div className='wafiat-first-col4-row3-col1-div2'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div3'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div4'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div5'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-last'>
                                        <button>Buy</button>
                                        <button>Sell</button>
                                        <button>Deposit</button>
                                        <button>Withdraw</button>
                                        <button>Trade</button>
                                        <button>Earn</button>
                                        <button>Convert</button>
                                    </div>
                                </div>

                                <div className='wafiat-first-col4-row3-col1'>
                                    <div className='wafiat-first-col4-row3-col1-div1'>
                                        <img src={over6}/>
                                        <div>
                                            <h6>1INCH</h6>
                                            <a>1inch</a>
                                        </div>
                                    </div>
                                    <div className='wafiat-first-col4-row3-col1-div2'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div3'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div4'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div5'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-last'>
                                        <button>Buy</button>
                                        <button>Sell</button>
                                        <button>Deposit</button>
                                        <button>Withdraw</button>
                                        <button>Trade</button>
                                        <button>Earn</button>
                                        <button>Convert</button>
                                    </div>
                                </div>

                                <div className='wafiat-first-col4-row3-col1'>
                                    <div className='wafiat-first-col4-row3-col1-div1'>
                                        <img src={over7}/>
                                        <div>
                                            <h6>1INCHDOWN</h6>
                                            <a>1INCHDOWN</a>
                                        </div>
                                    </div>
                                    <div className='wafiat-first-col4-row3-col1-div2'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div3'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div4'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div5'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-last'>
                                        <button>Buy</button>
                                        <button>Subscribe</button>
                                        <button>Redeem</button>
                                    </div>
                                </div>

                                <div className='wafiat-first-col4-row3-col1'>
                                    <div className='wafiat-first-col4-row3-col1-div1'>
                                        <img src={over8}/>
                                        <div>
                                            <h6>1INCHUP</h6>
                                            <a>1INCHUP</a>
                                        </div>
                                    </div>
                                    <div className='wafiat-first-col4-row3-col1-div2'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div3'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div4'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div5'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-last'>
                                        <button>Buy</button>
                                        <button>Subscribe</button>
                                        <button>Redeem</button>
                                    </div>
                                </div>

                                <div className='wafiat-first-col4-row3-col1'>
                                    <div className='wafiat-first-col4-row3-col1-div1'>
                                        <img src={over9}/>
                                        <div>
                                            <h6>AAVE</h6>
                                            <a>Aave</a>
                                        </div>
                                    </div>
                                    <div className='wafiat-first-col4-row3-col1-div2'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div3'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div4'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div5'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-last'>
                                        <button>Buy</button>
                                        <button>Sell</button>
                                        <button>Deposit</button>
                                        <button>Withdraw</button>
                                        <button>Trade</button>
                                        <button>Earn</button>
                                        <button>Convert</button>
                                    </div>
                                </div>

                                <div className='wafiat-first-col4-row3-col1'>
                                    <div className='wafiat-first-col4-row3-col1-div1'>
                                        <img src={over10}/>
                                        <div>
                                            <h6>AAVEDOWN</h6>
                                            <a>AAVEDOWN</a>
                                        </div>
                                    </div>
                                    <div className='wafiat-first-col4-row3-col1-div2'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div3'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div4'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div5'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-last'>
                                        <button>Buy</button>
                                        <button>Subscribe</button>
                                        <button>Redeem</button>
                                    </div>
                                </div>

                                <div className='wafiat-first-col4-row3-col1'>
                                    <div className='wafiat-first-col4-row3-col1-div1'>
                                        <img src={over11}/>
                                        <div>
                                            <h6>AAVEUP</h6>
                                            <a>AAVEUP</a>
                                        </div>
                                    </div>
                                    <div className='wafiat-first-col4-row3-col1-div2'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div3'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div4'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div5'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-last'>
                                        <button>Buy</button>
                                        <button>Sell</button>
                                        <button>Deposit</button>
                                        <button>Withdraw</button>
                                        <button>Trade</button>
                                        <button>Earn</button>
                                        <button>Convert</button>
                                    </div>
                                </div>

                                <div className='wafiat-first-col4-row3-col1'>
                                    <div className='wafiat-first-col4-row3-col1-div1'>
                                        <img src={over12}/>
                                        <div>
                                            <h6>ACA</h6>
                                            <a>Acala Token</a>
                                        </div>
                                    </div>
                                    <div className='wafiat-first-col4-row3-col1-div2'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div3'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div4'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div5'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-last'>
                                        <button>Buy</button>
                                        <button>Sell</button>
                                        <button>Deposit</button>
                                        <button>Withdraw</button>
                                        <button>Trade</button>
                                        <button>Earn</button>
                                        <button>Convert</button>
                                    </div>
                                </div>

                                <div className='wafiat-first-col4-row3-col1'>
                                    <div className='wafiat-first-col4-row3-col1-div1'>
                                        <img src={over13}/>
                                        <div>
                                            <h6>AAVEUP</h6>
                                            <a>AAVEUP</a>
                                        </div>
                                    </div>
                                    <div className='wafiat-first-col4-row3-col1-div2'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div3'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div4'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div5'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-last'>
                                        <button>Buy</button>
                                        <button>Sell</button>
                                        <button>Deposit</button>
                                        <button>Withdraw</button>
                                        <button>Trade</button>
                                        <button>Earn</button>
                                        <button>Convert</button>
                                    </div>
                                </div>

                                <div className='wafiat-first-col4-row3-col1'>
                                    <div className='wafiat-first-col4-row3-col1-div1'>
                                        <img src={over14}/>
                                        <div>
                                            <h6>ACH</h6>
                                            <a>Alchemy Pay</a>
                                        </div>
                                    </div>
                                    <div className='wafiat-first-col4-row3-col1-div2'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div3'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div4'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div5'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-last'>
                                        <button>Buy</button>
                                        <button>Subscribe</button>
                                        <button>Redeem</button>
                                    </div>
                                </div>

                                <div className='wafiat-first-col4-row3-col1'>
                                    <div className='wafiat-first-col4-row3-col1-div1'>
                                        <img src={reward}/>
                                        <div>
                                            <h6>ACM</h6>
                                            <a>AC Milan Fan Token</a>
                                        </div>
                                    </div>
                                    <div className='wafiat-first-col4-row3-col1-div2'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div3'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div4'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div5'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-last'>
                                        <button>Buy</button>
                                        <button>Sell</button>
                                        <button>Deposit</button>
                                        <button>Withdraw</button>
                                        <button>Trade</button>
                                        <button>Earn</button>
                                        <button>Convert</button>
                                    </div>
                                </div>

                                <div className='wafiat-first-col4-row3-col1'>
                                    <div className='wafiat-first-col4-row3-col1-div1'>
                                        <img src={reward}/>
                                        <div>
                                            <h6>ADA</h6>
                                            <a>Cardano</a>
                                        </div>
                                    </div>
                                    <div className='wafiat-first-col4-row3-col1-div2'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div3'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div4'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-div5'>0.00000000</div>
                                    <div className='wafiat-first-col4-row3-col1-last'>
                                        <button>Buy</button>
                                        <button>Sell</button>
                                        <button>Deposit</button>
                                        <button>Withdraw</button>
                                        <button>Trade</button>
                                        <button>Earn</button>
                                        <button>Convert</button>
                                    </div>
                                </div>


                            </div>  :  <div className='wafiat-first-col4-row4'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-1c070tq"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 8H26v80h58V28H64V8zM36 37h38v4H36v-4zm0 9h38v4H36v-4zm38 9H36v4h38v-4zm-8 12l4 4-4 4-4-4 4-4zM50 18l-3 3 3 3 3-3-3-3z" fill="url(#not-found-data_svg__paint0_linear_22059_32288)"></path><path opacity="0.3" d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z" fill="#929AA5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z" fill="url(#not-found-data_svg__paint1_linear_22059_32288)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z" fill="url(#not-found-data_svg__paint2_linear_22059_32288)"></path><defs><linearGradient id="not-found-data_svg__paint0_linear_22059_32288" x1="55" y1="8" x2="55" y2="88" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5" stop-opacity="0.1"></stop><stop offset="1" stop-color="#929AA5" stop-opacity="0.25"></stop></linearGradient><linearGradient id="not-found-data_svg__paint1_linear_22059_32288" x1="4.172" y1="68.75" x2="24.328" y2="68.75" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="not-found-data_svg__paint2_linear_22059_32288" x1="15" y1="48" x2="55" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg>
                                <div>No records found.</div>
                            </div> }
                        </div>
                    </div>
                </div>
        </>
    );
}

export {Wafiatfirst, Wafiat};