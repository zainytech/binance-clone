import React, {useState} from "react";
import './Waearn.css'

import { Link } from "react-router-dom";

import earn1 from './Img/iconance15.png';
import earn2 from './Img/iconance10.png';
import earn3 from './Img/iconance1.png';
import Wasidebar from "./Wasidebar";

const Waearn = () => {
    return(
        <>
            <div className="waearn">
                <Wasidebar/>            
                <Waearnsec/>
            </div>
        </>
    );
}

const Waearnsec = () => {
    const [showarticle, setShowarticle] = useState(1);

    const [show, setShow] = useState(true);

	const showBalance = () => {
		setShow(!show);
	};
    return(
        <>
            
            <div className="waearn-sec">
                    <div className='wafiat-first-col1'>
                        <h2>Earn</h2>
                        <div className='wafiat-first-col1-scroll'>
                            <button><Link to="/covertHist" style={{textDecoration: 'none', color: 'white'}}>History</Link></button>
                        </div>
                    </div>

                    <div className="waearn-sec-row1">
                        <div className="waearn-sec-row1-col1">
                            <div className='wafiat-first-col2-row1'>
                                <div>Est. Total Value</div>
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
                                    0.000000000  <span className='wafiat-first-col2-row2-color'>  ≈ $0.00</span>
                                </h4>
                                ) : (
                                <h4>*** Balance hidden ***</h4>
                            )}
                        </div>
                        <div className="waearn-sec-row1-col2">
                            <div className="waearn-sec-row1-col2-col1">
                                <img src={earn1}/>
                                <div>Earn Products</div>
                            </div>
                            <div className="waearn-sec-row1-col2-col2">
                                <img src={earn2}/>
                                <div>Auto-Invest</div>
                            </div>
                            <div className="waearn-sec-row1-col2-col3">
                                <img src={earn3}/>
                                <div>ETH 2.0</div>
                            </div>                         
                        </div>
                    </div>
                    <hr className='waoverview-hr'/>
                    <div className="waearn-sec-row2">
                        <button onClick={()=>setShowarticle(1)} className={ showarticle === 1 ? "active" : "" }>Simple Earn</button>
                        <button onClick={()=>setShowarticle(2)} className={ showarticle === 2 ? "active" : "" }>Staking</button>
                        <button onClick={()=>setShowarticle(3)} className={ showarticle === 3 ? "active" : "" }>Launchpad</button>
                        <button onClick={()=>setShowarticle(4)} className={ showarticle === 4 ? "active" : "" }>Liquid Swap</button>
                        <button onClick={()=>setShowarticle(5)} className={ showarticle === 5 ? "active" : "" }>Dual Investment</button>
                        <button onClick={()=>setShowarticle(6)} className={ showarticle === 6 ? "active" : "" }>Pool Savings</button>
                    </div>

                    { showarticle === 1 && <>
                        <div className="waearn-sec-row3">
                            <div className='wamargin-first-col2-sec'>
                                <div className='wamargin-first-col2-sec-col1'>
                                    <p>Estimated Positions</p>
                                    { show ? (<><h5>0.00000000</h5>
                                    <div className='wafiat-first-col2-row2-color'>≈ $0</div> </>) : (<><h5>********</h5>
                                    </>)}                               
                                </div>
                                <div className='wamargin-first-col2-sec-col2'>
                                    <p>Total Profit</p>
                                    { show ? (<><h5>0.00000000</h5>
                                    <div className='wafiat-first-col2-row2-color'>≈ $0</div> </>) : (<><h5>********</h5>
                                    </>)}                                 
                                </div>
                                <div className='wamargin-first-col2-sec-col2'>
                                    <p>Last Day Profit</p>
                                    { show ? (<>
                                    <div className='wamargin-first-col2-sec-col2-sec'>
                                        <h5>$0.00000000</h5>
                                        </div>
                                    <div>0.00%</div> </>) : (<><h5>********</h5>
                                    </>)}                                 
                                </div>
                                <div className='wamargin-first-col2-sec-col2'>
                                    <p>Savings Trial Fund Bonus</p>
                                    { show ? (<><h5>0.00000000</h5>
                                    <div className='wafiat-first-col2-row2-color'>≈ $0</div> </>) : (<><h5>********</h5>
                                    </>)}                                 
                                </div>
                            </div>

                            <div className="waearn-sec-row3-col1">
                                <button className="active">Flexible</button>
                                <button>Locked</button>
                                <button>Locked Savings</button>
                                <button>Activities</button>
                                <button>Auto-invest</button>
                                <button>Flexible Trial Fund</button>
                            </div>

                            <div className="waearn-sec-row3-col2">
                                <div className="waearn-sec-row3-col2-row1">
                                    <div className="waearn-sec-row3-col2-row1-div1">Asset</div>
                                    <div className="waearn-sec-row3-col2-row1-div2">Reward Coin</div>
                                    <div className="waearn-sec-row3-col2-row1-div3">Auto-Subscribe</div>
                                    <div className="waearn-sec-row3-col2-row1-div4">Total Amount</div>
                                    <div className="waearn-sec-row3-col2-row1-div5">Accruing interest</div>
                                    <div className="waearn-sec-row3-col2-row1-div6">Todays's Subscription</div>
                                    <div className="waearn-sec-row3-col2-row1-div7">Redeeming</div>
                                    <div className="waearn-sec-row3-col2-row1-div8">Cumulative Interest</div>
                                    <div className="waearn-sec-row3-col2-row1-div9">AirDrop Amount</div>
                                    <div className="waearn-sec-row3-col2-row1-div10">Est. APR</div>
                                    <div className="waearn-sec-row3-col2-row1-div11">AirDrop APR</div>
                                    <div className="waearn-sec-row3-col2-row1-div12">Action</div>
                                </div>
                                <div className="waearn-sec-row3-col2-row2">
                                    <div className='wafiat-first-col4-row4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-1c070tq"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 8H26v80h58V28H64V8zM36 37h38v4H36v-4zm0 9h38v4H36v-4zm38 9H36v4h38v-4zm-8 12l4 4-4 4-4-4 4-4zM50 18l-3 3 3 3 3-3-3-3z" fill="url(#not-found-data_svg__paint0_linear_22059_32288)"></path><path opacity="0.3" d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z" fill="#929AA5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z" fill="url(#not-found-data_svg__paint1_linear_22059_32288)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z" fill="url(#not-found-data_svg__paint2_linear_22059_32288)"></path><defs><linearGradient id="not-found-data_svg__paint0_linear_22059_32288" x1="55" y1="8" x2="55" y2="88" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5" stop-opacity="0.1"></stop><stop offset="1" stop-color="#929AA5" stop-opacity="0.25"></stop></linearGradient><linearGradient id="not-found-data_svg__paint1_linear_22059_32288" x1="4.172" y1="68.75" x2="24.328" y2="68.75" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="not-found-data_svg__paint2_linear_22059_32288" x1="15" y1="48" x2="55" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg>
                                        <div>No records found.</div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </>}

                    { showarticle === 2 && <>
                        <div className="waearn-sec-row3">
                            <div className='wamargin-first-col2-sec'>
                                <div className='wamargin-first-col2-sec-col1'>
                                    <p>Estimated Positions</p>
                                    { show ? (<><h5>0.00000000</h5>
                                    <div className='wafiat-first-col2-row2-color'>≈ $0</div> </>) : (<><h5>********</h5>
                                    </>)}                               
                                </div>  
                                <div className='wamargin-first-col2-sec-col2'>
                                    <p>Last Day Profit</p>
                                    { show ? (<>
                                    <div className='wamargin-first-col2-sec-col2-sec'>
                                        <h5>$0.00000000</h5>
                                        </div>
                                    <div>0.00%</div> </>) : (<><h5>********</h5>
                                    </>)}                                 
                                </div>
                                <div className='wamargin-first-col2-sec-col2'>
                                    <p>Stake NFT</p>
                                    { show ? (<><h5>-</h5></>) : (<><h5>********</h5>
                                    </>)}                                 
                                </div>
                            </div>

                            <div className="waearn-sec-row3-col1">
                                <button className="active">Flexible</button>
                                <button>Flexible DeFi Staking</button>
                                <button>Locked DeFi Staking</button>
                                <button>DOT Slot Auction</button>
                                <button>Flexible NFT Rewards</button>
                                <button>Locked NFT Rewards</button>
                            </div>

                            <div className="waearn-sec-row3-col2">
                                <div className="waearn-sec-row3-col2-row1">
                                    <div className="waearn-sec-row3-col2-row1-div1">Coin</div>
                                    <div className="waearn-sec-row3-col2-row1-div4">Total Amount</div>
                                    <div className="waearn-sec-row3-col2-row1-div6">Est. APR</div>
                                    <div className="waearn-sec-row3-col2-row1-div3">Today's Subscribe</div>
                                    <div className="waearn-sec-row3-col2-row1-div10">Accuring Interest</div>
                                    <div className="waearn-sec-row3-col2-row1-div12">Redeeming</div>
                                    <div className="waearn-sec-row3-col2-row1-div10">Cumulative Interest</div>
                                    <div className="waearn-sec-row3-col2-row1-div11">Estimated Next Distribution Amount</div>
                                    <div className="waearn-sec-row3-col2-row1-div12">Action</div>                                    
                                </div>
                                <div className="waearn-sec-row3-col2-row2">
                                    <div className='wafiat-first-col4-row4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-1c070tq"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 8H26v80h58V28H64V8zM36 37h38v4H36v-4zm0 9h38v4H36v-4zm38 9H36v4h38v-4zm-8 12l4 4-4 4-4-4 4-4zM50 18l-3 3 3 3 3-3-3-3z" fill="url(#not-found-data_svg__paint0_linear_22059_32288)"></path><path opacity="0.3" d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z" fill="#929AA5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z" fill="url(#not-found-data_svg__paint1_linear_22059_32288)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z" fill="url(#not-found-data_svg__paint2_linear_22059_32288)"></path><defs><linearGradient id="not-found-data_svg__paint0_linear_22059_32288" x1="55" y1="8" x2="55" y2="88" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5" stop-opacity="0.1"></stop><stop offset="1" stop-color="#929AA5" stop-opacity="0.25"></stop></linearGradient><linearGradient id="not-found-data_svg__paint1_linear_22059_32288" x1="4.172" y1="68.75" x2="24.328" y2="68.75" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="not-found-data_svg__paint2_linear_22059_32288" x1="15" y1="48" x2="55" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg>
                                        <div>No records found.</div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </>}

                    { showarticle === 3 && <>
                        <div className="waearn-sec-row3">
                            <div id="waearn-sec-row3-flexw">
                                <div className='wamargin-first-col2-sec-col1'>
                                    <p>Estimated Positions</p>
                                    { show ? (<><h5>0.00000000</h5>
                                    <div className='wafiat-first-col2-row2-color'>≈ $0</div> </>) : (<><h5>********</h5>
                                    </>)}                               
                                </div>  
                                <div className='wamargin-first-col2-sec-col2'>
                                    <p>Last Day Profit</p>
                                    { show ? (<>
                                    <div className='wamargin-first-col2-sec-col2-sec'>
                                        <h5>$0.00000000</h5>
                                        </div>
                                    <div>0.00%</div> </>) : (<><h5>********</h5>
                                    </>)}                                 
                                </div>
                            </div>

                            <div className="waearn-sec-row3-col2">
                                <div className="waearn-sec-row3-col2-row1 waearn-sec-row3-col2-row13">
                                    <div className="waearn-sec-row3-col2-row1-div1">Project Name</div>
                                    <div className="waearn-sec-row3-col2-row1-div4">Asset</div>
                                    <div className="waearn-sec-row3-col2-row1-div6">Amount</div>
                                    <div className="waearn-sec-row3-col2-row1-div12">Action</div>                                    
                                </div>
                                <div className="waearn-sec-row3-col2-row2">
                                    <div className='wafiat-first-col4-row4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-1c070tq"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 8H26v80h58V28H64V8zM36 37h38v4H36v-4zm0 9h38v4H36v-4zm38 9H36v4h38v-4zm-8 12l4 4-4 4-4-4 4-4zM50 18l-3 3 3 3 3-3-3-3z" fill="url(#not-found-data_svg__paint0_linear_22059_32288)"></path><path opacity="0.3" d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z" fill="#929AA5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z" fill="url(#not-found-data_svg__paint1_linear_22059_32288)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z" fill="url(#not-found-data_svg__paint2_linear_22059_32288)"></path><defs><linearGradient id="not-found-data_svg__paint0_linear_22059_32288" x1="55" y1="8" x2="55" y2="88" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5" stop-opacity="0.1"></stop><stop offset="1" stop-color="#929AA5" stop-opacity="0.25"></stop></linearGradient><linearGradient id="not-found-data_svg__paint1_linear_22059_32288" x1="4.172" y1="68.75" x2="24.328" y2="68.75" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="not-found-data_svg__paint2_linear_22059_32288" x1="15" y1="48" x2="55" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg>
                                        <div>No records found.</div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </>}

                    { showarticle === 4 && <>
                        <div className="waearn-sec-row3">
                            <div className='wamargin-first-col2-sec'>
                                <div id="waearn-sec-row3-flexw">
                                    <div className='wamargin-first-col2-sec-col1'>
                                        <p>Estimated Positions</p>
                                        { show ? (<><h5>0.00000000</h5>
                                        <div className='wafiat-first-col2-row2-color'>≈ $0</div> </>) : (<><h5>********</h5>
                                        </>)}                               
                                    </div>  
                                    <div className='wamargin-first-col2-sec-col2'>
                                        <p>Last Day Profit</p>
                                        { show ? (<>
                                        <div className='wamargin-first-col2-sec-col2-sec'>
                                            <h5>$0.00000000</h5>
                                            </div>
                                        <div>0.00%</div> </>) : (<><h5>********</h5>
                                        </>)}                                 
                                    </div>
                                </div>
                                <div className='wamargin-first-col2-sec-col6'>
                                    <button disabled>Claim Rewards</button>
                                    <a>Liquid Swamp History</a>
                                </div>
                            </div>

                            <div className="waearn-sec-row3-col2">
                                <div className="waearn-sec-row3-col2-row1">
                                    <div className="waearn-sec-row3-col2-row1-div1">Pool</div>
                                    <div className="waearn-sec-row3-col2-row1-div4">Portion Amount</div>
                                    <div className="waearn-sec-row3-col2-row1-div6">Pool Portion Composition</div>
                                    <div className="waearn-sec-row3-col2-row1-div12">Portion Value</div> 
                                    <div className="waearn-sec-row3-col2-row1-div12">Cost per Portion</div> 
                                    <div className="waearn-sec-row3-col2-row1-div12">Portion Value PNL</div> 
                                    <div className="waearn-sec-row3-col2-row1-div12">Earnings</div> 
                                    <div className="waearn-sec-row3-col2-row1-div12">Unclaimed Rewards</div>
                                    <div className="waearn-sec-row3-col2-row1-div12">Action</div>                                    
                                </div>
                                <div className="waearn-sec-row3-col2-row2">
                                    <div className='wafiat-first-col4-row4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-1c070tq"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 8H26v80h58V28H64V8zM36 37h38v4H36v-4zm0 9h38v4H36v-4zm38 9H36v4h38v-4zm-8 12l4 4-4 4-4-4 4-4zM50 18l-3 3 3 3 3-3-3-3z" fill="url(#not-found-data_svg__paint0_linear_22059_32288)"></path><path opacity="0.3" d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z" fill="#929AA5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z" fill="url(#not-found-data_svg__paint1_linear_22059_32288)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z" fill="url(#not-found-data_svg__paint2_linear_22059_32288)"></path><defs><linearGradient id="not-found-data_svg__paint0_linear_22059_32288" x1="55" y1="8" x2="55" y2="88" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5" stop-opacity="0.1"></stop><stop offset="1" stop-color="#929AA5" stop-opacity="0.25"></stop></linearGradient><linearGradient id="not-found-data_svg__paint1_linear_22059_32288" x1="4.172" y1="68.75" x2="24.328" y2="68.75" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="not-found-data_svg__paint2_linear_22059_32288" x1="15" y1="48" x2="55" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg>
                                        <div>No records found.</div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </>}

                    { showarticle === 5 && <>
                        <div className="waearn-sec-row3">
                            <div id="waearn-sec-row3-flexw">
                                <div className='wamargin-first-col2-sec-col1'>
                                    <p>Estimated Positions</p>
                                    { show ? (<><h5>0.00000000</h5>
                                    <div className='wafiat-first-col2-row2-color'>≈ $0</div> </>) : (<><h5>********</h5>
                                    </>)}                               
                                </div> 
                            </div>

                            <div className="waearn-sec-row3-col2">
                                <div className="waearn-sec-row3-col2-row1 waearn-sec-row3-col2-row13">
                                    <div className="waearn-sec-row3-col2-row1-div1">Product</div>
                                    <div className="waearn-sec-row3-col2-row1-div4">Auto-Compoun</div>
                                    <div className="waearn-sec-row3-col2-row1-div6">Subscription Date</div>
                                    <div className="waearn-sec-row3-col2-row1-div12">Subscription Amount</div> 
                                    <div className="waearn-sec-row3-col2-row1-div12">Target Price</div>
                                    <div className="waearn-sec-row3-col2-row1-div12">Settlement Date</div> 
                                    <div className="waearn-sec-row3-col2-row1-div12">Status</div>                                    
                                </div>
                                <div className="waearn-sec-row3-col2-row2">
                                    <div className='wafiat-first-col4-row4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-1c070tq"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 8H26v80h58V28H64V8zM36 37h38v4H36v-4zm0 9h38v4H36v-4zm38 9H36v4h38v-4zm-8 12l4 4-4 4-4-4 4-4zM50 18l-3 3 3 3 3-3-3-3z" fill="url(#not-found-data_svg__paint0_linear_22059_32288)"></path><path opacity="0.3" d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z" fill="#929AA5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z" fill="url(#not-found-data_svg__paint1_linear_22059_32288)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z" fill="url(#not-found-data_svg__paint2_linear_22059_32288)"></path><defs><linearGradient id="not-found-data_svg__paint0_linear_22059_32288" x1="55" y1="8" x2="55" y2="88" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5" stop-opacity="0.1"></stop><stop offset="1" stop-color="#929AA5" stop-opacity="0.25"></stop></linearGradient><linearGradient id="not-found-data_svg__paint1_linear_22059_32288" x1="4.172" y1="68.75" x2="24.328" y2="68.75" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="not-found-data_svg__paint2_linear_22059_32288" x1="15" y1="48" x2="55" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg>
                                        <div>No records found.</div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </>}

                    { showarticle === 6 && <>
                        <div className="waearn-sec-row3">
                            <div id="waearn-sec-row3-flexw">
                                <div className='wamargin-first-col2-sec-col1'>
                                    <p>Estimated Positions</p>
                                    { show ? (<><h5>0.00000000</h5>
                                    <div className='wafiat-first-col2-row2-color'>≈ $0</div> </>) : (<><h5>********</h5>
                                    </>)}                               
                                </div>  
                                <div className='wamargin-first-col2-sec-col2'>
                                    <p>Last Day Profit</p>
                                    { show ? (<>
                                    <div className='wamargin-first-col2-sec-col2-sec'>
                                        <h5>$0.00000000</h5>
                                        </div>
                                    <div>0.00%</div> </>) : (<><h5>********</h5>
                                    </>)}                                 
                                </div>
                            </div>

                            <div className="waearn-sec-row3-col2">
                                <div className="waearn-sec-row3-col2-row1 waearn-sec-row3-col2-row13">
                                    <div className="waearn-sec-row3-col2-row1-div1">Coin</div>
                                    <div className="waearn-sec-row3-col2-row1-div4">Total Balance</div>
                                    <div className="waearn-sec-row3-col2-row1-div6">Cumulative Interest</div>
                                    <div className="waearn-sec-row3-col2-row1-div12">Action</div>                                    
                                </div>
                                <div className="waearn-sec-row3-col2-row2">
                                    <div className='wafiat-first-col4-row4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-1c070tq"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 8H26v80h58V28H64V8zM36 37h38v4H36v-4zm0 9h38v4H36v-4zm38 9H36v4h38v-4zm-8 12l4 4-4 4-4-4 4-4zM50 18l-3 3 3 3 3-3-3-3z" fill="url(#not-found-data_svg__paint0_linear_22059_32288)"></path><path opacity="0.3" d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z" fill="#929AA5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z" fill="url(#not-found-data_svg__paint1_linear_22059_32288)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z" fill="url(#not-found-data_svg__paint2_linear_22059_32288)"></path><defs><linearGradient id="not-found-data_svg__paint0_linear_22059_32288" x1="55" y1="8" x2="55" y2="88" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5" stop-opacity="0.1"></stop><stop offset="1" stop-color="#929AA5" stop-opacity="0.25"></stop></linearGradient><linearGradient id="not-found-data_svg__paint1_linear_22059_32288" x1="4.172" y1="68.75" x2="24.328" y2="68.75" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="not-found-data_svg__paint2_linear_22059_32288" x1="15" y1="48" x2="55" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg>
                                        <div>No records found.</div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </>}


            </div>
        </>
    );
}

export {Waearnsec, Waearn};