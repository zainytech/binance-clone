import React from "react";
import { useState } from "react";

import './Binanceth.css';

const Binanceth = () => {
    const [show, setShow]  =  useState(true);
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
    const [article, setArticle] = useState(false)

    return(
        <>
            <div className="bneth">
                <div className="bneth-row1">
                    <div className="bneth-row1-col1">
                        <h2>Binance Staking - ETH 2.0</h2>
                        <div>Passive earnings. Yesterday's APR: 4.26%.</div>
                        <button>Stake Now</button>
                    </div>
                    <div className="bneth-row1-col2">
                        <div className="bneth-row1-col2-row" onClick={()=>setShow(!show)}>
                        {show ? (
                            <i className="fa-solid fa-eye"></i>
                        ) : (
                                <i className="fa-solid fa-eye-slash"></i>
                        )}
                        </div>
                        <div className="bneth-row1-col2-row1">
                                <div className="bneth-row1-col2-row1-col1">
                                    <div>Cumulative Yield</div>
                                    { show ? <div>0.00000000BETH</div>: <div>**********</div>}
                                </div>
                                <div className="bneth-row1-col2-row1-col1">
                                    <div>Last Day Yield</div>
                                    { show ? <div>0.00000000BETH</div>: <div>**********</div>}
                                </div>
                            </div>
                        <div className="bneth-row1-col2-row2">
                                <div>BETH Position</div>
                                <div>Distribution Record</div>
                        </div>
                    </div>
                </div>

                <div className="css-1uoxs9f">
                    <div data-bn-type="text" class="css-8hgg7m">Process</div>
                    <ul class="css-1x1zyn0">
                        <li data-id="1" class="css-1ycoxc7">
                            <div class="css-q2wk8b">
                                <div class="css-r2zn1l">
                                    <div data-id="1" class="css-15owl46">
                                        <div data-bn-type="text" class="css-79jo2f">Stake ETH</div>
                                    </div>
                                </div>
                                <div class="css-1d50ae">
                                    <div data-bn-type="text" class="css-15r8c65">Stake your ETH in one click and easily start generating yields, with token quantity protection and slashing coverage. You will get BETH as the tokenized representation of your staked ETH in a 1:1 ratio, allowing you to take advantage of the liquidity as well as enjoying the rewards of ETH staking.</div>
                                </div>
                            </div>
                        </li>
                        <li data-id="2" class="css-1fb6dw1">
                            <div class="css-q2wk8b"><div class="css-r2zn1l">
                            <div data-id="2" class="css-15owl46">
                            <div data-bn-type="text" class="css-79jo2f">Rewards Distribution</div></div></div>
                            <div class="css-1d50ae">
                            <div data-bn-type="text" class="css-15r8c65">We regularly distribute on-chain rewards to all participants based on their BETH position. The on-chain rewards will be distributed in the form of BETH to users' Spot accounts.</div></div></div></li>
                        
                        <li data-id="3" class="css-f5ns7f">
                        <div class="css-q2wk8b">
                        <div class="css-r2zn1l">
                            <div data-id="3" class="css-15owl46">
                                <div data-bn-type="text" class="css-79jo2f">Redeem ETH</div>
                                <div data-bn-type="text" class="css-77a6ym">Not yet made available by the Ethereum Foundation.</div>
                            </div>
                        </div>
                            <div class="css-1d50ae">
                            <div data-bn-type="text" class="css-15r8c65">You can redeem your ETH once the first major upgrade named Shanghai Upgrade enables staking withdrawals, which happens at least 6-12 months following the Merge. This is due to staking withdrawals being planned for the Shanghai upgrade, however are not yet enabled with the Merge. Only at this phase will you be able to swap BETH to ETH on a 1:1 basis and receive the amount equivalent to your BETH balance in your Spot Wallet. Additionally, the BETH bought from market and received from staking ETH will be treated equally.</div>
                            </div></div>
                        </li>
                    </ul>
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

export default Binanceth;

