import React, {useState, useEffect, useRef } from 'react'
import './Covert.css';

import tor3 from './Img/tor3.png';
import reawrd10 from './Img/reward10.png';
import frame9 from './Img/frame9.png';
import frame10 from './Img/frame10.png';
import successful from './Img/successful.png';
import line from './Img/line.png';
import reward from './Img/reward.png';
import reward4 from './Img/reward4.png';

let tvScriptLoadingPromise;

const Covert = () => {

    const [data, setData] = useState('');
    const [data1, setData1] = useState("");
    const [data2, setData2] = useState("");
    const [data3, setData3] = useState("");
    const [data4, setData4] = useState("");
    const [data5, setData5] = useState("");
    const [data6, setData6] = useState("");
    const [readMore, setReadMore] = useState(false);

    const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_bad6b') && 'TradingView' in window) {
          new window.TradingView.widget({
            autosize: true,
            symbol: "BINANCE:BTCUSDT",
            interval: "D",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "2",
            locale: "en",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: "tradingview_bad6b"
          });
        }
      }
    },
    []
  );


  return (
    <div className='covert'>
        <h2>Domain Name<span>Convert</span></h2>
        <div className='covertrow1'>
            <div className='covert1col1'><img src={successful}/><p>Zero Fee</p></div>
            <div className='covert1col1'><img src={successful}/><p>Guaranteed Price</p></div>
            <div className='covert1col1'><img src={successful}/><p>Any Pairs</p></div>  
        </div>
        <div className='covertfull'>
            <div className='covertfirst'>
                <div className='covertfrow1'>   
                    <div><p>Market</p>
                    <p>Limit</p></div>
                    <button>Other Methods</button>
                </div>
                <div className='covertfrow2'>
                    <div className='covertf1col1'>
                        <div>
                            <img src={reawrd10}/>
                            <h6>APE</h6>
                        </div>
                        <p>$23,909.34 <span>+5.23%</span></p>
                    </div>
                    <div className='covertf1col1'>
                            <form action='#'>
                                <label htmlFor='sort'></label>
                                <select name='sort' id='sort' className='select-style'>
                                <option value='All(0)'> All(0) </option>
                                <option value='VIP Upgrade'> VIP Upgrade</option>
                                </select>
                            </form>
                    </div>
                </div>
                {/* <img src={frame9} className='frame9img'/> */}
                <div className='tradingview-widget-container frame9img'>
                <div id='tradingview_bad6b' />
                <div className="tradingview-widget-copyright">
                    <a href="https://www.tradingview.com/symbols/BTCUSDT/?exchange=BINANCE" rel="noopener" target="_blank"><span className="blue-text">BTCUSDT chart</span></a></div>
                </div>
                <div className='covertfrow3'>
                    <h4>APE Price live data</h4>
                    <p>The live price of Bitcoin is $ 23,670.01 per (BTC / USD) today with a current market cap of $ 452.52B USD. 24-hour trading volume is $ 30.72B USD. BTC to USD price is updated in real-time. Bitcoin is +2.48% in the last 24 hours. It has a circulating supply of $ 19.12M USD.</p>
                </div>
                <div className='covertfrow4'>
                    <h6>APE Price Price Performance USD</h6>
                    <div className='covert4table'>
                        <div className='covert4col1'>
                            <p>Price <img src={tor3}/></p>
                            <p className='covert4col1p'>Today</p>
                            <p className='covert4col1p'>30 Days</p>
                            <p className='covert4col1p'>60 Days</p>
                            <p className='covert4col1p'>90 Days</p>
                        </div>
                        <div className='covert4col1'>
                            <p>Amount</p>
                            <p className='covert4col1green'>$5.21324</p>
                            <p className='covert4col1red'> $ -53435.21</p>
                            <p className='covert4col1green'>$43535.21</p>
                            <p className='covert4col1red'>$ -54564.21</p>
                        </div>
                        <div className='covert4col1'>
                            <p>%</p>
                            <p className='covert4col1green'>+5.21%</p>
                            <p className='covert4col1red'>-5.21%</p>
                            <p className='covert4col1green'>+5.21%</p>
                            <p className='covert4col1red'>-5.21%</p>
                        </div>
                    </div>
                </div>
                <div className='covertfrow5'>
                    <h4>BTC Price Information</h4>
                    <p>24h Low & High</p>
                    <div className='covertf5col1img'>
                        <p>Low: $22,771.52</p>
                        <img src={line}/>
                        <p>Low: $22,771.52</p>
                    </div>
                    <div className='covertf5col2'>
                        <div><p>All Time High</p><p>$ 68,789.63</p></div>
                        <div><p>Price Change (1h)</p><p className='covert4col1green'>+0.08%</p></div>
                        <div><p>Price Change (24h)</p><p className='covert4col1green'>+0.08%</p></div>
                        <div><p>Price Change (24h)</p><p className='covert4col1green'>+0.08%</p></div>                        
                    </div>
                </div>
                <div className='covertfrow6'>
                    <h4>BTC Market Information</h4>
                    <div className='covertf5col2'> 
                        <div><p>All Time High</p><p className='covert6pp'>#1</p></div>
                        <div><p>Market Cap</p><p className='covert6pp'>$ 68,789.63</p></div>
                        <div><p>Volume (24hours)</p><p className='covert6pp'>$ 67.6B</p></div>
                        <div><p>Circulation Supply</p><p className='covert6pp'>$ 19.12M</p></div>                        
                    </div>
                </div>
                <img src={frame10} className='frame9img'/>
                <div className='covertfrow7'>
                    <h4>About Bitcoin (BTC)</h4>
                    <p>Bitcoin is one of the most popular cryptocurrencies in the market. First introduced in 2009 by Satoshi Nakamoto, Bitcoin has held the crypto market’s number one spot according to market capitalization. Bitcoin paved the way for many existing altcoins in the market and marked a pivotal moment for digital payment solutions. <br/>
                            As the world’s first cryptocurrency, Bitcoin has come a long way in terms of its value. However, one does not have to buy an entire bitcoin as bitcoins can be divided into small units called satoshis, named after the creator. A satoshi is equivalent to 0.00000001 bitcoin.<br/>
                            There is no physical BTC token so you can think of bitcoin as digital money. Bitcoin transactions are fully transparent and can’t be censored. You can send money to anyone in the world with ease. It’s a financial system backed by thousands of computers, known as ‘nodes’, around the world, instead of a single central bank or government, i.e. hence the term ‘decentralization’. <br/>
                             </p>
                            { readMore ? <p>
                            Bitcoin Upgrades <br/>
                            Because Bitcoin is decentralized and community-driven, many upgrades to Bitcoin come in the form of formal proposals called Bitcoin Improvement Proposals, or BIPs. This ensures that the software is always undergoing upgrades that can further contribute to the community’s needs. Anyone can propose a BIP, and the community will reject or approve of the BIP collectively. One major upgrade to Bitcoin’s consensus protocol is the SegWit Upgrade, proposed in BIP 141 and designed to help the bitcoin scale to support more transactions to meet growing demand. BIPs like these change Bitcoin’s consensus rules, resulting in forks. <br/>
                            Bitcoin Forks <br/>
                            Forks are the points where software is copied and modified, resulting in two chains with a shared original chain. There are two types of forks–soft and hard forks. Soft forks are upgrades that still allow un-upgraded nodes to interact with upgraded nodes. Hard forks are upgrades that do not allow un-upgraded nodes to interact with upgraded ones. Bitcoin Cash is an example of a hard fork of Bitcoin. <br/>
                            Because Bitcoin is decentralized, it is not subjected to inflation or any monetary policies created by any central banks or government. Instead, there will only ever be 21 million BTC in existence. <br/>
                            Common Bitcoin Misconceptions  <br/>
                            Bitcoin is just a passing phase. <br/>
                            Bitcoin and blockchain technology introduce solutions for real-world issues, seeking to help the unbanked population, combat counterfeiting and improve cross-border transactions to name a few. Even if we disregard the notion of bitcoin as a speculative asset or store of value, it is likely here to stay and disrupt many sectors. <br/>
                            Bitcoins can be copied and pasted, making them easy to counterfeit. <br/>
                            No, thanks to the Bitcoin protocol, your bitcoin cannot be copied. The word ‘crypto’ in ‘cryptocurrency’ comes from the word ‘cryptography’, a technique that allows for secure communication, meaning that it is impossible to counterfeit bitcoin, unlike fiat. In fact, Bitcoin solves the issue of double-spending, a loophole in traditional digital cash that allows a user to spend the same amount of funds twice. <br/>
                            Bitcoin is bad for the environment. <br/>
                            A significant percentage of bitcoin mining uses renewable energy (wind, solar, hydro etc) instead of traditional energy sources that are bad for the environment.</p> : null }
                            <button className='trade-view' onClick={() => setReadMore(!readMore)}>
                            {readMore ?  "View Less" : "View More" }
                            </button>   
                </div>
                <div className='covertfrow8'>
                    <h4>Bitcoin Resources</h4>
                    <p>White Paper</p>
                    <p>Officail Website</p>
                </div>
                <div className='covertfrow9'>
                    <h4>People Also Ask: Other Questions About Bitcoin</h4>
                    <div className='dom7row1'>
                        <div className='bitcoin'>
                            <button className='bit1' onClick={()=>setData(!data)}>
                                { data ? <i class="fa-solid fa-minus"></i> : 
                                <i class="fa-solid fa-plus"></i> 
                                } 
                                <p>How Many Bitcoins Are There?</p>                        
                            </button>
                            {data ? <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            : null}
                        </div>

                        <div className='bitcoin'>
                            <button className='bit1' onClick={()=>setData1(!data1)}>
                                { data1 ? <i class="fa-solid fa-minus"></i> : 
                                <i class="fa-solid fa-plus"></i> 
                                } 
                                <p>Question</p>                        
                            </button>
                            {data1 ? <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            : null}
                        </div>

                        <div className='bitcoin'>
                            <button className='bit1' onClick={()=>setData2(!data2)}>
                                { data2 ? <i class="fa-solid fa-minus"></i> : 
                                <i class="fa-solid fa-plus"></i> 
                                } 
                                <p>Question</p>                        
                            </button>
                            {data2 ? <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            : null}
                        </div>

                        <div className='bitcoin'>
                            <button className='bit1' onClick={()=>setData3(!data3)}>
                                { data3 ? <i class="fa-solid fa-minus"></i> : 
                                <i class="fa-solid fa-plus"></i> 
                                } 
                                <p>Question</p>                        
                            </button>
                            {data3 ? <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            : null}
                        </div>
                    </div>
                </div>
                <div className='covertfrow10'>
                    <h4>Top News</h4>
                    <div className='covertf10col1'>
                        <img src={frame10}/>
                        <div>
                            <h6>Market Update (2022-08-10)</h6>
                            <p>The global cryptocurrency market cap now stands at $1.13T, up by 3.36% over the last day, according to CoinMarketCap data.Bitcoin (BTC) has been trading between $22,667 and $24,197 over the past 22 years 9 months</p>
                            <div><p>Binance</p><p>12 hrs ago</p><p>#Binance</p><p>#Markets</p><p>#CryptoCurrency</p></div>
                        </div>
                    </div>
                    <div className='covertf10col1'>
                        <img src={frame10}/>
                        <div>
                            <h6>Market Update (2022-08-10)</h6>
                            <p>The global cryptocurrency market cap now stands at $1.13T, up by 3.36% over the last day, according to CoinMarketCap data.Bitcoin (BTC) has been trading between $22,667 and $24,197 over the past 22 years 9 months</p>
                            <div><p>Binance</p><p>12 hrs ago</p><p>#Binance</p><p>#Markets</p><p>#CryptoCurrency</p></div>
                        </div>
                    </div>
                    <div className='covertf10col1'>
                        <img src={frame10}/>
                        <div>
                            <h6>Market Update (2022-08-10)</h6>
                            <p>The global cryptocurrency market cap now stands at $1.13T, up by 3.36% over the last day, according to CoinMarketCap data.Bitcoin (BTC) has been trading between $22,667 and $24,197 over the past 22 years 9 months</p>
                            <div><p>Binance</p><p>12 hrs ago</p><p>#Binance</p><p>#Markets</p><p>#CryptoCurrency</p></div>
                        </div>
                    </div>
                </div>
                <div className='covertfrow10'>
                    <h4>Top Blog</h4>
                    <div className='covertf10col1'>
                        <img src={frame10}/>
                        <div>
                            <h6>Market Update (2022-08-10)</h6>
                            <p>The global cryptocurrency market cap now stands at $1.13T, up by 3.36% over the last day, according to CoinMarketCap data.Bitcoin (BTC) has been trading between $22,667 and $24,197 over the past 22 years 9 months</p>
                            <div><p>Binance</p><p>12 hrs ago</p><p>#Binance</p><p>#Markets</p><p>#CryptoCurrency</p></div>
                        </div>
                    </div>
                    <div className='covertf10col1'>
                        <img src={frame10}/>
                        <div>
                            <h6>Market Update (2022-08-10)</h6>
                            <p>The global cryptocurrency market cap now stands at $1.13T, up by 3.36% over the last day, according to CoinMarketCap data.Bitcoin (BTC) has been trading between $22,667 and $24,197 over the past 22 years 9 months</p>
                            <div><p>Binance</p><p>12 hrs ago</p><p>#Binance</p><p>#Markets</p><p>#CryptoCurrency</p></div>
                        </div>
                    </div>
                    <div className='covertf10col1'>
                        <img src={frame10}/>
                        <div>
                            <h6>Market Update (2022-08-10)</h6>
                            <p>The global cryptocurrency market cap now stands at $1.13T, up by 3.36% over the last day, according to CoinMarketCap data.Bitcoin (BTC) has been trading between $22,667 and $24,197 over the past 22 years 9 months</p>
                            <div><p>Binance</p><p>12 hrs ago</p><p>#Binance</p><p>#Markets</p><p>#CryptoCurrency</p></div>
                        </div>
                    </div>
                </div>
                <div className='covertfrow11'>
                    <p>Cryptocurrency prices are subject to high market risk and price volatility. You should only invest in products that you are familiar with and where you understand the associated risks. You should carefully consider your investment experience, financial situation, investment objectives and risk tolerance and consult an independent financial adviser prior to making any investment. This material should not be construed as financial advice. Past performance is not a reliable indicator of future performance. The value of your investment can go down as well as up, and you may not get back the amount you invested. You are solely responsible for your investment decisions. Binance is not responsible for any losses you may incur. For more information, please refer to our <a href='#'>Terms of Use</a> and <a href='#'>Risk Warning</a>.<br/>
                        Please also note that data relating to the above-mentioned cryptocurrency presented here (such as its current live price) are based on third party sources. They are presented to you on an “as is” basis and for informational purposes only, without representation or warranty of any kind. Links provided to third-party sites are also not under Binance’s control. Binance is not responsible for the reliability and accuracy of such third-party sites and their contents.</p>
                </div>
            </div>
            <div className='covertsec'>
                <div className='covertsrow1'>
                    <h6>Price Calculator</h6>
                    <div className='covertsrow1-box1'>
                        <p>Buy</p>
                        <div className='coverts1select'>
                            <input type='text' placeholder='0.00'/>
                            <form action='#'>
                                    <label htmlFor='sort'></label>
                                    <select name='sort' id='sort' className='select-style coverts1-style'>
                                    <option value='APE'> APE </option>
                                    <option value='APE'> VIP </option>
                                    </select>
                            </form>
                        </div> 
                    </div>
                    <div className='covertsrow1-box2'><p>Price</p><p>USD $0.00</p></div>
                    <p className='coverts1p'>0% trading fee on selected APE spot trading pairs</p>
                    <button className='coverts1-btn'>Buy APE</button>
                </div>
                <div className='covertsrow2'>
                    <h6>Trending Cryptos</h6>
                    <div className='coverts2col1'>
                        <div className='coverts2col2'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                        <div><p>$2342342</p><p className='coverts2-red'>-20.34%</p></div>
                    </div>
                    <div className='coverts2col1'>
                        <div className='coverts2col2'>
                            <img src={reward4}/>
                            <div><p>LITCOIN</p><p>LTC</p></div>
                        </div>
                        <div><p>$2342342</p><p className='coverts2-green'>+20.34%</p></div>
                    </div>
                    <div className='coverts2col1'>
                        <div className='coverts2col2'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                        <div><p>$2342342</p><p className='coverts2-red'>-20.34%</p></div>
                    </div>
                    <div className='coverts2col1'>
                        <div className='coverts2col2'>
                            <img src={reward4}/>
                            <div><p>LITCOIN</p><p>LTC</p></div>
                        </div>
                        <div><p>$2342342</p><p className='coverts2-green'>+20.34%</p></div>
                    </div>
                    <div className='coverts2col1'>
                        <div className='coverts2col2'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                        <div><p>$2342342</p><p className='coverts2-red'>-20.34%</p></div>
                    </div>
                </div>
                <div className='covertsrow2'>
                    <h6>Trending Gainers</h6>
                    <div className='coverts2col1'>
                        <div className='coverts2col2'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                        <div><p>$2342342</p><p className='coverts2-red'>-20.34%</p></div>
                    </div>
                    <div className='coverts2col1'>
                        <div className='coverts2col2'>
                            <img src={reward4}/>
                            <div><p>LITCOIN</p><p>LTC</p></div>
                        </div>
                        <div><p>$2342342</p><p className='coverts2-green'>+20.34%</p></div>
                    </div>
                    <div className='coverts2col1'>
                        <div className='coverts2col2'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                        <div><p>$2342342</p><p className='coverts2-red'>-20.34%</p></div>
                    </div>
                    <div className='coverts2col1'>
                        <div className='coverts2col2'>
                            <img src={reward4}/>
                            <div><p>LITCOIN</p><p>LTC</p></div>
                        </div>
                        <div><p>$2342342</p><p className='coverts2-green'>+20.34%</p></div>
                    </div>
                    <div className='coverts2col1'>
                        <div className='coverts2col2'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                        <div><p>$2342342</p><p className='coverts2-red'>-20.34%</p></div>
                    </div>
                </div>
                <div className='covertsrow2'>
                    <h6>Trending Losers</h6>
                    <div className='coverts2col1'>
                        <div className='coverts2col2'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                        <div><p>$2342342</p><p className='coverts2-red'>-20.34%</p></div>
                    </div>
                    <div className='coverts2col1'>
                        <div className='coverts2col2'>
                            <img src={reward4}/>
                            <div><p>LITCOIN</p><p>LTC</p></div>
                        </div>
                        <div><p>$2342342</p><p className='coverts2-green'>+20.34%</p></div>
                    </div>
                    <div className='coverts2col1'>
                        <div className='coverts2col2'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                        <div><p>$2342342</p><p className='coverts2-red'>-20.34%</p></div>
                    </div>
                    <div className='coverts2col1'>
                        <div className='coverts2col2'>
                            <img src={reward4}/>
                            <div><p>LITCOIN</p><p>LTC</p></div>
                        </div>
                        <div><p>$2342342</p><p className='coverts2-green'>+20.34%</p></div>
                    </div>
                    <div className='coverts2col1'>
                        <div className='coverts2col2'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                        <div><p>$2342342</p><p className='coverts2-red'>-20.34%</p></div>
                    </div>
                </div>
                <div className='covertsrow2'>
                    <h6>Newly Added Cryptos</h6>
                    <div className='coverts2col1'>
                        <div className='coverts2col2'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                        <div><p>$2342342</p><p className='coverts2-red'>-20.34%</p></div>
                    </div>
                    <div className='coverts2col1'>
                        <div className='coverts2col2'>
                            <img src={reward4}/>
                            <div><p>LITCOIN</p><p>LTC</p></div>
                        </div>
                        <div><p>$2342342</p><p className='coverts2-green'>+20.34%</p></div>
                    </div>
                    <div className='coverts2col1'>
                        <div className='coverts2col2'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                        <div><p>$2342342</p><p className='coverts2-red'>-20.34%</p></div>
                    </div>
                    <div className='coverts2col1'>
                        <div className='coverts2col2'>
                            <img src={reward4}/>
                            <div><p>LITCOIN</p><p>LTC</p></div>
                        </div>
                        <div><p>$2342342</p><p className='coverts2-green'>+20.34%</p></div>
                    </div>
                    <div className='coverts2col1'>
                        <div className='coverts2col2'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                        <div><p>$2342342</p><p className='coverts2-red'>-20.34%</p></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Covert