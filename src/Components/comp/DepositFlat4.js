import React from 'react';
import "./DepositFlat4.css";

import { useState } from 'react';

import bgimg from "../assets/figma/DepositFlat/bg-img.png";
import forwardarrow from "../assets/figma/DepositFlat/forward-arrow.png";
import downarrow from "../assets/figma/DepositFlat/down-arrow.png";
import uparrow from "../assets/figma/DepositFlat/up-arrow.png";
import usaflag from "../assets/figma/DepositFlat/usa-flag.png";
import cross from "../assets/figma/DepositFlat/cross.png";
import selectedtick from "../assets/figma/DepositFlat/selected-tick.png";
import forwardarrowwhite from "../assets/figma/DepositFlat/forward-arrow-white.png";

function DepositFlat3(){
    
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
            <div class="dflat4-main">
                <div class="dflat4-main-bg-img">
                    <img src={bgimg}></img>
                </div>
                <div class="dflat4-content">
                    <div class='dflat4-content-container'>
                        <div class="dflat4-content-head">
                            <div class="dflat4-content-head-div1">
                                <span class="dflat4-content-head-div1-txt">Choose Payment Method</span>
                            </div>
                            <div class="dflat4-content-head-div2">
                                {/* <button class="dflat4-content-head-div2-btn1">Order history</button> */}
                                <button class="dflat4-content-head-div2-btn2">Order history<img src={forwardarrow}></img></button>
                            </div>
                            
                        </div>

                        <div class="dflat4-content-box">

                            <div class="dflat4-content-box1">
                                <div class="dflat4-content-box1-main">
                                    <div class="dflat4-content-box1-container">
                                        <div class="dflat4-content-box1-div1">
                                            <span class="dflat4-content-box1-div1-txt1">You Spent</span>
                                            <span class="dflat4-content-box1-div1-txt dflat4-content-box1-div1-txt2">16.00 USD</span>
                                        </div>
                                        
                                        {/* <div class="dflat4-content-box1-div3"> */}
                                            {/* <span class="dflat4-content-box1-div2-txt1">Deposite with:</span> */}
                                            <div class="dflat4-content-box1-div3a">
                                            <button class="dflat4-content-box1-div3a-btn1">Buy</button>
                                            <button class="dflat4-content-box1-div3a-btn2">Sell</button>
                                            </div>
                                        {/* </div> */}
                                        
                                        
                                        
                                        <div class="dflat4-content-box1-div6">
                                            <span>Flat payment methods</span>
                                            <span class="dflat4-content-box1-div6-txt2">You receive</span>
                                            
                                            <div class="dflat4-content-box1-div6a">
                                            <img class="dflat4-content-box1-div6a-img1" src={selectedtick}></img>
                                                <div class="dflat4-content-box1-div6a-div1">
                                                    <img src={usaflag}></img>
                                                    <div class="dflat4-content-box1-div6a-div2">
                                                        <span class="dflat4-content-box1-div6a-div2-txt1">Visa/Mastercards</span>
                                                        <span class="dflat4-content-box1-div6a-div2-txt2">Keep me loged in</span>
                                                        <div class="dflat4-content-box1-div6a-div2a">
                                                            <span class="dflat4-content-box1-div6a-div2a-txt1">≈ 0.0000343 BTC</span>
                                                            <span class="dflat4-content-box1-div6a-div2a-txt2">1BTC = $23,420.213</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>


                                        <div class="dflat4-content-box1-div6">
                                            <span>P2P payment methods</span>
                                            <span class="dflat4-content-box1-div6-txt2">You receive</span>
                                            
                                            <div class="dflat4-content-box1-div7a">
                                                <div class="dflat4-content-box1-div6a-div2a">
                                                    <span class="dflat4-content-box1-div6a-div2a-txt1">≈ 0.0000343 BTC</span>
                                                    <span class="dflat4-content-box1-div6a-div2a-txt2">1BTC = $23,420.213</span>
                                                </div>
                                            </div>
                                            <div class="dflat4-content-box1-div7a">
                                                <div class="dflat4-content-box1-div6a-div2a">
                                                    <span class="dflat4-content-box1-div6a-div2a-txt1">≈ 0.0000343 BTC</span>
                                                    <span class="dflat4-content-box1-div6a-div2a-txt2">1BTC = $23,420.213</span>
                                                </div>
                                            </div>
                                            
                                        </div>

                                        {/* <div class="dflat4-content-box1-div6">
                                            <span>P2P payment methods</span>
                                            <div class="dflat4-content-box1-div6a">
                                                <input type="text" value="0.00"></input>
                                                <div class="dflat4-content-box1-div6b">
                                                    <select id="dflat4-content-box1-div6b-select">
                                                        <option class="dflat4-content-box1-div6b-option">BTC</option>
                                                        <option class="dflat4-content-box1-div6b-option">BTC</option>
                                                    </select>
                                                </div>
                                            </div> 
                                        </div> */}
                                        

                                       
                                        <div class="dflat4-content-box1-div5">
                                            <button class="dflat4-content-box1-div5-btn1">Previus</button>
                                            <button class="dflat4-content-box1-div5-btn2">Continue</button>
                                        </div>

                                        

                                        
                                    </div>
                                </div>
                            </div>

                            <div class="dflat4-content-box2">
                                
                                <div class="dflat4-content-box2-main">
                                    <div class="dflat4-content-box2-container">
                                        <div class="dflat4-content-box1-div1">
                                            <span class="dflat4-content-box1-div1-txt">Share this with your friends</span>
                                            <img class="dflat4-content-box2-div1-img" src={cross}></img>
                                        </div>
                                        <div class="dflat4-content-box1-div1">
                                            <span class="dflat4-content-box1-div1-txt">FAQ</span>
                                            <span class="dflat4-content-box2-div1-txt2">View More</span>
                                        </div>
                                        <div class="dflat4-content-box2-div3">
                                            <div onClick={onClick} class="dflat4-content-box2-div3a">
                                                <div class="dflat4-content-box2-div3a-div1">
                                                    <span class="dflat4-content-box2-div3a-txt">How long does the deposite take?</span>
                                                </div>
                                                {showText ? <img src={uparrow}></img> : <img src={downarrow}></img> }
                                            </div>
                                            {showText ? <Text /> : null}
                                            <div onClick={onClick2} class="dflat4-content-box2-div3a">
                                                <div class="dflat4-content-box2-div3a-div1">
                                                    <span class="dflat4-content-box2-div3a-txt">How to deposite with flat Debit/Credit Card?</span>
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
<div class="dflat4-content-box2-div3a-onclick-main">

<span class="dflat4-content-box2-div3a-onclick-main-txt">dummy answer</span>

</div>
        </>
    )
 };
 function Text2(){
    return(
        <>
<div class="dflat4-content-box2-div3a-onclick-main">

<span class="dflat4-content-box2-div3a-onclick-main-txt">dummy answer</span>

</div>
        </>
    )
 };
export default DepositFlat3