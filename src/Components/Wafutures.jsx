import React, {useState} from "react";
import './Wafutures.css'


import future from './Img/future.png';
import Wasidebar from "./Wasidebar";

const Wafutures = () => {
    return(
        <>
            <div className="wafutures">
                <Wasidebar/>
                <Wafuturessec/>
            </div>
        </>
    );
}

const Wafuturessec = () => {
    return(
        <>
            <div className="wafutures-sec">
                    <h2>Futures</h2>
                    <div className="wafutures-sec-col">
                        <img src={future}/>
                        <div className="wafutures-sec-col1">Open Futures Account</div>
                        <div className="wafutures-sec-col2">Futures trading is a highly risky endeavor, with
                                the potential for both great profits and significant losses. 
                                Please be aware that in the event of extreme price movement, 
                                there is a chance that all margin balance in your futures 
                                wallet may be liquidated. Futures trading is restricted for
                                users from certain regions.</div>
                        <div className="wafutures-sec-col3">
                            <input type="checkbox" />
                            <label for="balance1"> I have read and agree to Bianance 
                            <a href="#"> Futures Service Agreement</a></label>
                        </div>
                        <div className="wafutures-sec-col4">
                            <input type='text' placeholder="Futures referral code (Optional)"/>
                            <button>Open Now</button>
                            <a>Click to see Futures Trading Guide</a>
                        </div>
                    </div>
                </div>
        </>
    );
}

export {Wafutures, Wafuturessec};