import React from 'react';
import "./DepositFlat3.css";

import { useState } from 'react';

import bgimg from "../assets/figma/DepositFlat/bg-img.png";
import forwardarrow from "../assets/figma/DepositFlat/forward-arrow.png";
import downarrow from "../assets/figma/DepositFlat/down-arrow.png";
import uparrow from "../assets/figma/DepositFlat/up-arrow.png";
import usaflag from "../assets/figma/DepositFlat/usa-flag.png";
import cross from "../assets/figma/DepositFlat/cross.png";
import selectedtick from "../assets/figma/DepositFlat/selected-tick.png";
import forwardarrowwhite from "../assets/figma/DepositFlat/forward-arrow-white.png";
import { Link } from 'react-router-dom';

function DepositFlat5(){
    
    const [showText, setShowText] = useState('');
    const onClick = () => {
        setShowText(!showText)
        setShowText2(false)

    };
    const [showText2, setShowText2] = useState('');
    const onClick2 = () => {
        setShowText2(!showText2)
        setShowText(false)
    
    };

    return(
        <>
            <div class="dflat3-main">
                <div class="dflat3-main-bg-img">
                    <img src={bgimg}></img>
                </div>
                <div class="dflat3-content">
                    <div class='dflat3-content-container'>
                        <div class="dflat3-content-head">
                            <div class="dflat3-content-head-div1">
                                <span class="dflat3-content-head-div1-txt">Buy Crypto with Cash Balance</span>
                            </div>
                            <div class="dflat3-content-head-div2">
                                {/* <button class="dflat3-content-head-div2-btn1">Order history</button> */}
                                <Link to='/covertHist' style={{textDecoration: 'none'}}><button class="dflat3-content-head-div2-btn2">Order history<img src={forwardarrow}></img></button></Link>
                            </div>
                            
                        </div>

                        <div class="dflat3-content-box">

                            <div class="dflat3-content-box1">
                                <div class="dflat3-content-box1-main">
                                    <div class="dflat3-content-box1-container">
                                        <div class="dflat3-content-box1-div1">
                                            <span class="dflat3-content-box1-div1-txt">1. Select currency</span>
                                        </div>
                                        
                                        {/* <div class="dflat3-content-box1-div3"> */}
                                            {/* <span class="dflat3-content-box1-div2-txt1">Deposite with:</span> */}
                                            <div class="dflat3-content-box1-div3a">
                                            <button class="dflat3-content-box1-div3a-btn1">Buy</button>
                                            <button class="dflat3-content-box1-div3a-btn2">Sell</button>
                                            </div>
                                        {/* </div> */}
                                        
                                        
                                        
                                        <div class="dflat3-content-box1-div6">
                                            <span>Card number:</span>
                                            <div class="dflat3-content-box1-div6a">
                                                <input type="text" value="10.00-12000.00"></input>
                                                <div class="dflat3-content-box1-div6b">
                                                    <select id="dflat3-content-box1-div6b-select">
                                                        <option class="dflat3-content-box1-div6b-option">USD</option>
                                                        <option class="dflat3-content-box1-div6b-option">USD</option>
                                                    </select>
                                                </div>
                                            </div> 
                                        </div>

                                        <div class="dflat3-content-box1-div6">
                                            <span>Receive:</span>
                                            <div class="dflat3-content-box1-div6a">
                                                <input type="text" value="0.00"></input>
                                                <div class="dflat3-content-box1-div6b">
                                                    <select id="dflat3-content-box1-div6b-select">
                                                        <option class="dflat3-content-box1-div6b-option">BTC</option>
                                                        <option class="dflat3-content-box1-div6b-option">BTC</option>
                                                    </select>
                                                </div>
                                            </div> 
                                        </div>
                                        

                                       
                                        <div class="dflat3-content-box1-div5">
                                            <button class="dflat3-content-box1-div5-btn1">Recuring buy<img class="dflat3-content-box1-div5-img2" src={forwardarrowwhite}></img></button>
                                            <button class="dflat3-content-box1-div5-btn2">Continue</button>
                                        </div>

                                        

                                        <div class="dflat3-content-box1-div5">
                                            <img class="dflat3-content-box1-div5-img1" src={selectedtick}></img>
                                            <span class="dflat3-content-box1-div5-txt">The deposite with card service is powered by </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="dflat3-content-box2">
                                
                                <div class="dflat3-content-box2-main">
                                    <div class="dflat3-content-box2-container">
                                        <div class="dflat3-content-box1-div1">
                                            <span class="dflat3-content-box1-div1-txt">Share this with your friends</span>
                                            <img class="dflat3-content-box2-div1-img" src={cross}></img>
                                        </div>
                                        <div class="dflat3-content-box1-div1">
                                            <span class="dflat3-content-box1-div1-txt">FAQ</span>
                                            <Link to='/faq' style={{textDecoration: 'none', cursor: 'pointer'}}><span class="dflat3-content-box2-div1-txt2">View More</span></Link>
                                        </div>
                                        <div class="dflat3-content-box2-div3">
                                            <div onClick={onClick} class="dflat3-content-box2-div3a">
                                                <div class="dflat3-content-box2-div3a-div1">
                                                    <span class="dflat3-content-box2-div3a-txt">How long does the deposite take?</span>
                                                </div>
                                                {showText ? <img src={uparrow}></img> : <img src={downarrow}></img> }
                                            </div>
                                            {showText ? <Text /> : null}
                                            <div onClick={onClick2} class="dflat3-content-box2-div3a">
                                                <div class="dflat3-content-box2-div3a-div1">
                                                    <span class="dflat3-content-box2-div3a-txt">How to deposite with flat Debit/Credit Card?</span>
                                                </div>
                                                    {showText2 ? <img src={uparrow}></img> : <img src={downarrow}></img> }
                                            </div>
                                            {showText2 ? <Text2 /> : null}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>



                    </div>
                </div>
            </div>
        </>
    )
};


function Text(){
    return(
        <>
<div class="dflat3-content-box2-div3a-onclick-main">

<span class="dflat3-content-box2-div3a-onclick-main-txt">dummy answer</span>

</div>
        </>
    )
 };
 function Text2(){
    return(
        <>
<div class="dflat3-content-box2-div3a-onclick-main">

<span class="dflat3-content-box2-div3a-onclick-main-txt">dummy answer</span>

</div>
        </>
    )
 };
export default DepositFlat5;