import React from 'react';
import './Swap.css';
import  { useState } from 'react';
import FAQ from './FAQ';
// swiper slider//////////////
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
import SwiperCore, { Autoplay } from "swiper";
import 'swiper/css/autoplay';

import {BiPlayCircle} from 'react-icons/bi'
import webbg from '../assets/figma/swap/web-bg.png';
import earnslider1 from "../assets/earn-slider1.png";
import earnslider2 from "../assets/earn-slider2.png";
import swapslider1 from '../assets/figma/swap/swap-slider1.png';
import swapslider2 from '../assets/figma/swap/swap-slider2.png';
import updownarrow from "../assets/figma/crypto/up-down-arrow.png";

import swapheader from '../assets/figma/swap/swap-header.svg';
import liquidityheader from '../assets/figma/swap/liquidity-header.png';
import rewardlight from '../assets/figma/swap/reward-light.png';
import academylearn from '../assets/figma/swap/academy-learn.png';
import lowfees from '../assets/figma/swap/low-fees.png';
import tutorial from '../assets/figma/swap/tutorial.png';
import { Link } from 'react-router-dom';


function Swap(){
    
    const [showtextswapoverview, setShowtextswapoverview] = useState('');
    const onClickswapoverview = ()=>{
        setShowtextswapoverview(true);
        setShowtextswapswap(false);
        setShowtextswapliquidity(false);
        
    };
    const [showtextswapswap, setShowtextswapswap] = useState(true);
    const onClickswapswap = ()=>{
        setShowtextswapswap(true);
        setShowtextswapliquidity(false);
        setShowtextswapoverview(false);
  
    };
    const [showtextswapliquidity, setShowtextswapliquidity] = useState('');
    const onClickswapliquidity = ()=>{
        setShowtextswapliquidity(true);
        setShowtextswapswap(false);
        setShowtextswapoverview(false);
        
    };
    const [showtextswapoverviewstable, setShowtextswapoverviewstable] = useState(true);
    const onClickswapoverviewstable = ()=>{
        setShowtextswapoverviewstable(true);
        setShowtextswapoverviewinnovative(false);
        
    };
    const [showtextswapoverviewinnovative, setShowtextswapoverviewinnovative] = useState('');
    const onClickswapoverviewinnovative = ()=>{
        setShowtextswapoverviewinnovative(true);
        setShowtextswapoverviewstable(false);
        
    };

    return(
        <>
        <div class="swap-main">
            <div class="swap-main-div1">
                <div class="swap-main-div1-bg-img">
                    <img src={webbg}></img>
                </div>
                <div class="swap-main-div1-content">
                    <div class="swap-main-div1a">
                        <p>Binance Liquid Swap</p>
                        <span>Trade Instantly & Pool Tokens to Earn Rewards</span>
                    </div>
                    <div class="swap-main-div1b">
                    <div class="swap-main-div1b-container">
                        <div onClick={onClickswapoverview} class="swap-main-div1b-item1" className={showtextswapoverview ? 'swap-main-div1b-item1-onclick' : 'swap-main-div1b-item1'}>
                            Overview
                        </div>
                        <div onClick={onClickswapliquidity} class="swap-main-div1b-item1" className={showtextswapliquidity ? 'swap-main-div1b-item1-onclick' : 'swap-main-div1b-item1'}>
                            Liquidity
                        </div>
                        <div onClick={onClickswapswap} class="swap-main-div1b-item1" className={showtextswapswap ? 'swap-main-div1b-item1-onclick' : 'swap-main-div1b-item1'}>
                            Swap
                        </div>
                        <div class="swap-main-div1b-item1">
                            History
                        </div>
                        <div class="swap-main-div1b-item2">
                            <button class="swap-main-div1b-item2-btn1"><BiPlayCircle style={{fontSize:'22px',position:'absolute',left:'0.4rem',bottom:'0.4rem'}}/>Tutorial</button>
                            <Link to='/history' style={{textDecoration: 'none'}}><button class="swap-main-div1b-item2-btn2">FAQ</button></Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="swap-main2">
            <div class="swap-main2-slider">
            <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        // navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div class="swap-main2-slider1">
                <img src={swapslider1}></img>
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div class="swap-main2-slider1">
                <img src={swapslider2}></img>
            </div>
        </SwiperSlide>
      </Swiper>
</div>
            </div>

            <div class="swap-main3">
                {showtextswapoverview ?
                <>
                <div class="swap-main3-overview-container">
                <div class="swap-main3-overview-div1">
                    Pool Overview
                </div>
                <div class="swap-main3-overview-div2">
                    <div class="swap-main3-overview-div2a">
                        <input type="text" placeholder='Search Pools'></input>
                    </div>
                    <div class="swap-main3-overview-div2b">
                    <div class="swap-liquidity-main3-div2b-div3-checkbox">
                        <input type='checkbox' id="overview-checkbox1"></input>
                        <label for="overview-checkbox1"><span>Show My Portion</span></label>    
                    </div>
                    <div class="swap-liquidity-main3-div2b-div3-checkbox">
                        <input type='checkbox' id="overview-checkbox2"></input>
                        <label for="overview-checkbox2"><span>Match My Available Assets</span></label>    
                    </div>
                    </div>
                    <div class="swap-main3-overview-div2c">
                        <span>Total Unclaimed Rewards</span>
                        <span class="swap-main3-overview-div2c-txt">0 USD</span>
                        <button>Claim</button>
                    </div>
                </div>
                <div class="swap-main3-overview-div3">
                    <span onClick={onClickswapoverviewstable} className={showtextswapoverviewstable? 'swap-main3-overview-div3-span-onclick' : 'swap-main3-overview-div3-span'}>Stable</span>
                    <span onClick={onClickswapoverviewinnovative} className={showtextswapoverviewinnovative? 'swap-main3-overview-div3-span-onclick' : 'swap-main3-overview-div3-span'}>Innovative</span>
                </div>
                <div class="swap-content-div3">
{showtextswapoverviewstable ? 
<>
<table>
                <tr class="table-row1">
                    <th>Pool</th>
                    <th>Liquidity</th>
                    <th>Total Yield</th>
                    <th>Reward Coins</th>
                    <th>Volume (24hr)</th>
                    <th>Operation</th>
                </tr>
                <tr class="table-row2">
                    <td>BTC/WBTC</td>
                    <td><span class="table-row2-col2-txt1">24,513,109 USD</span><span class="table-row2-col2-txt2">244 BTC + 781 WBTC</span></td>
                    <td class="table-row2-txt-green">1.15%</td>
                    <td>BNB</td>
                    <td>1,039 USD</td>
                    <td class="table-row2-col6"><span class="table-row2-col6-blue-txt">Add</span><span class="table-row2-col6-blue-txt">Remove</span><span class="table-row2-col6-blue-txt">Swap</span><span class="table-row2-col6-grey-txt">My Portion</span></td>
                </tr>
                <tr class="table-row2">
                    <td>BTC/WBTC</td>
                    <td><span class="table-row2-col2-txt1">24,513,109 USD</span><span class="table-row2-col2-txt2">244 BTC + 781 WBTC</span></td>
                    <td class="table-row2-txt-green">1.15%</td>
                    <td>BNB</td>
                    <td>1,039 USD</td>
                    <td class="table-row2-col6"><span class="table-row2-col6-blue-txt">Add</span><span class="table-row2-col6-blue-txt">Remove</span><span class="table-row2-col6-blue-txt">Swap</span><span class="table-row2-col6-grey-txt">My Portion</span></td>
                </tr>
                <tr class="table-row2">
                    <td>BTC/WBTC</td>
                    <td><span class="table-row2-col2-txt1">24,513,109 USD</span><span class="table-row2-col2-txt2">244 BTC + 781 WBTC</span></td>
                    <td class="table-row2-txt-green">1.15%</td>
                    <td>BNB</td>
                    <td>1,039 USD</td>
                    <td class="table-row2-col6"><span class="table-row2-col6-blue-txt">Add</span><span class="table-row2-col6-blue-txt">Remove</span><span class="table-row2-col6-blue-txt">Swap</span><span class="table-row2-col6-grey-txt">My Portion</span></td>
                </tr>
                <tr class="table-row2">
                    <td>BTC/WBTC</td>
                    <td><span class="table-row2-col2-txt1">24,513,109 USD</span><span class="table-row2-col2-txt2">244 BTC + 781 WBTC</span></td>
                    <td class="table-row2-txt-green">1.15%</td>
                    <td>BNB</td>
                    <td>1,039 USD</td>
                    <td class="table-row2-col6"><span class="table-row2-col6-blue-txt">Add</span><span class="table-row2-col6-blue-txt">Remove</span><span class="table-row2-col6-blue-txt">Swap</span><span class="table-row2-col6-grey-txt">My Portion</span></td>
                </tr>
                <tr class="table-row2">
                    <td>BTC/WBTC</td>
                    <td><span class="table-row2-col2-txt1">24,513,109 USD</span><span class="table-row2-col2-txt2">244 BTC + 781 WBTC</span></td>
                    <td class="table-row2-txt-green">1.15%</td>
                    <td>BNB</td>
                    <td>1,039 USD</td>
                    <td class="table-row2-col6"><span class="table-row2-col6-blue-txt">Add</span><span class="table-row2-col6-blue-txt">Remove</span><span class="table-row2-col6-blue-txt">Swap</span><span class="table-row2-col6-grey-txt">My Portion</span></td>
                </tr>
            </table>
</> 
:null }
   {showtextswapoverviewinnovative ? 
<>
<table>
                <tr class="table-row1">
                    <th>Pool</th>
                    <th>Liquidity</th>
                    <th>Total Yield</th>
                    <th>Reward Coins</th>
                    <th>Volume (24hr)</th>
                    <th>Operation</th>
                </tr>
                <tr class="table-row2">
                    <td>BNB/ETH</td>
                    <td><span class="table-row2-col2-txt1">32,295,287 USD</span><span class="table-row2-col2-txt2">52,969 BNB + 9,876 ETH</span></td>
                    <td class="table-row2-txt-green">2.59%</td>
                    <td>ETH, BNB</td>
                    <td>1,043,620 USD</td>
                    <td class="table-row2-col6"><span class="table-row2-col6-blue-txt">Add</span><span class="table-row2-col6-blue-txt">Remove</span><span class="table-row2-col6-blue-txt">Swap</span><span class="table-row2-col6-grey-txt">My Portion</span></td>
                </tr>
                <tr class="table-row2">
                    <td>BNB/ETH</td>
                    <td><span class="table-row2-col2-txt1">32,295,287 USD</span><span class="table-row2-col2-txt2">52,969 BNB + 9,876 ETH</span></td>
                    <td class="table-row2-txt-green">2.59%</td>
                    <td>ETH, BNB</td>
                    <td>1,043,620 USD</td>
                    <td class="table-row2-col6"><span class="table-row2-col6-blue-txt">Add</span><span class="table-row2-col6-blue-txt">Remove</span><span class="table-row2-col6-blue-txt">Swap</span><span class="table-row2-col6-grey-txt">My Portion</span></td>
                </tr>
                <tr class="table-row2">
                    <td>BNB/ETH</td>
                    <td><span class="table-row2-col2-txt1">32,295,287 USD</span><span class="table-row2-col2-txt2">52,969 BNB + 9,876 ETH</span></td>
                    <td class="table-row2-txt-green">2.59%</td>
                    <td>ETH, BNB</td>
                    <td>1,043,620 USD</td>
                    <td class="table-row2-col6"><span class="table-row2-col6-blue-txt">Add</span><span class="table-row2-col6-blue-txt">Remove</span><span class="table-row2-col6-blue-txt">Swap</span><span class="table-row2-col6-grey-txt">My Portion</span></td>
                </tr>
                <tr class="table-row2">
                    <td>BNB/ETH</td>
                    <td><span class="table-row2-col2-txt1">32,295,287 USD</span><span class="table-row2-col2-txt2">52,969 BNB + 9,876 ETH</span></td>
                    <td class="table-row2-txt-green">2.59%</td>
                    <td>ETH, BNB</td>
                    <td>1,043,620 USD</td>
                    <td class="table-row2-col6"><span class="table-row2-col6-blue-txt">Add</span><span class="table-row2-col6-blue-txt">Remove</span><span class="table-row2-col6-blue-txt">Swap</span><span class="table-row2-col6-grey-txt">My Portion</span></td>
                </tr>
                <tr class="table-row2">
                    <td>BNB/ETH</td>
                    <td><span class="table-row2-col2-txt1">32,295,287 USD</span><span class="table-row2-col2-txt2">52,969 BNB + 9,876 ETH</span></td>
                    <td class="table-row2-txt-green">2.59%</td>
                    <td>ETH, BNB</td>
                    <td>1,043,620 USD</td>
                    <td class="table-row2-col6"><span class="table-row2-col6-blue-txt">Add</span><span class="table-row2-col6-blue-txt">Remove</span><span class="table-row2-col6-blue-txt">Swap</span><span class="table-row2-col6-grey-txt">My Portion</span></td>
                </tr>
            </table>
</> 
:null }         

        </div>
        </div>
                </>
                : null }
                
                <div class="swap-main3-container">
                
                

                {showtextswapliquidity? 
                    <>
                    {/* changing content//////// */}
                    <div class="swap-main3-content">
                        <div class="swap-main3-div1">
                            <div class="swap-main3-div1-bg-img">
                                <img src={liquidityheader}></img>
                            </div>
                            <div class="swap-main3-div1-content">
                                <div class="swap-liquidity-main3-div1a">
                                <p>Introducing the Newest Liquidity Pool</p>
                                <span>ARPA/USDT</span>
                                <button>Add Liquidity Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="swap-main3-div2">

                            {/* <div class="swap-main3-div2-conatiner"> */}
                                <div class="swap-main3-div2a">
                                    <div class="swap-content-box1-main">
                                    <div class="swap-content-box1-container">
                                        <div class="swap-main3-div2a-div1">
                                        Liquid Swap
                                        </div>
                                        <div class="swap-main3-div2a-div2">
                                        <span>Add</span> <span>Remove</span>
                                        </div>
                                        <div class="swap-content-box1-div6">
                                                <span>Select Pool</span>
                                                {/* <span class="swap-content-box1-div6-txt2">Available: --BRL</span> */}
                                                <div class="swap-liquidity-content-box1-div6a">
                                                    {/* <input type="text" value="10.00-12000.00"></input> */}
                                                    {/* <span class="swap-content-box1-div6a-txt">MAX</span> */}
                                                    <div class="swap-liquidity-content-box1-div6b">
                                                        <select id="swap-liquidity-content-box1-div6b-select">
                                                        <option class="swap-content-box1-div6b-option">BNB/BTC</option>
                                                            <option class="swap-content-box1-div6b-option">BNB/ETH</option>
                                                            <option class="swap-content-box1-div6b-option">ETH/BETH</option>
                                                            <option class="swap-content-box1-div6b-option">BTC/BUSD</option>
                                                            <option class="swap-content-box1-div6b-option">USDT/BTC</option>
                                                            <option class="swap-content-box1-div6b-option">BNB/BUSD</option>
                                                            <option class="swap-content-box1-div6b-option">USDT/BNB</option>
                                                            <option class="swap-content-box1-div6b-option">BUSD/BTH</option>
                                                            <option class="swap-content-box1-div6b-option">USDT/ETH</option>
                                                            <option class="swap-content-box1-div6b-option">BTC/ETH</option>
                                                            <option class="swap-content-box1-div6b-option">ETH/DAI</option>
                                                            <option class="swap-content-box1-div6b-option">WBTC/ETH</option>
                                                            <option class="swap-content-box1-div6b-option">HOOK/USDT</option>
                                                            <option class="swap-content-box1-div6b-option">APT/USDT</option>
                                                            <option class="swap-content-box1-div6b-option">OP/USDT</option>
                                                            <option class="swap-content-box1-div6b-option">HFT/USDT</option>
                                                            <option class="swap-content-box1-div6b-option">OP/USDT</option>
                                                            <option class="swap-content-box1-div6b-option">HFT/USDT</option>
                                                            <option class="swap-content-box1-div6b-option">MATIC/USDT</option>
                                                            <option class="swap-content-box1-div6b-option">LINK/ETH</option>
                                                            <option class="swap-content-box1-div6b-option">BTC/WBTC</option>
                                                            <option class="swap-content-box1-div6b-option">BUSD/USDT</option>
                                                            <option class="swap-content-box1-div6b-option">BUSD/DAI</option>
                                                            <option class="swap-content-box1-div6b-option">USDT/DAI</option>
                                                            <option class="swap-content-box1-div6b-option">SAND/BTC</option>
                                                            <option class="swap-content-box1-div6b-option">SAND/BNB</option>
                                                            <option class="swap-content-box1-div6b-option">POND/BUSD</option>
                                                        
                                                        </select>
                                                    </div>
                                                </div> 
                                                <div class="swap-liquidity-radiobtns">
                                                    <div class="swap-liquidity-radiobtns-1">
                                                        <input type="radio" name="radio" id="radio1"/>
                                                        <label for="radio1">
                                                            <span>BNB + BTC</span>
                                                        </label>
                                                    </div>
                                                    <div class="swap-liquidity-radiobtns-1">
                                                        <input type="radio" name="radio" id="radio2"/>
                                                        <label for="radio2">
                                                            <span>BNB</span>
                                                        </label>
                                                    </div>
                                                    <div class="swap-liquidity-radiobtns-1">
                                                        <input type="radio" name="radio" id="radio3"/>
                                                        <label for="radio3">
                                                            <span>BTC</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            {/* <div class="swap-content-box1-div2">
                                                <img src={updownarrow}></img>
                                            </div> */}
                                            <div class="swap-content-box1-div6">
                                                <span>Amount</span>
                                                <span class="swap-content-box1-div6-txt2">Available: 0 BNB</span>
                                                <div class="swap-content-box1-div6a">
                                                    <input type="text" placeholder="At least 0.0022"></input>
                                                    <span class="swap-content-box1-div6a-txt">MAX</span>
                                                    <div class="swap-content-box1-div6b">
                                                        <select id="swap-content-box1-div6b-select">
                                                        <option class="swap-content-box1-div6b-option">BNB</option>
                                                        <option class="swap-content-box1-div6b-option">BTC</option>
                                                            
                                                        </select>
                                                    </div>
                                                </div> 
                                            </div>

                                            <div class="swap-content-box1-div5">
                                                <span>The final amount is determined by the price at the time of order.</span>
                                            </div>
                                    </div>
                                </div>
                                </div>

                                <div class="swap-main3-div2b">
                                    <div class="swap-main3-div2b-container">
                                    <div class="swap-main3-div2b-div1">
                                        <span class="swap-main3-div2b-div1-txt1">Summary</span>
                                        <span class="swap-main3-div2b-div1-txt2"><img src={rewardlight}></img>Rewards available!</span>
                                    </div>
                                    <div class="swap-main3-div2b-div2">
                                        <div class="swap-main3-div2b-div2a">
                                            <span class="swap-main3-div2b-div2a-txt1">Current pool size</span>
                                            <span class="swap-main3-div2b-div2a-txt2"><div>34,421 BNB</div><div>+</div><div>447 BTC</div></span>
                                        </div>
                                        <div class="swap-main3-div2b-div2a swap-main3-div2b-div2a-spacing">
                                            <span class="swap-main3-div2b-div2a-txt1">Total yield</span>
                                            <span class="swap-main3-div2b-div2a-txt2">2.20%</span>
                                        </div>
                                        
                                    </div>

                                    <div class="swap-main3-div2b-div3">
                                        <div class="swap-liquidity-main3-div2b-div3-checkbox">
                                            <input type='checkbox' id="checkbox1"></input>
                                            <label for="checkbox1"><span class="swap-main3-">I have read and agreed to Binance Liquid Swap Terms of Use.</span></label>    
                                        </div>
                                        <div>
                                            <button>Add Liquidity</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            
                        </div>
                    </div>
                    {/* end of changing content//////// */}
                    </>
                    :null
                }
                    {showtextswapswap? 
                    <>
                    {/* changing content//////// */}
                    <div class="swap-main3-content">
                        <div class="swap-main3-div1">
                            <div class="swap-main3-div1-bg-img">
                                <img src={swapheader}></img>
                            </div>
                            <div class="swap-main3-div1-content">
                                <div class="swap-main3-div1a">
                                <p>Swap Rewards</p>
                                <span>0 BNB</span>
                                <button>Claim Rewards</button>
                                </div>
                            </div>
                        </div>
                        <div class="swap-main3-div2">

                            {/* <div class="swap-main3-div2-conatiner"> */}
                                <div class="swap-main3-div2a">
                                    <div class="swap-content-box1-main">
                                    <div class="swap-content-box1-container">
                                        <div class="swap-main3-div2a-div1">
                                            Swap
                                        </div>
                                        <div class="swap-content-box1-div6">
                                                <span>From</span>
                                                <span class="swap-content-box1-div6-txt2">Available: --BRL</span>
                                                <div class="swap-content-box1-div6a">
                                                    <input type="text" value="10.00-12000.00"></input>
                                                    <span class="swap-content-box1-div6a-txt">MAX</span>
                                                    <div class="swap-content-box1-div6b">
                                                        <select id="swap-content-box1-div6b-select">
                                                        <option class="swap-content-box1-div6b-option">BTC</option>
                                                            <option class="swap-content-box1-div6b-option">BNB</option>
                                                            <option class="swap-content-box1-div6b-option">ETH</option>
                                                            <option class="swap-content-box1-div6b-option">BETH</option>
                                                            <option class="swap-content-box1-div6b-option">BUSD</option>
                                                            <option class="swap-content-box1-div6b-option">USDT</option>
                                                            <option class="swap-content-box1-div6b-option">DAI</option>
                                                            <option class="swap-content-box1-div6b-option">WBTC</option>
                                                            <option class="swap-content-box1-div6b-option">HOOK</option>
                                                            <option class="swap-content-box1-div6b-option">APT</option>
                                                            <option class="swap-content-box1-div6b-option">OP</option>
                                                            <option class="swap-content-box1-div6b-option">HFT</option>
                                                            <option class="swap-content-box1-div6b-option">MATIC</option>
                                                            <option class="swap-content-box1-div6b-option">TRIX</option>
                                                            <option class="swap-content-box1-div6b-option">SAND</option>
                                                            <option class="swap-content-box1-div6b-option">ICP</option>
                                                            <option class="swap-content-box1-div6b-option">PERP</option>
                                                            <option class="swap-content-box1-div6b-option">TLM</option>
                                                            <option class="swap-content-box1-div6b-option">SANTOS</option>
                                                            <option class="swap-content-box1-div6b-option">DAR</option>
                                                            <option class="swap-content-box1-div6b-option">ALGO</option>
                                                            <option class="swap-content-box1-div6b-option">RUNE</option>
                                                            <option class="swap-content-box1-div6b-option">ZEN</option>
                                                            <option class="swap-content-box1-div6b-option">LIT</option>
                                                            <option class="swap-content-box1-div6b-option">TOKA</option>
                                                            <option class="swap-content-box1-div6b-option">GMT</option>
                                                            <option class="swap-content-box1-div6b-option">APE</option>
                                                        
                                                        </select>
                                                    </div>
                                                </div> 
                                            </div>
                                            <div class="swap-content-box1-div2">
                                                <img src={updownarrow}></img>
                                            </div>
                                            <div class="swap-content-box1-div6">
                                                <span>To</span>
                                                <span class="swap-content-box1-div6-txt2">You receive</span>
                                                <div class="swap-content-box1-div6a">
                                                    <input type="text" value="10.00-12000.00"></input>
                                                    <span class="swap-content-box1-div6a-txt">MAX</span>
                                                    <div class="swap-content-box1-div6b">
                                                        <select id="swap-content-box1-div6b-select">
                                                        <option class="swap-content-box1-div6b-option">BTC</option>
                                                            <option class="swap-content-box1-div6b-option">BNB</option>
                                                            <option class="swap-content-box1-div6b-option">ETH</option>
                                                            <option class="swap-content-box1-div6b-option">BETH</option>
                                                            <option class="swap-content-box1-div6b-option">BUSD</option>
                                                            <option class="swap-content-box1-div6b-option">USDT</option>
                                                            <option class="swap-content-box1-div6b-option">DAI</option>
                                                            <option class="swap-content-box1-div6b-option">WBTC</option>
                                                            <option class="swap-content-box1-div6b-option">HOOK</option>
                                                            <option class="swap-content-box1-div6b-option">APT</option>
                                                            <option class="swap-content-box1-div6b-option">OP</option>
                                                            <option class="swap-content-box1-div6b-option">HFT</option>
                                                            <option class="swap-content-box1-div6b-option">MATIC</option>
                                                            <option class="swap-content-box1-div6b-option">TRIX</option>
                                                            <option class="swap-content-box1-div6b-option">SAND</option>
                                                            <option class="swap-content-box1-div6b-option">ICP</option>
                                                            <option class="swap-content-box1-div6b-option">PERP</option>
                                                            <option class="swap-content-box1-div6b-option">TLM</option>
                                                            <option class="swap-content-box1-div6b-option">SANTOS</option>
                                                            <option class="swap-content-box1-div6b-option">DAR</option>
                                                            <option class="swap-content-box1-div6b-option">ALGO</option>
                                                            <option class="swap-content-box1-div6b-option">RUNE</option>
                                                            <option class="swap-content-box1-div6b-option">ZEN</option>
                                                            <option class="swap-content-box1-div6b-option">LIT</option>
                                                            <option class="swap-content-box1-div6b-option">TOKA</option>
                                                            <option class="swap-content-box1-div6b-option">GMT</option>
                                                            <option class="swap-content-box1-div6b-option">APE</option>
                                                        
                                                        </select>
                                                    </div>
                                                </div> 
                                            </div>

                                            <div class="swap-content-box1-div5">
                                                <span>The ultimate price and output is determined by the amount of tokens in the pool at the time of your swap.</span>
                                            </div>
                                    </div>
                                </div>
                                </div>

                                <div class="swap-main3-div2b">
                                    <div class="swap-main3-div2b-container">
                                    <div class="swap-main3-div2b-div1">
                                        <span class="swap-main3-div2b-div1-txt1">Summary</span>
                                        <span class="swap-main3-div2b-div1-txt2"><img src={rewardlight}></img>Rewards available!</span>
                                    </div>
                                    <div class="swap-main3-div2b-div2">
                                        <div class="swap-main3-div2b-div2a">
                                            <span class="swap-main3-div2b-div2a-txt1">Price</span>
                                            <span class="swap-main3-div2b-div2a-txt2">--</span>
                                        </div>
                                        <div class="swap-main3-div2b-div2a">
                                            <span class="swap-main3-div2b-div2a-txt1">Slippage</span>
                                            <span class="swap-main3-div2b-div2a-txt2">--</span>
                                        </div>
                                        <div class="swap-main3-div2b-div2a">
                                            <span class="swap-main3-div2b-div2a-txt1">Effective fee (--%)</span>
                                            <span class="swap-main3-div2b-div2a-txt2">--</span>
                                        </div>
                                        <div class="swap-main3-div2b-div2a">
                                            <span class="swap-main3-div2b-div2a-txt1">Swap Fee (--%)</span>
                                            <span class="swap-main3-div2b-div2a-txt1a">View Rate</span>
                                            <span class="swap-main3-div2b-div2a-txt2">--</span>
                                        </div>
                                        <div class="swap-main3-div2b-div2a">
                                            <span class="swap-main3-div2b-div2a-txt1">Est. Fee Rebate (--%)</span>
                                            <span class="swap-main3-div2b-div2a-txt2">--</span>
                                        </div>
                                    </div>
                                    <div class="swap-main3-div2b-div3">
                                        <button>Log In to Swap</button>
                                    </div>
                                </div>
                                </div>
                            
                        </div>
                    </div>
                    {/* end of changing content//////// */}
                    </>
                    :null
                }
                
                    
                </div>
            </div>
            <div class="swap-main4">
                <div class="swap-main4-container">
                    <div class="swap-main4-div1">
                        Learn More
                    </div>
                    <div class="swap-main4-div2">
                        <div class="swap-main4-div2a">
                            <div class="swap-main4-div2a-div1">
                                <img src={academylearn}></img>
                            </div>
                            <div class="swap-main4-div2a-div2">
                                <p>Academy</p>
                                <span>Learn how to add liquidity to become a liquidity provider and earn high yield farming rewards.</span>
                            </div>
                        </div>
                        <div class="swap-main4-div2a">
                            <div class="swap-main4-div2a-div1">
                                <img src={lowfees}></img>
                            </div>
                            <div class="swap-main4-div2a-div2">
                                <p>Swap Fees</p>
                                <span>Low fees and high rewards. Swap to earn more BNB.</span>
                            </div>
                        </div>
                        <div class="swap-main4-div2a">
                            <div class="swap-main4-div2a-div1">
                                <img src={tutorial}></img>
                            </div>
                            <div class="swap-main4-div2a-div2">
                                <p>Tutorials</p>
                                <span>Watch the video tutorials to learn more about the product.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FAQ/>
        </div>
        </>
    )
};
export default Swap