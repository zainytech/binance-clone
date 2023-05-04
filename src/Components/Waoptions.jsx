import React, {useState} from "react";
import './Waoptions.css';

import walloption from './Img/walloption.png';
import Wasidebar from "./Wasidebar";

const Waoptions = () =>  {
    return(
        <>
            <div className="waoption">
                <Wasidebar/>                
                <Waoptionsec/>
            </div>
        </>
    );
}

const Waoptionsec = () => {
    return(
        <>
                <div className="waoption-sec">
                    <h2>Options</h2>
                    <div className="waoption-sec-col">
                        <div className="waoption-sec-col4"><img src={walloption}/></div>
                        <div className="waoption-sec-col1">A Binance Option is a type of European Option contract which, unlike American style options, can only be exercised at expiry, but can be bought or sold at the current market price at any time prior to expiry.</div>
                        <div className="waoption-sec-col1">Options trading is a highly risky endeavor with the potential for both great profits and significant losses.</div>
                        <div className="waoption-sec-col1">The maximum loss of an Options buyer is the amount of premium paid to purchase the Option. An Options seller may however lose the entire amount of margin posted to collateralise its position and risks being subject to liquidation if sufficient margin is not maintained.</div>
                        <div className="waoption-sec-col1">Options trading is restricted for users from certain regions. Only certain users will be eligible to act as Option Writers.</div>
                        <div className="waoption-sec-col1">By trading Options on Binance, you will be subject to the terms of the Binance Options Service Agreement.</div>
                        <a href="#">Click here to see Options Trading Guide</a>
                        <div className="waoption-sec-col2">
                            <input type="checkbox" />
                            <label for="balance1"> I have read and agree to Bianance 
                            <a href="#"> Binance Options Service Agreement</a></label>
                        </div>
                        <button disabled className="waoption-sec-col3">Confirm</button>
                    </div>
                </div>
        </>  
    );
}

export {Waoptions, Waoptionsec};