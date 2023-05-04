import React, { useState } from "react";
import './Otc.css'

import { Link } from "react-router-dom";

import light from './Img/light.png';
import otclanding from './Img/otcLanding.png';
import otclanding2 from './Img/otcLanding2.png';
import otclanding3 from './Img/otcLanding3.png';
import otclanding5 from './Img/otcLanding5.png';
import otclanding6 from './Img/otcLanding6.png';
import otclanding7 from './Img/otcLanding7.png';
import otclanding8 from './Img/otcLanding8.png';

const Otc = () => {
    const [article, setArticle]  = useState(1);
    return(
        <>
            <div className="otc">
                <div className="otc-row1">
                    <div className="otc-row1-col1">
                        <h2>Binance OTC and Execution Solutions</h2>
                        <div>Binance OTC and Execution Solutions platform is dedicated to serving private and institutional clients with the professional services and cutting-edge technology.</div>
                        <div>The prime choice for block trades, secure settlement and competitive pricing</div>
                        <button><Link to="/otc-trading-history" style={{textDecoration: 'none', color: 'white'}}>Start Trading</Link></button>
                        <div>For any request, please leave your message: <a href="#">Contact Us</a></div>
                    </div>
                    <div className="otc-row1-col2">
                        <img src={light}/>
                    </div>
                </div>

                <div className="otc-row2">
                    <h2>Onboarding Procedure</h2>
                    <div className="otc-row2-row1-scroll">
                    <div className="otc-row2-row1">
                        <div className="otc-row2-row1-col1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-plpnbj"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3a9 9 0 110 18 9 9 0 010-18zm2.5 6.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM12 13.996H8.667c-.696 0-1.292.77-1.542 1.52.608.947 2.333 2.464 4.875 2.486 2.542.022 4.306-1.64 4.875-2.486-.25-.75-.846-1.52-1.542-1.52H12z" fill="currentColor"></path></svg>
                            <h6>Signup</h6>
                            <div>Open Binance account and finish KYC</div>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1j6o9r1"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 11.999l-7.071-7.071-1.768 1.768 4.055 4.054H2.999v2.5h13.216l-4.054 4.053 1.768 1.768L21 12v-.001z" fill="currentColor"></path></svg>
                        
                        <div className="otc-row2-row1-col1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-plpnbj"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.002 17v-5a9.113 9.113 0 00-.055-1 9.001 9.001 0 00-17.945 1v5h5v-6H5.578a6.502 6.502 0 0112.848 0h-2.424v6h.899a6.988 6.988 0 01-3.289 1.814 2 2 0 10.217 2A9.007 9.007 0 0019.486 17h1.516z" fill="currentColor"></path></svg>
                            <h6>Communicate</h6>
                            <div>Request for quote from OTC traders</div>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1j6o9r1"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 11.999l-7.071-7.071-1.768 1.768 4.055 4.054H2.999v2.5h13.216l-4.054 4.053 1.768 1.768L21 12v-.001z" fill="currentColor"></path></svg>

                        <div className="otc-row2-row1-col1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-plpnbj"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3a9 9 0 110 18 9 9 0 010-18zm2.164 15.5h-1.659v-1.538h-1.01V18.5h-1.66v-1.538H8.329V7.038h1.508V5.5h1.659v1.538h1.01V5.5h1.66v1.584c1.296.21 2.05 1.146 2.05 2.503 0 1.372-.618 1.96-1.93 2.127v.09c1.372.075 2.307.77 2.307 2.322 0 1.524-1.04 2.76-2.428 2.836V18.5zm-1.1-9.637h-2.58v2.247h2.58c.572 0 .92-.301.92-.874v-.498c0-.573-.348-.875-.92-.875zm.361 3.997h-2.94v2.277h2.94c.573 0 .935-.317.935-.89v-.498c0-.573-.362-.89-.935-.89z" fill="currentColor"></path></svg>
                            <h6>Confirm</h6>
                            <div>Agree on the price of the quote</div>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1j6o9r1"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 11.999l-7.071-7.071-1.768 1.768 4.055 4.054H2.999v2.5h13.216l-4.054 4.053 1.768 1.768L21 12v-.001z" fill="currentColor"></path></svg>

                        <div className="otc-row2-row1-col1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-plpnbj"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-4.934-4.483L10.2 13.383l-2.716-2.716-1.768 1.767 4.484 4.484 7.634-7.634-1.768-1.767z" fill="currentColor"></path></svg>
                            <h6>Settlement</h6>
                            <div>Trades directly settled into your wallet</div>
                        </div>

                    </div></div>
                </div>

                <div className="otc-row3">
                    <h2>Binance OTC Features and Advantages</h2>
                    <div className="otc-row3-col">
                        <div className="otc-row3-col1"><img src={otclanding}/></div>
                        <div className="otc-row3-col2">
                            <div className="otc-row3-col2-row">
                                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" class="css-plpnbj" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M35.5 5H25.5L35.5 15V5ZM5.5 35H15.5L5.5 25V35Z" fill="#76808F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20.4999 8.3335C26.9432 8.3335 32.1666 13.5568 32.1666 20.0002C32.1666 26.4435 26.9432 31.6668 20.4999 31.6668C14.0566 31.6668 8.83325 26.4435 8.83325 20.0002C8.83325 13.5568 14.0566 8.3335 20.4999 8.3335ZM20.4999 25.0002L15.4999 20.0002L20.4999 15.0002L25.4999 20.0002L20.4999 25.0002Z" fill="url(#paint0_linear_4006_5915)"></path><path d="M25.5 35H35.5V25L25.5 35Z" fill="url(#paint1_linear_4006_5915)"></path><path d="M15.5 5H5.5V15L15.5 5Z" fill="url(#paint2_linear_4006_5915)"></path><defs><linearGradient id="paint0_linear_4006_5915" x1="20.4999" y1="8.3335" x2="20.4999" y2="31.6668" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="paint1_linear_4006_5915" x1="30.5" y1="25" x2="30.5" y2="35" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="paint2_linear_4006_5915" x1="10.5" y1="5" x2="10.5" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg> 
                                <div>
                                    <h6>Trade Any Asset to Any Asset</h6>
                                    <div>Support 350+ cryptos, stablecoins, and fiat pairs listed on the Binance or any synthetic cross pairs.</div>
                                </div>
                            </div>

                            <div className="otc-row3-col2-row">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-plpnbj"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.637 8.235l.894-.079.413 3.51 2.638 2.66H9.848l-2.813 2.802.746.747 1.513-1.502a3.425 3.425 0 014.845 0l-5.802 5.802H2V12.5a8.485 8.485 0 016.637-4.265zm9.238 6.091h-3.889l3.045-3.044c.536.889.844 1.93.844 3.044z" fill="#76808F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.024 2a7.977 7.977 0 110 15.953 7.977 7.977 0 010-15.953zm0 11.395l-3.419-3.419 3.419-3.418 3.418 3.418-3.418 3.419z" fill="url(#pay-g_svg__paint0_linear_44536_181113)"></path><path d="M14.14 16.36l-5.765 5.796H5.453V20.11l1.156-1.14 2.297-2.25c2.138-2.263 4.38-1.183 5.235-.36z" fill="#76808F"></path><defs><linearGradient id="pay-g_svg__paint0_linear_44536_181113" x1="14.024" y1="17.953" x2="14.024" y2="2" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>
                                <div>
                                    <h6>Fast & Competitive Pricing</h6>
                                    <div>Access competitive and firm pricing without the need to trade on order books.</div>
                                </div>
                            </div>

                            <div className="otc-row3-col2-row">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="css-plpnbj"><path d="M19.95 11h-4.97c-.093 2.467-.534 4.718-1.223 6.442-.348.87-.776 1.647-1.287 2.25A10.008 10.008 0 0019.95 11z" fill="url(#language-g_svg__paint0_linear)"></path><path d="M12.47.307A10.008 10.008 0 0119.95 9h-4.97c-.093-2.467-.534-4.719-1.223-6.443-.348-.87-.776-1.646-1.287-2.25z" fill="url(#language-g_svg__paint1_linear)"></path><path d="M7.02 9c.094-2.257.499-4.247 1.08-5.7.334-.835.707-1.444 1.07-1.827C9.53 1.09 9.81 1 10 1c.189 0 .47.091.83.473.363.383.736.992 1.07 1.827.581 1.453.986 3.443 1.08 5.7H7.02z" fill="url(#language-g_svg__paint2_linear)"></path><path d="M12.98 11c-.094 2.256-.499 4.246-1.08 5.7-.334.835-.707 1.443-1.07 1.827-.36.381-.641.473-.83.473-.189 0-.47-.092-.83-.473-.363-.384-.736-.992-1.07-1.828-.581-1.453-.986-3.443-1.08-5.7h5.96z" fill="url(#language-g_svg__paint3_linear)"></path><path d="M7.53.307c-.511.604-.939 1.38-1.287 2.25C5.553 4.282 5.113 6.533 5.019 9H.049A10.008 10.008 0 017.53.307z" fill="url(#language-g_svg__paint4_linear)"></path><path d="M7.53 19.692A10.008 10.008 0 01.05 11h4.969c.094 2.467.534 4.718 1.224 6.442.348.87.776 1.647 1.287 2.25z" fill="url(#language-g_svg__paint5_linear)"></path><defs><linearGradient id="language-g_svg__paint0_linear" x1="10" y1="19.692" x2="10" y2="0.307" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="language-g_svg__paint1_linear" x1="10" y1="19.692" x2="10" y2="0.307" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="language-g_svg__paint2_linear" x1="10" y1="19.692" x2="10" y2="0.307" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="language-g_svg__paint3_linear" x1="10" y1="19.692" x2="10" y2="0.307" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="language-g_svg__paint4_linear" x1="10" y1="19.692" x2="10" y2="0.307" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="language-g_svg__paint5_linear" x1="10" y1="19.692" x2="10" y2="0.307" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>
                                 <div>
                                    <h6>Global Real-time Support</h6>
                                    <div>Powered by in-house technology, get real-time responses for immediate trading needs in fast markets.</div>
                                </div>
                            </div>

                            <div className="otc-row3-col2-row">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-plpnbj"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 15a5 5 0 100-10 5 5 0 000 10zm0-7l-2 2 2 2 2-2-2-2z" fill="url(#otc-g_svg__paint0_linear)"></path><path d="M11 7a4 4 0 11-8 0 4 4 0 018 0zM13 19v-2.5A3.5 3.5 0 009.5 13H8v6H6v-6H4.5A3.5 3.5 0 001 16.5V21h21v-2h-9z" fill="#76808F"></path><defs><linearGradient id="otc-g_svg__paint0_linear" x1="18" y1="15" x2="18" y2="5" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>
                                <div>
                                    <h6>Best-In-Class Services</h6>
                                    <div>Access best-in-class service from our team with experience from top global investment banks and exchanges.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="otc-row4">
                    <h2>Binance OTC Products</h2>
                    <div className="otc-row4-col1-scroll">
                    <div className="otc-row4-col1">
                        <button onClick={()=>setArticle(1)} className={ article === 1 ? 'otc-row4-background' : ''}>Block Trading</button>
                        <button onClick={()=>setArticle(2)} className={ article === 2 ? 'otc-row4-background' : ''}>API-RFQ and RFS Solutions</button>
                        <button onClick={()=>setArticle(3)} className={ article === 3 ? 'otc-row4-background' : ''}>Execution Algos</button>
                        <button onClick={()=>setArticle(4)} className={ article === 4 ? 'otc-row4-background' : ''}>Binance Convert</button>
                    </div></div>

                    { article === 1 &&  <>
                          <div className="otc-row4-art1">
                           {/* <div class="css-1l4kjsl"></div> */}
                             <div className="otc-row4-art1-col1"><img src={otclanding5}/></div>
                             <div className="otc-row4-art1-col2">
                                <div>For trade sizes USD$200,000 equivalent and above, get a quote and execute trades via verified communication channels.</div>
                                <a href="#">Start Block Trading</a>
                             </div>
                          </div>
                    </>}

                    { article === 2 &&  <>
                        <div className="otc-row4-art1">
                             <div className="otc-row4-art1-col3"><img src={otclanding6}/></div>
                             <div className="otc-row4-art1-col2">
                                <div>Connect directly via REST API for both request-for-quote (RFQ) and live streaming prices/request-for-stream (RFS) trading solutions. Integrate our pricing seamlessly into your platforms.</div>
                             </div>
                        </div>
                        
                    </>}


                    { article === 3 &&  <>
                        <div className="otc-row4-art1">
                             <div className="otc-row4-art1-col1"><img src={otclanding7}/></div>
                             <div className="otc-row4-art1-col2">
                                <div>Sophisticated TWAP and volume-based execution algorithms built on robust quantitative design to minimize slippage, market impact and adverse selection for large positions and illiquid assets.</div>
                             </div>
                        </div>
                    </>}

                    { article === 4 &&  <>
                        <div className="otc-row4-art1">
                             <div className="otc-row4-art1-col4"><img src={otclanding8}/></div>
                             <div className="otc-row4-art1-col2">
                                <div>An immediate and simple way to execute your trades via our GUI, with zero exchange fees and slippage</div>
                             </div>
                        </div>
                    </>}

                </div>

                <div className="otc-row5">
                    <h2>Settlement and Credit Lines</h2>
                    <div className="otc-row5-col1">Get access to trading without the need for pre-funding and customized post-trade settlement solutions to optimize capital efficiency. With the flexibility of credit lines, start trading immediately before moving funds into wallets, or access funds within wallets to trade across the OTC product suite.</div>
                    <div className="otc-row5-col2"><img src={otclanding3}/></div>
                </div>

                <div className="otc-row6">
                    <h2>Contact for more information</h2>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-ifou49"><path fill="#76808F" d="M2 20h20V5H2z"></path><path d="M12 17L22 7V4H2v3l10 10z" fill="url(#mail-g_svg__paint0_linear)"></path><defs><linearGradient id="mail-g_svg__paint0_linear" x1="12" y1="17" x2="12" y2="4" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>
                        For more inquiry, please leave us a message: <a href="#">liquidity@binance.com</a>
                    </div>
                    <h6>Feel ready? Start trading today.</h6>
                    <button><Link to="/otc-trading-history" style={{textDecoration: 'none', color: 'white'}}>Get Started</Link></button>
                </div>

                
            </div>
        </>
    );
}

export default Otc;