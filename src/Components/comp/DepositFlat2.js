import React from 'react';
import "./DepositFlat2.css";

import { useState } from 'react';
import ReactModal from 'react-modal';

import bgimg from "../assets/figma/DepositFlat/bg-img.png";
import forwardarrow from "../assets/figma/DepositFlat/forward-arrow.png";
import downarrow from "../assets/figma/DepositFlat/down-arrow.png";
import uparrow from "../assets/figma/DepositFlat/up-arrow.png";
import usaflag from "../assets/figma/DepositFlat/usa-flag.png";
import cross from "../assets/figma/DepositFlat/cross.png";
import selectedtick from "../assets/figma/DepositFlat/selected-tick.png";
import visa from "../assets/figma/DepositFlat/visa.png";

function DepositFlat2(){
     const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <div class="dflat2-main">
                <div class="dflat2-main-bg-img">
                    <img src={bgimg}></img>
                </div>
                <div class="dflat2-content">
                    <div class='dflat2-content-container'>
                        <div class="dflat2-content-head">
                            <div class="dflat2-content-head-div1">
                                <span class="dflat2-content-head-div1-txt">Deposit Funds</span>
                            </div>
                            <div class="dflat2-content-head-div2">
                                <button class="dflat2-content-head-div2-btn1">Order history</button>
                                <button class="dflat2-content-head-div2-btn2">Deposit Crypto</button>
                            </div>
                            
                        </div>

                        <div class="dflat2-content-box">

                            <div class="dflat2-content-box1">
                                <div class="dflat2-content-box1-main">
                                    <div class="dflat2-content-box1-container">
                                        <div class="dflat2-content-box1-div1">
                                            <span class="dflat2-content-box1-div1-txt">1. Select currency</span>
                                        </div>
                                        <div class="dflat2-content-box1-div3">
                                            <span class="dflat2-content-box1-div3-txt1">Currency:</span>
                                            <span class="dflat2-content-box1-div3-txt1a">Transaction requirements</span>
                                        </div>
                                        {/* <select class="dflat2-content-box1-div2"> */}
                                        <div class="dflat2-content-box1-div2">
                                                {/* <img class="dflat2-content-box1-div2-div-img1" src={usaflag}></img> */}
                                                <div class="dflat2-content-box1-div2a">
                                                    <span class="dflat2-content-box1-div2-txt2">Enter  14-49034</span>
                                                    <span class="dflat2-content-box1-div2-txt3">Balence:</span>
                                                    <span class="dflat2-content-box1-div3-txt4">233.34EUR</span>
                                                </div>
                                                {/* <img class="dflat2-content-box1-div2a-img2" src={downarrow}></img> */}

                                        
                                        </div>

                                        {/* </select> */}
                                        <div class="dflat2-content-box1-div3">
                                            <span class="dflat2-content-box1-div2-txt1">You recieve:</span>
                                            <div class="dflat2-content-box1-div3a">
                                                <span class="dflat2-content-box1-div3a-txt">0.00EUR</span>
                                                <div>
                                                    <div class="dflat2-content-box1-div3b"><span>Card Number:</span>
                                                    <span onClick={() => setIsOpen(true)} class="dflat2-content-box1-div3b-txt2 dflat2-content-box1-div3b-txt2a">Add new card</span></div>
                                                    <div class="dflat2-content-box1-div3b"><span>transaction method:</span>
                                                    <span class="dflat2-content-box1-div3b-txt2">Bank Card (VIsa)</span></div>
                                                    <div class="dflat2-content-box1-div3b"><span>Transaction fee:</span>
                                                    <span class="dflat2-content-box1-div3b-txt2">0.00 EUR</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div class="dflat2-content-box1-div4">
                                            <span class="dflat2-content-box1-div2-txt1">Choose Bank:</span>
                                            <div class="dflat2-content-box1-div4a">
                                                <input type="radio" name="radio" />
                                                <div class="dflat2-content-box1-div4a-div1">
                                                    <img src={usaflag}></img>
                                                    <div class="dflat2-content-box1-div4a-div2">
                                                        <span class="dflat2-content-box1-div2-txt2 dflat2-content-box1-div4a-div2-txt1">Bank Name</span>
                                                        <span class="dflat2-content-box1-div4a-div2-txt2">Keep me loged in</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="dflat2-content-box1-div4a">
                                                <input type="radio" name="radio" />
                                                <div class="dflat2-content-box1-div4a-div1">
                                                    <img class="dflat2-content-box1-div2-div-img1" src={usaflag}></img>
                                                    <div class="dflat2-content-box1-div4a-div2">
                                                        <span class="dflat2-content-box1-div2-txt2 dflat2-content-box1-div4a-div2-txt1">Bank Name</span>
                                                        <span class="dflat2-content-box1-div4a-div2-txt2">Keep me loged in</span>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div> */}
                                        <div class="dflat2-content-box1-div5">
                                            <button>Continue</button>
                                        </div>
                                        {/* <div class="dflat2-content-box1-div5">
                                            <img src={selectedtick}></img>
                                            <span>The deposite with card service is powered by </span>
                                        </div> */}
                                    </div>
                                </div>
                            </div>

                            <div class="dflat2-content-box2">
                                
                                <div class="dflat2-content-box2-main">
                                    <div class="dflat2-content-box2-container">
                                        <div class="dflat2-content-box1-div1">
                                            <span class="dflat2-content-box1-div1-txt">Notes</span>
                                            {/* <img class="dflat2-content-box2-div1-img" src={cross}></img> */}
                                        </div>
                                        <div class="dflat2-content-box1-div1">
                                            {/* <span class="dflat2-content-box1-div1-txt">FAQ</span>
                                            <span class="dflat2-content-box2-div1-txt2">View More</span> */}
                                            <ul>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                                                <li>ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                                            </ul>
                                           
                                        </div>
                                        {/* <div class="dflat2-content-box2-div3">
                                            <div onClick={onClick} class="dflat2-content-box2-div3a">
                                                <div class="dflat2-content-box2-div3a-div1">
                                                    <span class="dflat2-content-box2-div3a-txt">How long does the deposite take?</span>
                                                </div>
                                                {showText ? <img src={uparrow}></img> : <img src={downarrow}></img> }
                                            </div>
                                            {showText ? <Text /> : null}
                                            <div onClick={onClick2} class="dflat2-content-box2-div3a">
                                                <div class="dflat2-content-box2-div3a-div1">
                                                    <span class="dflat2-content-box2-div3a-txt">How to deposite with flat Debit/Credit Card?</span>
                                                </div>
                                                    {showText2 ? <img src={uparrow}></img> : <img src={downarrow}></img> }
                                            </div>
                                            {showText2 ? <Text2 /> : null}
                                        </div> */}
                                    </div>
                                </div>
                            </div>

                        </div>



                    </div>
                </div>
            </div>

            <ReactModal id="dflat2-modal"
                            style={{
                                
                                 
                                overlay: {
                                position: 'fixed',
                                zIndex: 1020,
                                top: 0,
                                left: 0,
                                width: '100vw',
                                height: '100vh',
                                background: 'rgba(7, 7, 7, 0.9)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                
                                
                                
                                },
                                content: {
                                background: 'rgba(22, 22, 22, 1)',
                                width: 'auto',
                                maxWidth: 'calc(100vw - 2rem)',
                                maxHeight: 'calc(100vh - 2rem)',
                                overflowY: 'auto',
                                position: 'relative',
                                border:'none',
                                borderRadius: '0.5rem',
                                },
                                
                                
                            }}

                            isOpen={isOpen}
                            contentLabel="Example Modal"
                            onRequestClose={() => setIsOpen(false)}
                            >

<div class="dflat2pup-modal-main">
    <div class="dflat2pup-modal-container">
        <div class="dflat2pup-modal-div1">
            <span class="dflat2pup-modal-div1-txt">Add New Card</span>
            <img onClick={() => setIsOpen(false)} src={cross}></img>
        </div>
        <div class="dflat2pup-modal-div2">Enter your new card’s information o proceed</div>
        <div class="dflat2pup-modal-div3">
            <span class="dflat2pup-modal-div2">Full Name:</span>
            <input type="text" placeholder="Enter full name"></input>
        </div>
        <div class="dflat2pup-modal-div3">
            <span class="dflat2pup-modal-div2">Card number:</span>
            <input type="text" placeholder="00012102312412412"></input>
            <img src={visa}></img> 
        </div>
        <div class="dflat2pup-modal-div4">
            <div class="dflat2pup-modal-div4a">
                <span class="dflat2pup-modal-div2">Expiry date:</span>
                <input type="text" placeholder="00012102312412412"></input>
            </div>
            <div class="dflat2pup-modal-div4a dflat2pup-modal-div4b">
                <span class="dflat2pup-modal-div2">Security code (CVV):</span>
                <input type="text" placeholder="00012102312412412"></input>
            </div>
        </div>
        <div class="dflat2-content-box1-div5">
            <button>Next</button>
        </div>

    </div>
</div>

                            
                            </ReactModal>

        </>
    )
};


export default DepositFlat2