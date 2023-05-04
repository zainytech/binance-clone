import React from 'react';
import { NavLink } from 'react-router-dom';
import './Announce.css';

import rect3 from './Img/rect3.png';

const Announce = () => {
  return (
    <div className='announce'>
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

            <div className='announce1col2'>
                <h4>Binance Launches Zero-Fee Bitcoin Trading</h4>
                <p>Binance Adds ETC/TRY & OP/ETH Trading Pairs<span>2022-08-03</span></p>
                <p>Binance Adds ETC/TRY & OP/ETH Trading Pairs<span>2022-08-03</span></p>
                <p>Binance Adds ETC/TRY & OP/ETH Trading Pairs<span>2022-08-03</span></p>
                <p>Binance Adds ETC/TRY & OP/ETH Trading Pairs<span>2022-08-03</span></p>
                <p>Binance Adds ETC/TRY & OP/ETH Trading Pairs<span>2022-08-03</span></p>
                <p>Binance Adds ETC/TRY & OP/ETH Trading Pairs<span>2022-08-03</span></p>
                <p>Binance Adds ETC/TRY & OP/ETH Trading Pairs<span>2022-08-03</span></p>
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

export default Announce