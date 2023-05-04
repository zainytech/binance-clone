import React, {useState} from 'react';
import './Wamargin.css';

import rect2 from './Img/rect2.png';
import rect3 from './Img/rect3.png';
import waover from './Img/waover.png';
import waover1 from './Img/waover1.png';
import reward from './Img/reward.png';
import meter from './Img/meter.png';
import Wasidebar from './Wasidebar';

const Wamargin = () => {
    return(
        <>
           <div className='wamargin'>
                <Wasidebar/>
                <Wamarginfirst/> 
           </div>
        </>
    );
}

const Wamarginfirst = () => {
    const [show, setShow] = useState(true);
    const [show1, setShow1] = useState(true);

    const showBalance = () => {
		setShow(!show);
	};

    const showBalance1 = () => {
		setShow1(!show1);
	};
    return(
        <><div className='wamargin-first'>
        <div className='wamargin-first-col1'>
            <h2>Margin</h2>
            <div className='wamargin-first-col1-div1'>
                <div>
                    <button>Borrow</button>
                    <button>Repay</button>
                    <button>Transfer</button>
                    <button>History</button>
                </div>
                {/* <div>More <img src={rect2}/></div> */}
            </div>
        </div>
        <div className='wamargin-first-col2'>
            <button>Cross 3x</button>
            <button>Isolated</button>
        </div>

        <div  className='wamargin-first-col3'>
            <div className='wamargin-first-col2-first'>
                <div className='wamargin-first-col2-first-row1'>
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
                            0.00000000BTC <p className='wafiat-first-col2-row2-color'>≈ $0</p>
                        </h4>
                        ) : (
                        <h4>*** Balance hidden ***</h4>
                    )}
                </div>
                <div className='wamargin-first-col2-first-row2'>
                    <div>Margin Level</div>
                    <div className='wamargin-first-col2-first-row2-col1'>
                        { show ? <div className='wamargin-first-col2-first-row2-col2'><img src={meter}/><div><p>999.00</p><p>Low risk</p></div></div>
                        : <><h6>*******</h6></>}
                        <div className='wamargin-first-col2-first-row2-col3'><p>Auto Top-up: <span>Off </span><a href='#'>Edit</a></p>
                        <p>Customize MCR <a href='#'>Edit</a></p></div>
                    </div>
                </div>
            </div>

            <div className='wamargin-first-col2-sec'>
                    <div className='wamargin-first-col2-sec-col1'>
                        <p>Total Dept</p>
                        { show ? (<><h5>0.00000000BTC</h5>
                        <div className='wafiat-first-col2-row2-color'>≈ $0</div> </>) : (<><h5>********</h5>
                        </>)}                               
                    </div>
                    <div className='wamargin-first-col2-sec-col2'>
                        <p>Account Equity:  </p>
                        { show ? (<><h5>0.00000000BTC</h5>
                        <div className='wafiat-first-col2-row2-color'>≈ $0</div> </>) : (<><h5>********</h5>
                        </>)}                                 
                    </div>
                    <div className='wamargin-first-col2-sec-col2'>
                        <div>
                            <div>PNL</div>
                            <form action='#'>
                                <label htmlFor='sort'></label>
                                <select name='sort' id='sort' className='select-style'>
                                <option value='Today'> Today </option>
                                <option value='Last 7 days'> Last 7 Days </option>
                                <option value='Last 1 Month'> Last 1 Month </option>
                                <option value='All'> All </option>
                                </select>
                            </form>
                            <div className='wamargin-first-col2-sec-col2-con'>Since 2023-02-07 23:19<img src={rect3}/></div>
                        </div>
                        { show ? (<>
                        <div className='wamargin-first-col2-sec-col2-sec'>
                            <h5>$0.00000000</h5>
                            </div>
                        <div>0.00%</div> </>) : (<><h5>********</h5>
                        </>)}                                 
                    </div>
            </div>
        </div>

        <div className='wamargin-first-col4'>
            <button>Funds</button>
            <button>Position</button>
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
                        <div>Total bala..</div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-czxcdk"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 8.849V10.5h6.5V8.85L12 5.348l-3.25 3.5zm6.5 6.303V13.5h-6.5v1.652l3.25 3.5 3.25-3.5z" fill="currentColor"></path></svg>
                    </div>
                    <div className='wafiat-first-col4-row3-col1-div3'>
                        <div>Available..</div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-czxcdk"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 8.849V10.5h6.5V8.85L12 5.348l-3.25 3.5zm6.5 6.303V13.5h-6.5v1.652l3.25 3.5 3.25-3.5z" fill="currentColor"></path></svg>
                    </div>
                    <div className='wafiat-first-col4-row3-col1-div4'>
                        <div>Borrowed</div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-czxcdk"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 8.849V10.5h6.5V8.85L12 5.348l-3.25 3.5zm6.5 6.303V13.5h-6.5v1.652l3.25 3.5 3.25-3.5z" fill="currentColor"></path></svg>
                    </div>
                    <div className='wafiat-first-col4-row3-col1-div5'>
                        <div>Interest</div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-czxcdk"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 8.849V10.5h6.5V8.85L12 5.348l-3.25 3.5zm6.5 6.303V13.5h-6.5v1.652l3.25 3.5 3.25-3.5z" fill="currentColor"></path></svg>
                    </div>
                    <div className='wafiat-first-col4-row3-col1-div6'>
                        <div>Equity value(BTC)</div>
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
                            <img src={reward}/>
                            <div>
                                <h6>BTC</h6>
                                <a>Bitcoin</a>
                            </div>
                        </div>
                        <div className='wafiat-first-col4-row3-col1-div2'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div3'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div4'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div5'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div6'>0.0000 / 0.0000</div>
                        <div className='wafiat-first-col4-row3-col1-last'>
                            <button>Transfer</button>
                            <button>Borrow/Repay</button>
                        </div>
                    </div>

                    <div className='wafiat-first-col4-row3-col1'>
                        <div className='wafiat-first-col4-row3-col1-div1'>
                            <img src={reward}/>
                            <div>
                                <h6>ETH</h6>
                                <a>Ethereum</a>
                            </div>
                        </div>
                        <div className='wafiat-first-col4-row3-col1-div2'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div3'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div4'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div5'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div6'>0.0000 / 0.0000</div>
                        <div className='wafiat-first-col4-row3-col1-last'>
                            <button>Transfer</button>
                            <button>Borrow/Repay</button>
                        </div>
                    </div>

                    <div className='wafiat-first-col4-row3-col1'>
                        <div className='wafiat-first-col4-row3-col1-div1'>
                            <img src={reward}/>
                            <div>
                                <h6>BNB</h6>
                                <a>BNB</a>
                            </div>
                        </div>
                        <div className='wafiat-first-col4-row3-col1-div2'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div3'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div4'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div5'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div6'>0.0000 / 0.0000</div>
                        <div className='wafiat-first-col4-row3-col1-last'>
                            <button>Transfer</button>
                            <button>Borrow/Repay</button>
                        </div>
                    </div>

                    <div className='wafiat-first-col4-row3-col1'> 
                        <div className='wafiat-first-col4-row3-col1-div1'>
                            <img src={reward}/>
                            <div>
                                <h6>BUSD</h6>
                                <a>BUSD</a>
                            </div>
                        </div>
                        <div className='wafiat-first-col4-row3-col1-div2'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div3'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div4'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div5'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div6'>0.0000 / 0.0000</div>
                        <div className='wafiat-first-col4-row3-col1-last'>
                            <button>Transfer</button>
                            <button>Borrow/Repay</button>
                        </div>
                    </div>

                    <div className='wafiat-first-col4-row3-col1'>
                        <div className='wafiat-first-col4-row3-col1-div1'>
                            <img src={reward}/>
                            <div>
                                <h6>USTD</h6>
                                <a>TetherUS</a>
                            </div>
                        </div>
                        <div className='wafiat-first-col4-row3-col1-div2'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div3'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div4'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div5'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div6'>0.0000 / 0.0000</div>
                        <div className='wafiat-first-col4-row3-col1-last'>
                            <button>Transfer</button>
                            <button>Borrow/Repay</button>
                        </div>
                    </div>

                    <div className='wafiat-first-col4-row3-col1'>
                        <div className='wafiat-first-col4-row3-col1-div1'>
                            <img src={reward}/>
                            <div>
                                <h6>1INCH</h6>
                                <a>1inch</a>
                            </div>
                        </div>
                        <div className='wafiat-first-col4-row3-col1-div2'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div3'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div4'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div5'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div6'>0.0000 / 0.0000</div>
                        <div className='wafiat-first-col4-row3-col1-last'>
                            <button>Transfer</button>
                            <button>Borrow/Repay</button>
                        </div>
                    </div>

                    <div className='wafiat-first-col4-row3-col1'>
                        <div className='wafiat-first-col4-row3-col1-div1'>
                            <img src={reward}/>
                            <div>
                                <h6>1INCHDOWN</h6>
                                <a>1INCHDOWN</a>
                            </div>
                        </div>
                        <div className='wafiat-first-col4-row3-col1-div2'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div3'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div4'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div5'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div6'>0.0000 / 0.0000</div>
                        <div className='wafiat-first-col4-row3-col1-last'>
                            <button>Transfer</button>
                            <button>Borrow/Repay</button>
                        </div>
                    </div>

                    <div className='wafiat-first-col4-row3-col1'>
                        <div className='wafiat-first-col4-row3-col1-div1'>
                            <img src={reward}/>
                            <div>
                                <h6>1INCHUP</h6>
                                <a>1INCHUP</a>
                            </div>
                        </div>
                        <div className='wafiat-first-col4-row3-col1-div2'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div3'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div4'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div5'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div6'>0.0000 / 0.0000</div>
                        <div className='wafiat-first-col4-row3-col1-last'>
                            <button>Transfer</button>
                            <button>Borrow/Repay</button>
                        </div>
                    </div>

                    <div className='wafiat-first-col4-row3-col1'>
                        <div className='wafiat-first-col4-row3-col1-div1'>
                            <img src={reward}/>
                            <div>
                                <h6>AAVE</h6>
                                <a>Aave</a>
                            </div>
                        </div>
                        <div className='wafiat-first-col4-row3-col1-div2'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div3'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div4'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div5'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div6'>0.0000 / 0.0000</div>
                        <div className='wafiat-first-col4-row3-col1-last'>
                            <button>Transfer</button>
                            <button>Borrow/Repay</button>
                        </div>
                    </div>

                    <div className='wafiat-first-col4-row3-col1'>
                        <div className='wafiat-first-col4-row3-col1-div1'>
                            <img src={reward}/>
                            <div>
                                <h6>AAVEDOWN</h6>
                                <a>AAVEDOWN</a>
                            </div>
                        </div>
                        <div className='wafiat-first-col4-row3-col1-div2'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div3'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div4'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div5'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div6'>0.0000 / 0.0000</div>
                        <div className='wafiat-first-col4-row3-col1-last'>
                            <button>Transfer</button>
                            <button>Borrow/Repay</button>
                        </div>
                    </div>

                    <div className='wafiat-first-col4-row3-col1'>
                        <div className='wafiat-first-col4-row3-col1-div1'>
                            <img src={reward}/>
                            <div>
                                <h6>AAVEUP</h6>
                                <a>AAVEUP</a>
                            </div>
                        </div>
                        <div className='wafiat-first-col4-row3-col1-div2'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div3'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div4'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div5'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div6'>0.0000 / 0.0000</div>
                        <div className='wafiat-first-col4-row3-col1-last'>
                            <button>Transfer</button>
                            <button>Borrow/Repay</button>
                        </div>
                    </div>

                    <div className='wafiat-first-col4-row3-col1'>
                        <div className='wafiat-first-col4-row3-col1-div1'>
                            <img src={reward}/>
                            <div>
                                <h6>ACA</h6>
                                <a>Acala Token</a>
                            </div>
                        </div>
                        <div className='wafiat-first-col4-row3-col1-div2'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div3'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div4'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div5'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div6'>0.0000 / 0.0000</div>
                        <div className='wafiat-first-col4-row3-col1-last'>
                            <button>Transfer</button>
                            <button>Borrow/Repay</button>
                        </div>
                    </div>

                    <div className='wafiat-first-col4-row3-col1'>
                        <div className='wafiat-first-col4-row3-col1-div1'>
                            <img src={reward}/>
                            <div>
                                <h6>AAVEUP</h6>
                                <a>AAVEUP</a>
                            </div>
                        </div>
                        <div className='wafiat-first-col4-row3-col1-div2'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div3'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div4'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div5'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div6'>0.0000 / 0.0000</div>
                        <div className='wafiat-first-col4-row3-col1-last'>
                            <button>Transfer</button>
                            <button>Borrow/Repay</button>
                        </div>
                    </div>

                    <div className='wafiat-first-col4-row3-col1'>
                        <div className='wafiat-first-col4-row3-col1-div1'>
                            <img src={reward}/>
                            <div>
                                <h6>ACH</h6>
                                <a>Alchemy Pay</a>
                            </div>
                        </div>
                        <div className='wafiat-first-col4-row3-col1-div2'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div3'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div4'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div5'>0.00000000</div>
                        <div className='wafiat-first-col4-row3-col1-div6'>0.0000 / 0.0000</div>
                        <div className='wafiat-first-col4-row3-col1-last'>
                            <button>Transfer</button>
                            <button>Borrow/Repay</button>
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
                        <div className='wafiat-first-col4-row3-col1-div6'>0.0000 / 0.0000</div>
                        <div className='wafiat-first-col4-row3-col1-last'>
                            <button>Transfer</button>
                            <button>Borrow/Repay</button>
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
                        <div className='wafiat-first-col4-row3-col1-div6'>0.0000 / 0.0000</div>
                        <div className='wafiat-first-col4-row3-col1-last'>
                            <button>Transfer</button>
                            <button>Borrow/Repay</button>
                        </div>
                    </div>


                </div>  :  <div className='wafiat-first-col4-row4'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-1c070tq"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 8H26v80h58V28H64V8zM36 37h38v4H36v-4zm0 9h38v4H36v-4zm38 9H36v4h38v-4zm-8 12l4 4-4 4-4-4 4-4zM50 18l-3 3 3 3 3-3-3-3z" fill="url(#not-found-data_svg__paint0_linear_22059_32288)"></path><path opacity="0.3" d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z" fill="#929AA5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z" fill="url(#not-found-data_svg__paint1_linear_22059_32288)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z" fill="url(#not-found-data_svg__paint2_linear_22059_32288)"></path><defs><linearGradient id="not-found-data_svg__paint0_linear_22059_32288" x1="55" y1="8" x2="55" y2="88" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5" stop-opacity="0.1"></stop><stop offset="1" stop-color="#929AA5" stop-opacity="0.25"></stop></linearGradient><linearGradient id="not-found-data_svg__paint1_linear_22059_32288" x1="4.172" y1="68.75" x2="24.328" y2="68.75" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="not-found-data_svg__paint2_linear_22059_32288" x1="15" y1="48" x2="55" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg>
                    <div>No records found.</div>
                </div> }
            </div>
        </div>


    </div></>
    );
}
export {Wamarginfirst, Wamargin};


