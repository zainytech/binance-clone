import React, { useEffect, useState, useRef } from 'react'
import './Graph2.css';

import rect2 from './Img/rect2.png';
import rect4 from './Img/rect4.png';
import rect5 from './Img/rect5.png';
import frame1 from './Img/frame1.png';
import frame2 from './Img/frame2.png';
import frame3 from './Img/frame3.png';

let tvScriptLoadingPromise;


const Graph2 = () => {
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
    <div className='graph2'>
       <div className='graph1col2'>
            <h6 className='graph2margin'>Order Book</h6>
            <img src={frame3} className='graph2margin'/>
            <div className='graph12col'>
            <div>
                <p>Pair</p>
                <p>Price (USDT)</p>
                <p>Change</p>
            </div>
            <div className='graph12row1'>
                <p>1 INCH/BTC</p>
                <p className='graph2green'>0.000034</p>
                <p className='graph2green'>+3.2%</p>
            </div>
            <div className='graph12row1'>
                <p>1 INCH/BTC</p>
                <p className='graph2red'>0.000034</p>
                <p className='graph2red'>-3.2%</p>
            </div>
            <div className='graph12row1'>
                <p>1 INCH/BTC</p>
                <p className='graph2green'>0.000034</p>
                <p className='graph2red'>-3.2%</p>
            </div>
            <div className='graph12row1'>
                <p>1 INCH/BTC</p>
                <p className='graph2green'>0.000034</p>
                <p className='graph2green'>+3.2%</p>
            </div>
            <div className='graph12row1'>
            <p>1 INCH/BTC</p>
                <p className='graph2green'>0.000034</p>
                <p className='graph2red'>-3.2%</p>
            </div>
            <div className='graph12row1'>
            <p>1 INCH/BTC</p>
                <p className='graph2red'>0.000034</p>
                <p className='graph2red'>-3.2%</p>
            </div>
            <div className='graph12row1'>
            <p>1 INCH/BTC</p>
                <p className='graph2green'>0.000034</p>
                <p className='graph2green'>+3.2%</p>
            </div>
            <div className='graph12row1'>
            <p>1 INCH/BTC</p>
                <p className='graph2red'>0.000034</p>
                <p className='graph2red'>-3.2%</p>
            </div>
            <div className='graph12row3'>
                <p>1 INCH/BTC</p>
                <p className='graph2green'>0.000034</p>
                <p className='graph2green'>+3.2%</p>
            </div>
            <div className='graph12row3'>
                <p>1 INCH/BTC</p>
                <p className='graph2red'>0.000034</p>
                <p className='graph2red'>-3.2%</p>
            </div>
            <div className='graph12row3'>
            <p>1 INCH/BTC</p>
                <p className='graph2green'>0.000034</p>
                <p className='graph2green'>+3.2%</p>
            </div>
            <div className='graph12row3'>
            <p>1 INCH/BTC</p>
                <p className='graph2red'>0.000034</p>
                <p className='graph2red'>-3.2%</p>
            </div>
            <div className='graph12row3'>
            <p>1 INCH/BTC</p>
                <p className='graph2green'>0.000034</p>
                <p className='graph2green'>+3.2%</p>
            </div>
            <div className='graph12row3'>
            <p>1 INCH/BTC</p>
                <p className='graph2red'>0.000034</p>
                <p className='graph2red'>-3.2%</p>
            </div>
            <div className='graph12row3'>
            <p>1 INCH/BTC</p>
                <p className='graph2green'>0.000034</p>
                <p className='graph2green'>+3.2%</p>
            </div>
            <div className='graph12row3'>
            <p>1 INCH/BTC</p>
                <p className='graph2green'>0.000034</p>
                <p className='graph2red'>-3.2%</p>
            </div>
            <div className='graph12row3'>
            <p>1 INCH/BTC</p>
                <p className='graph2red'>0.000034</p>
                <p className='graph2red'>-3.2%</p>
            </div>
            <div className='graph12row3'>
            <p>1 INCH/BTC</p>
                <p className='graph2green'>0.000034</p>
                <p className='graph2green'>+3.2%</p>
            </div>
            <div className='graph12row3'>
            <p>1 INCH/BTC</p>
                <p className='graph2red'>0.000034</p>
                <p className='graph2red'>-3.2%</p>
            </div>
            <div className='graph12row3'>
            <p>1 INCH/BTC</p>
                <p className='graph2green'>0.000034</p>
                <p className='graph2green'>+3.2%</p>
            </div>
            <div className='graph12row3'>
            <p>1 INCH/BTC</p>
                <p className='graph2red'>0.000034</p>
                <p className='graph2red'>-3.2%</p>
            </div>
            <div className='graph12row1'>
            <p>1 INCH/BTC</p>
                <p className='graph2green'>0.000034</p>
                <p className='graph2green'>+3.2%</p>
            </div>
            <div className='graph12row1'>
            <p>1 INCH/BTC</p>
                <p className='graph2red'>0.000034</p>
                <p className='graph2red'>-3.2%</p>
            </div>
            <div className='graph12row1'>
            <p>1 INCH/BTC</p>
                <p className='graph2green'>0.000034</p>
                <p className='graph2green'>+3.2%</p>
            </div>
            </div>
        </div>
        <div className='graph1first'>
            {/* <div className='graph1col1'>
            <div className='graph1row1'>
                <div><h6>BTCUSDT</h6><p>Perpetual</p></div>
                <img src={rect2}/>
            </div>
            <h6 className='graph1row3'>23690.9</h6>
            <div><p>Mark</p><p>BTCUSDT</p></div>
            <div><p>Index</p><p>23,707.1</p></div>
            <div><p>Funding/Countdown</p><div className='graph1row2'><p>0.00002%</p><p>03:43:34</p></div></div>
            <div className='graph1row4'><p>24h Change </p><p>-0.0002 - 3.83%</p></div>
            <img src={rect4} className='graph1row5'/>
            <img src={rect5} className='graph1row5'/>
            </div>
            <img src={frame1} className='frame1'/>
            <img src={frame2} className='frame1'/> */}
            <div className='tradingview-widget-container'>
            <div id='tradingview_ada75'/>
            <div className="tradingview-widget-copyright">
                <a href="https://www.tradingview.com/symbols/BTCUSDT/?exchange=BINANCE" rel="noopener" target="_blank"><span className="blue-text">BTCUSDT chart</span></a> by TradingView
            </div>
            </div>
        </div>
        <div className='graph1col3'>
            <h5>Oen Future's Account</h5>
            <p>Remainder</p>
            <p>Futures trading is a highly endeavor, with the potential for both great profits and significant losses. Please be aware that in the event of extreme price movement. there is a chance that all margin balence in your future walet may be liquidated. Futures trading is a restricted for users from certain regions.</p>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="signed-in"/>
            <label for="vehicle2" className='graph1agree'> I have read and agree to Domain Name <a href='#'>Futures Services Adreement</a>.</label>
            <button  className='graph1btn'>Funding referral code (options)</button>
            <button className='verify1btn'>Open Now</button>
            <p className='graph1trade'><a href='#'>Click to see the Futures Trading guide</a></p>
        </div>
    </div>
  )
}

export default Graph2