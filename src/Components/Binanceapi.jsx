import React, { useState } from 'react'
import './Binanceapi.css';

import api1 from './Img/api1.png';
import api2 from './Img/api2.png';
import apidev1 from './Img/apidev1.png';
import apidev2 from './Img/apidev2.png';

import apic from './Img/apic.jpeg';
import apic1 from './Img/apic1.jpeg';
import apic3 from './Img/apic3.jpeg';
import apic2 from './Img/apic2.jpeg';

import Binadmin from './Img/Userbinance.png'


const Binanceapi = () => {
    const [faq, setFaq]  =  useState(false);
    const [faq1, setFaq1]  =  useState(false);
    const [faq2, setFaq2]  =  useState(false);
    const [faq3, setFaq3]  =  useState(false);
    const [faq4, setFaq4]  =  useState(false);
    return(
        <>
            <div className='bapi'>
                <div className='bapi-row1'>
                    <div className='bapi-row1-img1'></div>
                    <div className='bapi-row1-col1'>
                        <div className='bapi-row1-col1-data'>
                            <h1>Binance API</h1>
                            <h4>Unlimited Opportunities with One Key.</h4>
                        </div>
                        <div className='bapi-row1-col1-img2'>
                            <img src={api2}/>
                        </div>
                    </div>
                </div>

                <div className='bapi-row2'>
                    <div className='bapi-row2-head'>
                        <img src={apic} style={{width: "48px", height: "48px"}}/>
                        {/* <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.5 10H40.5V38H44.5V10Z" fill="#76808F"></path><path d="M36.5 28L28.5 28L28.5 32L36.5 32L36.5 28Z" fill="#76808F"></path><path d="M36.5 16L28.5 16L28.5 20L36.5 20L36.5 16Z" fill="#76808F"></path><path d="M8.5 26.0005L2.50012 26.0005L2.50012 22.0005L8.5 22.0005L8.5 26.0005Z" fill="#76808F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 24C6.5 31.732 12.768 38 20.5 38H28.5V10H20.5C12.768 10 6.5 16.268 6.5 24Z" fill="url(#paint0_linear_1927_6664)"></path><defs>
                        <linearGradient id="paint0_linear_1927_6664" x1="17.5" y1="38" x2="17.5" y2="10" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg> */}
                        <h3>Trading Connectivity</h3>
                    </div>
                    <div className='bapi-row2-data'>We offer access to Spot, Margin, Futures and Options API trading for over 300 Digital and Fiat currencies. API trading provides a testing environment, API documentation, and Sample Code in 6 languages. Suitable for HFT, Social Trader and Strategy trader.</div>
                </div>

                <div className='bapi-row3'>
                    <div class="graph-wrap css-4cffwv">
                    <div class="trd-con-graph css-1eb3ub4">
                    <div class="inner css-4cffwv">
                    <div class="role css-vurnku">
                    {/* <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36.5 84H60.5V54H36.5V84Z" fill="url(#paint0_linear_1927_6658)"></path><path d="M48.4976 46.0012C38.5567 46.001 30.498 37.9415 30.498 28.0005C30.498 18.0594 38.5566 10.0002 48.4977 10.0002C58.4387 10.0005 66.4977 18.0602 66.4977 28.0012C66.4977 37.9424 58.4388 46.0012 48.4976 46.0012Z" fill="url(#paint1_linear_1927_6658)"></path><path d="M77.5 46L81.5 50L85.5 46L81.5 42L77.5 46Z" fill="#E6E8EA"></path><path d="M20.5 8L23.5 11L26.5 8L23.5 5L20.5 8Z" fill="#E6E8EA"></path><path d="M8.5 37L10.5 39L12.5 37L10.5 35L8.5 37Z" fill="#E6E8EA"></path><path d="M36.5 54H28.5C19.6634 54 12.5 61.1634 12.5 70V84H36.5V54Z" fill="url(#paint2_linear_1927_6658)"></path>
                    <path d="M60.5 84H84.5V70C84.5 61.1634 77.3366 54 68.5 54H60.5V84Z" fill="url(#paint3_linear_1927_6658)"></path><path d="M60.5 54L60.5 64L50.5 54L60.5 54Z" fill="#E6E8EA"></path><path d="M36.5 54L36.5 64L46.5 54L36.5 54Z" fill="#E6E8EA"></path><rect width="4" height="30" transform="matrix(1 0 0 -1 46.5 84)" fill="url(#paint4_linear_1927_6658)"></rect><defs><linearGradient id="paint0_linear_1927_6658" x1="48.5" y1="54" x2="48.5" y2="84" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="paint1_linear_1927_6658" x1="48.4978" y1="46.0012" x2="48.4978" y2="10.0002" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="paint2_linear_1927_6658" x1="48.5" y1="54" x2="48.5" y2="84" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient>
                    <linearGradient id="paint3_linear_1927_6658" x1="48.5" y1="54" x2="48.5" y2="84" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="paint4_linear_1927_6658" x1="2" y1="0" x2="2" y2="30" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg> */}
                    <img src={Binadmin} style={{width: '82px', height: '82px'}}/>
                    <div data-bn-type="text" class="role-name css-vurnku">User</div></div>
                    <div class="relation css-vurnku">
                    <div data-bn-type="text" class="label-t-1 css-vurnku">Apply/Manage API Key</div>
                    <div class="arrow right-arrow left-arrow css-4cffwv">
                    <div class="arrow-line css-vurnku"></div></div>
                    <div class="complex-wrap css-4cffwv"><div class="step-wrap css-vurnku">
                    <div class="arrow right-arrow css-4cffwv">
                    <div class="arrow-line css-vurnku"></div></div>
                    <div data-bn-type="text" class="label-t-2 css-vurnku">Deploy API</div></div>
                    <div class="mid-icon css-vurnku">
                    <img src={apic} style={{width: "46px", height: "45px"}}/>
                    {/* <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.5 10H40.5V38H44.5V10Z" fill="#76808F"></path><path d="M36.5 28L28.5 28L28.5 32L36.5 32L36.5 28Z" fill="#76808F"></path><path d="M36.5 16L28.5 16L28.5 20L36.5 20L36.5 16Z" fill="#76808F"></path><path d="M8.5 26.0005L2.50012 26.0005L2.50012 22.0005L8.5 22.0005L8.5 26.0005Z" fill="#76808F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 24C6.5 31.732 12.768 38 20.5 38H28.5V10H20.5C12.768 10 6.5 16.268 6.5 24Z" fill="url(#paint0_linear_1927_6664)"></path><defs>
                    <linearGradient id="paint0_linear_1927_6664" x1="17.5" y1="38" x2="17.5" y2="10" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg> */}
                    <div data-bn-type="text" class="label css-vurnku">API</div></div><div class="step-wrap css-vurnku"><div class="arrow right-arrow css-4cffwv"><div class="arrow-line css-vurnku"></div></div>
                    <div data-bn-type="text" class="label-t-2 css-vurnku">Trade &amp; Request</div></div></div></div><div class="role bnc css-vurnku">
                    <img src={apic1} style={{width: "70px", height: "70px"}}/>
                    {/* <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 36L8.12903 27.871L16.2581 36L8.12903 44.129L0 36Z" fill="#F0B90B"></path><path d="M13.9355 22.0645L36 0L58.0645 22.0645L49.9355 30.1935L36 16.2581L22.0645 30.1935L13.9355 22.0645Z" fill="#F0B90B"></path><path d="M27.871 36L36 27.871L44.129 36L36 44.129L27.871 36Z" fill="#F0B90B"></path><path d="M22.0645 41.8065L13.9355 49.9355L36 72L58.0645 49.9355L49.9355 41.8065L36 55.7419L22.0645 41.8065Z" fill="#F0B90B"></path><path d="M55.7419 36L63.871 27.871L72 36L63.871 44.129L55.7419 36Z" fill="#F0B90B"></path></svg> */}
                    <div data-bn-type="text" class="role-name limit-width css-vurnku">Binance Ecosystem</div></div></div></div></div>
                </div>

                <div className='bapi-row4'>
                    <div className='bapi-row4-col1'>
                        <h4>Spot Trading</h4>
                        <div className='bapi-row4-col1-div'>
                            <div className='bapi-row4-col1-div1'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1iztezc"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 3.5a5.502 5.502 0 00-5.302 4.032 7.502 7.502 0 016.77 6.77A5.502 5.502 0 0015 3.5zM14.5 15a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-8 0L9 17.5l2.5-2.5L9 12.5 6.5 15zM9 4H4v5l5-5zm11 16h-5l5-5v5z" fill="currentColor"></path></svg>
                                <div>Spot</div>
                            </div>
                            <div className='bapi-row4-col1-div1'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1iztezc"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.768 7.019L5.828 19.958 4.062 18.19 17 5.25l.883.885.884.884z" fill="currentColor"></path><path d="M12 4h8v8l-8-8z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-5.031L5.969 7.5 7.5 9.031l1.531-1.53L7.5 5.968zM16.5 20a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-5.031L14.969 16.5l1.531 1.531 1.531-1.53-1.531-1.532z" fill="currentColor"></path></svg>
                                <div>Margin</div>
                            </div>
                            <div className='bapi-row4-col1-div1'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1iztezc"><path d="M14 3h7v7l-7-7z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6a6 6 0 100 12 6 6 0 000-12zm0 8.4l2.4-2.4L12 9.6 9.6 12l2.4 2.4z" fill="currentColor"></path><path d="M3 21h7l-7-7v7z" fill="currentColor"></path></svg>
                                <div>Convert</div>
                            </div>
                        </div>
                    </div>
                    <div className='bapi-row4-col2'>
                        <h4>Derivatives Trading</h4>
                        <div className='bapi-row4-col2-div'>
                            <div className='bapi-row4-col2-div1'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1iztezc"><path d="M14 3h7v7l-7-7z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6a6 6 0 100 12 6 6 0 000-12zm0 8.4l2.4-2.4L12 9.6 9.6 12l2.4 2.4z" fill="currentColor"></path><path d="M3 21h7l-7-7v7z" fill="currentColor"></path></svg>
                                <div>USDⓈ-M</div>
                            </div>
                            <div className='bapi-row4-col2-div1'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1iztezc"><path d="M14.25 7.764L12.733 9.28l1.517 1.516 1.517-1.516-1.517-1.517z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20 3H8.5v6H4v7.5A3.5 3.5 0 007.5 20H16a4 4 0 004-4V3zM6.5 11.5h2v5a1 1 0 11-2 0v-5zm7.75 1.03a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5zm3.25 2v2.5H11v-2.5h6.5z" fill="currentColor"></path></svg>
                                <div>COIN-M</div>
                            </div>
                            <div className='bapi-row4-col2-div1'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1iztezc"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-4l4 4-4 4-4-4 4-4z" fill="currentColor"></path></svg>
                                <div>BLVT</div>
                            </div>
                            <div className='bapi-row4-col2-div1'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1iztezc"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 3H8.5v6H4v7.5A3.5 3.5 0 007.5 20H16a4 4 0 004-4V3zM6.5 11.5h2v5a1 1 0 11-2 0v-5zm11.22-3l-2.172 7h-3.115l-2.152-7h2.215l1.507 5.556L15.548 8.5h2.171z" fill="currentColor"></path></svg>
                                <div>Vanilla Options</div>
                            </div>
                            <div className='bapi-row4-col2-div1'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1iztezc"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5h18v10.5h-7.75v2H17V20H7v-2.5h3.75v-2H3V5z" fill="currentColor"></path></svg>
                                <div>Futures Algo</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bapi-row5'>
                    <div className='bapi-row5-head'>
                        <img src={apic3} style={{width: "48px", height: "36px"}}/>
                        {/* <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 38H14.5V32H4.5V38Z" fill="url(#paint0_linear_1927_6034)"></path><path d="M19.5 42H29.5V32H19.5V42Z" fill="#76808F"></path><path d="M4.5 42H14.5V38H4.5V42Z" fill="#76808F"></path><path d="M19.5 16H29.5V32H19.5V16Z" fill="url(#paint1_linear_1927_6034)"></path><path d="M34.5 24H44.5V4H34.5V24Z" fill="url(#paint2_linear_1927_6034)"></path><path d="M34.5 42H44.5V24H34.5V42Z" fill="#76808F"></path><defs><linearGradient id="paint0_linear_1927_6034" x1="9.5" y1="38" x2="9.5" y2="32" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="paint1_linear_1927_6034" x1="24.5" y1="32" x2="24.5" y2="16" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="paint2_linear_1927_6034" x1="39.5" y1="24" x2="39.5" y2="4" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg> */}
                        <h3>Market Data</h3>
                    </div>
                    
                    <div className='bapi-row5-row1'>
                        <div className='bapi-row5-row1-col1'>
                            <div className='bapi-row5-row1-col1-data'>Market Data at your fingertips with Binance API and Websocket Services</div>
                            <div className='bapi-row5-row1-col1-div'>
                                <div className='bapi-row5-row1-col1-div1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" fill="none" class="css-1iztezc"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 5h-3v14h3V5zm-15 9h-3v5h3v-5zm7-6h3v11h-3V8zm-2 3h-3v8h3v-8z" fill="currentColor"></path></svg>
                                    <div>Market Data</div>
                                </div>
                                <div className='bapi-row5-row1-col1-div1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1iztezc"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5h18v4h-6v5.5h-1.75v2H15V19H7v-2.5h3.75v-2H3V5zm14 6v8h4v-8h-4z" fill="currentColor"></path></svg>
                                    <div>Websocket</div>
                                </div>
                            </div>
                        </div>
                        <div className='bapi-row5-row1-col2'>
                            <div className='bapi-row5-row1-col1-data'>K-lines, Premium Index, Order book and other historical data downloadable in just one click</div>
                            <div className='bapi-row5-row1-col1-div1'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1iztezc"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3h14v18l-3.5-3-3.5 3-3.5-3L5 21V3zm3 4h4v2.5H8V7zm4 5H8v2.5h4V12zm2-5h2.5v2.5H14V7zm2.5 5H14v2.5h2.5V12z" fill="currentColor"></path></svg>
                                <div>Historical Data</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bapi-row6'>
                    <div className='bapi-row5-head'>
                        <img src={Binadmin} />
                        {/* <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 26C9.58172 26 6 29.5817 6 34V42H42V34C42 29.5817 38.4183 26 34 26H30L24 32L18 26L14 26Z" fill="#76808F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M33 13C33 8.02944 28.9706 4 24 4C19.0294 4 15 8.02944 15 13C15 17.9706 19.0294 22 24 22C28.9706 22 33 17.9706 33 13Z" fill="url(#paint0_linear_1927_6103)"></path><defs><linearGradient id="paint0_linear_1927_6103" x1="24" y1="22" x2="24" y2="4" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg> */}
                       <h3>Investment & Services</h3>
                    </div>
                    
                    <div className='bapi-row6-row1'>
                        <div className='bapi-row5-row1-col1-data'>Manage and grow your digital wealth all in one place.</div>
                        <div className='bapi-row5-row1-col1-div'>
                                <div className='bapi-row5-row1-col1-div1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1iztezc"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 8.5A4.5 4.5 0 018.5 4H20v16H8.5A4.5 4.5 0 014 15.5v-7zM8.5 7H17v3H8.5a1.5 1.5 0 110-3zm4.5 6h4v4h-4v-4z" fill="currentColor"></path></svg>
                                    <div>Wallet</div>
                                </div>
                                <div className='bapi-row5-row1-col1-div1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1iztezc"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 8.5A4.5 4.5 0 018.5 4H20v16H8.5A4.5 4.5 0 014 15.5v-7zM8.5 7H17v3H8.5a1.5 1.5 0 110-3zm4.5 6h4v4h-4v-4z" fill="currentColor"></path></svg>
                                    <div>Saving</div>
                                </div>
                                <div className='bapi-row5-row1-col1-div1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1iztezc"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.282 5.597A13.941 13.941 0 007.5 2.5l5.94 5.94-10.5 10.5 2.12 2.12 10.5-10.5 5.94 5.94c0-3.326-1.16-6.38-3.096-8.782L20.56 5.56l-2.122-2.122-2.157 2.158zM14 17h4v4h-4v-4zM4.5 7L3 8.5 4.5 10 6 8.5 4.5 7z" fill="currentColor"></path></svg>
                                    <div>Mining</div>
                                </div>
                                <div className='bapi-row5-row1-col1-div1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1iztezc"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.438 8.178A4.91 4.91 0 003 11.649v1.987L5.864 16.5l1.864-2.864-.001-5.909h6.727V3H11.65a4.91 4.91 0 00-3.471 1.438l-3.74 3.74zM19.562 15.822A4.909 4.909 0 0021 12.351v-1.987l-2.863-2.865-1.864 2.865v5.909H9.545V21h2.806a4.91 4.91 0 003.47-1.438l3.74-3.74z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.454 12a2.454 2.454 0 11-4.908 0 2.454 2.454 0 014.908 0z" fill="currentColor"></path></svg>
                                    <div>BSwap</div>
                                </div>
                                <div className='bapi-row5-row1-col1-div1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1iztezc"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 4h6v4.5h-2.5v-2H15V4zM5.833 9.998A2.333 2.333 0 003.5 12.331v1.667h8v-1.667a2.333 2.333 0 00-2.333-2.333H5.833zm9 6.002a2.333 2.333 0 00-2.333 2.333V20h8v-1.667A2.333 2.333 0 0018.167 16h-3.334zM9 17.5H5.5v-2H3V20h6v-2.5zm10-4.998a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM7.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill="currentColor"></path></svg>
                                    <div>C2C</div>
                                </div>
                                <div className='bapi-row5-row1-col1-div1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1iztezc"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.979 19.984l4-4 4-4-4-4L11.995 4H20v16H4v-7.995l3.979 3.98 4 4zm-4-12v8h8v-8h-8zm0 0L11.963 4H4v7.963l3.979-3.979zm1.5 4l2.5-2.5 2.5 2.5-2.5 2.5-2.5-2.5z" fill="currentColor"></path></svg>
                                    <div>NFT</div>
                                </div>
                                <div className='bapi-row5-row1-col1-div1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1iztezc"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5h18v14H3V5zm15 8.518h-6v2.5h6v-2.5zM6.01 8l-.006 2.802-.021 2.425.027 2.79 4.009-4.008L6.008 8z" fill="currentColor"></path></svg>
                                    <div>Binance Code</div>
                                </div>
                                <div className='bapi-row5-row1-col1-div1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1iztezc"><path d="M3 12.007a7.887 7.887 0 014.215-3.538c.021 1.914.612 3.811 1.708 5.216a6.827 6.827 0 00-1.074.92l-.981.893 1.488 1.487 1.061-1.04c1.987-2.102 4.072-1.098 4.866-.333L8.923 21H3v-8.993z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21 9a6 6 0 01-5.348 5.965l-.546-.527a5.275 5.275 0 00-3.083-1.414 4.844 4.844 0 00-1.41.07A6 6 0 1121 9zm-6-2.5L12.5 9l2.5 2.5L17.5 9 15 6.5z" fill="currentColor"></path></svg>
                                    <div>Pay</div>
                                </div>
                                <div className='bapi-row5-row1-col1-div1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1iztezc"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 10a3 3 0 100-6 3 3 0 000 6zm5 5.5V17h7v3H3v-4.5A3.5 3.5 0 016.5 12h3a3.5 3.5 0 013.5 3.5zM21 9a4 4 0 11-8 0 4 4 0 018 0zm-4-1.414L15.586 9 17 10.414 18.414 9 17 7.586z" fill="currentColor"></path></svg>
                                    <div>Fiat</div>
                                </div>
                                <div className='bapi-row5-row1-col1-div1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1iztezc"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5h18v14H3V5zm6.5 3.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.5 0h3v7h-3v-7zm-5.5 1.732L7.732 12 9.5 13.768 11.268 12 9.5 10.232z" fill="currentColor"></path></svg>
                                    <div>Staking</div>
                                </div>
                                <div className='bapi-row5-row1-col1-div1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1iztezc"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.557 6.27L16.5 3h-9l2.943 3.27A7.003 7.003 0 005 13.096v7.875h14v-7.875a7.003 7.003 0 00-5.443-6.826zM12 17a4 4 0 100-8 4 4 0 000 8zm-2.121-4L12 10.879l2.121 2.12L12 15.122 9.879 13z" fill="currentColor"></path></svg>
                                    <div>Crypto Loan</div>
                                </div>

                        </div>
                    </div>
                </div>

                <div className='bapi-row7'>
                    <div className='bapi-row7-img1'><img src={apidev2}/></div>
                    <div className='bapi-row7-row1'>
                        <div className='bapi-row5-head'>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.3" d="M43.3906 27.25L44.6406 26L45.8906 27.25L44.6406 28.5L43.3906 27.25Z" fill="#AEB4BC"></path><path opacity="0.3" d="M12.3906 4.75L14.1406 3L15.8906 4.75L14.1406 6.5L12.3906 4.75Z" fill="#AEB4BC"></path><path opacity="0.3" d="M3.89062 34.5L4.89062 33.5L5.89062 34.5L4.89062 35.5L3.89062 34.5Z" fill="#AEB4BC"></path><path d="M6.89063 40L6.89063 38L42.8906 38L42.8906 40L6.89063 40Z" fill="#76808F"></path><rect opacity="0.3" x="10.8906" y="21" width="4" height="17" fill="#AEB4BC"></rect><rect opacity="0.3" x="18.8906" y="21" width="4" height="17" fill="#AEB4BC"></rect><rect opacity="0.3" x="26.8906" y="21" width="4" height="17" fill="#AEB4BC"></rect><rect opacity="0.3" x="34.8906" y="21" width="4" height="17" fill="#AEB4BC"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M42.8905 17L24.8906 3L6.89062 17V21L42.8906 21L42.8905 17ZM22.3906 13.5L24.8906 16L27.3906 13.5L24.8906 11L22.3906 13.5Z" fill="url(#paint0_linear_1325_4619)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M24.8906 18.5C27.652 18.5 29.8906 16.2614 29.8906 13.5C29.8906 10.7386 27.652 8.5 24.8906 8.5C22.1292 8.5 19.8906 10.7386 19.8906 13.5C19.8906 16.2614 22.1292 18.5 24.8906 18.5ZM22.3906 13.5L24.8906 16L27.3906 13.5L24.8906 11L22.3906 13.5Z" fill="#76808F"></path><path d="M6.89063 40L6.89063 44L42.8906 44L42.8906 40L6.89063 40Z" fill="url(#paint1_linear_1325_4619)"></path><defs><linearGradient id="paint0_linear_1325_4619" x1="24.8906" y1="21" x2="24.8906" y2="3" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="paint1_linear_1325_4619" x1="6.89063" y1="42" x2="42.8906" y2="42" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>
                            <h3>VIP & Institutional</h3>
                        </div>
                        <div className='bapi-row7-row1-div'>Binance VIP and Institutional offers access to professional services including better fees, higher trading limits, flexible account management function and OTC services. Our experienced team works closely with a wide range of market participants to provide bespoke trading solutions.</div>
                        <div className='bapi-row7-row1-div1'>
                            <div className='bapi-row5-row1-col1-div1'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1iztezc"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM3 17a3 3 0 013-3h5a3 3 0 013 3v3H3v-3zM21 5h-5v3h5V5zm0 5.002h-5v3h5v-3zm-5 5.002h5v3h-5v-3z" fill="currentColor"></path></svg>
                                <div>Sub Account</div>
                            </div>
                            <div className='bapi-row5-row1-col1-div1'>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1_2616_1648" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.625 6H9.5V30H27.5V13.9563L19.625 6ZM14 13.5H18.5V16.5H14V13.5ZM23 19.5V22.5H14V19.5H23Z"></path></mask><path fill-rule="evenodd" clip-rule="evenodd" d="M19.625 6H9.5V30H27.5V13.9563L19.625 6ZM14 13.5H18.5V16.5H14V13.5ZM23 19.5V22.5H14V19.5H23Z" fill="#B7BDC6"></path><path d="M9.5 6V4H7.5V6H9.5ZM19.625 6L21.0465 4.59307L20.4595 4H19.625V6ZM9.5 30H7.5V32H9.5V30ZM27.5 30V32H29.5V30H27.5ZM27.5 13.9563H29.5V13.1339L28.9215 12.5494L27.5 13.9563ZM18.5 13.5H20.5V11.5H18.5V13.5ZM14 13.5V11.5H12V13.5H14ZM18.5 16.5V18.5H20.5V16.5H18.5ZM14 16.5H12V18.5H14V16.5ZM23 22.5V24.5H25V22.5H23ZM23 19.5H25V17.5H23V19.5ZM14 22.5H12V24.5H14V22.5ZM14 19.5V17.5H12V19.5H14ZM9.5 8H19.625V4H9.5V8ZM11.5 30V6H7.5V30H11.5ZM27.5 28H9.5V32H27.5V28ZM25.5 13.9563V30H29.5V13.9563H25.5ZM18.2035 7.40693L26.0785 15.3633L28.9215 12.5494L21.0465 4.59307L18.2035 7.40693ZM18.5 11.5H14V15.5H18.5V11.5ZM20.5 16.5V13.5H16.5V16.5H20.5ZM14 18.5H18.5V14.5H14V18.5ZM12 13.5V16.5H16V13.5H12ZM25 22.5V19.5H21V22.5H25ZM14 24.5H23V20.5H14V24.5ZM12 19.5V22.5H16V19.5H12ZM23 17.5H14V21.5H23V17.5Z" fill="#B7BDC6" mask="url(#path-1-inside-1_2616_1648)"></path></svg>
                                <div>TAX Report API</div>
                            </div>
                        </div>
                        <a href='#'>Learn More</a>
                    </div>

                </div>

                <div className='bapi-row8'>
                    <div className='bapi-row8-col1'>
                        <div className='bapi-row8-col1-div1'>
                            <img src={apic2} style={{width: '42', height: '42'}}/>
                            {/* <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 4H23V32L18 37H11V42H37V37H30L25 32V4Z" fill="url(#paint0_linear_1325_4604)"></path><path d="M11.5 29.5C16.7467 29.5 21 25.2467 21 20L2 20C2 25.2467 6.25329 29.5 11.5 29.5Z" fill="url(#paint1_linear_1325_4604)"></path><path d="M36.5 29.5C41.7467 29.5 46 25.2467 46 20L27 20C27 25.2467 31.2533 29.5 36.5 29.5Z" fill="url(#paint2_linear_1325_4604)"></path><path opacity="0.3" d="M11.5 10.5L2 20H21L11.5 10.5Z" fill="#AEB4BC"></path><path opacity="0.3" d="M36.5 10.5L27 20H46L36.5 10.5Z" fill="#AEB4BC"></path><rect x="9" y="10.5" width="2" height="30" transform="rotate(-90 9 10.5)" fill="url(#paint3_linear_1325_4604)"></rect><circle r="3" transform="matrix(1 0 0 -1 24 9.5)" fill="url(#paint4_linear_1325_4604)"></circle><path d="M22.5 9.5L24 8L25.5 9.5L24 11L22.5 9.5Z" fill="url(#paint5_linear_1325_4604)"></path><path opacity="0.3" d="M29.5 32.5L31 34L32.5 32.5L31 31L29.5 32.5Z" fill="#AEB4BC"></path><path opacity="0.3" d="M17 4L18.5 5.5L20 4L18.5 2.5L17 4Z" fill="#AEB4BC"></path><path opacity="0.3" d="M4 36L5 37L6 36L5 35L4 36Z" fill="#AEB4BC"></path><defs><linearGradient id="paint0_linear_1325_4604" x1="24" y1="4" x2="24" y2="42" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="paint1_linear_1325_4604" x1="2" y1="24.75" x2="21" y2="24.75" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="paint2_linear_1325_4604" x1="27" y1="24.75" x2="46" y2="24.75" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="paint3_linear_1325_4604" x1="10" y1="10.5" x2="10" y2="40.5" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="paint4_linear_1325_4604" x1="3" y1="0" x2="3" y2="6" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="paint5_linear_1325_4604" x1="24" y1="8" x2="24" y2="11" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg> */}
                            <h6>Link Program</h6>
                        </div>
                        <div className='bapi-row8-col1-div2'>Binance Link Program enables enterprise clients to build their business with Binance technology while earning commission from trading fees by leveraging Binance's liquidity and market depth.</div>
                        <div className='bapi-row8-col1-div3'>
                            <div className='bapi-row8-col1-div3-row1'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1iztezc"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.343 7.565a7.78 7.78 0 000 11.13c3.124 3.073 8.19 3.073 11.314 0a7.78 7.78 0 000-11.13L12 2 6.343 7.565zm8.44 9.782a3.935 3.935 0 000-5.565L12 9l-2.783 2.782a3.935 3.935 0 005.566 5.565z" fill="currentColor"></path></svg>
                                <div>Liquidity</div>
                            </div>
                            <div className='bapi-row8-col1-div3-row1'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1iztezc"><path d="M3 12.007a7.887 7.887 0 014.215-3.538c.021 1.914.612 3.811 1.708 5.216a6.827 6.827 0 00-1.074.92l-.981.893 1.488 1.487 1.061-1.04c1.987-2.102 4.072-1.098 4.866-.333L8.923 21H3v-8.993z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21 9a6 6 0 01-5.348 5.965l-.546-.527a5.275 5.275 0 00-3.083-1.414 4.844 4.844 0 00-1.41.07A6 6 0 1121 9zm-6-2.5L12.5 9l2.5 2.5L17.5 9 15 6.5z" fill="currentColor"></path></svg>
                                <div>Fiat Gateway</div>
                            </div>
                            <div className='bapi-row8-col1-div3-row1'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1iztezc"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM3 17a3 3 0 013-3h5a3 3 0 013 3v3H3v-3zM21 5h-5v3h5V5zm0 5.002h-5v3h5v-3zm-5 5.002h5v3h-5v-3z" fill="currentColor"></path></svg>
                                <div>Sub Account</div>
                            </div>
                            <div className='bapi-row8-col1-div3-row1'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1iztezc"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 10.5a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM17.25 21a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zm2.882-15.01L18.01 3.868 3.868 18.01l2.121 2.122L20.133 5.99z" fill="currentColor"></path></svg>
                                <div>Rebates</div>
                            </div>
                        </div>
                    </div>

                    <div class="graph-wrap1 css-4cffwv">
                        <div class="broker-graph css-16sutlc">
                        <div class="inner css-4cffwv"><div class="role bnc css-vurnku">
                        {/* <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 36L8.12903 27.871L16.2581 36L8.12903 44.129L0 36Z" fill="#F0B90B"></path><path d="M13.9355 22.0645L36 0L58.0645 22.0645L49.9355 30.1935L36 16.2581L22.0645 30.1935L13.9355 22.0645Z" fill="#F0B90B"></path><path d="M27.871 36L36 27.871L44.129 36L36 44.129L27.871 36Z" fill="#F0B90B"></path><path d="M22.0645 41.8065L13.9355 49.9355L36 72L58.0645 49.9355L49.9355 41.8065L36 55.7419L22.0645 41.8065Z" fill="#F0B90B"></path><path d="M55.7419 36L63.871 27.871L72 36L63.871 44.129L55.7419 36Z" fill="#F0B90B"></path></svg> */}
                        <img src={apic1} style={{width: '66px', height: '66px'}}/>
                        <div data-bn-type="text" class="role-name limit-width css-vurnku">Binance Ecosystem</div>
                        </div>
                        <div class="relation css-vurnku">
                        <div data-bn-type="text" class="label-t-1 css-vurnku">Liquidity &amp; Trading Integration</div>
                        <div class="arrow left-arrow right-arrow css-4cffwv"><div class="arrow-line css-vurnku"></div></div>
                        <div class="arrow right-arrow css-16wxiwv"><div class="arrow-line css-vurnku"></div></div><div data-bn-type="text" class="label-t-1 css-vurnku">Rebate on Volume</div></div><div class="role css-vurnku">
                        {/* <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 8H46V64L36 74H22V84H74V74H60L50 64V8Z" fill="url(#paint0_linear_1927_6759)"></path><path d="M23 59C33.4934 59 42 50.4934 42 40L4 40C4 50.4934 12.5066 59 23 59Z" fill="url(#paint1_linear_1927_6759)"></path><path d="M73 59C83.4934 59 92 50.4934 92 40L54 40C54 50.4934 62.5066 59 73 59Z" fill="url(#paint2_linear_1927_6759)"></path><path d="M23 21L4 40H42L23 21Z" fill="#E6E8EA"></path><path d="M73 21L54 40H92L73 21Z" fill="#E6E8EA"></path><rect x="18" y="21" width="4" height="60" transform="rotate(-90 18 21)" fill="url(#paint3_linear_1927_6759)"></rect><circle r="6" transform="matrix(1 0 0 -1 48 19)" fill="url(#paint4_linear_1927_6759)"></circle><path d="M45 19L48 16L51 19L48 22L45 19Z" fill="url(#paint5_linear_1927_6759)"></path><path d="M59 65L62 68L65 65L62 62L59 65Z" fill="#E6E8EA"></path><path d="M34 8L37 11L40 8L37 5L34 8Z" fill="#E6E8EA"></path><path d="M8 72L10 74L12 72L10 70L8 72Z" fill="#E6E8EA"></path><defs><linearGradient id="paint0_linear_1927_6759" x1="48" y1="8" x2="48" y2="84" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="paint1_linear_1927_6759" x1="4" y1="49.5" x2="42" y2="49.5" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="paint2_linear_1927_6759" x1="54" y1="49.5" x2="92" y2="49.5" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="paint3_linear_1927_6759" x1="20" y1="21" x2="20" y2="81" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="paint4_linear_1927_6759" x1="6" y1="0" x2="6" y2="12" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="paint5_linear_1927_6759" x1="48" y1="16" x2="48" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg> */}
                        <img src={apic2} style={{width: '80px', height: '80px'}}/>
                        <div data-bn-type="text" class="role-name css-vurnku">Link Client</div></div></div></div>
                    </div>
                </div>

                <div className='bapi-row7'>
                    <div className='bapi-row7-img1'><img src={apidev1}/></div>
                    <div className='bapi-row7-row1'>
                        <div className='bapi-row5-head'>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M44.9556 8.00001L4.95557 8L4.95557 40L44.9556 40L44.9556 8.00001ZM38.9556 30H22.9556V34H38.9556V30Z" fill="url(#paint0_linear_1325_4588)"></path><path d="M4.95557 8H44.9556V12H4.95557V8Z" fill="#76808F"></path><path d="M9.64209 18.3431L12.4705 15.5146L20.9558 23.9999L12.4705 32.4852L9.64209 29.6568L15.2989 23.9999L9.64209 18.3431Z" fill="#76808F"></path><defs><linearGradient id="paint0_linear_1325_4588" x1="24.9556" y1="40" x2="24.9556" y2="8" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>
                            <h3>Made for Developers</h3>
                        </div>

                        <div className='bapi-row7-row1-div'>Facing a problem in development? Find help from the developer community. We would like to hear from you! Share your thoughts with us.</div>
                        <div className='bapi-row7-row1-a'>
                            <a href='#'>Dev Forum</a>
                            <a href='#'>Dev Telegram</a>
                            <a href='#'>Feedback Survey</a>
                        </div>
                    </div>

                </div>

                <div className='bapi-row9'>
                    <div className='bapi-row9-col1'>
                        <h3>FAQ</h3>
                        <a href='#'>View More</a>
                    </div>

                    <div className="bneth-row2-col1">
                        <div onClick={()=>setFaq(!faq)} className="bneth-row2-col1-row1">
                            <div>1. How to create API key?</div>
                            { faq ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M8 15v-1.2L12 9l4 4.8V15H8z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                            }
                        </div>
                        { faq ? 
                        <div className="bneth-row2-col1-row2">
                            1. Log into your Binance account, and click [API Management] from the user center icon.
                            2. Enter a label/name for your API key and click [Create API].
                            3. Complete the security verification with your registered 2FA devices.
                            For more details, please refer to <a href='#'>help center</a>.
                        </div> : null}
                    </div>
                    <hr className="bneth-row2-hr"/>
                    <div className="bneth-row2-col1">
                        <div onClick={()=>setFaq1(!faq1)} className="bneth-row2-col1-row1">
                            <div>2. Is there an API Documentation?</div>
                            { faq1 ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M8 15v-1.2L12 9l4 4.8V15H8z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                            }
                        </div>
                        { faq1 ? 
                        <div className="bneth-row2-col1-row2">
                            Yes. Please refer to <a href='#'>this Page</a>.
                        </div> : null}
                    </div>
                    <hr className="bneth-row2-hr"/>
                    <div className="bneth-row2-col1">
                        <div onClick={()=>setFaq2(!faq2)} className="bneth-row2-col1-row1">
                            <div>3. Does Binance provide Testing environment?</div>
                            { faq2 ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M8 15v-1.2L12 9l4 4.8V15H8z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                            }
                        </div>
                        { faq2 ? 
                        <div className="bneth-row2-col1-row2">
                        Yes, you can utilize <a href='#'>Binance Spot Testnet</a> and <a href='#'>Futures Testnet</a> to test your use case, for free.
                         </div> : null}
                    </div>
                    <hr className="bneth-row2-hr"/>
                    <div className="bneth-row2-col1">
                        <div onClick={()=>setFaq3(!faq3)} className="bneth-row2-col1-row1">
                            <div>4. Can I use other languages(such as Python or Java) with Binance API?</div>
                            { faq3 ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M8 15v-1.2L12 9l4 4.8V15H8z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                            }
                        </div>
                        { faq3 ? 
                        <div className="bneth-row2-col1-row2">
                            Yes. Binance API is compatible with your favorite languages, such as Python, Java, Node.js, DotNET, Ruby and more. However, all the third party libraries not listed in our API library are unofficial and not affiliated with Binance and we are not responsible for any loss or damage arising out of or in connection with such uses.
                         </div> : null}
                    </div>
                    <hr className="bneth-row2-hr"/>

                </div>
            </div>
        </>
    );
}

export default Binanceapi;