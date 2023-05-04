import React, { useEffect, useRef } from 'react'
import './Realtime3.css';

import tor1 from './Img/tor1.png';
import rect4 from './Img/rect4.png';
import rect2 from './Img/rect2.png';
import rect6 from './Img/rect6.png';
import real1 from './Img/real1.png';
import real2 from './Img/real2.png';
import real3 from './Img/real3.png';
import real4 from './Img/real4.png';
import real5 from './Img/real5.png';
import real6 from './Img/real6.png';
import frame12 from './Img/frame12.png';
import { NavLink } from 'react-router-dom';

let tvScriptLoadingPromise;

const Realtime3 = () => {
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
            if (document.getElementById('tradingview_ada75') && 'TradingView' in window) {
              new window.TradingView.widget({
                autosize: true,
                symbol: "BINANCE:BTCUSDT",
                interval: "240",
                timezone: "Etc/UTC",
                theme: "dark",
                style: "2",
                locale: "en",
                toolbar_bg: "#f1f3f6",
                enable_publishing: false,
                allow_symbol_change: true,
                container_id: "tradingview_ada75"
              });
            }
          }
        },
        []
      );
  return (
    <div className='realtime3'>
        <div className='history3col1'>
            <h2>Info</h2>
            <button><img src={tor1}/><p>Save as CSS</p></button>
        </div>
        <div className='history3col2'>
            <p>USD-M</p>
            <p>COIN-M</p>
        </div>
        <div className='history3col3'>
            <NavLink to="/real-time-funding-rate" style={{textDecoration: 'none', color: 'white'}}><p className='realp' >Real-Time Funding Rate</p></NavLink>
            <NavLink to="/real-time-funding-rate2" style={{textDecoration: 'none', color: 'white'}}><p className='realp'>Funding Rate History</p></NavLink>
            <p>Insurance Fund History</p>
            <NavLink to="/real-time-funding-rate3" style={{textDecoration: 'none', color: 'white'}}><p className='realp'>Index</p></NavLink>
            <p>Trading Data</p>
            <p>Funding Rate Arbitrage</p>
        </div>
        <div className='history3col4'>
            <div>
                <form action='#'>
                    <label htmlFor='sort'></label>
                    <select name='sort' id='sort' className='select-style'>
                    <option value='All(0)'> BTCUSDT Perpetual </option>
                    <option value='VIP Upgrade'> VIP Upgrade</option>
                    </select>
                </form>
                <form action='#'>
                    <label htmlFor='sort'></label>
                    <select name='sort' id='sort' className='select-style'>
                    <option value='All(0)'> Primary Index </option>
                    <option value='VIP Upgrade'> VIP Upgrade</option>
                    </select>
                </form>
            </div>
            <p><a href='#'>Learn more about funding rate</a></p>
        </div>
        <div className='history3col5'>
           <p>Insurance Fund Balance: 155,668,458.24 USDT</p>
        </div>
        <div className='realtime3-row2'>
            <div className='realtime3-row2-col1'>
                <p>1m</p>
                <div>1h <img src={rect2}/></div>
                <p>1d</p>
                <p>1w</p>
                <p>1m</p>
            </div>
            <div className='realtime3-row2-col2'><img src={real1}/></div>
        </div>
        <div className='realtime3-row1'>
            <div className='realtime3-col1'>
                <img src={rect6}/>
                <p>2022/08/11 06:31 Open:<span className='realtime3-red'>-0.02096600%</span> High: <span className='realtime3-green'>0.00882600%</span> Low:<span className='realtime3-red'>-0.06484800%</span> Close: <span className='realtime3-red'>-0.01129600%</span> CHANGE: <span className='realtime3-green'>8.73%</span> AMPLITUDE: <span className='realtime3-red'>-159.90%</span></p>
            </div>
            <div className='realtime3-col2'>
                <p>Original</p>
                <p>Trading View</p>
                <p>Depth</p>
                <img src={real5}/>
                <img src={real6}/>
            </div>
        </div>
        <div className='realtime3-col1'>
            <img src={rect6}/>
            <p>MA(7): <span className='realtime3-yellow'>-0.00044499</span> MA(25): <span className='realtime3-purple'>-0.00058004</span> MA(99): <span className='realtime3-blue'>-0.00048964</span><img src={real2}/><img src={real3}/><img src={real4}/></p>
        </div>
        {/* <img src={frame12} className='history3col6'/> */}
        <div className='tradingview-widget-container history3col6' >
            <div id='tradingview_ada75'/>
            <div className="tradingview-widget-copyright">
                <a href="https://www.tradingview.com/symbols/BTCUSDT/?exchange=BINANCE" rel="noopener" target="_blank"><span className="blue-text">BTCUSDT chart</span></a> by TradingView
            </div>
        </div>

        <div className='realtime3-row3'>
            <div className='realtime3-row3-col1'>
                <div>
                    <p>Favourites</p>
                    <p>2022-08-11 01:00:00</p>
                    <p>2022-08-11 01:00:00</p>
                    <p>2022-08-11 01:00:00</p>
                    <p>2022-08-11 01:00:00</p>
                    <p>2022-08-11 01:00:00</p>
                    <p>2022-08-11 01:00:00</p>
                    <p>2022-08-11 01:00:00</p>
                    <p>2022-08-11 01:00:00</p>
                </div>
                <div>
                    <p>Premium Index</p>
                    <p>0.010000%</p> 
                    <p>0.010000%</p> 
                    <p>0.010000%</p> 
                    <p>0.010000%</p> 
                    <p>0.010000%</p> 
                    <p>0.010000%</p> 
                    <p>0.010000%</p> 
                    <p>0.010000%</p>           
                </div>
            </div>
            <div className='realtime3-stat3col2'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <img src={rect4}/>
            </div>
        </div>
    </div>
  )
}

export default Realtime3