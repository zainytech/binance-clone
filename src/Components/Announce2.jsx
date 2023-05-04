import React from 'react';
import './Announce2.css';

import { NavLink } from 'react-router-dom';
import rect3 from './Img/rect3.png';

const Announce2 = () => {
  return (
    <div className='announce2'>
        <div className='hist2row1'>
            <h3>Popular Cryptocurrencies</h3>
            <div>
                <input type='text' placeholder='Search'/>
                <button>Search</button>
            </div>
        </div>
        <div className='announcerow1'>
            <div className='announce1col1'>
                <NavLink to='/cryptocurrencies-announcement' style={{textDecoration: 'none', color: 'white'}}><p className='anouncep'>New Cryptocurrency Listing</p></NavLink>
                <NavLink to='/cryptocurrencies-announcement2' style={{textDecoration: 'none', color: 'white'}}><p className='anouncep'>Latest Binance News</p></NavLink>
                <p>Latest Activities</p>
                <p>New Fiat Listings</p>
                <p>Delisting</p>
                <p>Wallet Maintenance Updates</p>
                <p>API Updates</p>
                <p>Crypto Airdrop</p>
            </div>

            <div className='announce2col2'>
                <h4>Binance Launches Zero-Fee Bitcoin Trading</h4>
                <p className='announce2p2'>2022-07-06 07:00</p>
                <p>       Fellow Binancians, <br/>
                        To celebrate Binance’s fifth anniversary, Binance will introduce zero-fee trading for BTC spot trading pairs at 2022-07-08 14:00 (UTC). The zero-fee trading will cover the following 13 spot trading pairs: BTC/AUD, BTC/BIDR, BTC/BRL, BTC/BUSD, BTC/EUR, BTC/GBP, BTC/RUB, BTC/TRY, BTC/TUSD, BTC/UAH, BTC/USDC, BTC/USDP and BTC/USDT.<br/>
                        Validity Period: 2022-07-08 14:00 (UTC) until further notice<br/>
                        All users will enjoy zero maker and taker fees for all 13 BTC spot trading pairs.<br/>
                        The 13 BTC spot trading pairs will be excluded from BNB fee discounts, fee rebates or any other form of fee adjustments or fee promotions.<br/>
                        Note:<br/>
                        Binance reserves the right to disqualify trades that are deemed to be wash trades or illegally bulk registered accounts, as well as trades that display attributes of self-dealing or market manipulation.<br/>
                        All trading volume and metrics related to the program are measured by Binance at its sole and absolute discretion.<br/>
                        Calculation of maker fee and taker fee rebates will resume at the end of this program, subject to further updates.<br/>
                        You are cordially invited to join us in celebrating our fifth anniversary!<br/>
                        Thanks for your support!<br/>
                        Binance Team<br/>
                        2022-07-06<br/>
                        Trade on-the-go with Binance’s crypto trading app (iOS/Android)<br/>
                        Find us on <br/>
                        Telegram: https://t.me/binanceexchange <br/>
                        Twitter: https://twitter.com/binance <br/>
                        Facebook: https://www.facebook.com/binance <br/>
                        Instagram: https://www.instagram.com/binance <br/>
                        Note: This announcement was last updated on 2022-07-08 to provide updates on the activity, where the trading volume on the 13 Bitcoin spot trading pairs will be excluded from volume calculations toward the VIP program and Spot Liquidity Providers program. <br/>
                        Binance reserves the right in its sole discretion to amend or cancel this announcement at any time and for any reasons without prior notice. <br/>
                        Risk Warning: Digital asset prices are subject to high market risk and price volatility. The value of your investment can go down or up, and you may not get back the amount invested. You are solely responsible for your investment decisions and Binance is not liable for any losses you may incur. Past performance is not a reliable predictor of future performance. You should only invest in products you are familiar with and where you understand the risks. You should carefully consider your investment experience, financial situation, investment objectives and risk tolerance and consult an independent financial adviser prior to making any investment. This material should not be construed as financial advice. For more information, see our Terms of Use and Risk Warning.</p>
            </div>

            <div className='announce1col3'>
                <h6>Related Articles</h6>
                <div className='history3row1'>
                    <div>
                        <h6>Gift card support</h6>
                        <p>If you want to buy crypto directly with cash, this will be the best way for you.</p>
                    </div>
                    <img src={rect3}/>
                </div>
                <div className='history3row1'>
                    <div>
                        <h6>Gift card support</h6>
                        <p>If you want to buy crypto directly with cash, this will be the best way for you.</p>
                    </div>
                    <img src={rect3}/>
                </div>
                <div className='history3row1'>
                    <div>
                        <h6>Buy Crypto</h6>
                        <p>If you want to buy crypto directly with cash, this will be the best way for you.</p>
                    </div>
                    <img src={rect3}/>
                </div>
                <div className='history3row1'>
                    <div>
                        <h6>Buy Crypto</h6>
                        <p>If you want to buy crypto directly with cash, this will be the best way for you.</p>
                    </div>
                    <img src={rect3}/>
                </div>
                <div className='history3row1'>
                    <div>
                        <h6>Buy Crypto</h6>
                        <p>If you want to buy crypto directly with cash, this will be the best way for you.</p>
                    </div>
                    <img src={rect3}/>
                </div>
                <div className='history3row1'>
                    <div>
                        <h6>Buy Crypto</h6>
                        <p>If you want to buy crypto directly with cash, this will be the best way for you.</p>
                    </div>
                    <img src={rect3}/>
                </div>
                <div className='history3row1'>
                    <div>
                        <h6>Buy Crypto</h6>
                        <p>If you want to buy crypto directly with cash, this will be the best way for you.</p>
                    </div>
                    <img src={rect3}/>
                </div>
            </div>
        </div>
        <div className='announce-responsive'>
            <p>New Cryptocurrency Listing <img src={rect3}/></p>
        </div>
    </div>
  )
}

export default Announce2