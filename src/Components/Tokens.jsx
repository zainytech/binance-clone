import React, { useState } from 'react'
import './Tokens.css'

import Select from 'react-select';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import tok1 from './Img/tok1.png';
import tok2 from './Img/tok2.png';
import tok3 from './Img/tok3.png';
import tok4 from './Img/tok4.png';
import tok5 from './Img/tok5.png';
import tok6 from './Img/tok6.png';
import tok7 from './Img/tok7.png';
import tok8 from './Img/tok8.png';
import tok9 from './Img/tok9.png';
import tok10 from './Img/tok10.png';
import tok11 from './Img/tok11.png';
import tok12 from './Img/tok12.png';
import tok13 from './Img/tok13.png';
import tok14 from './Img/tok14.png';
import tok15 from './Img/tok15.png';
import tok16 from './Img/tok16.png';
import tok17 from './Img/tok17.png';
// import tok18 from './Img/tok18.png';
// import tok19 from './Img/tok19.png';

const Tokens = () => {
    const [data, setData] = useState(1);
    const [token, setToken] = useState(1);

    const [faq, setFaq]  =  useState(false);
    const [faq1, setFaq1]  =  useState(false);
    const [faq2, setFaq2]  =  useState(false);
    const [faq3, setFaq3]  =  useState(false);
    const [faq4, setFaq4]  =  useState(false);
    const [faq5, setFaq5]  =  useState(false);

    const [query, setQuery] = useState('');

    const second = [
        {value: "All", label: "All"},
        {value: "1INCHDOWN", label: "1INCHDOWN"},
        {value: "1INCHUP", label: "1INCHUP"},
        {value: "XMLDOWN", label: "XMLDOWN"},
        {value: "XMLUP", label: "XMLUP"},
        {value: "SUSHIDOWN", label: "SUSHIDOWN"},
        {value: "SUSHIUP", label: "SUSHIUP"},
        {value: "AAVEDOWN", label: "AAVEDOWN"},
        {value: "AAVEUP", label: "AAVEUP"},
        {value: "BCHDOWN", label: "BCHDOWN"},
        {value: "BCHUP", label: "BCHUP"},
        {value: "FILDOWN", label: "FILDOWN"},
        {value: "FILUP", label: "FILUP"}
    ];

    const [startDate, setStartDate] = useState(new Date());

    return(
        <>
            <div className='tokens'>
                <div className='tokens-row1-img'>
                    <div className='tokens-row1'>
                        <div className='tokens-row1-col2'>
                            <h1>Binance Leveraged Tokens</h1>
                            <h5>Enjoy increased leverage without risk of liquidation</h5>
                        </div>
                        <div className='tokens-row1-col1-scroll'>
                            <div className='tokens-row1-col1'>
                                <div onClick={()=> setData(1)} className={ data === 1 ? 'act active-link' : 'act'} >Tokens</div>
                                <div onClick={()=> setData(2)} className={ data === 2 ? 'act1 active-link' : 'act1'}>Subscription History</div>
                                <div onClick={()=> setData(3)} className={ data === 3 ? 'act2 active-link' : 'act2'}>Redemption History</div>
                                <div onClick={()=> setData(4)} className={ data === 4 ? 'act3 active-link' : 'act3'}>Service Agreement</div>
                            </div>
                        </div>
                    </div>
                </div>

                { data === 1 && <>
                <div className='tokens-row2'>
                    <div className='tokens-col1-data'>
                            <div onClick={()=> setToken(1)} className={ token === 1 ? 'active-token' : ''}>All</div>
                            <div onClick={()=> setToken(2)} className={ token === 2 ? 'active-token' : ''}>My Tokens</div>
                    </div>

                   { token === 1 &&  <>
                    <div className='tokens-col1-table-scroll'>
                        <div className='tokens-col1-table'>
                            <div className='tokens-row2-tab1'>
                                <div className='tokens-row2-tab1-col1'>
                                    {/* <img src={tok1} alt='tok1' className='tokens-row2-tab1-col1-img'/> */}
                                    <div className='tokens-row2-tab1-col1-row1'>
                                        <div className='tokens-row2-tab1-col1-row2'>
                                            <div>Name</div>
                                        </div>
                                        {/* <div className='tokens-row2-tab1-col1-row3'>Short ADA with Up to 4x leverage</div> */}
                                    </div>
                                </div>
                                <div className='tokens-row2-tab1-col2'>NAV</div>
                                <div className='tokens-row2-tab1-col3'>Real Leverage</div>
                                <div className='tokens-row2-tab1-col4'>Last Price</div>
                                <div className='tokens-row2-tab1-col5'>24h Change</div>
                                <div className='tokens-row2-tab1-col6'>
                                    Hide
                                </div>
                            </div>

                            <div className='tokens-row2-tab1'>
                                <div className='tokens-row2-tab1-col1'>
                                    <img src={tok1} alt='tok1' className='tokens-row2-tab1-col1-img'/>
                                    <div className='tokens-row2-tab1-col1-row1'>
                                        <div className='tokens-row2-tab1-col1-row2'>
                                            <div>ADADOWN</div>
                                            <button>-2.172x</button>
                                        </div>
                                        <div className='tokens-row2-tab1-col1-row3'>Short ADA with Up to 4x leverage</div>
                                    </div>
                                </div>
                                <div className='tokens-row2-tab1-col2'>$0.002307</div>
                                <div className='tokens-row2-tab1-col3'>-2.177X</div>
                                <div className='tokens-row2-tab1-col4'>$0.002351</div>
                                <div className='tokens-row2-tab1-col5'>+12.49%</div>
                                <div className='tokens-row2-tab1-col6'>
                                    <a href='#'>Trade</a>  <a href='#'>Subscribe</a>  <a href='#'>Redeem</a>
                                </div>
                            </div>

                            <div className='tokens-row2-tab1'>
                                <div className='tokens-row2-tab1-col1'>
                                    <img src={tok1} alt='tok1' className='tokens-row2-tab1-col1-img'/>
                                    <div className='tokens-row2-tab1-col1-row1'>
                                        <div className='tokens-row2-tab1-col1-row2'>
                                            <div>ADAUP</div>
                                            <button>+1.727x</button>
                                        </div>
                                        <div className='tokens-row2-tab1-col1-row3'>Long ADA with Up to 4x leverage</div>
                                    </div>
                                </div>
                                <div className='tokens-row2-tab1-col2'>$0.455</div>
                                <div className='tokens-row2-tab1-col3'>+1.728X</div>
                                <div className='tokens-row2-tab1-col4'>$0.453</div>
                                <div className='tokens-row2-tab1-col5'>-8.85%</div>
                                <div className='tokens-row2-tab1-col6'>
                                    <a href='#'>Trade</a>  <a href='#'>Subscribe</a>  <a href='#'>Redeem</a>
                                </div>
                            </div>

                            <div className='tokens-row2-tab1'>
                                <div className='tokens-row2-tab1-col1'>
                                    <img src={tok2} alt='tok1' className='tokens-row2-tab1-col1-img'/>
                                    <div className='tokens-row2-tab1-col1-row1'>
                                        <div className='tokens-row2-tab1-col1-row2'>
                                            <div>BNBDOWN</div>
                                            <button>-2.474x</button>
                                        </div>
                                        <div className='tokens-row2-tab1-col1-row3'>Short ADA with Up to 4x leverage</div>
                                    </div>
                                </div>
                                <div className='tokens-row2-tab1-col2'>$0.01377</div>
                                <div className='tokens-row2-tab1-col3'>-2.480X</div>
                                <div className='tokens-row2-tab1-col4'>$0.01384</div>
                                <div className='tokens-row2-tab1-col5'>+8.21%</div>
                                <div className='tokens-row2-tab1-col6'>
                                    <a href='#'>Trade</a>  <a href='#'>Subscribe</a>  <a href='#'>Redeem</a>
                                </div>
                            </div>

                            <div className='tokens-row2-tab1'>
                                <div className='tokens-row2-tab1-col1'>
                                    <img src={tok2} alt='tok1' className='tokens-row2-tab1-col1-img'/>
                                    <div className='tokens-row2-tab1-col1-row1'>
                                        <div className='tokens-row2-tab1-col1-row2'>
                                            <div>BNBUP</div>
                                            <button>+1.599x</button>
                                        </div>
                                        <div className='tokens-row2-tab1-col1-row3'>Long ADA with Up to 4x leverage</div>
                                    </div>
                                </div>
                                <div className='tokens-row2-tab1-col2'>$45.25</div>
                                <div className='tokens-row2-tab1-col3'>+1.600X</div>
                                <div className='tokens-row2-tab1-col4'>$45.03</div>
                                <div className='tokens-row2-tab1-col5'>-4.94%</div>
                                <div className='tokens-row2-tab1-col6'>
                                    <a href='#'>Trade</a>  <a href='#'>Subscribe</a>  <a href='#'>Redeem</a>
                                </div>
                            </div>

                            <div className='tokens-row2-tab1'>
                                <div className='tokens-row2-tab1-col1'>
                                    <img src={tok3} alt='tok1' className='tokens-row2-tab1-col1-img'/>
                                    <div className='tokens-row2-tab1-col1-row1'>
                                        <div className='tokens-row2-tab1-col1-row2'>
                                            <div>BTCDOWN</div>
                                            <button>+1.599x</button>
                                        </div>
                                        <div className='tokens-row2-tab1-col1-row3'>Long ADA with Up to 4x leverage</div>
                                    </div>
                                </div>
                                <div className='tokens-row2-tab1-col2'>$45.25</div>
                                <div className='tokens-row2-tab1-col3'>+1.600X</div>
                                <div className='tokens-row2-tab1-col4'>$45.03</div>
                                <div className='tokens-row2-tab1-col5'>-4.94%</div>
                                <div className='tokens-row2-tab1-col6'>
                                    <a href='#'>Trade</a>  <a href='#'>Subscribe</a>  <a href='#'>Redeem</a>
                                </div>
                            </div>

                            <div className='tokens-row2-tab1'>
                                <div className='tokens-row2-tab1-col1'>
                                    <img src={tok2} alt='tok1' className='tokens-row2-tab1-col1-img'/>
                                    <div className='tokens-row2-tab1-col1-row1'>
                                        <div className='tokens-row2-tab1-col1-row2'>
                                            <div>BTCUP</div>
                                            <button>+1.599x</button>
                                        </div>
                                        <div className='tokens-row2-tab1-col1-row3'>Long ADA with Up to 4x leverage</div>
                                    </div>
                                </div>
                                <div className='tokens-row2-tab1-col2'>$45.25</div>
                                <div className='tokens-row2-tab1-col3'>+1.600X</div>
                                <div className='tokens-row2-tab1-col4'>$45.03</div>
                                <div className='tokens-row2-tab1-col5'>-4.94%</div>
                                <div className='tokens-row2-tab1-col6'>
                                    <a href='#'>Trade</a>  <a href='#'>Subscribe</a>  <a href='#'>Redeem</a>
                                </div>
                            </div>

                            <div className='tokens-row2-tab1'>
                                <div className='tokens-row2-tab1-col1'>
                                    <img src={tok4} alt='tok1' className='tokens-row2-tab1-col1-img'/>
                                    <div className='tokens-row2-tab1-col1-row1'>
                                        <div className='tokens-row2-tab1-col1-row2'>
                                            <div>ETHDOWN</div>
                                            <button>+1.599x</button>
                                        </div>
                                        <div className='tokens-row2-tab1-col1-row3'>Long ADA with Up to 4x leverage</div>
                                    </div>
                                </div>
                                <div className='tokens-row2-tab1-col2'>$45.25</div>
                                <div className='tokens-row2-tab1-col3'>+1.600X</div>
                                <div className='tokens-row2-tab1-col4'>$45.03</div>
                                <div className='tokens-row2-tab1-col5'>-4.94%</div>
                                <div className='tokens-row2-tab1-col6'>
                                    <a href='#'>Trade</a>  <a href='#'>Subscribe</a>  <a href='#'>Redeem</a>
                                </div>
                            </div>

                            <div className='tokens-row2-tab1'>
                                <div className='tokens-row2-tab1-col1'>
                                    <img src={tok4} alt='tok1' className='tokens-row2-tab1-col1-img'/>
                                    <div className='tokens-row2-tab1-col1-row1'>
                                        <div className='tokens-row2-tab1-col1-row2'>
                                            <div>ETHUP</div>
                                            <button>+1.599x</button>
                                        </div>
                                        <div className='tokens-row2-tab1-col1-row3'>Long ADA with Up to 4x leverage</div>
                                    </div>
                                </div>
                                <div className='tokens-row2-tab1-col2'>$45.25</div>
                                <div className='tokens-row2-tab1-col3'>+1.600X</div>
                                <div className='tokens-row2-tab1-col4'>$45.03</div>
                                <div className='tokens-row2-tab1-col5'>-4.94%</div>
                                <div className='tokens-row2-tab1-col6'>
                                    <a href='#'>Trade</a>  <a href='#'>Subscribe</a>  <a href='#'>Redeem</a>
                                </div>
                            </div>

                            <div className='tokens-row2-tab1'>
                                <div className='tokens-row2-tab1-col1'>
                                    <img src={tok5} alt='tok1' className='tokens-row2-tab1-col1-img'/>
                                    <div className='tokens-row2-tab1-col1-row1'>
                                        <div className='tokens-row2-tab1-col1-row2'>
                                            <div>LINKDOWN</div>
                                            <button>+1.599x</button>
                                        </div>
                                        <div className='tokens-row2-tab1-col1-row3'>Long ADA with Up to 4x leverage</div>
                                    </div>
                                </div>
                                <div className='tokens-row2-tab1-col2'>$45.25</div>
                                <div className='tokens-row2-tab1-col3'>+1.600X</div>
                                <div className='tokens-row2-tab1-col4'>$45.03</div>
                                <div className='tokens-row2-tab1-col5'>-4.94%</div>
                                <div className='tokens-row2-tab1-col6'>
                                    <a href='#'>Trade</a>  <a href='#'>Subscribe</a>  <a href='#'>Redeem</a>
                                </div>
                            </div>

                            <div className='tokens-row2-tab1'>
                                <div className='tokens-row2-tab1-col1'>
                                    <img src={tok5} alt='tok1' className='tokens-row2-tab1-col1-img'/>
                                    <div className='tokens-row2-tab1-col1-row1'>
                                        <div className='tokens-row2-tab1-col1-row2'>
                                            <div>LINKUP</div>
                                            <button>+1.599x</button>
                                        </div>
                                        <div className='tokens-row2-tab1-col1-row3'>Long ADA with Up to 4x leverage</div>
                                    </div>
                                </div>
                                <div className='tokens-row2-tab1-col2'>$45.25</div>
                                <div className='tokens-row2-tab1-col3'>+1.600X</div>
                                <div className='tokens-row2-tab1-col4'>$45.03</div>
                                <div className='tokens-row2-tab1-col5'>-4.94%</div>
                                <div className='tokens-row2-tab1-col6'>
                                    <a href='#'>Trade</a>  <a href='#'>Subscribe</a>  <a href='#'>Redeem</a>
                                </div>
                            </div>

                            <div className='tokens-row2-tab1'>
                                <div className='tokens-row2-tab1-col1'>
                                    <img src={tok6} alt='tok1' className='tokens-row2-tab1-col1-img'/>
                                    <div className='tokens-row2-tab1-col1-row1'>
                                        <div className='tokens-row2-tab1-col1-row2'>
                                            <div>XPRDOWN</div>
                                            <button>+1.599x</button>
                                        </div>
                                        <div className='tokens-row2-tab1-col1-row3'>Long ADA with Up to 4x leverage</div>
                                    </div>
                                </div>
                                <div className='tokens-row2-tab1-col2'>$45.25</div>
                                <div className='tokens-row2-tab1-col3'>+1.600X</div>
                                <div className='tokens-row2-tab1-col4'>$45.03</div>
                                <div className='tokens-row2-tab1-col5'>-4.94%</div>
                                <div className='tokens-row2-tab1-col6'>
                                    <a href='#'>Trade</a>  <a href='#'>Subscribe</a>  <a href='#'>Redeem</a>
                                </div>
                            </div>

                            <div className='tokens-row2-tab1'>
                                <div className='tokens-row2-tab1-col1'>
                                    <img src={tok6} alt='tok1' className='tokens-row2-tab1-col1-img'/>
                                    <div className='tokens-row2-tab1-col1-row1'>
                                        <div className='tokens-row2-tab1-col1-row2'>
                                            <div>XPRUP</div>
                                            <button>+1.599x</button>
                                        </div>
                                        <div className='tokens-row2-tab1-col1-row3'>Long ADA with Up to 4x leverage</div>
                                    </div>
                                </div>
                                <div className='tokens-row2-tab1-col2'>$45.25</div>
                                <div className='tokens-row2-tab1-col3'>+1.600X</div>
                                <div className='tokens-row2-tab1-col4'>$45.03</div>
                                <div className='tokens-row2-tab1-col5'>-4.94%</div>
                                <div className='tokens-row2-tab1-col6'>
                                    <a href='#'>Trade</a>  <a href='#'>Subscribe</a>  <a href='#'>Redeem</a>
                                </div>
                            </div>

                            <div className='tokens-row2-tab1'>
                                <div className='tokens-row2-tab1-col1'>
                                    <img src={tok7} alt='tok1' className='tokens-row2-tab1-col1-img'/>
                                    <div className='tokens-row2-tab1-col1-row1'>
                                        <div className='tokens-row2-tab1-col1-row2'>
                                            <div>1INCHDOWN</div>
                                            <button>+1.599x</button>
                                        </div>
                                        <div className='tokens-row2-tab1-col1-row3'>Long ADA with Up to 4x leverage</div>
                                    </div>
                                </div>
                                <div className='tokens-row2-tab1-col2'>$45.25</div>
                                <div className='tokens-row2-tab1-col3'>+1.600X</div>
                                <div className='tokens-row2-tab1-col4'>$45.03</div>
                                <div className='tokens-row2-tab1-col5'>-4.94%</div>
                                <div className='tokens-row2-tab1-col6'>
                                    <a href='#'>Trade</a>  <a href='#'>Subscribe</a>  <a href='#'>Redeem</a>
                                </div>
                            </div>

                            <div className='tokens-row2-tab1'>
                                <div className='tokens-row2-tab1-col1'>
                                    <img src={tok7} alt='tok1' className='tokens-row2-tab1-col1-img'/>
                                    <div className='tokens-row2-tab1-col1-row1'>
                                        <div className='tokens-row2-tab1-col1-row2'>
                                            <div>1INCHUP</div>
                                            <button>+1.599x</button>
                                        </div>
                                        <div className='tokens-row2-tab1-col1-row3'>Long ADA with Up to 4x leverage</div>
                                    </div>
                                </div>
                                <div className='tokens-row2-tab1-col2'>$45.25</div>
                                <div className='tokens-row2-tab1-col3'>+1.600X</div>
                                <div className='tokens-row2-tab1-col4'>$45.03</div>
                                <div className='tokens-row2-tab1-col5'>-4.94%</div>
                                <div className='tokens-row2-tab1-col6'>
                                    <a href='#'>Trade</a>  <a href='#'>Subscribe</a>  <a href='#'>Redeem</a>
                                </div>
                            </div>

                            <div className='tokens-row2-tab1'>
                                <div className='tokens-row2-tab1-col1'>
                                    <img src={tok8} alt='tok1' className='tokens-row2-tab1-col1-img'/>
                                    <div className='tokens-row2-tab1-col1-row1'>
                                        <div className='tokens-row2-tab1-col1-row2'>
                                            <div>AAVEDOWN</div>
                                            <button>+1.599x</button>
                                        </div>
                                        <div className='tokens-row2-tab1-col1-row3'>Long ADA with Up to 4x leverage</div>
                                    </div>
                                </div>
                                <div className='tokens-row2-tab1-col2'>$45.25</div>
                                <div className='tokens-row2-tab1-col3'>+1.600X</div>
                                <div className='tokens-row2-tab1-col4'>$45.03</div>
                                <div className='tokens-row2-tab1-col5'>-4.94%</div>
                                <div className='tokens-row2-tab1-col6'>
                                    <a href='#'>Trade</a>  <a href='#'>Subscribe</a>  <a href='#'>Redeem</a>
                                </div>
                            </div>

                            <div className='tokens-row2-tab1'>
                                <div className='tokens-row2-tab1-col1'>
                                    <img src={tok8} alt='tok1' className='tokens-row2-tab1-col1-img'/>
                                    <div className='tokens-row2-tab1-col1-row1'>
                                        <div className='tokens-row2-tab1-col1-row2'>
                                            <div>AAVEUP</div>
                                            <button>+1.599x</button>
                                        </div>
                                        <div className='tokens-row2-tab1-col1-row3'>Long ADA with Up to 4x leverage</div>
                                    </div>
                                </div>
                                <div className='tokens-row2-tab1-col2'>$45.25</div>
                                <div className='tokens-row2-tab1-col3'>+1.600X</div>
                                <div className='tokens-row2-tab1-col4'>$45.03</div>
                                <div className='tokens-row2-tab1-col5'>-4.94%</div>
                                <div className='tokens-row2-tab1-col6'>
                                    <a href='#'>Trade</a>  <a href='#'>Subscribe</a>  <a href='#'>Redeem</a>
                                </div>
                            </div>

                            <div className='tokens-row2-tab1'>
                                <div className='tokens-row2-tab1-col1'>
                                    <img src={tok9} alt='tok1' className='tokens-row2-tab1-col1-img'/>
                                    <div className='tokens-row2-tab1-col1-row1'>
                                        <div className='tokens-row2-tab1-col1-row2'>
                                            <div>BCHDOWN</div>
                                            <button>+1.599x</button>
                                        </div>
                                        <div className='tokens-row2-tab1-col1-row3'>Long ADA with Up to 4x leverage</div>
                                    </div>
                                </div>
                                <div className='tokens-row2-tab1-col2'>$45.25</div>
                                <div className='tokens-row2-tab1-col3'>+1.600X</div>
                                <div className='tokens-row2-tab1-col4'>$45.03</div>
                                <div className='tokens-row2-tab1-col5'>-4.94%</div>
                                <div className='tokens-row2-tab1-col6'>
                                    <a href='#'>Trade</a>  <a href='#'>Subscribe</a>  <a href='#'>Redeem</a>
                                </div>
                            </div>

                            <div className='tokens-row2-tab1'>
                                <div className='tokens-row2-tab1-col1'>
                                    <img src={tok9} alt='tok1' className='tokens-row2-tab1-col1-img'/>
                                    <div className='tokens-row2-tab1-col1-row1'>
                                        <div className='tokens-row2-tab1-col1-row2'>
                                            <div>BCHUP</div>
                                            <button>+1.599x</button>
                                        </div>
                                        <div className='tokens-row2-tab1-col1-row3'>Long ADA with Up to 4x leverage</div>
                                    </div>
                                </div>
                                <div className='tokens-row2-tab1-col2'>$45.25</div>
                                <div className='tokens-row2-tab1-col3'>+1.600X</div>
                                <div className='tokens-row2-tab1-col4'>$45.03</div>
                                <div className='tokens-row2-tab1-col5'>-4.94%</div>
                                <div className='tokens-row2-tab1-col6'>
                                    <a href='#'>Trade</a>  <a href='#'>Subscribe</a>  <a href='#'>Redeem</a>
                                </div>
                            </div>

                            <div className='tokens-row2-tab1'>
                                <div className='tokens-row2-tab1-col1'>
                                    <img src={tok10} alt='tok1' className='tokens-row2-tab1-col1-img'/>
                                    <div className='tokens-row2-tab1-col1-row1'>
                                        <div className='tokens-row2-tab1-col1-row2'>
                                            <div>DOTDOWN</div>
                                            <button>+1.599x</button>
                                        </div>
                                        <div className='tokens-row2-tab1-col1-row3'>Long ADA with Up to 4x leverage</div>
                                    </div>
                                </div>
                                <div className='tokens-row2-tab1-col2'>$45.25</div>
                                <div className='tokens-row2-tab1-col3'>+1.600X</div>
                                <div className='tokens-row2-tab1-col4'>$45.03</div>
                                <div className='tokens-row2-tab1-col5'>-4.94%</div>
                                <div className='tokens-row2-tab1-col6'>
                                    <a href='#'>Trade</a>  <a href='#'>Subscribe</a>  <a href='#'>Redeem</a>
                                </div>
                            </div>

                            <div className='tokens-row2-tab1'>
                                <div className='tokens-row2-tab1-col1'>
                                    <img src={tok10} alt='tok1' className='tokens-row2-tab1-col1-img'/>
                                    <div className='tokens-row2-tab1-col1-row1'>
                                        <div className='tokens-row2-tab1-col1-row2'>
                                            <div>DOTUP</div>
                                            <button>+1.599x</button>
                                        </div>
                                        <div className='tokens-row2-tab1-col1-row3'>Long ADA with Up to 4x leverage</div>
                                    </div>
                                </div>
                                <div className='tokens-row2-tab1-col2'>$45.25</div>
                                <div className='tokens-row2-tab1-col3'>+1.600X</div>
                                <div className='tokens-row2-tab1-col4'>$45.03</div>
                                <div className='tokens-row2-tab1-col5'>-4.94%</div>
                                <div className='tokens-row2-tab1-col6'>
                                    <a href='#'>Trade</a>  <a href='#'>Subscribe</a>  <a href='#'>Redeem</a>
                                </div>
                            </div>

                            <div className='tokens-row2-tab1'>
                                <div className='tokens-row2-tab1-col1'>
                                    <img src={tok11} alt='tok1' className='tokens-row2-tab1-col1-img'/>
                                    <div className='tokens-row2-tab1-col1-row1'>
                                        <div className='tokens-row2-tab1-col1-row2'>
                                            <div>ESODOWN</div>
                                            <button>+1.599x</button>
                                        </div>
                                        <div className='tokens-row2-tab1-col1-row3'>Long ADA with Up to 4x leverage</div>
                                    </div>
                                </div>
                                <div className='tokens-row2-tab1-col2'>$45.25</div>
                                <div className='tokens-row2-tab1-col3'>+1.600X</div>
                                <div className='tokens-row2-tab1-col4'>$45.03</div>
                                <div className='tokens-row2-tab1-col5'>-4.94%</div>
                                <div className='tokens-row2-tab1-col6'>
                                    <a href='#'>Trade</a>  <a href='#'>Subscribe</a>  <a href='#'>Redeem</a>
                                </div>
                            </div>

                            <div className='tokens-row2-tab1'>
                                <div className='tokens-row2-tab1-col1'>
                                    <img src={tok11} alt='tok1' className='tokens-row2-tab1-col1-img'/>
                                    <div className='tokens-row2-tab1-col1-row1'>
                                        <div className='tokens-row2-tab1-col1-row2'>
                                            <div>ESOUP</div>
                                            <button>+1.599x</button>
                                        </div>
                                        <div className='tokens-row2-tab1-col1-row3'>Long ADA with Up to 4x leverage</div>
                                    </div>
                                </div>
                                <div className='tokens-row2-tab1-col2'>$45.25</div>
                                <div className='tokens-row2-tab1-col3'>+1.600X</div>
                                <div className='tokens-row2-tab1-col4'>$45.03</div>
                                <div className='tokens-row2-tab1-col5'>-4.94%</div>
                                <div className='tokens-row2-tab1-col6'>
                                    <a href='#'>Trade</a>  <a href='#'>Subscribe</a>  <a href='#'>Redeem</a>
                                </div>
                            </div>

                            <div className='tokens-row2-tab1'>
                                <div className='tokens-row2-tab1-col1'>
                                    <img src={tok12} alt='tok1' className='tokens-row2-tab1-col1-img'/>
                                    <div className='tokens-row2-tab1-col1-row1'>
                                        <div className='tokens-row2-tab1-col1-row2'>
                                            <div>FILDOWN</div>
                                            <button>+1.599x</button>
                                        </div>
                                        <div className='tokens-row2-tab1-col1-row3'>Long ADA with Up to 4x leverage</div>
                                    </div>
                                </div>
                                <div className='tokens-row2-tab1-col2'>$45.25</div>
                                <div className='tokens-row2-tab1-col3'>+1.600X</div>
                                <div className='tokens-row2-tab1-col4'>$45.03</div>
                                <div className='tokens-row2-tab1-col5'>-4.94%</div>
                                <div className='tokens-row2-tab1-col6'>
                                    <a href='#'>Trade</a>  <a href='#'>Subscribe</a>  <a href='#'>Redeem</a>
                                </div>
                            </div>

                            <div className='tokens-row2-tab1'>
                                <div className='tokens-row2-tab1-col1'>
                                    <img src={tok12} alt='tok1' className='tokens-row2-tab1-col1-img'/>
                                    <div className='tokens-row2-tab1-col1-row1'>
                                        <div className='tokens-row2-tab1-col1-row2'>
                                            <div>FILUP</div>
                                            <button>+1.599x</button>
                                        </div>
                                        <div className='tokens-row2-tab1-col1-row3'>Long ADA with Up to 4x leverage</div>
                                    </div>
                                </div>
                                <div className='tokens-row2-tab1-col2'>$45.25</div>
                                <div className='tokens-row2-tab1-col3'>+1.600X</div>
                                <div className='tokens-row2-tab1-col4'>$45.03</div>
                                <div className='tokens-row2-tab1-col5'>-4.94%</div>
                                <div className='tokens-row2-tab1-col6'>
                                    <a href='#'>Trade</a>  <a href='#'>Subscribe</a>  <a href='#'>Redeem</a>
                                </div>
                            </div>

                            <div className='tokens-row2-tab1'>
                                <div className='tokens-row2-tab1-col1'>
                                    <img src={tok13} alt='tok1' className='tokens-row2-tab1-col1-img'/>
                                    <div className='tokens-row2-tab1-col1-row1'>
                                        <div className='tokens-row2-tab1-col1-row2'>
                                            <div>LTCDOWN</div>
                                            <button>+1.599x</button>
                                        </div>
                                        <div className='tokens-row2-tab1-col1-row3'>Long ADA with Up to 4x leverage</div>
                                    </div>
                                </div>
                                <div className='tokens-row2-tab1-col2'>$45.25</div>
                                <div className='tokens-row2-tab1-col3'>+1.600X</div>
                                <div className='tokens-row2-tab1-col4'>$45.03</div>
                                <div className='tokens-row2-tab1-col5'>-4.94%</div>
                                <div className='tokens-row2-tab1-col6'>
                                    <a href='#'>Trade</a>  <a href='#'>Subscribe</a>  <a href='#'>Redeem</a>
                                </div>
                            </div>

                            <div className='tokens-row2-tab1'>
                                <div className='tokens-row2-tab1-col1'>
                                    <img src={tok13} alt='tok1' className='tokens-row2-tab1-col1-img'/>
                                    <div className='tokens-row2-tab1-col1-row1'>
                                        <div className='tokens-row2-tab1-col1-row2'>
                                            <div>LTCUP</div>
                                            <button>+1.599x</button>
                                        </div>
                                        <div className='tokens-row2-tab1-col1-row3'>Long ADA with Up to 4x leverage</div>
                                    </div>
                                </div>
                                <div className='tokens-row2-tab1-col2'>$45.25</div>
                                <div className='tokens-row2-tab1-col3'>+1.600X</div>
                                <div className='tokens-row2-tab1-col4'>$45.03</div>
                                <div className='tokens-row2-tab1-col5'>-4.94%</div>
                                <div className='tokens-row2-tab1-col6'>
                                    <a href='#'>Trade</a>  <a href='#'>Subscribe</a>  <a href='#'>Redeem</a>
                                </div>
                            </div>

                            <div className='tokens-row2-tab1'>
                                <div className='tokens-row2-tab1-col1'>
                                    <img src={tok14} alt='tok1' className='tokens-row2-tab1-col1-img'/>
                                    <div className='tokens-row2-tab1-col1-row1'>
                                        <div className='tokens-row2-tab1-col1-row2'>
                                            <div>SUSHIDOWN</div>
                                            <button>+1.599x</button>
                                        </div>
                                        <div className='tokens-row2-tab1-col1-row3'>Long ADA with Up to 4x leverage</div>
                                    </div>
                                </div>
                                <div className='tokens-row2-tab1-col2'>$45.25</div>
                                <div className='tokens-row2-tab1-col3'>+1.600X</div>
                                <div className='tokens-row2-tab1-col4'>$45.03</div>
                                <div className='tokens-row2-tab1-col5'>-4.94%</div>
                                <div className='tokens-row2-tab1-col6'>
                                    <a href='#'>Trade</a>  <a href='#'>Subscribe</a>  <a href='#'>Redeem</a>
                                </div>
                            </div>

                            <div className='tokens-row2-tab1'>
                                <div className='tokens-row2-tab1-col1'>
                                    <img src={tok14} alt='tok1' className='tokens-row2-tab1-col1-img'/>
                                    <div className='tokens-row2-tab1-col1-row1'>
                                        <div className='tokens-row2-tab1-col1-row2'>
                                            <div>SUSHIUP</div>
                                            <button>+1.599x</button>
                                        </div>
                                        <div className='tokens-row2-tab1-col1-row3'>Long ADA with Up to 4x leverage</div>
                                    </div>
                                </div>
                                <div className='tokens-row2-tab1-col2'>$45.25</div>
                                <div className='tokens-row2-tab1-col3'>+1.600X</div>
                                <div className='tokens-row2-tab1-col4'>$45.03</div>
                                <div className='tokens-row2-tab1-col5'>-4.94%</div>
                                <div className='tokens-row2-tab1-col6'>
                                    <a href='#'>Trade</a>  <a href='#'>Subscribe</a>  <a href='#'>Redeem</a>
                                </div>
                            </div>
                        </div> 
                    </div>
                   </>}
                   { token === 2 && <div className='tokens-col1-table2'></div>}
                </div>
                <div className='bapi-row9'>
                    <div className='bapi-row9-col1'>
                        <h2>FAQ</h2>
                        <a href='#'>View More</a>
                    </div>

                    <div className="bneth-row2-col1">
                        <div onClick={()=>setFaq(!faq)} className="bneth-row2-col1-row1">
                            <div>1. What are Binance Leveraged Tokens?</div>
                            { faq ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M8 15v-1.2L12 9l4 4.8V15H8z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                            }
                        </div>
                        { faq ? 
                        <div className="bneth-row2-col1-row2">
                            Binance Leveraged Tokens are a type of derivative product that give you leveraged exposure to the underlying asset. Like other tokens, leveraged tokens can be traded on the spot market. Each leveraged token represents a basket of perpetual contract positions. The price of a leveraged token moves along with price changes in the perpetual contract market, and the leverage level moves up and down accordingly.
                            <br/>
                            Unlike margin trading, leveraged tokens allow you to gain exposure to leveraged positions without having to put up any collateral, maintain a maintenance margin level, or worry about the risk of liquidation. However, even though you don't have to worry about the risk of liquidation, there are still risks associated with leveraged token positions, such as the effects of price movements in the perpetual contracts market, premiums, and funding rates.
                        </div> : null}
                    </div>
                    <hr className="bneth-row2-hr"/>
                    <div className="bneth-row2-col1">
                        <div onClick={()=>setFaq1(!faq1)} className="bneth-row2-col1-row1">
                            <div>2. What is the leverage level of Binance Leveraged Tokens?</div>
                            { faq1 ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M8 15v-1.2L12 9l4 4.8V15H8z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                            }
                        </div>
                        { faq1 ? 
                        <div className="bneth-row2-col1-row2">
                        Unlike conventional leveraged tokens (not managed by Binance), Binance Leveraged Tokens do not maintain constant leverage. Instead, Binance Leveraged Tokens attempt to maintain a variable target leverage range between 1.25x and 4x. This would maximize profitability on upswings and minimize losses to avoid liquidation. However, do note that the real leverage may fluctuate beyond the target range in extreme market movements.
                        </div> : null}
                    </div>
                    <hr className="bneth-row2-hr"/>
                    <div className="bneth-row2-col1">
                        <div onClick={()=>setFaq2(!faq2)} className="bneth-row2-col1-row1">
                            <div>3. What is the Underlying Asset?</div>
                            { faq2 ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M8 15v-1.2L12 9l4 4.8V15H8z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                            }
                        </div>
                        { faq2 ? 
                        <div className="bneth-row2-col1-row2">
                        The ticker name indicates the underlying assets. For example, the underlying asset of BTCUP is the BTC perpetual contract in Binance Futures.
                         </div> : null}
                    </div>
                    <hr className="bneth-row2-hr"/>
                    <div className="bneth-row2-col1">
                        <div onClick={()=>setFaq3(!faq3)} className="bneth-row2-col1-row1">
                            <div>4. Do Binance Leveraged Tokens rebalance?</div>
                            { faq3 ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M8 15v-1.2L12 9l4 4.8V15H8z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                            }
                        </div>
                        { faq3 ? 
                        <div className="bneth-row2-col1-row2">
                            Binance Leveraged Tokens rebalance on an as-needed basis only. Unlike conventional leveraged tokens, Binance Leveraged Tokens are not forced to maintain a constant leverage. Hence, Binance Leveraged Tokens rebalance during extreme market movements only.
                         </div> : null}
                    </div>
                    <hr className="bneth-row2-hr"/>
                    <div className="bneth-row2-col1">
                        <div onClick={()=>setFaq4(!faq4)} className="bneth-row2-col1-row1">
                            <div>5. How do I get started in Binance Leveraged Tokens?</div>
                            { faq4 ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M8 15v-1.2L12 9l4 4.8V15H8z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                            }
                        </div>
                        { faq4 ? 
                        <div className="bneth-row2-col1-row2">
                            You must accept and agree to the terms and conditions in Binance Leveraged Token Risk Disclosure before getting started in Binance Leveraged Tokens.
                         </div> : null}
                    </div>
                    <hr className="bneth-row2-hr"/>
                    <div className="bneth-row2-col1">
                        <div onClick={()=>setFaq5(!faq5)} className="bneth-row2-col1-row1">
                            <div>6. Can I withdraw Binance Leveraged Tokens to my wallet?</div>
                            { faq5 ?  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M8 15v-1.2L12 9l4 4.8V15H8z" fill="currentColor"></path></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-qfn7go"><path d="M16 9v1.2L12 15l-4-4.8V9h8z" fill="currentColor"></path></svg>
                            }
                        </div>
                        { faq5 ? 
                        <div className="bneth-row2-col1-row2">
                        Currently, Binance Leveraged Tokens are not withdrawable. You can store the tokens safely on your Binance account.
                         </div> : null}
                    </div>
                    <hr className="bneth-row2-hr"/>

                </div>
                 </> }

                { data === 2 &&  
                <div className='tokens-row2'>
                    <h2>Subcription</h2>
                    <div className='tokens-row2-divs'>
                        <div className='tokens-row2-divs1'>
                            <div style={{ width: "12rem" }} className="wastate-sec-row3-col-col1">
                                    <div>Token</div>
                                    <Select options={second} isSearchable={true}
                                        styles={{
                                            control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            borderColor: state.isFocused ? 'blue' : 'grey',
                                            }),
                                        }}
                                    />
                            </div>
                            <div>
                                <div style={{ width: "14rem" }}  className="wastate-sec-row3-col-col2">
                                    <div>Date</div>
                                    <DatePicker selected={startDate} 
                                    wrapperClassName="date-picker"
                                    onChange={(date) => setStartDate(date)} />                       
                                </div>
                            </div>
                            <button className='tokens-row2-divs-btn'>Search</button>
                            <button className='tokens-row2-divs-btn'>Reset</button>
                        </div>
                        <button className='tokens-row2-divs1-btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-621vqk"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 3h-3v6.95l-.303-.003-4.159.04 5.975 5.976 5.975-5.975-4.176-.01-.312-.002V3zm-10 11h3v4h11v-4h3v7h-17v-7z" fill="currentColor"></path></svg>
                            Export
                        </button>
                    </div>
                    <div className="waearn-sec-row3-col2">
                                <div className="waearn-sec-row3-col2-row1">
                                    <div className="waearn-sec-row3-col2-row1-div1">Time</div>
                                    <div className="waearn-sec-row3-col2-row1-div2">Token</div>
                                    <div className="waearn-sec-row3-col2-row1-div3">Amount</div>
                                    <div className="waearn-sec-row3-col2-row1-div4">NAV</div>
                                    <div className="waearn-sec-row3-col2-row1-div5">Fee</div>
                                    <div className="waearn-sec-row3-col2-row1-div6">Total Charges</div> 
                                </div>
                                <div className="waearn-sec-row3-col2-row2">
                                    <div className='wafiat-first-col4-row4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-1c070tq"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 8H26v80h58V28H64V8zM36 37h38v4H36v-4zm0 9h38v4H36v-4zm38 9H36v4h38v-4zm-8 12l4 4-4 4-4-4 4-4zM50 18l-3 3 3 3 3-3-3-3z" fill="url(#not-found-data_svg__paint0_linear_22059_32288)"></path><path opacity="0.3" d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z" fill="#929AA5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z" fill="url(#not-found-data_svg__paint1_linear_22059_32288)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z" fill="url(#not-found-data_svg__paint2_linear_22059_32288)"></path><defs><linearGradient id="not-found-data_svg__paint0_linear_22059_32288" x1="55" y1="8" x2="55" y2="88" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5" stop-opacity="0.1"></stop><stop offset="1" stop-color="#929AA5" stop-opacity="0.25"></stop></linearGradient><linearGradient id="not-found-data_svg__paint1_linear_22059_32288" x1="4.172" y1="68.75" x2="24.328" y2="68.75" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="not-found-data_svg__paint2_linear_22059_32288" x1="15" y1="48" x2="55" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg>
                                        <div>No records found.</div>
                                    </div> 
                                </div>
                    </div>
                </div> }

                { data === 3 && <>
                    <div className='tokens-row2'>
                    <h2>Redemption</h2>
                    <div className='tokens-row2-divs'>
                        <div className='tokens-row2-divs1'>
                            <div style={{ width: "12rem" }} className="wastate-sec-row3-col-col1">
                                    <div>Token</div>
                                    <Select options={second} isSearchable={true}
                                        styles={{
                                            control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            borderColor: state.isFocused ? 'blue' : 'grey',
                                            }),
                                        }}
                                    />
                            </div>
                            <div>
                                <div style={{ width: "14rem" }}  className="wastate-sec-row3-col-col2">
                                    <div>Date</div>
                                    <DatePicker selected={startDate} 
                                    wrapperClassName="date-picker"
                                    onChange={(date) => setStartDate(date)} />                       
                                </div>
                            </div>
                            <button className='tokens-row2-divs-btn'>Search</button>
                            <button className='tokens-row2-divs-btn'>Reset</button>
                        </div>
                        <button className='tokens-row2-divs1-btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-621vqk"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 3h-3v6.95l-.303-.003-4.159.04 5.975 5.976 5.975-5.975-4.176-.01-.312-.002V3zm-10 11h3v4h11v-4h3v7h-17v-7z" fill="currentColor"></path></svg>
                            Export
                        </button>
                    </div>
                    <div className="waearn-sec-row3-col2">
                                <div className="waearn-sec-row3-col2-row1">
                                    <div className="waearn-sec-row3-col2-row1-div1">Time</div>
                                    <div className="waearn-sec-row3-col2-row1-div2">Token</div>
                                    <div className="waearn-sec-row3-col2-row1-div3">Amount</div>
                                    <div className="waearn-sec-row3-col2-row1-div4">NAV</div>
                                    <div className="waearn-sec-row3-col2-row1-div5">Fee</div>
                                    <div className="waearn-sec-row3-col2-row1-div6">Net Proceeds</div> 
                                </div>
                                <div className="waearn-sec-row3-col2-row2">
                                    <div className='wafiat-first-col4-row4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-1c070tq"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 8H26v80h58V28H64V8zM36 37h38v4H36v-4zm0 9h38v4H36v-4zm38 9H36v4h38v-4zm-8 12l4 4-4 4-4-4 4-4zM50 18l-3 3 3 3 3-3-3-3z" fill="url(#not-found-data_svg__paint0_linear_22059_32288)"></path><path opacity="0.3" d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z" fill="#929AA5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z" fill="url(#not-found-data_svg__paint1_linear_22059_32288)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z" fill="url(#not-found-data_svg__paint2_linear_22059_32288)"></path><defs><linearGradient id="not-found-data_svg__paint0_linear_22059_32288" x1="55" y1="8" x2="55" y2="88" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5" stop-opacity="0.1"></stop><stop offset="1" stop-color="#929AA5" stop-opacity="0.25"></stop></linearGradient><linearGradient id="not-found-data_svg__paint1_linear_22059_32288" x1="4.172" y1="68.75" x2="24.328" y2="68.75" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="not-found-data_svg__paint2_linear_22059_32288" x1="15" y1="48" x2="55" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg>
                                        <div>No records found.</div>
                                    </div> 
                                </div>
                    </div>
                </div> 
                </>}

                { data === 4 && <>
                    <div className='tokens-row3'>
                        <h4>Binance Leveraged Tokens Agreement</h4>
                        <div><b>Version: 18 August 2022</b></div>
                        <div>This Binance Leveraged Tokens Agreement (this <b>“Agreement”</b>) shall apply to all BLVT issued, redeemed and/or traded on the Platform.</div>
                        <div>All capitalised terms and references used in this Agreement that are not defined herein shall have the meaning given to them in the <a>Binance Terms of Use</a>, as updated from time to time (the <b>“Terms of Use”</b>). Where a term is defined both in the Terms of Use and in this Agreement, for the purposes of this Agreement only, the definition in this Agreement shall prevail.</div>
                        <div>The terms in this Agreement shall be supplemental to and are to be read together with the Terms of Use. Accordingly, the provisions set out in the Terms of Use shall apply to the use of the Platform for the purposes of transacting in BLVT and references in the Terms of Use to the “Binance Services” shall include the issue, redemption and trading of BLVT and the related services contemplated hereunder, where relevant. In the event of any conflict or inconsistency between the terms in this Agreement and the Terms of Use, the terms in this Agreement shall prevail with respect to the services contemplated hereunder unless expressly stated otherwise.</div>
                        <div>The terms in this Agreement shall be further supplemented by the <a>Binance Leveraged Tokens Trading Rules</a>, as updated from time to time (the <b>“Trading Rules”</b>). In the event of any conflict or inconsistency between the terms in this Agreement and the Trading Rules, the Trading Rules shall prevail with respect to the services contemplated hereunder unless expressly stated otherwise.</div>
                        <div>This version of this Agreement shall replace and supersede any previous agreements between us with respect to BLVT and any previous versions of this Agreement that may have been accepted through, or otherwise made available on, the Platform. By subscribing to, redeeming and/or trading in BLVT, you confirm your acceptance of this Agreement, the Terms of Use and the Trading Rules.</div>
                        <h4>1. Definitions and Interpretation</h4>
                        <div className='tokens-row3-margin1'>1.1 The following definitions are applicable to the terms of this Agreement:</div>
                        <div className='tokens-row3-margin'><b>“Basket”</b> has the meaning given to it in clause 2.3 of this Agreement.</div>
                        <div className='tokens-row3-margin'><b>“Basket Value”</b> means, in respect of each BLVT, the combined market value of all USD(S)-M Futures Contracts constituting the Basket.</div>
                        <div className='tokens-row3-margin'><b>“BLVT”</b> or <b>“Leveraged Token”</b> means a series of Tokens issued by Binance that represent a leveraged position in the relevant Basket, comprising long or short positions in USD(S)-M Futures Contracts referencing the relevant Underlying.</div>
                        <div className='tokens-row3-margin'><b>“BLVT Account”</b> has the meaning given to it in clause 2.3 of this Agreement.</div>
                        <div className='tokens-row3-margin'><b>“BLVT Account Value”</b> means, with respect to a BLVT, the number of Tokens issued by the relevant BLVT Account multiplied by the Token Price of each Token, as determined by Binance.</div>
                        <div className='tokens-row3-margin'><b>“BLVT Fees”</b> has the meaning given to it in clause 3.7.</div>
                        <div className='tokens-row3-margin'><b>“BLVT Limit”</b> has the meaning given to it in clause 3.4.</div>
                        <div className='tokens-row3-margin'><b>“Perpetual Futures Contracts”</b> means contracts representing an obligation to buy or sell a Digital Asset (the <b>“Underlying”</b>) at a specific price, at any time while the contract remains open, with no specific expiry date.</div>
                        <div className='tokens-row3-margin1'>1.2 The headings are inserted for convenience only and shall not affect the construction of this Agreement. Expressions in the singular form shall include the plural and vice versa, and all references to the masculine genders shall include the female and neuter genders and vice versa.</div>
                        <h4>2. Features of BLVT</h4>
                        <div className='tokens-row3-margin1'>2.1 BLVTs are a type of derivative product that allows you to gain leveraged exposure to an underlying Digital Asset, without the requirement to pledge collateral or meet certain margin requirements and without the risk of liquidation.</div>
                        <div className='tokens-row3-margin1'>2.2 Binance is the sole issuer of BLVTs and also a market maker in BLVTs. You may request to subscribe for BLVT, redeem existing BLVT or trade BLVT on the secondary market through functionality available on the Platform.</div>
                        <div className='tokens-row3-margin1'>2.3 Each BLVT has an associated segregated account on the Platform (each, a “BLVT Account”) that holds a dynamically adjusted basket of USD(S)-M Futures Contracts referencing the relevant Underlying referred to (the “Basket”). For example, the “BTCUP” Token will reference a Basket of long positions in BTCUSDT USD(S)-M Futures Contracts. The number and type of USD(S)-M Futures Contracts included within a Basket are automatically selected by a Binance proprietary algorithm by reference to the Target Leverage Ratio that the Basket is looking to maintain.</div>
                        <h4>3. Transacting in BLVT through the Platform</h4>
                        <div className='tokens-row3-margin1'>3.1 A list of all Tokens available for subscription/redemption through the Platform can be found on the following webpage: Binance Leveraged Tokens | BLVTs. Each Token references a specific Underlying. You may choose to take positions in “UP” Tokens and/or “Down” Tokens. “UP” Tokens follow the price movements in the Underlying and allow for you to realize between 1.25x-4x leveraged gains when the price of the Underlying rises, whereas “DOWN” Tokens take an inverse position to the Underlying and allow for you to realize between 1.25x-4x leveraged gains when the price of the Underlying declines. Each BLVT Account associated with an “UP” Token will take a long position in USD(S)-M Futures Contracts referencing the Underlying whereas each BLVT Account associated with a “DOWN” Token will take a short position in USD(S)-M Futures Contracts referencing the Underlying. For example, a BTCUP Token will reference a Basket of long positions in BTCUSDT USD(S)-M Futures Contracts whereas an ETHDOWN Token will reference a Basket of short positions in ETHUSDT USD(S)-M Futures Contracts.</div>
                        <div className='tokens-row3-margin1'>3.2 You may request to subscribe for or redeem Tokens issued with respect to a BLVT directly with Binance via the Platform at the current Token Price, plus any applicable BLVT Fees, by clicking “Subscribe” or “Redeem” against the relevant Token through the following webpage: <a href='#'>Binance Leveraged Tokens | BLVTs</a>. Binance will periodically adjust the Basket related to a BLVT to account for any subscriptions or redemptions by buying additional USD(S)-M Futures Contracts for inclusion in the Basket or selling USD(S)-M Futures Contracts included within the Basket, as required. Further information on how to subscribe for and redeem BLVT can be found here: <a href='#'>How to Subscribe or Redeem Binance Leveraged Tokens</a>.</div>
                        <div className='tokens-row3-margin1'>3.3 The current subscription and redemption fee for BLVT is 0.1% of the notional value of the Token (calculated and payable in USDT) and will be automatically deducted from (or credited to) your Account at the time of subscription/redemption. Binance may impose a daily limit on subscriptions and/or redemptions to a BLVT (“BLVT Limit”). You may subscribe or redeem for each BLVT up to the applicable BLVT Limit at any time except during a Rebalancing. Binance may vary the BLVT Limit from time to time in its discretion depending on prevailing market conditions. Please refer to the Trading Rules for information on the current BLVT Limits.</div>
                        <div className='tokens-row3-margin1'>3.4 Binance reserves the right at any time to suspend the subscription and/or redemption of BLVT depending on prevailing market conditions. Any such suspension may continue for so long as Binance determines necessary in its sole discretion. In such a circumstance, Users may continue to trade BLVT in the secondary market. Without prejudice to the foregoing, Binance may choose to delist any Token available through the Platform and/or may discontinue providing any of the services referred to hereunder, in each case at any time in its sole and absolute discretion, without giving any reason or any notice to you thereof.</div>
                    
                    </div>
                </>}           
            </div>
        </>
    );
}

export default Tokens;
