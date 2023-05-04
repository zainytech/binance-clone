import React, { useState } from 'react'
import './Convert.css'

import Select from 'react-select';
import { Link } from 'react-router-dom';

const Convert = () => {
    const second = [
        {value: "BNB", label: "BNB"},
        {value: "COTI", label: "COTI"},
        {value: "BRL", label: "BRL"},
        {value: "ALCX", label: "ALCX"},
        {value: "XMR", label: "XMR"},
        {value: "ARPA", label: "ARPA"},
        {value: "CTK", label: "CTK"},
        {value: "BUSD", label: "BUSD"},
        {value: "MOVR", label: "MOVR"},
        {value: "SSV", label: "SSV"},
        {value: "APE", label: "APE"},
        {value: "BAT", label: "BAT"},
        {value: "RAD", label: "RAD"},
        {value: "FIS", label: "FIS"},
        {value: "BAR", label: "BAT"},
        {value: "RAD", label: "RAD"},
        {value: "BETA", label: "BETA"},
        {value: "VIB", label: "VIB"},
        {value: "FIO", label: "FIO"},
        {value: "BAL", label: "BAL"},
    ];

    const [startDate, setStartDate] = useState(new Date());

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


    return(
        <>
            <div className='convert'>
                <div className='convert-row1'>
                    <h3>Binance Convert </h3>
                    <Link to='/covertHist' style={{textDecoration: 'none'}}><button>Conversion Hoistory <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-hfx4ru"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 11.999l-7.071-7.071-1.768 1.768 4.055 4.054H2.999v2.5h13.216l-4.054 4.053 1.768 1.768L21 12v-.001z" fill="currentColor"></path></svg></button></Link>
                </div>
                <div className='convert-row2'>
                    <div className='convert-row2-col1'>
                        <button>Market</button>
                        <button>Limit</button>
                    </div>
                    <div className='convert-row2-col2'>
                        <button><i class="fa-solid fa-wallet"></i> Spot Wallet</button>
                    </div>
                    <div className='convert-row2-col3'>
                        <div className='convert-row2-col3-row1'>
                            <div>Form</div>
                            <div>Balance: 0 BNB</div>
                        </div>
                        <div className='convert-row2-col3-row2'>
                            <input type='text' placeholder='0.00' className="wastate-sec-row3-col-col2"/>
                            <div style={{ width: "7rem", height: '2.4rem'}}
                               className="wastate-sec-row3-col-col1">
                                    <Select options={second} isSearchable={true}
                                        styles={{
                                            control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            outline: 'none',
                                            borderColor: state.isFocused ? 'rgb(238, 238, 238)' : 'rgb(238, 238, 238)',
                                            }),
                                        }}
                                    />
                            </div>
                        </div>
                    </div>
                    <div className='convert-row2-col4'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1iztezc"><path d="M7.5 3h3v18.5l-7-7h4V3zM16.5 21h-3V2.5l7 7h-4V21z" fill="currentColor"></path></svg>
                    </div>
                    <div className='convert-row2-col3'>
                        <div className='convert-row2-col3-row1'>
                            <div>Form</div>
                            <div>Balance: 0 BNB</div>
                        </div>
                        <div className='convert-row2-col3-row2'>
                            <input type='text' placeholder='0.00' className="wastate-sec-row3-col-col2"/>
                            <div style={{ width: "7rem", height: '2.4rem'}}
                               className="wastate-sec-row3-col-col1">
                                    <Select options={second} isSearchable={true}
                                        styles={{
                                            control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            outline: 'none',
                                            borderColor: state.isFocused ? 'rgb(238, 238, 238)' : 'rgb(238, 238, 238)',
                                            }),
                                        }}
                                    />
                            </div>
                        </div>
                    </div>
                    <button className='convert-row2-btn'>Enter an Amount</button>
                </div>
                <div className='bapi-row9'>
                    <div className='bapi-row9-col1'>
                        <h2>FAQ</h2>
                        <a href='#'>View More</a>
                    </div>

                    <div className="bneth-row2-col1">
                        <div onClick={()=>setFaq(!faq)} className="bneth-row2-col1-row1">
                            <div>1.  Are there any trading fees?</div>
                            { faq ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M8 15v-1.2L12 9l4 4.8V15H8z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                            }
                        </div>
                        { faq ? 
                        <div className="bneth-row2-col1-row2">
                        There are no fees for using Binance Convert.
                            <br/>
                            <br/>
                        In Market mode, live prices are quoted based on current market conditions. The quoted amount of assets shown is the actual amount of assets you will receive in your account once the conversion is executed.
                            <br/>
                            <br/>
                            In Limit mode, once your order is executed at the specified limit price, the assets will be converted exactly at the specified limit price.
                        
                        </div> : null}
                    </div>
                    <hr className="bneth-row2-hr"/>
                    <div className="bneth-row2-col1">
                        <div onClick={()=>setFaq1(!faq1)} className="bneth-row2-col1-row1">
                            <div>2. What are the benefits of using Binance Convert and how do I get started using the platform?</div>
                            { faq1 ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M8 15v-1.2L12 9l4 4.8V15H8z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                            }
                        </div>
                        { faq1 ? 
                        <div className="bneth-row2-col1-row2">
                        Binance Convert is a simple tool for you to buy or sell cryptocurrencies with just a few clicks without having to go through placing orders on the trading interface. You can simply and instantly convert your crypto or fiat assets anytime with a live price based on current market conditions with zero fees.
                        <br />
                        <br />
                        Find out more about the benefits of Binance Convert and how to get started here:
                        </div> : null}
                    </div>
                    <hr className="bneth-row2-hr"/>
                    <div className="bneth-row2-col1">
                        <div onClick={()=>setFaq2(!faq2)} className="bneth-row2-col1-row1">
                            <div>3. What are the requirements to use the portal?</div>
                            { faq2 ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M8 15v-1.2L12 9l4 4.8V15H8z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                            }
                        </div>
                        { faq2 ? 
                        <div className="bneth-row2-col1-row2">
                        Please log in to your account to access all the functions of Binance Convert (e.g. checking indicative prices / confirming trades). All users are required to complete Identity Verification and existing account deposit / withdrawal limits apply. 
                        <br />
                        <br />
                        For more information on Identity Verification, please click here.
                         </div> : null}
                    </div>
                    <hr className="bneth-row2-hr"/>
                    <div className="bneth-row2-col1">
                        <div onClick={()=>setFaq3(!faq3)} className="bneth-row2-col1-row1">
                            <div>4. What are the minimum and maximum trade amounts?</div>
                            { faq3 ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M8 15v-1.2L12 9l4 4.8V15H8z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                            }
                        </div>
                        { faq3 ? 
                        <div className="bneth-row2-col1-row2">
                        Minimum and maximum trade amounts will be dependent on the coin / pair and can be previewed before entering in a trade amount.
                         </div> : null}
                    </div>
                    <hr className="bneth-row2-hr"/>
                    <div className="bneth-row2-col1">
                        <div onClick={()=>setFaq4(!faq4)} className="bneth-row2-col1-row1">
                            <div>5. How does settlement work?</div>
                            { faq4 ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M8 15v-1.2L12 9l4 4.8V15H8z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                            }
                        </div>
                        { faq4 ? 
                        <div className="bneth-row2-col1-row2">
                        Trades are settled directly into your Spot Wallet or Funding wallet, depending on which wallet is selected. Settlement will usually occur immediately or, in some cases, up to a few minutes after you confirm a trade.
                         </div> : null}
                    </div>
                    <hr className="bneth-row2-hr"/>
                    <div className="bneth-row2-col1">
                        <div onClick={()=>setFaq5(!faq5)} className="bneth-row2-col1-row1">
                            <div>6. How do I make deposits and withdrawals?</div>
                            { faq5 ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M8 15v-1.2L12 9l4 4.8V15H8z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                            }
                        </div>
                        { faq5 ? 
                        <div className="bneth-row2-col1-row2">
                        Binance Convert is connected to your account's Spot Wallet and Funding Wallet. Simply make deposits and withdrawals to / from your existing Spot Wallet or Funding Wallet.
                         </div> : null}
                    </div>
                    <hr className="bneth-row2-hr"/>
                    <div className="bneth-row2-col1">
                        <div onClick={()=>setFaq6(!faq6)} className="bneth-row2-col1-row1">
                            <div>7. Why did I receive an “insufficient funds” error?</div>
                            { faq6 ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M8 15v-1.2L12 9l4 4.8V15H8z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                            }
                        </div>
                        { faq6 ? 
                        <div className="bneth-row2-col1-row2">
                        To confirm an OTC trade, you must have the required amount of coins that you are selling in your account. For example, if you want to buy 10 BTC with USDT and the price per BTC is 10,000 USDT, then you must have at least 100,000 USDT in your account to confirm the trade.
                         </div> : null}
                    </div>
                    <hr className="bneth-row2-hr"/>
                    <div className="bneth-row2-col1">
                        <div onClick={()=>setFaq7(!faq7)} className="bneth-row2-col1-row1">
                            <div>8. What is the difference between "Market" mode and "Limit" mode?</div>
                            { faq7 ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M8 15v-1.2L12 9l4 4.8V15H8z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                            }
                        </div>
                        { faq7 ? 
                        <div className="bneth-row2-col1-row2">
                        Market mode allows you to convert your assets at the current market price based on the quoted price in the conversion.  
                        <br />
                        <br />
                        Limit mode allows you to place an order to convert your assets at a specified limit price. For example, if you place an order to convert USDT to BTC at a limit price of 9,000 USDT per BTC and the current price is 10,000 USDT per BTC, the order will only execute when the price per BTC is 9,000 USDT or lower.  
                        <br />
                        <br />
                        Similarly, if you place an order to convert BTC to USDT at a limit price of 11,000 USDT per BTC and the current price is 10,000 USDT per BTC, the order will only execute when the price per BTC is 11,000 USDT or higher. 
                        <br />
                        <br />
                        Limit mode orders are executed subject to market conditions and may not be completed even if the market price reaches or crosses your limit price momentarily.
                         </div> : null}
                    </div>
                    <hr className="bneth-row2-hr"/>
                    <div className="bneth-row2-col1">
                        <div onClick={()=>setFaq8(!faq8)} className="bneth-row2-col1-row1">
                            <div>9. Why is the price quoted different from the last traded price on the exchange?</div>
                            { faq8 ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M8 15v-1.2L12 9l4 4.8V15H8z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                            }
                        </div>
                        { faq8 ? 
                        <div className="bneth-row2-col1-row2">
                        Last traded prices on the exchange do not include trading fees or factor in the size of your trade and are not live prices. Binance Convert dynamically quotes the best prices (with no hidden fees) based on market conditions and are held for a period of time for reviewing before executing your trade. 
                        <br />
                        <br />
                        The quoted amount of assets shown when previewing a conversion is the actual amount of assets you will receive in your account. There are no additional fees on top of the price quoted.
                         </div> : null}
                    </div>
                    <hr className="bneth-row2-hr"/>
                    <div className="bneth-row2-col1">
                        <div onClick={()=>setFaq9(!faq9)} className="bneth-row2-col1-row1">
                            <div>10. Where can I check my trades history?</div>
                            { faq9 ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M8 15v-1.2L12 9l4 4.8V15H8z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                            }
                        </div>
                        { faq9 ? 
                        <div className="bneth-row2-col1-row2">
                        You may find this in Convert history within your account (Orders >> Convert History) once you are logged in.
                         </div> : null}
                    </div>
                    <hr className="bneth-row2-hr"/>

                </div>
            </div>
        </>
    );
}

export default Convert;

