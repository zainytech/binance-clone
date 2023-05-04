import React from 'react'
import './Marketing.css';
import { Link } from 'react-router-dom';

import tor2 from './Img/tor2.png';
import tor3 from './Img/tor3.png';
import reward from './Img/reward.png';
import reward4 from './Img/reward4.png';
import frame8 from './Img/frame8.png';

const Marketing = () => {
  return (
    <div className='marketing'>
        <div className='marketrow1'>
            <div>
                <Link to='/market-favourites' style={{textDecoration: 'none'}}><img src={tor2}/></Link>
                <h4>Market Overview</h4>
            </div>
            <button>Markets Overview</button>
        </div>
        <div className='marketrow2'>
            <div className='market2col1'>
                <div className='marketrow1'>
                    <h6>Top Gainers</h6>
                    <button>Markets Overview</button>
                </div>
                <div className='market2grid1'>
                    <div>
                        <div className='market2grid1img'><p>Name</p><img src={tor3}/></div>
                        <div className='market2gf'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                        <div className='market2gf'>
                            <img src={reward4}/>
                            <div><p>LITCOIN</p><p>LTC</p></div>
                        </div>
                        <div className='market2gf'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                        <div className='market2gf'>
                            <img src={reward4}/>
                            <div><p>LITCOIN</p><p>LTC</p></div>
                        </div>
                        <div className='market2gf'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                    </div>
                    <div>
                        <div className='market2grid1img'><p>Price</p><img src={tor3}/></div>
                        <p className='market2ppd'>$300</p>
                        <p className='market2ppd'>$300</p>
                        <p className='market2ppd'>$300</p>
                        <p className='market2ppd'>$300</p>
                        <p className='market2ppd'>$300</p>
                    </div>
                    <div>
                        <div className='market2grid1img'><p>1h 4h<span>24h</span>Change</p><img src={tor3}/></div>
                        <p className='market2green'>+5.21%</p>
                        <p className='market2red'>-5.21%</p>
                        <p className='market2green'>+5.21%</p>
                        <p className='market2red'>-5.21%</p>
                        <p className='market2green'>+5.21%</p>
                    </div>
                </div>
            </div>
            <div className='market2col1'>
                <div className='marketrow1'>
                    <h6>Top Gainers</h6>
                    <button>Markets Overview</button>
                </div>
                <div className='market2grid1'>
                    <div>
                        <div className='market2grid1img'><p>Name</p><img src={tor3}/></div>
                        <div className='market2gf'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                        <div className='market2gf'>
                            <img src={reward4}/>
                            <div><p>LITCOIN</p><p>LTC</p></div>
                        </div>
                        <div className='market2gf'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                        <div className='market2gf'>
                            <img src={reward4}/>
                            <div><p>LITCOIN</p><p>LTC</p></div>
                        </div>
                        <div className='market2gf'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                    </div>
                    <div>
                        <div className='market2grid1img'><p>Price</p><img src={tor3}/></div>
                        <p className='market2ppd'>$300</p>
                        <p className='market2ppd'>$300</p>
                        <p className='market2ppd'>$300</p>
                        <p className='market2ppd'>$300</p>
                        <p className='market2ppd'>$300</p>
                    </div>
                    <div>
                        <div className='market2grid1img'><p>1h 4h<span>24h</span>Change</p><img src={tor3}/></div>
                        <p className='market2green'>+5.21%</p>
                        <p className='market2red'>-5.21%</p>
                        <p className='market2green'>+5.21%</p>
                        <p className='market2red'>-5.21%</p>
                        <p className='market2green'>+5.21%</p>
                    </div>
                </div>
            </div>
            <div className='market2col1'>
                <div className='marketrow1'>
                    <h6>Top Gainers</h6>
                    <button>Markets Overview</button>
                </div>
                <div className='market2grid1'>
                    <div>
                        <div className='market2grid1img'><p>Name</p><img src={tor3}/></div>
                        <div className='market2gf'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                        <div className='market2gf'>
                            <img src={reward4}/>
                            <div><p>LITCOIN</p><p>LTC</p></div>
                        </div>
                        <div className='market2gf'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                        <div className='market2gf'>
                            <img src={reward4}/>
                            <div><p>LITCOIN</p><p>LTC</p></div>
                        </div>
                        <div className='market2gf'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                    </div>
                    <div>
                        <div className='market2grid1img'><p>Price</p><img src={tor3}/></div>
                        <p className='market2ppd'>$300</p>
                        <p className='market2ppd'>$300</p>
                        <p className='market2ppd'>$300</p>
                        <p className='market2ppd'>$300</p>
                        <p className='market2ppd'>$300</p>
                    </div>
                    <div>
                        <div className='market2grid1img'><p>1h 4h<span>24h</span>Change</p><img src={tor3}/></div>
                        <p className='market2green'>+5.21%</p>
                        <p className='market2red'>-5.21%</p>
                        <p className='market2green'>+5.21%</p>
                        <p className='market2red'>-5.21%</p>
                        <p className='market2green'>+5.21%</p>
                    </div>
                </div>
            </div>
            <div className='market2col1'>
                <div className='marketrow1'>
                    <h6>Top Gainers</h6>
                    <button>Markets Overview</button>
                </div>
                <div className='market2grid1'>
                    <div>
                        <div className='market2grid1img'><p>Name</p><img src={tor3}/></div>
                        <div className='market2gf'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                        <div className='market2gf'>
                            <img src={reward4}/>
                            <div><p>LITCOIN</p><p>LTC</p></div>
                        </div>
                        <div className='market2gf'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                        <div className='market2gf'>
                            <img src={reward4}/>
                            <div><p>LITCOIN</p><p>LTC</p></div>
                        </div>
                        <div className='market2gf'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                    </div>
                    <div>
                        <div className='market2grid1img'><p>Price</p><img src={tor3}/></div>
                        <p className='market2ppd'>$300</p>
                        <p className='market2ppd'>$300</p>
                        <p className='market2ppd'>$300</p>
                        <p className='market2ppd'>$300</p>
                        <p className='market2ppd'>$300</p>
                    </div>
                    <div>
                        <div className='market2grid1img'><p>1h 4h<span>24h</span>Change</p><img src={tor3}/></div>
                        <p className='market2green'>+5.21%</p>
                        <p className='market2red'>-5.21%</p>
                        <p className='market2green'>+5.21%</p>
                        <p className='market2red'>-5.21%</p>
                        <p className='market2green'>+5.21%</p>
                    </div>
                </div>
            </div>
            <div className='market2col1'>
                <div className='marketrow1'>
                    <h6>Top Gainers</h6>
                    <button>Markets Overview</button>
                </div>
                <div className='market2grid1'>
                    <div>
                        <div className='market2grid1img'><p>Name</p><img src={tor3}/></div>
                        <div className='market2gf'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                        <div className='market2gf'>
                            <img src={reward4}/>
                            <div><p>LITCOIN</p><p>LTC</p></div>
                        </div>
                        <div className='market2gf'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                        <div className='market2gf'>
                            <img src={reward4}/>
                            <div><p>LITCOIN</p><p>LTC</p></div>
                        </div>
                        <div className='market2gf'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                    </div>
                    <div>
                        <div className='market2grid1img'><p>Price</p><img src={tor3}/></div>
                        <p className='market2ppd'>$300</p>
                        <p className='market2ppd'>$300</p>
                        <p className='market2ppd'>$300</p>
                        <p className='market2ppd'>$300</p>
                        <p className='market2ppd'>$300</p>
                    </div>
                    <div>
                        <div className='market2grid1img'><p>1h 4h<span>24h</span>Change</p><img src={tor3}/></div>
                        <p className='market2green'>+5.21%</p>
                        <p className='market2red'>-5.21%</p>
                        <p className='market2green'>+5.21%</p>
                        <p className='market2red'>-5.21%</p>
                        <p className='market2green'>+5.21%</p>
                    </div>
                </div>
            </div>
            <div className='market2col1'>
                <div className='marketrow1'>
                    <h6>Top Gainers</h6>
                    <button>Markets Overview</button>
                </div>
                <div className='market2grid1'>
                    <div>
                        <div className='market2grid1img'><p>Name</p><img src={tor3}/></div>
                        <div className='market2gf'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                        <div className='market2gf'>
                            <img src={reward4}/>
                            <div><p>LITCOIN</p><p>LTC</p></div>
                        </div>
                        <div className='market2gf'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                        <div className='market2gf'>
                            <img src={reward4}/>
                            <div><p>LITCOIN</p><p>LTC</p></div>
                        </div>
                        <div className='market2gf'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                    </div>
                    <div>
                        <div className='market2grid1img'><p>Price</p><img src={tor3}/></div>
                        <p className='market2ppd'>$300</p>
                        <p className='market2ppd'>$300</p>
                        <p className='market2ppd'>$300</p>
                        <p className='market2ppd'>$300</p>
                        <p className='market2ppd'>$300</p>
                    </div>
                    <div>
                        <div className='market2grid1img'><p>1h 4h<span>24h</span>Change</p><img src={tor3}/></div>
                        <p className='market2green'>+5.21%</p>
                        <p className='market2red'>-5.21%</p>
                        <p className='market2green'>+5.21%</p>
                        <p className='market2red'>-5.21%</p>
                        <p className='market2green'>+5.21%</p>
                    </div>
                </div>
            </div>
            <div className='market2col1 market2frame8'>
                <div className='marketrow1'>
                    <h6>Price Change Distribution</h6>
                </div>
                <img src={frame8} className='mar2frame8'/>
            </div>
            <div className='market2col1'>
                <div className='marketrow1'>
                    <h6>Top Gainers</h6>
                    <button>Markets Overview</button>
                </div>
                <div className='market2grid1'>
                    <div>
                        <div className='market2grid1img'><p>Name</p><img src={tor3}/></div>
                        <div className='market2gf'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                        <div className='market2gf'>
                            <img src={reward4}/>
                            <div><p>LITCOIN</p><p>LTC</p></div>
                        </div>
                        <div className='market2gf'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                        <div className='market2gf'>
                            <img src={reward4}/>
                            <div><p>LITCOIN</p><p>LTC</p></div>
                        </div>
                        <div className='market2gf'>
                            <img src={reward}/>
                            <div><p>BITCOIN</p><p>BTC</p></div>
                        </div>
                    </div>
                    <div>
                        <div className='market2grid1img'><p>Price</p><img src={tor3}/></div>
                        <p className='market2ppd'>$300</p>
                        <p className='market2ppd'>$300</p>
                        <p className='market2ppd'>$300</p>
                        <p className='market2ppd'>$300</p>
                        <p className='market2ppd'>$300</p>
                    </div>
                    <div>
                        <div className='market2grid1img'><p>1h 4h<span>24h</span>Change</p><img src={tor3}/></div>
                        <p className='market2green'>+5.21%</p>
                        <p className='market2red'>-5.21%</p>
                        <p className='market2green'>+5.21%</p>
                        <p className='market2red'>-5.21%</p>
                        <p className='market2green'>+5.21%</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='marketrow3'>
            <h4>Start earning today</h4>
            <button>Sign Up</button>
        </div>
    </div>
  )
}

export default Marketing