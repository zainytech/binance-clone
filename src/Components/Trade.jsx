import React, {useState} from 'react'
import './Trade.css';

import binance1 from './Img/binance1.png';
import binance2 from './Img/binance2.png';
import binance5 from './Img/binance5.png';
import binance6 from './Img/binance6.png';
import secure from './Img/secure.png';
import secure2 from './Img/secure2.png';
import secure3 from './Img/secure3.png';
import { Link } from 'react-router-dom';

const Trade = () => {
    const [readMore, setReadMore] = useState(false);
  return (
    <div className='trade'>
        <div className='traderow1'>
           <h2>Trade Crypto Futures</h2>
           <p>Trade more than 750 cryptocurrency and fiat pairs, including Bitcoin, Ethereum, and BNB with Binance Spot.</p>
           <Link to="/fundin-history-graph1" style={{textDecoration: 'none'}}><button>Open Account</button></Link>
        </div>

        <div className='traderow2'>
            <div className='trade2col'>
                <p>BNB/BUSD <span>-3.70%</span></p>
                <h6>313.4</h6>
                <p>$315.70</p>
            </div>
            <div className='trade2col'>
                <p>BNB/BUSD  <span>-3.70%</span></p>
                <h6>313.4</h6>
                <p>$315.70</p>
            </div>
            <div className='trade2col'>
                <p>BNB/BUSD <span>-3.70%</span></p>
                <h6>313.4</h6>
                <p>$315.70</p>
            </div>
            <div className='trade2col'>
                <p>BNB/BUSD <span>-3.70%</span></p>
                <h6>313.4</h6>
                <p>$315.70</p>
            </div>
        </div>

        <div className='traderow3'>
            <div className='trade3col'>
                <h6>USD(S)-M Futures</h6>
                <p>Perpetual or Quarterly Contacts settled in USDT or BUSD</p>
                <button><Link to="/fundin-history-graph2" style={{textDecoration: 'none', color: 'white'}}>Trade Now</Link></button>
            </div>
            <div className='trade3col'>
                <h6>USD(S)-M Futures</h6>
                <p>Perpetual or Quarterly Contacts settled in USDT or BUSD</p>
                <button><Link to="/fundin-history-graph2" style={{textDecoration: 'none', color: 'white'}}>Trade Now</Link></button>
            </div>
            <div className='trade3col'>
                <h6>Binance Leveraged Tokens</h6>
                <p>Perpetual or Quarterly Contacts settled in USDT or BUSD</p>
                <button><Link to="/fundin-history-graph2" style={{textDecoration: 'none', color: 'white'}}>Trade Now</Link></button>
            </div>
            <div className='trade3col'>
                <h6>Binance Options</h6>
                <p>Perpetual or Quarterly Contacts settled in USDT or BUSD</p>
                <button><Link to="/fundin-history-graph2" style={{textDecoration: 'none', color: 'white'}}>Trade Now</Link></button>
            </div>
        </div>

        <div className='traderow4'>
            <div className='trade4col1'>
                <h4>Futures Grid Trading Competition - Up to 20,000 BUSD to Be Shared!</h4>
                <p>Binance Futures is launching a new promotion where all eligible users can share a total rewards pool of up to 20,000 BUSD! The first 2,000 eligible users who create a futures grid strategy for the first time will be eligible to win a 5 BUSD Futures Bonus Voucher. Top 20 eligible users will be ranked based on their trading volume on the futures grid strategy to share a dynamic prize pool that goes up to 10,000 BUSD in Futures Bonus Voucher</p>
                <div>
                    <button>Learn More</button>
                    <button>Enroll Me</button>
                </div>
            </div>
            <div className='trade4col2'>
                <img src={binance1} alt='binance futures trading'/>
            </div>
        </div>

        <div className='traderow5'>
           <h2>Broker Partners</h2>
           <p>These companies operate independently. Binance only provides technical services.</p> 
           <div className='trade5grid'>
                <div className='trade5col'>
                    <img src={binance2} alt='Broker Partners'/>
                    <h6>Name</h6>
                    <button>Trade Now</button>
                </div>
                <div className='trade5col'>
                    <img src={binance2} alt='Broker Partners'/>
                    <h6>Name</h6>
                    <button>Trade Now</button>
                </div>
                <div className='trade5col'>
                    <img src={binance2} alt='Broker Partners'/>
                    <h6>Name</h6>
                    <button>Trade Now</button>
                </div>
                <div className='trade5col'>
                    <img src={binance2} alt='Broker Partners'/>
                    <h6>Name</h6>
                    <button>Trade Now</button>
                </div>
           </div>
        </div>

        <div className='traderow5'>
           <h2>Binance Futures Highlights</h2>
           <p>Binance Futures constantly innovates to offer a wide range of services. Check them out below.</p> 
           <div className='trade5grid'>
                <div className='trade5col'>
                    <img src={binance2} alt='Broker Partners'/>
                    <h6>Leadboard</h6>
                    <p>Binance Futures is launching a new promotion where all eligible users can share a total rewards </p>
                    <button>Trade Now</button>
                </div>
                <div className='trade5col'>
                    <img src={binance2} alt='Broker Partners'/>
                    <h6>Battle</h6>
                    <p>Binance Futures is launching a new promotion where all eligible users can share a total rewards </p>
                    <button>Trade Now</button>
                </div>
                <div className='trade5col'>
                    <img src={binance2} alt='Broker Partners'/>
                    <h6>Affiliates</h6>
                    <p>Binance Futures is launching a new promotion where all eligible users can share a total rewards</p>
                    <button>Trade Now</button>
                </div>
                <div className='trade5col'>
                    <img src={binance2} alt='Broker Partners'/>
                    <h6>Grid Trading</h6>
                    <p>Binance Futures is launching a new promotion where all eligible users can share a total rewards </p>
                    <button>Trade Now</button>
                </div>
           </div>
        </div>

        <div className='traderow5 tradenone'>
           <h2>Binance Futures Highlights</h2>
           <div className='trade5flex'>
              <p>Latest Articles</p>
              <p>Futures 101</p>
              <p>Futures Decrypted</p>
              <p>Futures Activities</p>
              <p>Future Analysis</p>
              <p>Crypto Futures Overview</p>
           </div>
           <div className='trade5grid'>
                <div className='trade5col'>
                    <img src={binance2} alt='Broker Partners'/>
                    <h6>Market Update (2022-08-10)</h6>
                    <p>Binance Futures is launching a new promotion where all eligible users can share a total rewards </p>
                    <button>Read Now</button>
                </div>
                <div className='trade5col'>
                    <img src={binance2} alt='Broker Partners'/>
                    <h6>Market Update (2022-08-10)</h6>
                    <p>Binance Futures is launching a new promotion where all eligible users can share a total rewards </p>
                    <button>Read Now</button>
                </div>
                <div className='trade5col'>
                    <img src={binance2} alt='Broker Partners'/>
                    <h6>Market Update (2022-08-10)</h6>
                    <p>Binance Futures is launching a new promotion where all eligible users can share a total rewards </p>
                    <button>Read Now</button>
                </div>
           </div>
        </div>

        <div className='traderow6'>
                <div className='trade5col'>
                    <img src={binance5} alt='Broker Partners'/>
                    <h6>Market Update (2022-08-10)</h6>
                    <p>Binance Futures is launching a new promotion where all eligible users can share a total rewards </p>
                    <div><p>Binance</p><p>12 hrs ago</p>
                    <p>#Binance</p><p>#Markets</p>
                    <p>#Cryptocurrency</p></div>
                </div>
                <div className='trade5col'>
                    <img src={binance5} alt='Broker Partners'/>
                    <h6>Market Update (2022-08-10)</h6>
                    <p>
                        The global cryptocurrency market cap now stands at $1.13T, up by 3.36% over the last day, according to CoinMarketCap data.Bitcoin (BTC) has been trading between $22,667 and $24,197 over the past 22 years 9 months </p>
                    <div><p>Binance</p><p>12 hrs ago</p>
                    <p>#Binance</p><p>#Markets</p>
                    <p>#Cryptocurrency</p></div>
                </div>
                <div className='trade5col'>
                    <img src={binance5} alt='Broker Partners'/>
                    <h6>Market Update (2022-08-10)</h6>
                    <p>
                        The global cryptocurrency market cap now stands at $1.13T, up by 3.36% over the last day, according to CoinMarketCap data.Bitcoin (BTC) has been trading between $22,667 and $24,197 over the past 22 years 9 months</p>
                    <div><p>Binance</p><p>12 hrs ago</p>
                    <p>#Binance</p><p>#Markets</p>
                    <p>#Cryptocurrency</p></div>
                </div>
        </div>
        { readMore ?  <div className='traderow6'>
                <div className='trade5col'>
                    <img src={binance5} alt='Broker Partners'/>
                    <h6>Market Update (2022-08-10)</h6>
                    <p>
                        The global cryptocurrency market cap now stands at $1.13T, up by 3.36% over the last day, according to CoinMarketCap data.Bitcoin (BTC) has been trading between $22,667 and $24,197 over the past 22 years 9 months </p>
                    <div><p>Binance</p><p>12 hrs ago</p>
                    <p>#Binance</p><p>#Markets</p>
                    <p>#Cryptocurrency</p></div>
                </div>
                <div className='trade5col'>
                    <img src={binance5} alt='Broker Partners'/>
                    <h6>Market Update (2022-08-10)</h6>
                    <p>
                            The global cryptocurrency market cap now stands at $1.13T, up by 3.36% over the last day, according to CoinMarketCap data.Bitcoin (BTC) has been trading between $22,667 and $24,197 over the past 22 years 9 months</p>
                    <div><p>Binance</p><p>12 hrs ago</p>
                    <p>#Binance</p><p>#Markets</p>
                    <p>#Cryptocurrency</p></div>
                </div>
                <div className='trade5col'>
                    <img src={binance5} alt='Broker Partners'/>
                    <h6>Market Update (2022-08-10)</h6>
                    <p>
                            The global cryptocurrency market cap now stands at $1.13T, up by 3.36% over the last day, according to CoinMarketCap data.Bitcoin (BTC) has been trading between $22,667 and $24,197 over the past 22 years 9 months</p>
                    <div><p>Binance</p><p>12 hrs ago</p>
                    <p>#Binance</p><p>#Markets</p>
                    <p>#Cryptocurrency</p></div>
            </div></div> : null   }
            <button className='trade-view' onClick={() => setReadMore(!readMore)}>
                {readMore ?  "Less Articles" : "View More Articles" }
            </button>    

        <div className='traderow7'>
            <h2>Crypto Futures Last Prices (24h Volume)</h2>
            <div className='trade7col1'>
                <div>
                <h6>COIN-M-Futures</h6>
                <h5>315,231.23BTC</h5>
                    <div className='traderow6'>
                        <div>
                            <p>Pair</p>
                            <p>1 INCH/BTC</p>
                            <p>1 INCH/BTC</p>
                            <p>1 INCH/BTC</p>
                            <p>1 INCH/BTC</p>
                            <p>1 INCH/BTC</p>
                            <p>1 INCH/BTC</p>
                        </div>
                        <div>
                            <p>Pair (USDT)</p>
                            <p>37,99</p>
                            <p>37,99</p>
                            <p>37,99</p>
                            <p>37,99</p>
                            <p>37,99</p>
                            <p>37,99</p>
                        </div>
                        <div className='trade7change'>
                            <p>Change</p>
                            <p>+3.2%</p>
                            <p>+3.2%</p>
                            <p>+3.2%</p>
                            <p>+3.2%</p>
                            <p>+3.2%</p>
                            <p>+3.2%</p>
                        </div>
                    </div>
                </div>
                <div>
                <h6>COIN-M-Futures</h6>
                <h5>315,231.23BTC</h5>
                <div className='traderow6'>
                    <div>
                        <p>Pair</p>
                        <p>1 INCH/BTC</p>
                        <p>1 INCH/BTC</p>
                        <p>1 INCH/BTC</p>
                        <p>1 INCH/BTC</p>
                        <p>1 INCH/BTC</p>
                        <p>1 INCH/BTC</p>
                    </div>
                    <div>
                        <p>Pair (USDT)</p>
                        <p>37,99</p>
                        <p>37,99</p>
                        <p>37,99</p>
                        <p>37,99</p>
                        <p>37,99</p>
                        <p>37,99</p>
                    </div>
                    <div className='trade7change'>
                        <p>Change</p>
                        <p>+3.2%</p>
                        <p>+3.2%</p>
                        <p>+3.2%</p>
                        <p>+3.2%</p>
                        <p>+3.2%</p>
                        <p>+3.2%</p>
                    </div>
                </div>
                </div>
                <div>
                <h6>COIN-M-Futures</h6>
                <h5>315,231.23BTC</h5>
                <div className='traderow6'>
                    <div>
                        <p>Pair</p>
                        <p>1 INCH/BTC</p>
                        <p>1 INCH/BTC</p>
                        <p>1 INCH/BTC</p>
                        <p>1 INCH/BTC</p>
                        <p>1 INCH/BTC</p>
                        <p>1 INCH/BTC</p>
                    </div>
                    <div>
                        <p>Pair (USDT)</p>
                        <p>37,99</p>
                        <p>37,99</p>
                        <p>37,99</p>
                        <p>37,99</p>
                        <p>37,99</p>
                        <p>37,99</p>
                    </div>
                    <div className='trade7change'>
                        <p>Change</p>
                        <p>+3.2%</p>
                        <p>+3.2%</p>
                        <p>+3.2%</p>
                        <p>+3.2%</p>
                        <p>+3.2%</p>
                        <p>+3.2%</p>
                    </div>
                </div>
                </div>
                <div>
                <h6>COIN-M-Futures</h6>
                <h5>315,231.23BTC</h5>
                <div className='traderow6'>
                    <div>
                        <p>Pair</p>
                        <p>1 INCH/BTC</p>
                        <p>1 INCH/BTC</p>
                        <p>1 INCH/BTC</p>
                        <p>1 INCH/BTC</p>
                        <p>1 INCH/BTC</p>
                        <p>1 INCH/BTC</p>
                    </div>
                    <div>
                        <p>Pair (USDT)</p>
                        <p>37,99</p>
                        <p>37,99</p>
                        <p>37,99</p>
                        <p>37,99</p>
                        <p>37,99</p>
                        <p>37,99</p>
                    </div>
                    <div className='trade7change'>
                        <p>Change</p>
                        <p>+3.2%</p>
                        <p>+3.2%</p>
                        <p>+3.2%</p>
                        <p>+3.2%</p>
                        <p>+3.2%</p>
                        <p>+3.2%</p>
                    </div>
                </div>
                </div>
            </div>
        </div>  

        <div className='traderow8'>
            <div className='trade8col1'>
                <img src={secure}/>
                <div>
                    <h6>Secure Asset Fund for Users (SAFU)</h6>
                    <p>Binance stores 10% of all trading fees in a secure asset fund to protect a share of user funds.</p>
                </div>
            </div>
            <div className='trade8col1'>
                <img src={secure2}/>
                <div>
                    <h6>Advanced Data Encryption</h6>
                    <p>Your transaction data is secured via end-to-end encryption, ensuring that only you have access to your personal information.</p>
                </div>
            </div>
            <div className='trade8col1'>
                <img src={secure3}/>
                <div>
                    <h6>Personalised Access Control</h6>
                    <p>Advanced access control allows you to restrict devices and addresses that can access your account, for greater ease of mind.</p>
                </div>
            </div>
            <div className='trade8col1'>
                <img src={secure3}/>
                <div>
                    <h6>Personalised Access Control</h6>
                    <p>Advanced access control allows you to restrict devices and addresses that can access your account, for greater ease of mind.</p>
                </div>
            </div>            
        </div>

        <div className='trade5grid tradenone'>
                <div className='trade5col trage8img'>
                    <img src={binance6} alt='Broker Partners'/>
                    <h6>Name</h6>
                    <p>Advanced access control allows you to restrict devices and addresses that can access your account, for greater ease of mind. </p>
                </div>
                <div className='trade5col trage8img'>
                    <img src={binance6} alt='Broker Partners'/>
                    <h6>Name</h6>
                    <p>Advanced access control allows you to restrict devices and addresses that can access your account, for greater ease of mind.</p>
                </div>
                <div className='trade5col trage8img'>
                    <img src={binance6} alt='Broker Partners'/>
                    <h6>Name</h6>
                    <p>Advanced access control allows you to restrict devices and addresses that can access your account, for greater ease of mind.</p>
                </div>
                <div className='trade5col trage8img'>
                    <img src={binance6} alt='Broker Partners'/>
                    <h6>Name</h6>
                    <p>Advanced access control allows you to restrict devices and addresses that can access your account, for greater ease of mind. </p>
                </div>
        </div>

        <div className='domrow8'>
            <h5>Start Earning Today</h5>
            <div>
                <button><Link to="/fundin-history-graph1" style={{textDecoration: 'none'}}>Open Futures Account</Link></button>
                <button><Link to="/fundin-history-graph2" style={{textDecoration: 'none', color: 'white'}}>Trade Now</Link></button>
            </div>
        </div>

    </div>
  )
}

export default Trade