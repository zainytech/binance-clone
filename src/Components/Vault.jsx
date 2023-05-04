import React from "react";
import './Vault.css';

import vault from './Img/vault1.png';
import vault2 from './Img/vault2.png';
import vault3 from './Img/vault3.png';
import bnb from './Img/bnb.png';
import bbnb from './Img/bbnb.png';

import vault4 from './Img/vault4.png';
import vault5 from './Img/vault5.png';
import vault6 from './Img/vault6.png';
import vault7 from './Img/vault7.png';
import vault8 from './Img/vault8.png';
import vault9 from './Img/vault9.png';
import vault10 from './Img/vault10.png';
import vault11 from './Img/vault11.png';
import vault12 from './Img/vault12.png';
import vault13 from './Img/vault13.png';
import vault14 from './Img/vault14.png';
import vault15 from './Img/vault15.png';
import vault16 from './Img/vault16.png';
import vault17 from './Img/vault17.png';
import vault18 from './Img/vault18.png';
import vault19 from './Img/vault19.png';

import buy from './Img/buy.png';
import buy1 from './Img/buy1.png';
import buy2 from './Img/buy2.png';
import buy3 from './Img/buy3.png';
import buy4 from './Img/buy4.png';
import buy5 from './Img/buy5.png';
import buy6 from './Img/buy6.png';

import vbnb1 from './Img/vbnb1.png';
import vbnb2 from './Img/vbnb2.png';
import vbnb3 from './Img/vbnb3.png';
import vbnb4 from './Img/vbnb4.png';
import vbnb5 from './Img/vbnb5.png';
import vbnb6 from './Img/vbnb6.png';
import vbnb7 from './Img/vbnb7.png';
import vbnb8 from './Img/vbnb8.png';

import { useState } from "react";


const Vault = () => {
    const [arti, setArti] = useState(1);
    const [faq, setFaq]  =  useState(false);
    const [faq1, setFaq1]  =  useState(false);
    const [faq2, setFaq2]  =  useState(false);
    const [faq3, setFaq3]  =  useState(false);
    const [faq4, setFaq4]  =  useState(false);
    const [faq5, setFaq5]  =  useState(false);
    const [faq6, setFaq6]  =  useState(false);
    const [faq7, setFaq7]  =  useState(false);
    const [faq8, setFaq8]  =  useState(false);
    const [faq9, setFaq9]  =  useState(false);
    const [faq10, setFaq10]  =  useState(false);
    const [article, setArticle] = useState(false);

    return(
        <>
            <div className="vault">
                <div className="vault-row1">
                    <h2>BNB Vault</h2>
                    <div>One-click to earn multi-benefits with BNB</div>
                </div>

                <div className="vault-row2">
                    <div className="vault-row2-col1">
                        <div>Current Est. APR</div>
                        <div>0.35%</div>
                    </div>
                    <div className="vault-row2-col2">
                        <div>BNB Vault combines rewards from Simple Earn and Launchpool and offers competitive returns.</div>
                        <a>Tutorial <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-ew2l8i"><path d="M12 3.35c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8s8.8-3.9 8.8-8.8c0-4.8-4-8.8-8.8-8.8zm0 15.6c-3.7 0-6.8-3-6.8-6.8 0-3.7 3-6.8 6.8-6.8s6.8 3 6.8 6.8c0 3.7-3.1 6.8-6.8 6.8z" fill="currentColor"></path><path d="M16.5 12.15l-6.8-3.9v7.8l6.8-3.9z" fill="currentColor"></path></svg></a>
                    </div>
                </div>

                <div className="vault-row3">
                    <div className="vault-row3-col1">
                        <div className="vault-row3-col1-row1">My Shares</div>
                            <div className="vault-row3-col1-row2">
                                <img src={vault}/>
                                <div className="vault-row3-col1-row2-div1">0</div>
                                <div className="vault-row3-col1-row2-div2">Staked BNB</div>
                            </div>
                            <div className="vault-row3-col1-row3">
                                <div className="vault-row3-col1-row3-div1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-195wmwi"><path d="M15.3 16.125l-3.6-3.7v-5.2h2v4.4l3.1 3-1.5 1.5z" fill="currentColor"></path><path d="M19.1 18.425c-1.7 1.7-3.9 2.6-6.2 2.6v-2c1.8 0 3.5-.8 4.8-2 2.7-2.7 2.7-7.2 0-9.9s-7.2-2.7-9.9 0-2.7 6.9-.2 9.7l1 1c-.1-.6-.2-1.2-.2-1.9v-2.3h2v7.4H3v-2h2.3c.6 0 1.2.1 1.8.2l-1-1c-3.3-3.6-3.2-9.1.2-12.6 3.5-3.5 9.2-3.5 12.7 0s3.6 9.3.1 12.8z" fill="currentColor"></path></svg>
                                    Auto Transfer
                                </div>
                            </div>
                            <div className="vault-row3-col1-row4">
                                <button>Stake</button>
                                <button>Unstake</button>
                            </div>
                            <button className="vault-row3-col1-btn1">Buy BNB to Stake <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-bdszb1"><path d="M14.65 12.24l-4.24 4.24L9 15.06l2.82-2.82L9 9.42 10.41 8l4.24 4.24z" fill="currentColor"></path></svg></button>
                            <button className="vault-row3-col1-btn2">Join Launchpool <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-bdszb1"><path d="M14.65 12.24l-4.24 4.24L9 15.06l2.82-2.82L9 9.42 10.41 8l4.24 4.24z" fill="currentColor"></path></svg></button>
                    </div>

                    <div className="vault-row3-col2">
                        <div className="vault-row3-col2-row1">
                            <h6>My Rewards</h6>
                            <a>Distribution History</a>
                        </div>
                        <div className="vault-row3-col2-row2">All Rewards will be distributed to spot wallet.</div>
                        <div className="vault-row3-col2-row3">
                            <div className="vault-row3-col2-row3-div1">Flexible Rewards</div>
                            <div className="vault-row3-col2-row3-div2">
                                <div><img src={bnb}/>
                                BNB</div>
                                <h2>-</h2>
                            </div>
                            <div className="vault-row3-col2-row3-div3">
                                <div>Est. APR</div>
                                <div>0.35%</div>
                            </div>
                        </div>

                        <div className="vault-row3-col2-row3">
                            <div className="vault-row3-col2-row3-div1">Launchpool Rewards</div>
                            <div className="vault-row3-col2-row3-div2">
                                <div>Current Rewards</div>
                                <h2>-</h2>
                            </div>
                            <div className="vault-row3-col2-row3-div3">
                                <div>Yesterday's APR</div>
                                <div>0</div>
                            </div>
                        </div>

                        <div className="vault-row3-col2-row3">
                            <div className="vault-row3-col2-row3-div1">Other Rewards</div>
                            <div className="vault-row3-col2-row3-div2">
                                <div>Current Rewards</div>
                                <h2>-</h2>
                            </div>
                            <div className="vault-row3-col2-row3-div3">
                                <div>Est. APR</div>
                                <div>0</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="vault-row4">
                    <div className="vault-row4-img1"><img src={vault2}/><div>What is BNB</div></div>
                    <div className="vault-row4-col1">
                        <div className="vault-row4-col1-row1">
                            <h2>BNB powers the Binance Ecosystem</h2>
                            <div>As the native coin of Binance Chain, BNB has multiple use cases: Fueling transactions on the Chain, paying for transaction fees on Binance Exchange, making in-store payments, and many more.</div>
                        </div>
                        <div className="vault-row4-col1-row2"><img src={vault3}/></div>
                    </div>
                </div>

                <div className="vault-row5">
                    <div class="css-2aqk0n">
                        <div class="css-4cffwv">
                            <div id="bnbvault-buy-bnb" className={ arti === 1 ? "css-uls7wl" : "css-1x9m2l6"} onClick={()=>setArti(1)}>
                                <div class="css-1nqigiu">
                                <div class="css-lr6hiu"></div>
                                <div data-bn-type="text" class="css-u4p7ra">Buy BNB</div>
                                </div>
                            </div>
                            <div id="bnbvault-store-bnb" className={ arti === 2 ? "css-uls7wl" : "css-1x9m2l6"} onClick={()=>setArti(2)}>
                                <div class="css-1nqigiu">
                                <div class="css-lr6hiu"></div>
                                <div data-bn-type="text" class="css-u4p7ra">Store BNB</div>
                                </div>
                            </div>
                            <div id="bnbvault-use-bnb"  className={ arti === 3 ? "css-uls7wl" : "css-1x9m2l6"} onClick={()=>setArti(3)}>
                                <div class="css-1nqigiu">
                                <div class="css-lr6hiu"></div>
                                <div data-bn-type="text" class="css-xv8del">Use BNB</div>
                                </div>
                            </div>
                            <div id="bnbvault-burn-bnb" className={ arti === 4 ? "css-uls7wl" : "css-1x9m2l6"} onClick={()=>setArti(4)}>
                                <div class="css-1nqigiu">
                                <div class="css-lr6hiu"></div>
                                <div data-bn-type="text" class="css-u4p7ra">Burn BNB</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="vault-row6">
                        { arti === 1 &&  <>
                            <div className="vault-row6-col1">
                                <div className="vault-row6-col1-row1">
                                    <h2>Buy BNB</h2>
                                    <div>Buying BNB is easy. Check the list below to find the place that suits you best!</div>
                                </div>
                                <img src={bbnb}/>
                            </div>
                            
                            <div className="vault-row6-col2">
                                    <div className="vault-row6-col2-div1">
                                        <img src={buy} className='css-r0bq5r '/>
                                        <div>Buy & Sell BNB with bank account</div>
                                        <button className="vault-row6-col2-btn">Check
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                                    </div>
                                    <div className="vault-row6-col2-div1">
                                        <img src={buy1} className='css-r0bq5r '/>
                                        <div>Buy BNB with ATMs</div>
                                        <button className="vault-row6-col2-btn">Check
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                                
                                    </div>
                                    <div className="vault-row6-col2-div1">
                                        <img src={buy2} className='css-r0bq5r '/>
                                        <div>Buy BNB with cash</div>
                                        <button className="vault-row6-col2-btn">Check
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                                    </div>
                                    <div className="vault-row6-col2-div1">
                                        <img src={buy3} className='css-r0bq5r '/>
                                        <div>Trade BNB and other crypto in Brave Browser</div>
                                        <button className="vault-row6-col2-btn">Check
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                                
                                    </div>
                                    <div className="vault-row6-col2-div1">
                                        <img src={buy4} className='css-r0bq5r css-r0bq5rbuy'/>
                                        <div>Purchasing and selling BNB with USD</div>
                                        <button className="vault-row6-col2-btn">Check
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                                
                                    </div>
                                    <div className="vault-row6-col2-div1">
                                        <img src={buy5} className='css-r0bq5r '/>
                                        <div>Buy BNB with cash</div>
                                        <button className="vault-row6-col2-btn">Check
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                                
                                    </div>
                                    <div className="vault-row6-col2-div1">
                                        <img src={buy6} className='css-r0bq5r '/>
                                        <div>Buy BNB voucher</div>
                                        <button className="vault-row6-col2-btn">Check
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                                
                                    </div>
                                    <div className="vault-row6-col2-div1">
                                        <div>More in the future</div>
                                        <button className="vault-row6-col2-btn">Check
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                                
                                    </div>
                            </div>                       
                        </> }
                        
                        { arti === 2 && <>
                            <div className="vault-row6-col1">
                                <div className="vault-row6-col1-row1">
                                    <h2>Store BNB</h2>
                                    <div>Securely store your BNB with the following wallets, each supporting Binance Chain.</div>
                                </div>
                                <img src={vault4}/>
                            </div>

                            <div className="vault-row6-col2">
                                <div className="vault-row6-col2-div1">
                                    <img src={vault5} className='css-r0bq5r '/>
                                    <div>Trust Wallet</div>
                                    <button className="vault-row6-col2-btn">Check
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                                </div>
                                <div className="vault-row6-col2-div1">
                                    <img src={vault6} className='css-r0bq5r '/>
                                    <div>Ledger Wallet</div>
                                    <button className="vault-row6-col2-btn">Check
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                            
                                </div>
                                <div className="vault-row6-col2-div1">
                                    <img src={vault7} className='css-r0bq5r '/>
                                    <div>Enjin Wallet</div>
                                    <button className="vault-row6-col2-btn">Check
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                                </div>
                                <div className="vault-row6-col2-div1">
                                    <img src={vault8} className='css-r0bq5r '/>
                                    <div>CoolWallet S</div>
                                    <button className="vault-row6-col2-btn">Check
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                            
                                </div>
                                <div className="vault-row6-col2-div1">
                                    <img src={vault9} className='css-r0bq5r '/>
                                    <div>Atomic Wallet</div>
                                    <button className="vault-row6-col2-btn">Check
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                            
                                </div>
                                <div className="vault-row6-col2-div1">
                                    <img src={vault10} className='css-r0bq5r '/>
                                    <div>Coinomi</div>
                                    <button className="vault-row6-col2-btn">Check
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                            
                                </div>
                                <div className="vault-row6-col2-div1">
                                    <img src={vault11} className='css-r0bq5r '/>
                                    <div>Infinito Wallet</div>
                                    <button className="vault-row6-col2-btn">Check
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                            
                                </div>
                                <div className="vault-row6-col2-div1">
                                    <img src={vault12} className='css-r0bq5r '/>
                                    <div>Zelcore</div>
                                    <button className="vault-row6-col2-btn">Check
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                            
                                </div>
                                <div className="vault-row6-col2-div1">
                                    <img src={vault13} className='css-r0bq5r '/>
                                    <div>Exodus</div>
                                    <button className="vault-row6-col2-btn">Check
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                            
                                </div>
                                <div className="vault-row6-col2-div1">
                                    <img src={vault14} className='css-r0bq5r '/>
                                    <div>MathWallet</div>
                                    <button className="vault-row6-col2-btn">Check
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                            
                                </div>
                                <div className="vault-row6-col2-div1">
                                    <img src={vault15} className='css-r0bq5r '/>
                                    <div>Magnum Wallet</div>
                                    <button className="vault-row6-col2-btn">Check
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                            
                                </div>
                                <div className="vault-row6-col2-div1">
                                    <img src={vault16} className='css-r0bq5r '/>
                                    <div>Hoo Wallet</div>
                                    <button className="vault-row6-col2-btn">Check
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                            
                                </div>
                                <div className="vault-row6-col2-div1">
                                    <img src={vault17} className='css-r0bq5r '/>
                                    <div>Ellipal Wallet</div>
                                    <button className="vault-row6-col2-btn">Check
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                            
                                </div>
                                <div className="vault-row6-col2-div1">
                                    <img src={vault17} className='css-r0bq5r '/>
                                    <div>Guarda Wallet</div>
                                    <button className="vault-row6-col2-btn">Check
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                            
                                </div>
                                <div className="vault-row6-col2-div1">
                                    <img src={vault19} className='css-r0bq5r '/>
                                    <div>Meet.One</div>
                                    <button className="vault-row6-col2-btn">Check
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                            
                                </div>
                            </div>
                        </>}

                        { arti === 3 && <>
                            <div className="vault-row6-col1">
                                <div className="vault-row6-col1-row1">
                                    <h2>Use BNB</h2>
                                    <div>Use BNB</div>
                                </div>
                            </div>

                            <div className="vault-row6-col2">
                                <div className="vault-row6-col2-div1">
                                    <img src={vbnb1} className='css-r0bq5r '/>
                                    <div>Pay via XPOS</div>
                                    <div>Pundi X</div>
                                    <button className="vault-row6-col2-btn">Check
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                                </div>
                                <div className="vault-row6-col2-div1">
                                    <img src={vbnb2} className='css-r0bq5r '/>
                                    <div>Pay by credit card</div>
                                    <div>Crypto.com</div>
                                    <button className="vault-row6-col2-btn">Check
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                            
                                </div>
                                <div className="vault-row6-col2-div1">
                                    <img src={vbnb3} className='css-r0bq5r '/>
                                    <div>Pay in BNB at Monetha merchants</div>
                                    <div>Monetha</div>
                                    <button className="vault-row6-col2-btn">Check
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                                </div>
                                <div className="vault-row6-col2-div1">
                                    <img src={vbnb4} className='css-r0bq5r css-vbnb4'/>
                                    <div>Buy a smartphone</div>
                                    <div>HTC</div>
                                    <button className="vault-row6-col2-btn">Check
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                            
                                </div>
                                <div className="vault-row6-col2-div1">
                                    <img src={vbnb5} className='css-r0bq5r '/>
                                    <div>Pay in BNB</div>
                                    <div>Coinpayments</div>
                                    <button className="vault-row6-col2-btn">Check
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                            
                                </div>
                                <div className="vault-row6-col2-div1">
                                    <img src={vbnb6} className='css-r0bq5r '/>
                                    <div>Pay in BNB</div>
                                    <div>CoinGate</div>
                                    <button className="vault-row6-col2-btn">Check
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                            
                                </div>
                                <div className="vault-row6-col2-div1">
                                    <img src={vbnb7} className='css-r0bq5r '/>
                                    <div>Pay in BNB</div>
                                    <div>coinify</div>
                                    <button className="vault-row6-col2-btn">Check
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                            
                                </div>
                                <div className="vault-row6-col2-div1">
                                    <img src={vbnb8} className='css-r0bq5r '/>
                                    <div>Pay in BNB and BUSD</div>
                                    <div>NOWPayments</div>
                                    <button className="vault-row6-col2-btn">Check
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1i13iin"><path d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z" fill="currentColor"></path></svg></button>
                            
                                </div>
                                
                            </div>
                        </>}

                        { arti === 4 && <>
                            <div className="vault-row6-col1">
                                <div className="vault-row6-col1-row1">
                                    <h2>Burn BNB</h2>
                                    <div> Burn bnb Securely store your BNB with the following wallets, each supporting Binance Chain.</div>
                                </div>
                            </div>

                            <div className="vault-row6-col2">
                                <div className="vault-row6-col2-div2">
                                    <div className="vault-row6-div44">
                                        <h1>1th</h1>
                                        <div className="vault-row6-div44-div1">Binance Completes 1st Quarterly BNB Burn</div>
                                        <div className="vault-row6-div44-div2">In accordance with our whitepaper, we have completed our 1st quarterly BNB token burn of 986,000 BNB.</div>
                                        <a>View in Ethereum Blockchain Explorer </a>
                                    </div>
                                </div>
                                <div className="vault-row6-col2-div2">
                                    <div className="vault-row6-div44">
                                        <h1>2th</h1>
                                        <div className="vault-row6-div44-div1">Binance Completes 2nd Quarterly BNB Burn</div>
                                        <div className="vault-row6-div44-div2">In accordance with our whitepaper, we have completed our 2nd quarterly BNB token burn of 1,821,586 BNB.</div>
                                        <a>View in Ethereum Blockchain Explorer </a>
                                    </div>
                                </div>
                                <div className="vault-row6-col2-div2">
                                    <div className="vault-row6-div44">
                                        <h1>3th</h1>
                                        <div className="vault-row6-div44-div1">Binance Completes 3rd Quarterly BNB Burn</div>
                                        <div className="vault-row6-div44-div2">In accordance with our whitepaper, we have completed our 3rd quarterly BNB token burn of 2,220,314 BNB (roughly $30MM USD equivalent).</div>
                                        <a>View in Ethereum Blockchain Explorer </a>
                                    </div>
                                </div>
                                <div className="vault-row6-col2-div2">
                                <div className="vault-row6-div44">
                                        <h1>4th</h1>
                                        <div className="vault-row6-div44-div1">Binance Completes 4th Quarterly BNB Burn</div>
                                        <div className="vault-row6-div44-div2">In accordance with our whitepaper, we have completed our 4th quarterly BNB token burn of 2,528,767 BNB (roughly $30MM USD equivalent).</div>
                                        <a>View in Ethereum Blockchain Explorer </a>
                                    </div>
                                </div>
                                <div className="vault-row6-col2-div2">
                                <div className="vault-row6-div44">
                                        <h1>5th</h1>
                                        <div className="vault-row6-div44-div1">Binance Completes 5th Quarterly BNB Burn</div>
                                        <div className="vault-row6-div44-div2">In accordance with our whitepaper, we have completed our 5th quarterly BNB token burn of 1,643,986 BNB (roughly $17MM USD equivalent).</div>
                                        <a>View in Ethereum Blockchain Explorer </a>
                                    </div>
                                </div>
                                <div className="vault-row6-col2-div2">
                                <div className="vault-row6-div44">
                                        <h1>6th</h1>
                                        <div className="vault-row6-div44-div1">Binance Completes 6th Quarterly BNB Burn</div>
                                        <div className="vault-row6-div44-div2">In accordance with our whitepaper, we have completed our 6th quarterly BNB token burn of 1,623,818 BNB (roughly $9.4MM USD equivalent).</div>
                                        <a>View in Ethereum Blockchain Explorer </a>
                                    </div>
                                </div>
                                <div className="vault-row6-col2-div2">
                                <div className="vault-row6-div44">
                                        <h1>7th</h1>
                                        <div className="vault-row6-div44-div1">Binance Completes th Quarterly BNB Burn</div>
                                        <div className="vault-row6-div44-div2">In accordance with our whitepaper, we have completed our 7th quarterly BNB token burn of 829,888 BNB (roughly $15.6 MM USD equivalent).</div>
                                        <a>View in Ethereum Blockchain Explorer </a>
                                    </div>
                                </div>
                                <div className="vault-row6-col2-div2">
                                <div className="vault-row6-div44">
                                        <h1>8th</h1>
                                        <div className="vault-row6-div44-div1">Binance Completes 8th Quarterly BNB Burn</div>
                                        <div className="vault-row6-div44-div2">In accordance with our whitepaper, we have completed our 8th quarterly BNB token burn of 808,888 BNB (roughly $23.8 MM USD equivalent) from Binance Team tokens.</div>
                                        <a>View in Ethereum Blockchain Explorer </a>
                                    </div>
                                </div>
                                <div className="vault-row6-col2-div2">
                                <div className="vault-row6-div44">
                                        <h1>9th</h1>
                                        <div className="vault-row6-div44-div1">Binance Completes 9th Quarterly BNB Burn</div>
                                        <div className="vault-row6-div44-div2">In accordance with the Binance whitepaper, we have completed our 9th quarterly BNB token burn of 2,061,888 BNB (roughly $36,700,000 USD equivalent).</div>
                                        <a>View in Ethereum Blockchain Explorer </a>
                                    </div>
                                </div>
                                <div className="vault-row6-col2-div2">
                                <div className="vault-row6-div44">
                                        <h1>10th</h1>
                                        <div className="vault-row6-div44-div1">Binance Completes 10th Quarterly BNB Burn</div>
                                        <div className="vault-row6-div44-div2">In accordance with the Binance whitepaper, we have completed our 10th quarterly BNB token burn of 2,216,888 BNB (roughly $38,800,000 USD equivalent).</div>
                                        <a>View in Ethereum Blockchain Explorer </a>
                                    </div>
                                </div>
                                <div className="vault-row6-col2-div2">
                                <div className="vault-row6-div44">
                                        <h1>11th</h1>
                                        <div className="vault-row6-div44-div1">Binance Completes 11th Quarterly BNB Burn</div>
                                        <div className="vault-row6-div44-div2">In accordance with the Binance whitepaper, we have completed our 11th quarterly BNB token burn of 3,373,988 BNB (roughly $52,466,000 USD equivalent).</div>
                                        <a>View in Ethereum Blockchain Explorer </a>
                                    </div>
                                </div>
                                <div className="vault-row6-col2-div2">
                                <div className="vault-row6-div44">
                                        <h1>12th</h1>
                                        <div className="vault-row6-div44-div1">Binance Completes 12th Quarterly BNB Burn</div>
                                        <div className="vault-row6-div44-div2">In accordance with the Binance whitepaper, we have completed our 12th quarterly BNB token burn of 3,477,388 BNB (roughly $60,500,000 USD equivalent).</div>
                                        <a>View in Ethereum Blockchain Explorer </a>
                                    </div>
                                </div>
                            </div>
                        </>}
                    </div>
                </div>

                <div className="bneth-row2">
                    <h2>FAQ</h2>
                    <div className="bneth-row2-col1">
                        <div onClick={()=>setFaq(!faq)} className="bneth-row2-col1-row1">
                            <div>1. What is ETH2.0?</div>
                            { faq ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M8 15v-1.2L12 9l4 4.8V15H8z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                            }
                        </div>
                        { faq ? 
                        <div className="bneth-row2-col1-row2">
                            ETH 2.0 is the long-awaited upgrade to the Ethereum network that promises, among other things, to improve the network’s scalability, efficiency, and sustainability without sacrificing security and decentralization. The ETH community aims to achieve this by rolling out several phases and a series of upgrades. Recently, Ethereum is stepping into the Merge Stage. After the Ethereum Merge, the consensus mechanism of ETH will be updated to PoS instead of PoW mechanism.
                        </div> : null}
                    </div>

                    <hr className="bneth-row2-hr"/>

                    <div className="bneth-row2-col1">
                        <div onClick={()=>setFaq1(!faq1)} className="bneth-row2-col1-row1">
                            <div>2. When can I redeem my staked ETH?</div>
                            { faq1 ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M8 15v-1.2L12 9l4 4.8V15H8z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                            }
                        </div>
                        { faq1 ? 
                        <div className="bneth-row2-col1-row2">
                            ETH Staking withdrawals are not yet enabled with the Merge, instead, they are planned for the Shanghai upgrade, which happens at least 6-12 months after. However, Binance tokenizes BETH for users that represents your staked ETH on a 1:1 basis, to keep using your locked assets for trading and withdrawals. You can change BETH back to ETH when staking withdrawal enabled, then you will have the chance to swap the BETH you hold back to ETH on a 1:1 ratio.
                        </div> : null}
                    </div>

                    <hr className="bneth-row2-hr"/>

                    <div className="bneth-row2-col1">
                        <div onClick={()=>setFaq2(!faq2)} className="bneth-row2-col1-row1">
                            <div>3. How is the APR calculated?</div>
                            { faq2 ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M8 15v-1.2L12 9l4 4.8V15H8z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                            }
                        </div>
                        { faq2 ? 
                        <div className="bneth-row2-col1-row2">
                          The APR isn't calculated by Binance. The whole staking process including staking rewards depends on the ETH network. The more ETH is staked, the lower the APR will be.
                         </div> : null}
                    </div>

                    <hr className="bneth-row2-hr"/>

                    <div className="bneth-row2-col1">
                        <div onClick={()=>setFaq3(!faq3)} className="bneth-row2-col1-row1">
                            <div>4. What is BETH, and how does it work?</div>
                            { faq3 ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M8 15v-1.2L12 9l4 4.8V15H8z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                            }
                        </div>
                        { faq3 ? 
                        <div className="bneth-row2-col1-row2">
                            BETH is a tokenized asset representing your staked ETH on a 1:1 basis. You can swap your staked ETH to BETH and leverage your earnings potential. BETH can do everything that ETH does, and you can use it for trading, withdrawals, etc. You can swap your BETH holdings back to ETH when ETH 2.0 mainnet goes live and enable the withdraw feature(which happens at least 6 - 12 months later after The Ethereum Merge), and you'll receive ETH equal to your BETH holdings. There are limitations on the daily available quotta for BETH to be swapped.
                         </div> : null}
                    </div>

                    <hr className="bneth-row2-hr"/>

                    <div className="bneth-row2-col1">
                        <div onClick={()=>setFaq4(!faq4)} className="bneth-row2-col1-row1">
                            <div>5. Where can I view my staking balance?</div>
                            { faq4 ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M8 15v-1.2L12 9l4 4.8V15H8z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                            }
                        </div>
                        { faq4 ? 
                        <div className="bneth-row2-col1-row2">
                            Your staked ETH balance can be viewed after logging in to your Binance account and navigating to the ETH2.0 page. You could also check your BETH holdings and rewards in your Spot Wallet.
                        </div> : null}
                    </div>

                    <hr className="bneth-row2-hr"/>

                    { article ?  <>
                    <div className="bneth-row2-col1">
                        <div onClick={()=>setFaq5(!faq5)} className="bneth-row2-col1-row1">
                            <div>6. When can I receive my staking rewards?</div>
                            { faq5 ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M8 15v-1.2L12 9l4 4.8V15H8z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                            }
                        </div>
                        { faq5 ? 
                        <div className="bneth-row2-col1-row2">
                            The on-chain staking income will be distributed in the form of BETH to your Spot Account on a daily basis. For example, if you choose to stake your ETH today, your BETH position will be calculated the next day, and the T-day staking rewards will be distributed on the T+2 day.
                        </div> : null}
                    </div>
                    
                    <hr className="bneth-row2-hr"/>

                    <div className="bneth-row2-col1">
                        <div onClick={()=>setFaq6(!faq6)} className="bneth-row2-col1-row1">
                            <div>7. Will I keep receiving BETH staking interest if I stake my BETH in Launchpool or other products?</div>
                            { faq6 ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M8 15v-1.2L12 9l4 4.8V15H8z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                            }
                        </div>
                        { faq6 ? 
                        <div className="bneth-row2-col1-row2">
                            The on-chain staking income will be distributed in the form of BETH to your Spot Account on a daily basis. For example, if you choose to stake your ETH today, your BETH position will be calculated the next day, and the T-day staking rewards will be distributed on the T+2 day.
                        </div> : null}
                    </div>

                    <hr className="bneth-row2-hr"/>

                    <div className="bneth-row2-col1">
                        <div onClick={()=>setFaq7(!faq7)} className="bneth-row2-col1-row1">
                            <div>8. If I swap my BETH to ETH, could I still receive daily rewards distributed?</div>
                            { faq7 ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M8 15v-1.2L12 9l4 4.8V15H8z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                            }
                        </div>
                        { faq7 ? 
                        <div className="bneth-row2-col1-row2">
                            No, once you successfully swap the BETH back to ETH, you will not be able to receive the distributed BETH rewards again.</div> : null}
                        </div>

                    <hr className="bneth-row2-hr"/>

                    <div className="bneth-row2-col1">
                        <div onClick={()=>setFaq8(!faq8)} className="bneth-row2-col1-row1">
                            <div>9. Why do I receive BETH interest different from the ETH chain APR? Why is the rewards changing?</div>
                            { faq8 ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M8 15v-1.2L12 9l4 4.8V15H8z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                            }
                        </div>
                        { faq8 ? 
                        <div className="bneth-row2-col1-row2">
                        Binance ETH 2.0 staking users are paid daily, and the reward yield is calculated according to your BETH holdings in Spot Wallet. Additionally, there is a queue for the activation of validators which also requires the gas fee to be paid.</div> : null}
                        </div>

                    <hr className="bneth-row2-hr"/>

                    <div className="bneth-row2-col1">
                        <div onClick={()=>setFaq8(!faq8)} className="bneth-row2-col1-row1">
                            <div>10. Will I still receive BETH Staking Rewards if I use BETH as a Binance Loan collateral?</div>
                            { faq8 ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M8 15v-1.2L12 9l4 4.8V15H8z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                            }
                        </div>
                        { faq8 ? 
                        <div className="bneth-row2-col1-row2">
                            BETH staking rewards is calculated based on users' BETH holdings in Binance Spot Wallet, therefore users will not receive any staking rewards for BETH that is used as collateral on Binance Loans.</div> : null}
                        </div>

                    <hr className="bneth-row2-hr"/></>  :  null }
                
                { article ? 
                    <div className="bneth-row2-more" onClick={()=>setArticle(false)}>
                        <div>View Less</div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-y2jbtx"><path d="M13.5 12L7 18.6 8.4 20l8-8-8-8L7 5.4l6.5 6.6z" fill="currentColor"></path></svg>
                    </div>
                    :
                    <div className="bneth-row2-more" onClick={()=>setArticle(true)}>
                        <div>View More</div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1fa04gc"><path d="M13.5 12L7 18.6 8.4 20l8-8-8-8L7 5.4l6.5 6.6z" fill="currentColor"></path></svg>
                    </div>

                }
                  

                </div>

            </div>
        </>
    );
}


export default Vault;