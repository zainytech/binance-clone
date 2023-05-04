import React from 'react';
import "./SellChat.css";

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
function SellChat(){
    // const [isVisible, setIsVisible] = useState('true');
    // const onClick = () => setIsVisible(!isVisible);

    const [showText, setShowText] = useState('true');
    const onClick = () => setShowText(!showText);
    return(
        <>
            <div class="sellchat-main">
                <div class="sellchat-main-bg-img">
                    <img src={bgimg}></img>
                </div>
                <div class="sellchat-content">
                    <div class='sellchat-content-container'>
                        <div class="sellchat-content-head">
                            <div class="sellchat-content-head-div1 sellchat-content-head-div1-resp">
                                <img class="sellchat-content-head-div1-img1" src={backarrow}></img>
                                <span class="sellchat-content-head-div1-txt">Bitcoin</span>
                                {showText ? <img onClick={onClick} class="sellchat-content-head-div1-img2" src={msgbox}></img>  : <img onClick={onClick} class="sellchat-content-head-div1-img2" src={cross}></img> }
                               
                            </div>
                            <div style={{ display: showText ? "block" : "none" }} class="sellchat-content-head-div1">
                                <span class="sellchat-content-head-div1-txt">Paymnt Pending</span>
                                <span class="sellchat-content-head-div1-txt2">Time remaining <span class="sellchat-content-head-div1-txt2-active">14:34</span></span>
                            </div>
                           
                            
                        </div>

                        <div class="sellchat-content-box">
                        
                            <div style={{ display: showText ? "block" : "none" }} class="sellchat-content-box1">
                                <div class="sellchat-content-box1-main">
                                    <div class="sellchat-content-box1-container">
                                        <div class="sellchat-content-box1-div1">
                                            <div class="sellchat-content-box1-div1a">
                                                <span class="sellchat-content-box1-div1a-txt1">Amount</span>
                                                <span class="sellchat-content-box1-div1a-txt2">Rs 2,000.00</span>
                                            </div>
                                            <div class="sellchat-content-box1-div1a">
                                                <span class="sellchat-content-box1-div1a-txt1">Price</span>
                                                <span class="sellchat-content-box1-div1a-txt2">$58,773.17</span>
                                            </div>
                                            <div class="sellchat-content-box1-div1a">
                                                <span class="sellchat-content-box1-div1a-txt1">Quantity</span>
                                                <span class="sellchat-content-box1-div1a-txt2">$58,773.17</span>
                                            </div>
                                        </div>
                                        <div class="sellchat-content-box1-div2">
                                            <img src={bigdownarrow}></img>
                                        </div>
                                        <div class="sellchat-content-box1-div1a">
                                            <span class="sellchat-content-box1-div1a-txt1">Payment menthod</span>
                                        </div>
                                    </div>

                                    <div class="sellchat-content-box1-div3">
                                        <div class="sellchat-content-box1-div3-container">
                                            <button class="sellchat-content-box1-div3-btn1">Cancel</button>
                                            <button class="sellchat-content-box1-div3-btn2">Payment recieved</button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={showText ? 'sellchat-content-box2' : 'sellchat-content-box2-onclick'} >
                                
                                <div class="sellchat-content-box2-main">
                                    <div class="sellchat-content-box2-container">
                                        <div class="sellchat-content-box2-div1">
                                            <div class="sellchat-content-box2-div1a">
                                                <span class="sellchat-content-box2-div1a-txt1">Send the payment please so I can release crypto</span>
                                            </div>
                                            <span class="sellchat-content-box2-div1a-txt2">2 min ago</span>
                                        </div>
                                        <div class="sellchat-content-box2-div2">
                                        <span class="sellchat-content-box2-div2a-txt2">Just Now</span>
                                            <div class="sellchat-content-box2-div2a">
                                                <span class="sellchat-content-box2-div1a-txt1">Send</span>
                                            </div>
                                            
                                        </div>

                                    </div>

                                    <div class="sellchat-content-box1-div3">
                                        <div class="sellchat-content-box1-div3-container">
                                            <input type="text" placeholder='Type message'></input>
                                            <button class="sellchat-content-box1-div3-btn3">Cancel</button>
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


export default SellChat