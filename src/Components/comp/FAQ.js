import React from 'react';
import './FAQ.css';
import { useState } from 'react';

import Ellipse29 from "../assets/figma/Ellipse 29.png";
import Ellipse292 from "../assets/figma/Ellipse 29-2.png";

function FAQ(){
    const [showTextfaq1, setShowTextfaq1] = useState('');
    const onClickfaq1 = () => {
        setShowTextfaq1(!showTextfaq1);
        setShowTextfaq2(false);
        setShowTextfaq3(false);
        setShowTextfaq4(false);
        setShowTextfaq5(false);
        setShowTextfaq6(false);


    };

    const [showTextfaq2, setShowTextfaq2] = useState('');
    const onClickfaq2 = () => {
        setShowTextfaq2(!showTextfaq2);
        setShowTextfaq1(false);
        setShowTextfaq3(false);
        setShowTextfaq4(false);
        setShowTextfaq5(false);
        setShowTextfaq6(false);

    };
    
    const [showTextfaq3, setShowTextfaq3] = useState('');
    const onClickfaq3 = () => {
        setShowTextfaq3(!showTextfaq3);
        setShowTextfaq1(false);
        setShowTextfaq2(false);
        setShowTextfaq4(false);
        setShowTextfaq5(false);
        setShowTextfaq6(false);

    };
    
    const [showTextfaq4, setShowTextfaq4] = useState('');
    const onClickfaq4 = () => {
        setShowTextfaq4(!showTextfaq4);
        setShowTextfaq1(false);
        setShowTextfaq2(false);
        setShowTextfaq3(false);
        setShowTextfaq5(false);
        setShowTextfaq6(false);

    };
    
    const [showTextfaq5, setShowTextfaq5] = useState('');
    const onClickfaq5 = () => {
        setShowTextfaq5(!showTextfaq5);
        setShowTextfaq1(false);
        setShowTextfaq2(false);
        setShowTextfaq3(false);
        setShowTextfaq4(false);
        setShowTextfaq6(false);
    };
    
    const [showTextfaq6, setShowTextfaq6] = useState('');
    const onClickfaq6 = () => {
        setShowTextfaq6(!showTextfaq6);
        setShowTextfaq1(false);
        setShowTextfaq2(false);
        setShowTextfaq3(false);
        setShowTextfaq4(false);
        setShowTextfaq5(false);

    };
 
    return(
        <>
            <div class="faq-main">
            <span class="faq-heading">FAQ</span>
            <div class="faq-g-div">
               
        <div class="faq-g-box1">
            <div onClick={onClickfaq1} class="faq-g-box1a">
            {showTextfaq1 ? <img src={Ellipse292}></img> : <img src={Ellipse29}></img> }
                <span class="faq-g-box1a-txt">How Many Bitcoins Are There?</span>
                {showTextfaq1 ? <Textfaq1 /> : null}
            </div>
            
            <div onClick={onClickfaq2} class="faq-g-box1a">
            {showTextfaq2 ? <img src={Ellipse292}></img> : <img src={Ellipse29}></img> }
                <span class="faq-g-box1a-txt">2. Quextion</span>
                {showTextfaq2 ? <Textfaq2 /> : null}
            </div>
            <div onClick={onClickfaq3} class="faq-g-box1a">
            {showTextfaq3 ? <img src={Ellipse292}></img> : <img src={Ellipse29}></img> }
                <span class="faq-g-box1a-txt">3. Quextion</span>
                {showTextfaq3 ? <Textfaq3 /> : null}
            </div>
            
        </div>

        <div class="faq-g-box1">
        <div onClick={onClickfaq4} class="faq-g-box1a">
            {showTextfaq4 ? <img src={Ellipse292}></img> : <img src={Ellipse29}></img> }
                <span class="faq-g-box1a-txt">4. Quextion</span>
                {showTextfaq4 ? <Textfaq4 /> : null}
            </div>
        <div onClick={onClickfaq5} class="faq-g-box1a">
            {showTextfaq5 ? <img src={Ellipse292}></img> : <img src={Ellipse29}></img> }
                <span class="faq-g-box1a-txt">5. Quextion</span>
                {showTextfaq5 ? <Textfaq5 /> : null}
            </div>
            <div onClick={onClickfaq6} class="faq-g-box1a">
            {showTextfaq6 ? <img src={Ellipse292}></img> : <img src={Ellipse29}></img> }
                <span class="faq-g-box1a-txt">6. Quextion</span>
                {showTextfaq6 ? <Textfaq6 /> : null}
            </div>
            
        </div>
    </div>
    </div>
        </>
    )
};
 
function Textfaq1(){
    return(
        <>
<div class="faq-g-box1-onclick-main">

<span class="faq-g-box1-onclick-main-txt">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</span>

</div>
        </>
    )
 };
 function Textfaq2(){
    return(
        <>
<div class="faq-g-box1-onclick-main">

<span class="faq-g-box1-onclick-main-txt">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</span>

</div>
        </>
    )
 };
 function Textfaq3(){
    return(
        <>
<div class="faq-g-box1-onclick-main">

<span class="faq-g-box1-onclick-main-txt">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</span>

</div>
        </>
    )
 };
 function Textfaq4(){
    return(
        <>
<div class="faq-g-box1-onclick-main">

<span class="faq-g-box1-onclick-main-txt">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</span>

</div>
        </>
    )
 };
 function Textfaq5(){
    return(
        <>
<div class="faq-g-box1-onclick-main">

<span class="faq-g-box1-onclick-main-txt">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</span>

</div>
        </>
    )
 };
 function Textfaq6(){
    return(
        <>
<div class="faq-g-box1-onclick-main">

<span class="faq-g-box1-onclick-main-txt">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</span>

</div>
        </>
    )
 };
export default FAQ