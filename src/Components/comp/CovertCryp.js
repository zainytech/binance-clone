import React from 'react';
import "./CovertCryp.css";
import { useState } from 'react';

import mainbg1 from "../assets/figma/crypto/main-bg-1.png";
import updownarrow from "../assets/figma/crypto/up-down-arrow.png";
import bluemountainbanner from "../assets/figma/crypto/blue-mountain-banner.png";

import selectedtick from "../assets/figma/DepositFlat/selected-tick.png";
import bgimg from "../assets/figma/DepositFlat/bg-img.png";
import forwardarrow from "../assets/figma/DepositFlat/forward-arrow.png";
import downarrow from "../assets/figma/DepositFlat/down-arrow.png";
import uparrow from "../assets/figma/DepositFlat/up-arrow.png";
import usaflag from "../assets/figma/DepositFlat/usa-flag.png";
import cross from "../assets/figma/DepositFlat/cross.png";

import Ellipse29 from "../assets/figma/Ellipse 29.png";
import Ellipse292 from "../assets/figma/Ellipse 29-2.png";

function CovertCryp(){
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

    const [showTextcovertcryp1, setShowTextcovertcryp1] = useState('');
    const onClickcovertcryp1 = () => {
        setShowTextcovertcryp1(!showTextcovertcryp1)
        setShowTextcovertcryp2(false)
        setShowTextcovertcryp3(false)
        setShowTextcovertcryp4(false)
        setShowTextcovertcryp5(false)
        setShowTextcovertcryp6(false)
    
    };

    const [showTextcovertcryp2, setShowTextcovertcryp2] = useState('');
    const onClickcovertcryp2 = () => {
        setShowTextcovertcryp2(!showTextcovertcryp2)
        setShowTextcovertcryp1(false)
        setShowTextcovertcryp3(false)
        setShowTextcovertcryp4(false)
        setShowTextcovertcryp5(false)
        setShowTextcovertcryp6(false)
    };
    
    const [showTextcovertcryp3, setShowTextcovertcryp3] = useState('');
    const onClickcovertcryp3 = () => {
        setShowTextcovertcryp3(!showTextcovertcryp3)
        setShowTextcovertcryp1(false)
        setShowTextcovertcryp2(false)
        setShowTextcovertcryp4(false)
        setShowTextcovertcryp5(false)
        setShowTextcovertcryp6(false)
    };
    
    const [showTextcovertcryp4, setShowTextcovertcryp4] = useState('');
    const onClickcovertcryp4 = () => {
        setShowTextcovertcryp4(!showTextcovertcryp4)
        setShowTextcovertcryp1(false)
        setShowTextcovertcryp2(false)
        setShowTextcovertcryp3(false)
        setShowTextcovertcryp5(false)
        setShowTextcovertcryp6(false)
    };
    
    const [showTextcovertcryp5, setShowTextcovertcryp5] = useState('');
    const onClickcovertcryp5 = () => {
        setShowTextcovertcryp5(!showTextcovertcryp5)
        setShowTextcovertcryp1(false)
        setShowTextcovertcryp2(false)
        setShowTextcovertcryp3(false)
        setShowTextcovertcryp4(false)
        setShowTextcovertcryp6(false)
    };
    
    const [showTextcovertcryp6, setShowTextcovertcryp6] = useState('');
    const onClickcovertcryp6 = () => {
        setShowTextcovertcryp6(!showTextcovertcryp6)
        setShowTextcovertcryp1(false)
        setShowTextcovertcryp2(false)
        setShowTextcovertcryp3(false)
        setShowTextcovertcryp4(false)
        setShowTextcovertcryp5(false)
    };
    

    return(
        <>
            <div class="covertcryp-main">
                <div class="covertcryp-main-bg-img">
                    <img src={mainbg1}></img>
                </div>
                <div class="covertcryp-content">
                    <div class='covertcryp-content-container'>
                    <div class="covertcryp-content-head">
                            <div class="covertcryp-content-head-div1">
                                <span class="covertcryp-content-head-div1-txt"><span class="covertcryp-head-div1-txt1">Domain Name </span>Convert</span>
                                
                                <div class="covertcryp-content-head-div2">
                                    <div class="covertcryp-content-head-div2a">
                                        <img src={selectedtick}></img>
                                        <span class="covertcryp-content-head-div2a-txt">Zero Fee</span>
                                    </div>
                                    <div class="covertcryp-content-head-div2a">
                                        <img src={selectedtick}></img>
                                        <span class="covertcryp-content-head-div2a-txt">Guaranteed Price</span>
                                    </div>
                                    <div class="covertcryp-content-head-div2a">
                                        <img src={selectedtick}></img>
                                        <span class="covertcryp-content-head-div2a-txt">Any Pairs</span>
                                    </div>
                                </div>

                                <div class="covertcryp-content-head-div3">
                                    <div class="covertcryp-content-head-div3a">
                                        <button class="covertcryp-content-head-div3a-btn1">Market</button>
                                        <button class="covertcryp-content-head-div3a-btn2">Limit</button>
                                    </div>
                                    <div class="covertcryp-content-head-div3b">
                                        <button class="covertcryp-content-head-div3b-btn1">Other Methods</button>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div class="covertcryp-content-box">

                            <div class="covertcryp-content-box1">
                                <div class="covertcryp-content-box1-main">
                                    <div class="covertcryp-content-box1-container">
                                        
                                        <div class="covertcryp-content-box1-div6">
                                                <span>From</span>
                                                <span class="covertcryp-content-box1-div6-txt2">Available: --BRL</span>
                                                <div class="covertcryp-content-box1-div6a">
                                                    <input type="text" value="10.00-12000.00"></input>
                                                    <span class="covertcryp-content-box1-div6a-txt">MAX</span>
                                                    <div class="covertcryp-content-box1-div6b">
                                                        <select id="covertcryp-content-box1-div6b-select">
                                                        <option class="covertcryp-content-box1-div6b-option">USD</option>
                                                            <option class="covertcryp-content-box1-div6b-option">USD</option>
                                                        </select>
                                                    </div>
                                                </div> 
                                            </div>
                                            <div class="covertcryp-content-box1-div2">
                                                <img src={updownarrow}></img>
                                            </div>
                                            <div class="covertcryp-content-box1-div6">
                                                <span>Flat payment methods</span>
                                                <span class="covertcryp-content-box1-div6-txt2">You receive</span>
                                                <div class="covertcryp-content-box1-div6a">
                                                    <input type="text" value="10.00-12000.00"></input>
                                                    <span class="covertcryp-content-box1-div6a-txt">MAX</span>
                                                    <div class="covertcryp-content-box1-div6b">
                                                        <select id="covertcryp-content-box1-div6b-select">
                                                        <option class="covertcryp-content-box1-div6b-option">USD</option>
                                                            <option class="covertcryp-content-box1-div6b-option">USD</option>
                                                        </select>
                                                    </div>
                                                </div> 
                                            </div>

                                            <div class="covertcryp-content-box1-div5">
                                                <button>Convert</button>
                                            </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div class="covertcryp-content-box2">
                                
                                <div class="covertcryp-content-box2-main">
                                    <div class="covertcryp-content-box2-container">
                                        
                                        <div class="covertcryp-content-box2-div1">
                                            <span class="covertcryp-content-box2-div1-txt">FAQ</span>
                                            <span class="covertcryp-content-box2-div1-txt2">View More</span>
                                        </div>
                                        <div class="covertcryp-content-box2-div3">
                                            <div onClick={onClick} class="covertcryp-content-box2-div3a">
                                                <div class="covertcryp-content-box2-div3a-div1">
                                                    <span class="covertcryp-content-box2-div3a-txt">How long does the deposite take?</span>
                                                
                                                </div>
                                                {showText ? <img src={uparrow}></img> : <img src={downarrow}></img> }
                                            </div>
                                            {showText ? <Text /> : null}
                                            <div onClick={onClick2} class="covertcryp-content-box2-div3a">
                                                <div class="covertcryp-content-box2-div3a-div1">
                                                    <span class="covertcryp-content-box2-div3a-txt">How to deposite with flat Debit/Credit Card?</span>
                                                </div>
                                                    {showText2 ? <img src={uparrow}></img> : <img src={downarrow}></img> }
                                            </div>
                                            {showText2 ? <Text2 /> : null}
                                        </div>
                                        
                                    </div>
                                   
                                </div>
                                <div class="covertcryp-content-box2-banner">
                                    <img src={bluemountainbanner}></img>
                                    <span class="covertcryp-content-box2-banner-txt">BANNER</span>
                                </div>
                            </div>

                        </div>
                        
                        {/* <div class="covertcryp-g"> */}
    {/* <p>People Also Ask: Other Questions About Bitcoin</p> */}
    
    <div class="covertcryp-g-div">
        <div class="covertcryp-g-box1">
            <div onClick={onClickcovertcryp1} class="covertcryp-g-box1a">
            {showTextcovertcryp1 ? <img src={Ellipse292}></img> : <img src={Ellipse29}></img> }
                <span class="covertcryp-g-box1a-txt">How Many Bitcoins Are There?</span>
                {showTextcovertcryp1 ? <Textcovertcryp1 /> : null}
            </div>
            
            <div onClick={onClickcovertcryp2} class="covertcryp-g-box1a">
            {showTextcovertcryp2 ? <img src={Ellipse292}></img> : <img src={Ellipse29}></img> }
                <span class="covertcryp-g-box1a-txt">How Many Bitcoins Are There?</span>
                {showTextcovertcryp2 ? <Textcovertcryp2 /> : null}
            </div>
            <div onClick={onClickcovertcryp3} class="covertcryp-g-box1a">
            {showTextcovertcryp3 ? <img src={Ellipse292}></img> : <img src={Ellipse29}></img> }
                <span class="covertcryp-g-box1a-txt">How Many Bitcoins Are There?</span>
                {showTextcovertcryp3 ? <Textcovertcryp3 /> : null}
            </div>
            
        </div>

        <div class="covertcryp-g-box1">
        <div onClick={onClickcovertcryp4} class="covertcryp-g-box1a">
            {showTextcovertcryp4 ? <img src={Ellipse292}></img> : <img src={Ellipse29}></img> }
                <span class="covertcryp-g-box1a-txt">How Many Bitcoins Are There?</span>
                {showTextcovertcryp4 ? <Textcovertcryp4 /> : null}
            </div>
        <div onClick={onClickcovertcryp5} class="covertcryp-g-box1a">
            {showTextcovertcryp5 ? <img src={Ellipse292}></img> : <img src={Ellipse29}></img> }
                <span class="covertcryp-g-box1a-txt">How Many Bitcoins Are There?</span>
                {showTextcovertcryp5 ? <Textcovertcryp5 /> : null}
            </div>
            <div onClick={onClickcovertcryp6} class="covertcryp-g-box1a">
            {showTextcovertcryp6 ? <img src={Ellipse292}></img> : <img src={Ellipse29}></img> }
                <span class="covertcryp-g-box1a-txt">How Many Bitcoins Are There?</span>
                {showTextcovertcryp6 ? <Textcovertcryp6 /> : null}
            </div>
            
        </div>
    </div>
{/* </div> */}
                    </div>


                </div>
            </div>
        </>
    )
};

function Text(){
    return(
        <>
<div class="covertcryp-content-box2-div3a-onclick-main">

<span class="covertcryp-content-box2-div3a-onclick-main-txt">dummy answer</span>

</div>
        </>
    )
 };
 function Text2(){
    return(
        <>
<div class="covertcryp-content-box2-div3a-onclick-main">

<span class="covertcryp-content-box2-div3a-onclick-main-txt">dummy answer</span>

</div>
        </>
    )
 };

 
function Textcovertcryp1(){
    return(
        <>
<div class="covertcryp-g-box1-onclick-main">

<span class="covertcryp-g-box1-onclick-main-txt">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</span>

</div>
        </>
    )
 };
 function Textcovertcryp2(){
    return(
        <>
<div class="covertcryp-g-box1-onclick-main">

<span class="covertcryp-g-box1-onclick-main-txt">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</span>

</div>
        </>
    )
 };
 function Textcovertcryp3(){
    return(
        <>
<div class="covertcryp-g-box1-onclick-main">

<span class="covertcryp-g-box1-onclick-main-txt">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</span>

</div>
        </>
    )
 };
 function Textcovertcryp4(){
    return(
        <>
<div class="covertcryp-g-box1-onclick-main">

<span class="covertcryp-g-box1-onclick-main-txt">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</span>

</div>
        </>
    )
 };
 function Textcovertcryp5(){
    return(
        <>
<div class="covertcryp-g-box1-onclick-main">

<span class="covertcryp-g-box1-onclick-main-txt">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</span>

</div>
        </>
    )
 };
 function Textcovertcryp6(){
    return(
        <>
<div class="covertcryp-g-box1-onclick-main">

<span class="covertcryp-g-box1-onclick-main-txt">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</span>

</div>
        </>
    )
 };


export default CovertCryp