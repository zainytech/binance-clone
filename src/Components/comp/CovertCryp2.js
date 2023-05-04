import React from 'react';
import "./CovertCryp2.css";
import { useState } from 'react';
import FAQ from './FAQ'
import mainbg1 from "../assets/figma/crypto/main-bg-1.png";
import updownarrow from "../assets/figma/crypto/up-down-arrow.png";
import bluemountainbanner from "../assets/figma/crypto/blue-mountain-banner.png";
import greengraph from "../assets/figma/crypto/green-graph.png";
import greengraphtopline from "../assets/figma/crypto/green-graph-top-line.png";


import selectedtick from "../assets/figma/DepositFlat/selected-tick.png";
import bgimg from "../assets/figma/DepositFlat/bg-img.png";
import forwardarrow from "../assets/figma/DepositFlat/forward-arrow.png";
import downarrow from "../assets/figma/DepositFlat/down-arrow.png";
import uparrow from "../assets/figma/DepositFlat/up-arrow.png";
import usaflag from "../assets/figma/DepositFlat/usa-flag.png";
import cross from "../assets/figma/DepositFlat/cross.png";


function CovertCryp(){
    const [showText, setShowText] = useState('');
    const onClick = () => setShowText(!showText);
    const [showText2, setShowText2] = useState('');
    const onClick2 = () => setShowText2(!showText2);
  
    return(
        <>
            <div class="covertcryp2-main">
                <div class="covertcryp2-main-bg-img">
                    <img src={mainbg1}></img>
                </div>
                <div class="covertcryp2-content">
                    <div class='covertcryp2-content-container'>
                    <div class="covertcryp2-content-head">
                            <div class="covertcryp2-content-head-div1">
                                <span class="covertcryp2-content-head-div1-txt"><span class="covertcryp2-head-div1-txt1">Domain Name </span>Convert</span>
                                
                                <div class="covertcryp2-content-head-div2">
                                    <div class="covertcryp2-content-head-div2a">
                                        <img src={selectedtick}></img>
                                        <span class="covertcryp2-content-head-div2a-txt">Zero Fee</span>
                                    </div>
                                    <div class="covertcryp2-content-head-div2a">
                                        <img src={selectedtick}></img>
                                        <span class="covertcryp2-content-head-div2a-txt">Guaranteed Price</span>
                                    </div>
                                    <div class="covertcryp2-content-head-div2a">
                                        <img src={selectedtick}></img>
                                        <span class="covertcryp2-content-head-div2a-txt">Any Pairs</span>
                                    </div>
                                </div>

                                <div class="covertcryp2-content-head-div3">
                                    <div class="covertcryp2-content-head-div3a">
                                        <button class="covertcryp2-content-head-div3a-btn1">Market</button>
                                        <button class="covertcryp2-content-head-div3a-btn2">Limit</button>
                                    </div>
                                    <div class="covertcryp2-content-head-div3b">
                                        <button class="covertcryp2-content-head-div3b-btn1">Other Methods</button>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div class="covertcryp2-content-box">

                            <div class="covertcryp2-content-box1">
                                {/* <div class="covertcryp2-content-box1-main"> */}
                                    {/* <div class="covertcryp2-content-box1-container"> */}
                                        <div class="covertcryp2-content-box2-div1">
                                            <span class="covertcryp2-content-box2-div1-txt1">BTC</span>
                                            <span class="covertcryp2-content-box2-div1-txt2">1048304.998503003303</span>
                                            <span class="covertcryp2-content-box2-div1-txt3 covertcryp2-content-box2-div1-txt3-red">-5.21%</span>
                                            <span class="covertcryp2-content-box2-div1-txt3">24 Volume</span>
                                        </div>
                                        <div class="covertcryp2-content-box2-div2">
                                            <img src={greengraph}></img>
                                            <img class="covertcryp2-content-box2-div2-img2" src={greengraphtopline}></img>
                                            <span class="covertcryp2-content-box2-div2a">1048304.99850</span>
                                        </div>
                                        <div class="covertcryp2-content-box2-div3">
                                            <span class="covertcryp2-head-div1-txt1">24 H</span>
                                            <span>1 W</span>
                                            <span>1 M</span>
                                        </div>
                                        
                                    {/* </div> */}
                                {/* </div> */}
                            </div>

                            <div class="covertcryp2-content-box2">
                                
                                <div class="covertcryp2-content-box2-main">
                                    <div class="covertcryp2-content-box2-container">
                                        
                                    <div class="covertcryp2-content-box1-div6">
                                                <span>From</span>
                                                <span class="covertcryp2-content-box1-div6-txt2">Available: --BRL</span>
                                                <div class="covertcryp2-content-box1-div6a">
                                                    <input type="text" value="10.00-12000.00"></input>
                                                    <span class="covertcryp2-content-box1-div6a-txt">MAX</span>
                                                    <div class="covertcryp2-content-box1-div6b">
                                                        <select id="covertcryp2-content-box1-div6b-select">
                                                        <option class="covertcryp2-content-box1-div6b-option">USD</option>
                                                            <option class="covertcryp2-content-box1-div6b-option">USD</option>
                                                        </select>
                                                    </div>
                                                </div> 
                                            </div>
                                            
                                            <div class="covertcryp2-content-box1-div6-main">
                                            <div class="covertcryp2-content-box1-div6 covertcryp2-content-box1-div6-1">
                                                <span>Flat payment methods</span>
                                                <span class="covertcryp2-content-box1-div6-txt2">You receive</span>
                                                <div class="covertcryp2-content-box1-div6a">
                                                    <input type="text" value="10.00-12000.00"></input>
                                                    <span class="covertcryp2-content-box1-div6a-txt">MAX</span>
                                                    <div class="covertcryp2-content-box1-div6b">
                                                        <select id="covertcryp2-content-box1-div6b-select">
                                                        <option class="covertcryp2-content-box1-div6b-option">USD</option>
                                                            <option class="covertcryp2-content-box1-div6b-option">USD</option>
                                                        </select>
                                                    </div>
                                                </div>     
                                            </div>
                                            <div class="covertcryp2-content-box1-div6 covertcryp2-content-box1-div6-1">
                                                <span>Flat payment methods</span>
                                                <span class="covertcryp2-content-box1-div6-txt2">You receive</span>
                                                <div class="covertcryp2-content-box1-div6a">
                                                    <input type="text" value="10.00-12000.00"></input>
                                                    <span class="covertcryp2-content-box1-div6a-txt">MAX</span>
                                                    <div class="covertcryp2-content-box1-div6b">
                                                        <select id="covertcryp2-content-box1-div6b-select">
                                                        <option class="covertcryp2-content-box1-div6b-option">USD</option>
                                                            <option class="covertcryp2-content-box1-div6b-option">USD</option>
                                                        </select>
                                                    </div>
                                                </div>     
                                            </div>
                                            </div>
                                            
                                            <div class="covertcryp2-content-box1-div2">
                                                <img src={updownarrow}></img>
                                            </div>

                                            <div class="covertcryp2-content-box1-div6">
                                                <span>Flat payment methods</span>
                                                <span class="covertcryp2-content-box1-div6-txt2">You receive</span>
                                                <div class="covertcryp2-content-box1-div6a">
                                                    <input type="text" value="10.00-12000.00"></input>
                                                    
                                                    <div class="covertcryp2-content-box1-div6b">
                                                        <select id="covertcryp2-content-box1-div6b-select">
                                                        <option class="covertcryp2-content-box1-div6b-option">USD</option>
                                                            <option class="covertcryp2-content-box1-div6b-option">USD</option>
                                                        </select>
                                                    </div>
                                                </div> 
                                            </div>

                                            <div class="covertcryp2-content-box1-div5">
                                                <button>Convert</button>
                                            </div>
                                        
                                    </div>
                                   
                                </div>
                            </div>

                        </div>
                    
    
     <div class="covertcryp2-g-div">
        <FAQ/>
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
<div class="covertcryp2-content-box2-div3a-onclick-main">

<span class="covertcryp2-content-box2-div3a-onclick-main-txt">dummy answer</span>

</div>
        </>
    )
 };
 function Text2(){
    return(
        <>
<div class="covertcryp2-content-box2-div3a-onclick-main">

<span class="covertcryp2-content-box2-div3a-onclick-main-txt">dummy answer</span>

</div>
        </>
    )
 };




export default CovertCryp