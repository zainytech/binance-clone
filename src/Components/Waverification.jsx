import React, {useState} from "react";
import './Waverification.css';

import binlogo from './Img/binlogo.png';
import Wasidebar from "./Wasidebar";

const Waverification = () => {
    return(
        <>
            <div className="waverif">
                <Wasidebar/>
                <Waverifsec/>
            </div>
        </>
    );
}

const Waverifsec = () => {
    const [data, setData] = useState('');
    return(
        <>
             <div className="waverif-sec">
                    <h2>Verification</h2>
                    <div className="waverif-sec-row1">We regularly perform a Proof of Reserves verification as confirmation that your funds are safe and held 1:1 within Binance. <a href="#">Learn More</a></div>
                    <div className="waverif-sec-row1">For more information and FAQ about third-party verification, <a href="#">click here</a></div>
                    <div className="waverif-sec-row3-column">
                        <div className="waverif-sec-row3">
                            <div className="waverif-sec-row3-col1">Verification ID</div>
                            <div className="waverif-sec-row3-col1">Verification Date</div>
                            <div className="waverif-sec-row3-col1">Auditor</div>
                            <div className="waverif-sec-row3-col1">Verification Type</div>
                        </div>
                        <div className="waverif-sec-row4" onClick={()=> setData(!data)}>
                            <div className="waverif-sec-row3-col1">PR22NOV22</div>
                            <div className="waverif-sec-row3-col1">22/11/22</div>
                            <div className="waverif-sec-row3-col1"><a href="#">Mazars</a></div>
                            <div className="waverif-sec-row3-col1">Proof of Reserves</div>
                            <div className="waverif-sec-row3-col1"> { data ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" cursor="pointer" class="css-vntdm8"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.929 13.123L12 20.194l2.121-2.121v-.001l4.95-4.95L16.949 11 12 15.95 7.05 11 4.93 13.124zm14.143-7L12 13.192l-2.12-2.121L4.93 6.12 7.05 4 12 8.95 16.95 4l2.122 2.122z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" cursor="pointer" class="css-vntdm8"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 11.071L12.071 4l.025.025.025-.025 7.071 7.071-2.12 2.121-4.976-4.974-4.975 4.974L5 11.072zm0 7L12.071 11l.025.025.025-.025 7.071 7.071-2.12 2.121-4.976-4.975-4.975 4.975L5 18.072z" fill="currentColor"></path></svg>}</div>
                        </div>
                    </div>
                    { data ? 
                    <div className="waverif-sec-row5">
                        <div className="waverif-sec-row5-col1">
                            <div>Record ID</div>
                            <div>N/A</div>
                        </div>
                        <div className="waverif-sec-row5-col1">
                            <div>Asset Coverage</div>
                            <div>BTC,D.BTC,N.BTC</div>
                        </div>
                        <div className="waverif-sec-row5-col1">
                            <div>Account Code</div>
                            <div>N/A</div>
                        </div>
                        <div className="waverif-sec-row5-col1">
                            <div>Merkle Hash <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1ctrddr"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21a9 9 0 100-18 9 9 0 000 18zM10.75 8.5V6h2.5v2.5h-2.5zm0 9.5v-7h2.5v7h-2.5z" fill="currentColor"></path></svg></div>
                            <div>N/A</div>
                        </div>
                        <div className="waverif-sec-row5-col1">
                            <div>Merkle Leaf</div>
                            <div>N/A</div>
                        </div>
                        <div className="waverif-sec-row5-col2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-y273qe"><path d="M3 5.5A2.5 2.5 0 005.5 8H21v13H6a3 3 0 01-3-3V5.5z" fill="url(#wallet-g_svg__paint0_linear)"></path><path d="M5.5 3H21v5H5.5a2.5 2.5 0 010-5zM21 12v5h-5v-5h5z" fill="#76808F"></path><defs><linearGradient id="wallet-g_svg__paint0_linear" x1="12" y1="21" x2="12" y2="5.5" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>
                            <div>Your Assets</div>
                        </div>
                        <div className="waverif-sec-row5-col2">
                            <img src={binlogo} alt='binance-logo'/>
                            <div>Sharing Details on Binance's Wallets</div>
                        </div>
                        <button className="waverif-sec-row5-col3">Download All Address <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-10fmj42"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 20.999l7.071-7.071-1.768-1.768-4.054 4.055V2.998h-2.5v13.216L6.696 12.16l-1.768 1.768 7.07 7.071H12z" fill="currentColor"></path></svg></button>
                        <div className="waverif-sec-row5-col4">Please note that audits are only available for users that have certain assets that they are holding during the snapshot. For more information on asset coverage and the snapshot, please refer to <a href="#"> Proof of Reserves</a>.</div>
                    
                    </div>
                     : null}
                    
            </div>
        </>
    );
}
export {Waverifsec, Waverification};