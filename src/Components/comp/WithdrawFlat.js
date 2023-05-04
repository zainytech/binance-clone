import React from 'react';
import "./WithdrawFlat.css";

import { useState } from 'react';

import bgimg from "../assets/figma/DepositFlat/bg-img.png";
import forwardarrow from "../assets/figma/DepositFlat/forward-arrow.png";
import downarrow from "../assets/figma/DepositFlat/down-arrow.png";
import uparrow from "../assets/figma/DepositFlat/up-arrow.png";
import usaflag from "../assets/figma/DepositFlat/usa-flag.png";
import cross from "../assets/figma/DepositFlat/cross.png";
import selectedtick from "../assets/figma/DepositFlat/selected-tick.png";
function WithdrawFlat(){
    
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
            <div class="wflat-main">
                <div class="wflat-main-bg-img">
                    <img src={bgimg}></img>
                </div>
                <div class="wflat-content">
                    <div class='wflat-content-container'>
                        <div class="wflat-content-head">
                            <div class="wflat-content-head-div1">
                                <span class="wflat-content-head-div1-txt">Withdraw Funds</span>
                            </div>
                            <div class="wflat-content-head-div2">
                                <button class="wflat-content-head-div2-btn1">Order history</button>
                                <button class="wflat-content-head-div2-btn2">Withdraw Crypto<img src={forwardarrow}></img></button>
                            </div>
                            
                        </div>

                        <div class="wflat-content-box">

                            <div class="wflat-content-box1">
                                <div class="wflat-content-box1-main">
                                    <div class="wflat-content-box1-container">
                                        <div class="wflat-content-box1-div1">
                                            <span class="wflat-content-box1-div1-txt">1. Select currency</span>
                                        </div>
                                        <span class="wflat-content-box1-div2-txt1">Currency:</span>
                                        <select id="select2" class="wflat-content-box1-div2">
                                        <option class="wflat-content-box1-div2a">
                                                <img class="wflat-content-box1-div2-div-img1" src={usaflag}></img>
                                                <span class="wflat-content-box1-div2-txt2">USA</span>
                                                <img class="wflat-content-box1-div2a-img2" src={uparrow}></img>

                                        
                                        </option>
                                        <option>
                                            {/* <div calss="wflat-content-box1-div2"> */}
                                            
                                                <img class="wflat-content-box1-div2-div-img1" src={usaflag}></img>
                                                <span class="wflat-content-box1-div2-txt2">UK</span>
                                                <img class="wflat-content-box1-div2a-img2" src={uparrow}></img>
                                            
                                            {/* </div> */}
                                        
                                        </option>
                                        </select>
                                        <div class="wflat-content-box1-div3">
                                            <span class="wflat-content-box1-div2-txt1">Deposite with:</span>
                                            <div class="wflat-content-box1-div3a">
                                            <button class="wflat-content-box1-div3a-btn1">Recommended</button>
                                            <button class="wflat-content-box1-div3a-btn2">Other Methods</button>
                                        </div>
                                        </div>
                                        <div class="wflat-content-box1-div4">
                                            <span class="wflat-content-box1-div2-txt1">Choose Bank:</span>
                                            <div class="wflat-content-box1-div4a">
                                                <input type="radio" name="radio" />
                                                <div class="wflat-content-box1-div4a-div1">
                                                    <img src={usaflag}></img>
                                                    <div class="wflat-content-box1-div4a-div2">
                                                        <span class="wflat-content-box1-div2-txt2 wflat-content-box1-div4a-div2-txt1">Bank Name</span>
                                                        <span class="wflat-content-box1-div4a-div2-txt2">Keep me loged in</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="wflat-content-box1-div4a">
                                                <input type="radio" name="radio" />
                                                <div class="wflat-content-box1-div4a-div1">
                                                    <img class="wflat-content-box1-div2-div-img1" src={usaflag}></img>
                                                    <div class="wflat-content-box1-div4a-div2">
                                                        <span class="wflat-content-box1-div2-txt2 wflat-content-box1-div4a-div2-txt1">Bank Name</span>
                                                        <span class="wflat-content-box1-div4a-div2-txt2">Keep me loged in</span>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                        <div class="wflat-content-box1-div5">
                                            <button>Continue</button>
                                        </div>
                                        <div class="wflat-content-box1-div5">
                                            <img src={selectedtick}></img>
                                            <span>The deposite with card service is powered by </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="wflat-content-box2">
                                
                                <div class="wflat-content-box2-main">
                                    <div class="wflat-content-box2-container">
                                        <div class="wflat-content-box1-div1">
                                            <span class="wflat-content-box1-div1-txt">Share this with your friends</span>
                                            <img class="wflat-content-box2-div1-img" src={cross}></img>
                                        </div>
                                        <div class="wflat-content-box1-div1">
                                            <span class="wflat-content-box1-div1-txt">FAQ</span>
                                            <span class="wflat-content-box2-div1-txt2">View More</span>
                                        </div>
                                        <div class="wflat-content-box2-div3">
                                            <div onClick={onClick} class="wflat-content-box2-div3a">
                                                <div class="wflat-content-box2-div3a-div1">
                                                    <span class="wflat-content-box2-div3a-txt">How long does the deposite take?</span>
                                                </div>
                                                {showText ? <img src={uparrow}></img> : <img src={downarrow}></img> }
                                            </div>
                                            {showText ? <Text /> : null}
                                            <div onClick={onClick2} class="wflat-content-box2-div3a">
                                                <div class="wflat-content-box2-div3a-div1">
                                                    <span class="wflat-content-box2-div3a-txt">How to deposite with flat Debit/Credit Card?</span>
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
<div class="wflat-content-box2-div3a-onclick-main">

<span class="wflat-content-box2-div3a-onclick-main-txt">dummy answer</span>

</div>
        </>
    )
 };
 function Text2(){
    return(
        <>
<div class="wflat-content-box2-div3a-onclick-main">

<span class="wflat-content-box2-div3a-onclick-main-txt">dummy answer</span>

</div>
        </>
    )
 };
export default WithdrawFlat