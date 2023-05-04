import React from 'react';
import "./BuyChat.css";

import { useState } from 'react';

import bgimg from "../assets/figma/DepositFlat/bg-img.png";
import forwardarrow from "../assets/figma/DepositFlat/forward-arrow.png";
import downarrow from "../assets/figma/DepositFlat/down-arrow.png";
import bigdownarrow from "../assets/figma/DepositFlat/big-down-arrow.png";
import uparrow from "../assets/figma/DepositFlat/up-arrow.png";
import usaflag from "../assets/figma/DepositFlat/usa-flag.png";
import cross from "../assets/figma/DepositFlat/cross.png";
import selectedtick from "../assets/figma/DepositFlat/selected-tick.png";
import backarrow from "../assets/figma/DepositFlat/back-arrow.png";
import msgbox from "../assets/figma/DepositFlat/msg-box.png";
function BuyChat(){
    // const [isVisible, setIsVisible] = useState('true');
    // const onClick = () => setIsVisible(!isVisible);

    const [showText, setShowText] = useState('true');
    const onClick = () => setShowText(!showText);
    return(
        <>
            <div class="buychat-main">
                <div class="buychat-main-bg-img">
                    <img src={bgimg}></img>
                </div>
                <div class="buychat-content">
                    <div class='buychat-content-container'>
                        <div class="buychat-content-head">
                            <div class="buychat-content-head-div1 buychat-content-head-div1-resp">
                                <img class="buychat-content-head-div1-img1" src={backarrow}></img>
                                <span class="buychat-content-head-div1-txt">Bitcoin</span>
                                {showText ? <img onClick={onClick} class="buychat-content-head-div1-img2" src={msgbox}></img>  : <img onClick={onClick} class="buychat-content-head-div1-img2" src={cross}></img> }
                               
                            </div>
                            <div style={{ display: showText ? "block" : "none" }} class="buychat-content-head-div1">
                                <span class="buychat-content-head-div1-txt">Paymnt Pending</span>
                                <span class="buychat-content-head-div1-txt2">Time remaining <span class="buychat-content-head-div1-txt2-active">14:34</span></span>
                            </div>
                           
                            
                        </div>

                        <div class="buychat-content-box">
                        
                            <div style={{ display: showText ? "block" : "none" }} class="buychat-content-box1">
                                <div class="buychat-content-box1-main">
                                    <div class="buychat-content-box1-container">
                                        <div class="buychat-content-box1-div1">
                                            <div class="buychat-content-box1-div1a">
                                                <span class="buychat-content-box1-div1a-txt1">Amount</span>
                                                <span class="buychat-content-box1-div1a-txt2">Rs 2,000.00</span>
                                            </div>
                                            <div class="buychat-content-box1-div1a">
                                                <span class="buychat-content-box1-div1a-txt1">Price</span>
                                                <span class="buychat-content-box1-div1a-txt2">$58,773.17</span>
                                            </div>
                                            <div class="buychat-content-box1-div1a">
                                                <span class="buychat-content-box1-div1a-txt1">Quantity</span>
                                                <span class="buychat-content-box1-div1a-txt2">$58,773.17</span>
                                            </div>
                                        </div>
                                        <div class="buychat-content-box1-div2">
                                            <img src={bigdownarrow}></img>
                                        </div>
                                        <div class="buychat-content-box1-div1a">
                                            <span class="buychat-content-box1-div1a-txt1">Payment menthod</span>
                                        </div>
                                    </div>

                                    <div class="buychat-content-box1-div3">
                                        <div class="buychat-content-box1-div3-container">
                                            <button class="buychat-content-box1-div3-btn1">Cancel</button>
                                            <button class="buychat-content-box1-div3-btn2">Payment recieved</button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={showText ? 'buychat-content-box2' : 'buychat-content-box2-onclick'} >
                                
                                <div class="buychat-content-box2-main">
                                    <div class="buychat-content-box2-container">
                                        <div class="buychat-content-box2-div1">
                                            <div class="buychat-content-box2-div1a">
                                                <span class="buychat-content-box2-div1a-txt1">Send the payment please so I can release crypto</span>
                                            </div>
                                            <span class="buychat-content-box2-div1a-txt2">2 min ago</span>
                                        </div>
                                        <div class="buychat-content-box2-div2">
                                        <span class="buychat-content-box2-div2a-txt2">Just Now</span>
                                            <div class="buychat-content-box2-div2a">
                                                <span class="buychat-content-box2-div1a-txt1">Send</span>
                                            </div>
                                            
                                        </div>

                                    </div>

                                    <div class="buychat-content-box1-div3">
                                        <div class="buychat-content-box1-div3-container">
                                            <input type="text" placeholder='Type message'></input>
                                            <button class="buychat-content-box1-div3-btn3">Cancel</button>
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


export default BuyChat