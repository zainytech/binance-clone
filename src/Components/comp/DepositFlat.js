import React from 'react';
import "./DepositFlat.css";

import { useState } from 'react';
import ReactFlagsSelect from "react-flags-select";

import bgimg from "../assets/figma/DepositFlat/bg-img.png";
import forwardarrow from "../assets/figma/DepositFlat/forward-arrow.png";
import downarrow from "../assets/figma/DepositFlat/down-arrow.png";
import uparrow from "../assets/figma/DepositFlat/up-arrow.png";
import usaflag from "../assets/figma/DepositFlat/usa-flag.png";
import cross from "../assets/figma/DepositFlat/cross.png";
import selectedtick from "../assets/figma/DepositFlat/selected-tick.png";
import { green } from '@material-ui/core/colors';
function DepositFlat(){

    const [selected, setSelected] = useState("");
    
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

            <div class="dflat-main">
                <div class="dflat-main-bg-img">
                    <img src={bgimg}></img>
                </div>
                <div class="dflat-content">
                    <div class='dflat-content-container'>
                        <div class="dflat-content-head">
                            <div class="dflat-content-head-div1">
                                <span class="dflat-content-head-div1-txt">Deposit Funds</span>
                            </div>
                            <div class="dflat-content-head-div2">
                                <button class="dflat-content-head-div2-btn1">Order history</button>
                                <button class="dflat-content-head-div2-btn2">Deposit Crypto<img src={forwardarrow}></img></button>
                            </div>
                            
                        </div>

                        <div class="dflat-content-box">

                            <div class="dflat-content-box1">
                                <div class="dflat-content-box1-main">
                                    <div class="dflat-content-box1-container">
                                        <div class="dflat-content-box1-div1">
                                            <span class="dflat-content-box1-div1-txt">1. Select currency</span>
                                        </div>
                                        <span class="dflat-content-box1-div2-txt1">Currency:</span>
                                        <div class="aasa">
                                        <ReactFlagsSelect id="react-flag-drop"
                                            selected={ selected }
                                            
                                            onSelect={(code) => setSelected(code)}
                                            countries={ ["US", "GB", "FR", "DE", "IT"]}
                                            placeholder="Select Language" 
                                        />
                                                          </div>                      
                                        

                                        <div class="dflat-content-box1-div3">
                                            <span class="dflat-content-box1-div2-txt1">Deposite with:</span>
                                            <div class="dflat-content-box1-div3a">
                                            <button class="dflat-content-box1-div3a-btn1">Recommended</button>
                                            <button class="dflat-content-box1-div3a-btn2">Other Methods</button>
                                        </div>
                                        </div>
                                        <div class="dflat-content-box1-div4">
                                            <span class="dflat-content-box1-div2-txt1">Choose Bank:</span>
                                            <div class="dflat-content-box1-div4a">
                                                <input type="radio" name="radio" id="radio1"/>
                                                <label for="radio1">
                                                <div class="dflat-content-box1-div4a-div1">
                                                    <img src={usaflag}></img>
                                                    <div class="dflat-content-box1-div4a-div2">
                                                        <span class="dflat-content-box1-div2-txt2 dflat-content-box1-div4a-div2-txt1">Bank Name</span>
                                                        <span class="dflat-content-box1-div4a-div2-txt2">Keep me loged in</span>
                                                    </div>
                                                </div>
                                                </label>
                                            </div>
                                            <div class="dflat-content-box1-div4a">
                                                <input type="radio" name="radio" id="radio2"/>
                                                <label for="radio2">
                                                <div class="dflat-content-box1-div4a-div1">
                                                    <img class="dflat-content-box1-div2-div-img1" src={usaflag}></img>
                                                    <div class="dflat-content-box1-div4a-div2">
                                                        <span class="dflat-content-box1-div2-txt2 dflat-content-box1-div4a-div2-txt1">Bank Name</span>
                                                        <span class="dflat-content-box1-div4a-div2-txt2">Keep me loged in</span>
                                                    </div>
                                                </div>
                                                </label>
                                            </div>
                                        
                                        </div>
                                        <div class="dflat-content-box1-div5">
                                            <button>Continue</button>
                                        </div>
                                        <div class="dflat-content-box1-div5">
                                            <img src={selectedtick}></img>
                                            <span class="dflat-content-box1-div5-txt">The deposite with card service is powered by </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="dflat-content-box2">
                                
                                <div class="dflat-content-box2-main">
                                    <div class="dflat-content-box2-container">
                                        <div class="dflat-content-box1-div1">
                                            <span class="dflat-content-box1-div1-txt">Share this with your friends</span>
                                            <img class="dflat-content-box2-div1-img" src={cross}></img>
                                        </div>
                                        <div class="dflat-content-box1-div1">
                                            <span class="dflat-content-box1-div1-txt">FAQ</span>
                                            <span class="dflat-content-box2-div1-txt2">View More</span>
                                        </div>
                                        <div class="dflat-content-box2-div3">
                                            <div onClick={onClick} class="dflat-content-box2-div3a">
                                                <div class="dflat-content-box2-div3a-div1">
                                                    <span class="dflat-content-box2-div3a-txt">How long does the deposite take?</span>
                                                </div>
                                                {showText ? <img src={uparrow}></img> : <img src={downarrow}></img> }
                                            </div>
                                            {showText ? <Text /> : null}
                                            <div onClick={onClick2} class="dflat-content-box2-div3a">
                                                <div class="dflat-content-box2-div3a-div1">
                                                    <span class="dflat-content-box2-div3a-txt">How to deposite with flat Debit/Credit Card?</span>
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
<div class="dflat-content-box2-div3a-onclick-main">

<span class="dflat-content-box2-div3a-onclick-main-txt">dummy answer</span>

</div>
        </>
    )
 };
 function Text2(){
    return(
        <>
<div class="dflat-content-box2-div3a-onclick-main">

<span class="dflat-content-box2-div3a-onclick-main-txt">dummy answer</span>

</div>
        </>
    )
 };
export default DepositFlat