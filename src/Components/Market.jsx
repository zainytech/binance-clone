import React, { useState } from 'react'
import './Market.css';
import { Link } from 'react-router-dom';
import reward from './Img/reward.png';
import tor3 from './Img/tor3.png';
import reward4 from './Img/reward4.png';
import react4 from './Img/rect4.png';


const Market = () => {
    const [article, setArticle] = useState(1);
  return (
    <div className='mark'>
        <div className='marketrow1'>
            <h3>Markets</h3>
            <Link to='/marketing-overview' style={{textDecoration: 'none', color: 'blue'}}><button>Markets Overview</button></Link>
        </div>
        <div className='markrow1'>
            <div className='mark1col1'>
                <p>Highlight Coin</p>
                <div className='mark1col1inner'>
                    <div className='mark1inner2'>
                        <div><img src={reward}/><div>BITCOIN</div><div>BTC</div></div>
                        <div><img src={reward4}/><div>LITCOIN</div><div>LTC</div></div>
                        <div><img src={reward}/><div>BITCOIN</div><div>BTC</div></div>
                    </div>
                    <div className='mark1inner1'><p className='mark1-green'>215.21</p><p className='mark1-green'>215.21</p><p className='mark1-green'>215.21</p></div>
                    <div className='mark1inner1'><p className='mark1-green'>+5.21%</p><p className='mark1-red'>-5.21%</p><p className='mark1-green'>+5.21%</p></div>
                </div>
            </div>
            <div className='mark1col1'>
                <p>Highlight Coin</p>
                <div className='mark1col1inner'>
                    <div className='mark1inner2'>
                        <div><img src={reward}/><div>BITCOIN</div><div>BTC</div></div>
                        <div><img src={reward4}/><div>LITCOIN</div><div>LTC</div></div>
                        <div><img src={reward}/><div>BITCOIN</div><div>BTC</div></div>
                    </div>
                    <div className='mark1inner1'><p className='mark1-green'>215.21</p><p className='mark1-green'>215.21</p><p className='mark1-green'>215.21</p></div>
                    <div className='mark1inner1'><p className='mark1-green'>+5.21%</p><p className='mark1-red'>-5.21%</p><p className='mark1-green'>+5.21%</p></div>
                </div>
            </div>
            <div className='mark1col1'>
                <p>Highlight Coin</p>
                <div className='mark1col1inner'>
                    <div className='mark1inner2'>
                        <div><img src={reward}/><div>BITCOIN</div><div>BTC</div></div>
                        <div><img src={reward4}/><div>LITCOIN</div><div>LTC</div></div>
                        <div><img src={reward}/><div>BITCOIN</div><div>BTC</div></div>
                    </div>
                    <div className='mark1inner1'><p className='mark1-green'>215.21</p><p className='mark1-green'>215.21</p><p className='mark1-green'>215.21</p></div>
                    <div className='mark1inner1'><p className='mark1-green'>+5.21%</p><p className='mark1-red'>-5.21%</p><p className='mark1-green'>+5.21%</p></div>
                </div>
            </div>
            <div className='mark1col1'>
                <p>Highlight Coin</p>
                <div className='mark1col1inner'>
                    <div className='mark1inner2'>
                        <div><img src={reward}/><div>BITCOIN</div><div>BTC</div></div>
                        <div><img src={reward4}/><div>LITCOIN</div><div>LTC</div></div>
                        <div><img src={reward}/><div>BITCOIN</div><div>BTC</div></div>
                    </div>
                    <div className='mark1inner1'><p className='mark1-green'>215.21</p><p className='mark1-green'>215.21</p><p className='mark1-green'>215.21</p></div>
                    <div className='mark1inner1'><p className='mark1-green'>+5.21%</p><p className='mark1-red'>-5.21%</p><p className='mark1-green'>+5.21%</p></div>
                </div>
            </div>
        </div>
        <div className='markrow2'>
            <div onClick={()=>setArticle(1)} className={ article === 1 ? 'active' : null}>Favourites</div>
            <div onClick={()=>setArticle(2)} className={ article === 2 ? 'active' : null}>All Crypto</div>
            <div onClick={()=>setArticle(3)} className={ article === 3 ? 'active' : null}>Spot Markets</div>
            <div onClick={()=>setArticle(4)} className={ article === 4 ? 'active' : null}>Future Markets</div>
            <div onClick={()=>setArticle(5)} className={ article === 5 ? 'active' : null}>New Listing</div>
        </div>
        { article === 1 && <Favourites></Favourites> }
        { article === 2 && <Crypto></Crypto> }
        { article === 3 && <SpotMarkets></SpotMarkets> }
        { article === 4 && <FutureMarket></FutureMarket> }
        { article === 5 && <NewListing></NewListing> }
    </div>
  );
}
const NewListing = () => {
    return(
        <div className='market2row3'>
                <div className='market2col2'>
                    <div className='market2col2-diff'>Favourites</div>
                    <div>All Crypto</div>
                    <div>All Crypto</div>
                    <div>Spot Markets</div>
                    <div>Spot Markets</div>
                    <div>Futures Markets</div>
                    <div>Futures Markets</div>
                    <div>New Listing</div>
                    <div>New Listing</div>
                    <div>New Listing</div>
                    <img src={react4}/>                                       
                </div>
                <div className='market2row3col1'>
                    <div>
                            <div className='market2grid1img'><p>Name</p><img src={tor3}/></div>
                            <div className='market2gf'>
                                <img src={reward}/>
                                <div><div>BITCOIN</div><div>BTC</div></div>
                            </div>
                            <div className='market2gf'>
                                <img src={reward4}/>
                                <div><div>LITCOIN</div><div>LTC</div></div>
                            </div>
                            <div className='market2gf'>
                                <img src={reward}/>
                                <div><div>BITCOIN</div><div>BTC</div></div>
                            </div>
                            <div className='market2gf'>
                                <img src={reward4}/>
                                <div><div>LITCOIN</div><div>LTC</div></div>
                            </div>
                            <div className='market2gf'>
                                <img src={reward}/>
                                <div><div>BITCOIN</div><div>BTC</div></div>
                            </div>
                    </div>
                    <div>
                            <div className='market2grid1img'><p>Price</p><img src={tor3}/></div>
                            <p className='market2col1-margin'>$300</p>
                            <p className='market2col1-margin'>$300</p>
                            <p className='market2col1-margin'>$300</p>
                            <p className='market2col1-margin'>$300</p>
                            <p className='market2col1-margin'>$300</p>
                    </div>
                    <div>
                            <div className='market2grid1img'><p>1h 4h<span>24h</span>Change</p><img src={tor3}/></div>
                            <p className='market2green'>+5.21%</p>
                            <p className='market2red'>-5.21%</p>
                            <p className='market2green'>+5.21%</p>
                            <p className='market2red'>-5.21%</p>
                            <p className='market2green'>+5.21%</p>
                    </div>
                    <div>
                            <div className='market2grid1img'><p>24 Volume</p><img src={tor3}/></div>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                    </div>
                    <div>
                            <div className='market2grid1img'><p>Market Cap</p><img src={tor3}/></div>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                    </div>
                    <div>
                            <div className='market2grid1img market3-hidden'><p>Market Cap</p><img src={tor3}/></div>
                            <p className='market2col1-margin market2col1-blue'>Detail</p>
                            <p className='market2col1-margin market2col1-blue'>Detail</p>
                            <p className='market2col1-margin market2col1-blue'>Detail</p>
                            <p className='market2col1-margin market2col1-blue'>Detail</p>
                            <p className='market2col1-margin market2col1-blue'>Detail</p>
                    </div>
                    <div>
                            <div className='market2grid1img market3-hidden'><p>Market Cap</p><img src={tor3}/></div>
                            <p className='market2col1-margin market2co1-blue'>Trade</p>
                            <p className='market2col1-margin market2co1-blue'>Trade</p>
                            <p className='market2col1-margin market2co1-blue'>Trade</p>
                            <p className='market2col1-margin market2co1-blue'>Trade</p>
                            <p className='market2col1-margin market2co1-blue'>Trade</p>
                    </div>
                </div>
         </div>
    )
}

const FutureMarket = () => {
    return(
        <>
            <div className='market2row3'>
                <div className='market2col2'>
                    <div className='market2col2-diff'>USD-M Futures</div>
                    <div>COIN-M Futures</div>
                </div>
                <div className='market2row3col1'>
                    <div>
                            <div className='market2grid1img'><p>Name</p><img src={tor3}/></div>
                            <div className='market2gf'>
                                <img src={reward}/>
                                <div><div>BITCOIN</div><div>BTC</div></div>
                            </div>
                            <div className='market2gf'>
                                <img src={reward4}/>
                                <div><div>LITCOIN</div><div>LTC</div></div>
                            </div>
                            <div className='market2gf'>
                                <img src={reward}/>
                                <div><div>BITCOIN</div><div>BTC</div></div>
                            </div>
                            <div className='market2gf'>
                                <img src={reward4}/>
                                <div><div>LITCOIN</div><div>LTC</div></div>
                            </div>
                            <div className='market2gf'>
                                <img src={reward}/>
                                <div><div>BITCOIN</div><div>BTC</div></div>
                            </div>
                    </div>
                    <div>
                            <div className='market2grid1img'><p>Price</p><img src={tor3}/></div>
                            <p className='market2col1-margin'>$300</p>
                            <p className='market2col1-margin'>$300</p>
                            <p className='market2col1-margin'>$300</p>
                            <p className='market2col1-margin'>$300</p>
                            <p className='market2col1-margin'>$300</p>
                    </div>
                    <div>
                            <div className='market2grid1img'><p>1h 4h<span>24h</span>Change</p><img src={tor3}/></div>
                            <p className='market2green'>+5.21%</p>
                            <p className='market2red'>-5.21%</p>
                            <p className='market2green'>+5.21%</p>
                            <p className='market2red'>-5.21%</p>
                            <p className='market2green'>+5.21%</p>
                    </div>
                    <div>
                            <div className='market2grid1img'><p>24 Volume</p><img src={tor3}/></div>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                    </div>
                    <div>
                            <div className='market2grid1img'><p>Market Cap</p><img src={tor3}/></div>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                    </div>
                    <div>
                            <div className='market2grid1img market3-hidden'><p>Market Cap</p><img src={tor3}/></div>
                            <p className='market2col1-margin market2col1-blue'>Detail</p>
                            <p className='market2col1-margin market2col1-blue'>Detail</p>
                            <p className='market2col1-margin market2col1-blue'>Detail</p>
                            <p className='market2col1-margin market2col1-blue'>Detail</p>
                            <p className='market2col1-margin market2col1-blue'>Detail</p>
                    </div>
                    <div>
                            <div className='market2grid1img market3-hidden'><p>Market Cap</p><img src={tor3}/></div>
                            <p className='market2col1-margin market2co1-blue'>Trade</p>
                            <p className='market2col1-margin market2co1-blue'>Trade</p>
                            <p className='market2col1-margin market2co1-blue'>Trade</p>
                            <p className='market2col1-margin market2co1-blue'>Trade</p>
                            <p className='market2col1-margin market2co1-blue'>Trade</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const SpotMarkets = () => {
    return(
        <div className='market2row3'>
                <div className='market2col2'>
                    <div className='market2col2-diff'>BDUD</div>
                    <div>USDT</div>
                    <div>BNB</div>
                    <div>BTC</div>
                    <div>ALTS</div>
                    <div>FIAT(ALL)</div>
                    <div>ETF</div>                                       
                </div>
                <div className='market2row3col1'>
                    <div>
                            <div className='market2grid1img'><p>Name</p><img src={tor3}/></div>
                            <div className='market2gf'>
                                <img src={reward}/>
                                <div><div>BITCOIN</div><div>BTC</div></div>
                            </div>
                            <div className='market2gf'>
                                <img src={reward4}/>
                                <div><div>LITCOIN</div><div>LTC</div></div>
                            </div>
                            <div className='market2gf'>
                                <img src={reward}/>
                                <div><div>BITCOIN</div><div>BTC</div></div>
                            </div>
                            <div className='market2gf'>
                                <img src={reward4}/>
                                <div><div>LITCOIN</div><div>LTC</div></div>
                            </div>
                            <div className='market2gf'>
                                <img src={reward}/>
                                <div><div>BITCOIN</div><div>BTC</div></div>
                            </div>
                    </div>
                    <div>
                            <div className='market2grid1img'><p>Price</p><img src={tor3}/></div>
                            <p className='market2col1-margin'>$300</p>
                            <p className='market2col1-margin'>$300</p>
                            <p className='market2col1-margin'>$300</p>
                            <p className='market2col1-margin'>$300</p>
                            <p className='market2col1-margin'>$300</p>
                    </div>
                    <div>
                            <div className='market2grid1img'><p>1h 4h<span>24h</span>Change</p><img src={tor3}/></div>
                            <p className='market2green'>+5.21%</p>
                            <p className='market2red'>-5.21%</p>
                            <p className='market2green'>+5.21%</p>
                            <p className='market2red'>-5.21%</p>
                            <p className='market2green'>+5.21%</p>
                    </div>
                    <div>
                            <div className='market2grid1img'><p>24 Volume</p><img src={tor3}/></div>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                    </div>
                    <div>
                            <div className='market2grid1img'><p>Market Cap</p><img src={tor3}/></div>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                    </div>
                    <div>
                            <div className='market2grid1img market3-hidden'><p>Market Cap</p><img src={tor3}/></div>
                            <p className='market2col1-margin market2col1-blue market3-hidden'>Detail</p>
                            <p className='market2col1-margin market2col1-blue market3-hidden'>Detail</p>
                            <p className='market2col1-margin market2col1-blue market3-hidden'>Detail</p>
                            <p className='market2col1-margin market2col1-blue market3-hidden'>Detail</p>
                            <p className='market2col1-margin market2col1-blue market3-hidden'>Detail</p>
                    </div>
                    <div>
                            <div className='market2grid1img market3-hidden'><p>Market Cap</p><img src={tor3}/></div>
                            <p className='market2col1-margin market2co1-blue'>Trade</p>
                            <p className='market2col1-margin market2co1-blue'>Trade</p>
                            <p className='market2col1-margin market2co1-blue'>Trade</p>
                            <p className='market2col1-margin market2co1-blue'>Trade</p>
                            <p className='market2col1-margin market2co1-blue'>Trade</p>
                    </div>
                </div>
         </div>
    )
}

const Crypto = () => {
    return(
        <div className='market2row3'>
                <div className='market2col2'>
                    <div className='market2col2-diff'>Favourites</div>
                    <div>All Crypto</div>
                    <div>All Crypto</div>
                    <div>Spot Markets</div>
                    <div>Spot Markets</div>
                    <div>Futures Markets</div>
                    <div>Futures Markets</div>
                    <div>New Listing</div>
                    <div>New Listing</div>
                    <div>New Listing</div>
                    <img src={react4}/>                                       
                </div>
                <div className='market2row3col1'>
                    <div>
                            <div className='market2grid1img'><p>Name</p><img src={tor3}/></div>
                            <div className='market2gf'>
                                <img src={reward}/>
                                <div><div>BITCOIN</div><div>BTC</div></div>
                            </div>
                            <div className='market2gf'>
                                <img src={reward4}/>
                                <div><div>LITCOIN</div><div>LTC</div></div>
                            </div>
                            <div className='market2gf'>
                                <img src={reward}/>
                                <div><div>BITCOIN</div><div>BTC</div></div>
                            </div>
                            <div className='market2gf'>
                                <img src={reward4}/>
                                <div><div>LITCOIN</div><div>LTC</div></div>
                            </div>
                            <div className='market2gf'>
                                <img src={reward}/>
                                <div><div>BITCOIN</div><div>BTC</div></div>
                            </div>
                    </div>
                    <div>
                            <div className='market2grid1img'><p>Price</p><img src={tor3}/></div>
                            <p className='market2col1-margin'>$300</p>
                            <p className='market2col1-margin'>$300</p>
                            <p className='market2col1-margin'>$300</p>
                            <p className='market2col1-margin'>$300</p>
                            <p className='market2col1-margin'>$300</p>
                    </div>
                    <div>
                            <div className='market2grid1img'><p>1h 4h<span>24h</span>Change</p><img src={tor3}/></div>
                            <p className='market2green'>+5.21%</p>
                            <p className='market2red'>-5.21%</p>
                            <p className='market2green'>+5.21%</p>
                            <p className='market2red'>-5.21%</p>
                            <p className='market2green'>+5.21%</p>
                    </div>
                    <div>
                            <div className='market2grid1img'><p>24 Volume</p><img src={tor3}/></div>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                    </div>
                    <div>
                            <div className='market2grid1img'><p>Market Cap</p><img src={tor3}/></div>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                    </div>
                    <div>
                            <div className='market2grid1img market3-hidden'><p>Market Cap</p><img src={tor3}/></div>
                            <p className='market2col1-margin market2col1-blue market3-hidden'>Detail</p>
                            <p className='market2col1-margin market2col1-blue market3-hidden'>Detail</p>
                            <p className='market2col1-margin market2col1-blue market3-hidden'>Detail</p>
                            <p className='market2col1-margin market2col1-blue market3-hidden'>Detail</p>
                            <p className='market2col1-margin market2col1-blue market3-hidden'>Detail</p>
                    </div>
                    <div>
                            <div className='market2grid1img market3-hidden'><p>Market Cap</p><img src={tor3}/></div>
                            <p className='market2col1-margin market2co1-blue'>Trade</p>
                            <p className='market2col1-margin market2co1-blue'>Trade</p>
                            <p className='market2col1-margin market2co1-blue'>Trade</p>
                            <p className='market2col1-margin market2co1-blue'>Trade</p>
                            <p className='market2col1-margin market2co1-blue'>Trade</p>
                    </div>
                </div>
         </div>
    )
}

const Favourites = () => {
    return(
        <>
            <div className='market2row3'>
                <div className='market2col2'>
                    <div className='market2col2-diff'>Spot</div>
                    <div>Futures</div>
                </div>
                <div className='market2row3col1'>
                    <div>
                            <div className='market2grid1img'><p>Name</p><img src={tor3}/></div>
                            <div className='market2gf'>
                                <img src={reward}/>
                                <div><div>BITCOIN</div><div>BTC</div></div>
                            </div>
                            <div className='market2gf'>
                                <img src={reward4}/>
                                <div><div>LITCOIN</div><div>LTC</div></div>
                            </div>
                            <div className='market2gf'>
                                <img src={reward}/>
                                <div><div>BITCOIN</div><div>BTC</div></div>
                            </div>
                            <div className='market2gf'>
                                <img src={reward4}/>
                                <div><div>LITCOIN</div><div>LTC</div></div>
                            </div>
                            <div className='market2gf'>
                                <img src={reward}/>
                                <div><div>BITCOIN</div><div>BTC</div></div>
                            </div>
                    </div>
                    <div>
                            <div className='market2grid1img'><p>Price</p><img src={tor3}/></div>
                            <p className='market2col1-margin'>$300</p>
                            <p className='market2col1-margin'>$300</p>
                            <p className='market2col1-margin'>$300</p>
                            <p className='market2col1-margin'>$300</p>
                            <p className='market2col1-margin'>$300</p>
                    </div>
                    <div>
                            <div className='market2grid1img'><p>1h 4h<span>24h</span>Change</p><img src={tor3}/></div>
                            <p className='market2green'>+5.21%</p>
                            <p className='market2red'>-5.21%</p>
                            <p className='market2green'>+5.21%</p>
                            <p className='market2red'>-5.21%</p>
                            <p className='market2green'>+5.21%</p>
                    </div>
                    <div>
                            <div className='market2grid1img'><p>24 Volume</p><img src={tor3}/></div>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                    </div>
                    <div>
                            <div className='market2grid1img'><p>Market Cap</p><img src={tor3}/></div>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                            <p className='market2col1-margin'>21,6611.13M</p>
                    </div>
                    <div>
                            <div className='market2grid1img market3-hidden'><p>Market Cap</p><img src={tor3}/></div>
                            <p className='market2col1-margin market2col1-blue'>Detail</p>
                            <p className='market2col1-margin market2col1-blue'>Detail</p>
                            <p className='market2col1-margin market2col1-blue'>Detail</p>
                            <p className='market2col1-margin market2col1-blue'>Detail</p>
                            <p className='market2col1-margin market2col1-blue'>Detail</p>
                    </div>
                    <div>
                            <div className='market2grid1img market3-hidden'><p>Market Cap</p><img src={tor3}/></div>
                            <p className='market2col1-margin market2co1-blue'>Trade</p>
                            <p className='market2col1-margin market2co1-blue'>Trade</p>
                            <p className='market2col1-margin market2co1-blue'>Trade</p>
                            <p className='market2col1-margin market2co1-blue'>Trade</p>
                            <p className='market2col1-margin market2co1-blue'>Trade</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Market