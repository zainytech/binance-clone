import React, {useState} from 'react'
import './Strategy.css'

import video from './Img/video.png';
import binance4 from './Img/binance4.png';
import setting from './Img/setting.png';
import { NavLink } from 'react-router-dom';

const Strategy = () => {
    const [open, setOpen] = useState(false);
    const openDiv=()=>{
        setOpen(!open)
    }
    const handleDiv=()=>{
        setOpen(!open)
    }
  return (
    <div className='strate'>
        <div className='straterow1'>
            <div className='strate1col1'>
                <h2>Strategy Trading</h2>
                <p>Trading made easy, trade like a pro</p>
            </div>
            <div className='strate1col2'>
                <div>
                    <p>Active Strategies</p>
                    <h6>37232</h6>
                </div>
                <div>
                    <p>Total Value</p>
                    <h6>$99,723,232.45</h6>
                </div>
            </div>
        </div>

        <div className='straterow2'>
            <div className='strate2col1'>
                <NavLink to='/strategy-trading' style={{textDecoration: 'none', color: 'white'}}><p className='strate2ap'>Create Strategy</p></NavLink>  
                <NavLink to='/strategy-trading2' style={{textDecoration: 'none', color: 'white'}}><p className='strate2ap'>Strategy Pool</p></NavLink>  
                <NavLink to='/strategy-trading3' style={{textDecoration: 'none', color: 'white'}}><p className='strate2ap'>Trading Analysis</p></NavLink>               
            </div>
            <div className='strate2col2'>
                <button onClick={openDiv}><img src={setting}/>Setting</button>
                <button><img src={video}/>Tutorial</button>
            </div>
        </div>

        <div className='straterow3'>
            <div className='strate3row1'>
                <p>Strategy Types</p>
                <form action='#'>
                    <label htmlFor='sort'></label>
                    <select name='sort' id='sort' className='select-style'>
                    <option value='All(0)'> All(0) </option>
                    <option value='VIP Upgrade'> VIP Upgrade</option>
                    </select>
                </form>
            </div>
            <div className='strate3row1'>
                <p>Strategy Types</p>
                <form action='#'>
                    <label htmlFor='sort'></label>
                    <select name='sort' id='sort' className='select-style'>
                    <option value='All(0)'> All(0) </option>
                    <option value='VIP Upgrade'> VIP Upgrade</option>
                    </select>
                </form>
            </div>
            <div className='strate3row1'>
                <p>Strategy Types</p>
                <form action='#'>
                    <label htmlFor='sort'></label>
                    <select name='sort' id='sort' className='select-style'>
                    <option value='All(0)'> All(0) </option>
                    <option value='VIP Upgrade'> VIP Upgrade</option>
                    </select>
                </form>
            </div>
            <div className='strate3row1'>
                <p>Strategy Types</p>
                <form action='#'>
                    <label htmlFor='sort'></label>
                    <select name='sort' id='sort' className='select-style'>
                    <option value='All(0)'> All(0) </option>
                    <option value='VIP Upgrade'> VIP Upgrade</option>
                    </select>
                </form>
            </div>
            <div className='strate3row1'>
                <p>Strategy Types</p>
                <form action='#'>
                    <label htmlFor='sort'></label>
                    <select name='sort' id='sort' className='select-style'>
                    <option value='All(0)'> All(0) </option>
                    <option value='VIP Upgrade'> VIP Upgrade</option>
                    </select>
                </form>
            </div>
            <div className='strate3row2'>
                <button>Search</button>
                <button>Reset</button>
            </div>
        </div>

        <div className='straterow4'>
            <h4>Spot Grid</h4>
            <div className='strate4col1'>
                <div>
                    <div>
                        <button>Spot Grid</button>
                        <p>Futures Grid</p>
                    </div>
                    <p>Copy Popularity</p>
                </div>
                <p>Data refresh hourly. Last updateon 2022 08-16 13:12:56</p>
            </div>
        </div>

        <div className='straterow5'>
            <div className='strate5col'>
                <div className='starte5col1'>
                    <p>GMT/BUSD</p>
                    <div><img src={binance4}/>52</div>
                </div>
                <div className='starte5col2'>
                    <div><h6>695.93%</h6><p>ROI</p></div>
                    <div><h6>677.45</h6><p>PNL(USDT)</p></div>
                </div>
                <div className='starte5col1'>
                    <p>Running Time</p>
                    <p>95d 7h 30m</p>
                </div>
                <button>Use Parameter</button>
            </div>
            <div className='strate5col'>
                <div className='starte5col1'>
                    <p>GMT/BUSD</p>
                    <div><img src={binance4}/>52</div>
                </div>
                <div className='starte5col2'>
                    <div><h6>695.93%</h6><p>ROI</p></div>
                    <div><h6>677.45</h6><p>PNL(USDT)</p></div>
                </div>
                <div className='starte5col1'>
                    <p>Running Time</p>
                    <p>95d 7h 30m</p>
                </div>
                <button>Use Parameter</button>
            </div>
            <div className='strate5col'>
                <div className='starte5col1'>
                    <p>GMT/BUSD</p>
                    <div><img src={binance4}/>52</div>
                </div>
                <div className='starte5col2'>
                    <div><h6>695.93%</h6><p>ROI</p></div>
                    <div><h6>677.45</h6><p>PNL(USDT)</p></div>
                </div>
                <div className='starte5col1'>
                    <p>Running Time</p>
                    <p>95d 7h 30m</p>
                </div>
                <button>Use Parameter</button>
            </div>
            <div className='strate5col'>
                <div className='starte5col1'>
                    <p>GMT/BUSD</p>
                    <div><img src={binance4}/>52</div>
                </div>
                <div className='starte5col2'>
                    <div><h6>695.93%</h6><p>ROI</p></div>
                    <div><h6>677.45</h6><p>PNL(USDT)</p></div>
                </div>
                <div className='starte5col1'>
                    <p>Running Time</p>
                    <p>95d 7h 30m</p>
                </div>
                <button>Use Parameter</button>
            </div>
            <div className='strate5col'>
                <div className='starte5col1'>
                    <p>GMT/BUSD</p>
                    <div><img src={binance4}/>52</div>
                </div>
                <div className='starte5col2'>
                    <div><h6>695.93%</h6><p>ROI</p></div>
                    <div><h6>677.45</h6><p>PNL(USDT)</p></div>
                </div>
                <div className='starte5col1'>
                    <p>Running Time</p>
                    <p>95d 7h 30m</p>
                </div>
                <button>Use Parameter</button>
            </div>
            <div className='strate5col'>
                <div className='starte5col1'>
                    <p>GMT/BUSD</p>
                    <div><img src={binance4}/>52</div>
                </div>
                <div className='starte5col2'>
                    <div><h6>695.93%</h6><p>ROI</p></div>
                    <div><h6>677.45</h6><p>PNL(USDT)</p></div>
                </div>
                <div className='starte5col1'>
                    <p>Running Time</p>
                    <p>95d 7h 30m</p>
                </div>
                <button>Use Parameter</button>
            </div>
            <div className='strate5col'>
                <div className='starte5col1'>
                    <p>GMT/BUSD</p>
                    <div><img src={binance4}/>52</div>
                </div>
                <div className='starte5col2'>
                    <div><h6>695.93%</h6><p>ROI</p></div>
                    <div><h6>677.45</h6><p>PNL(USDT)</p></div>
                </div>
                <div className='starte5col1'>
                    <p>Running Time</p>
                    <p>95d 7h 30m</p>
                </div>
                <button>Use Parameter</button>
            </div>
            <div className='strate5col'>
                <div className='starte5col1'>
                    <p>GMT/BUSD</p>
                    <div><img src={binance4}/>52</div>
                </div>
                <div className='starte5col2'>
                    <div><h6>695.93%</h6><p>ROI</p></div>
                    <div><h6>677.45</h6><p>PNL(USDT)</p></div>
                </div>
                <div className='starte5col1'>
                    <p>Running Time</p>
                    <p>95d 7h 30m</p>
                </div>
                <button>Use Parameter</button>
            </div>
            <div className='strate5col'>
                <div className='starte5col1'>
                    <p>GMT/BUSD</p>
                    <div><img src={binance4}/>52</div>
                </div>
                <div className='starte5col2'>
                    <div><h6>695.93%</h6><p>ROI</p></div>
                    <div><h6>677.45</h6><p>PNL(USDT)</p></div>
                </div>
                <div className='starte5col1'>
                    <p>Running Time</p>
                    <p>95d 7h 30m</p>
                </div>
                <button>Use Parameter</button>
            </div>
        </div>

        <div className='straterow4'>
            <h4>Futures Grid</h4>
            <div className='strate4col1'>
                <div>
                    <div>
                        <button>Last 7 days</button>
                        <p>Last 7 days</p>
                    </div>
                    <p>Copy Popularity</p>
                </div>
                <p>Data refresh hourly. Last updateon 2022 08-16 13:12:56</p>
            </div>
        </div>

        <div className='straterow5'>
            <div className='strate5col'>
                <div className='starte5col1'>
                    <p>GMT/BUSD</p>
                    <div><img src={binance4}/>52</div>
                </div>
                <div className='starte5col2'>
                    <div><h6>695.93%</h6><p>ROI</p></div>
                    <div><h6>677.45</h6><p>PNL(USDT)</p></div>
                </div>
                <div className='starte5col1'>
                    <p>Running Time</p>
                    <p>95d 7h 30m</p>
                </div>
                <button>Use Parameter</button>
            </div>
            <div className='strate5col'>
                <div className='starte5col1'>
                    <p>GMT/BUSD</p>
                    <div><img src={binance4}/>52</div>
                </div>
                <div className='starte5col2'>
                    <div><h6>695.93%</h6><p>ROI</p></div>
                    <div><h6>677.45</h6><p>PNL(USDT)</p></div>
                </div>
                <div className='starte5col1'>
                    <p>Running Time</p>
                    <p>95d 7h 30m</p>
                </div>
                <button>Use Parameter</button>
            </div>
            <div className='strate5col'>
                <div className='starte5col1'>
                    <p>GMT/BUSD</p>
                    <div><img src={binance4}/>52</div>
                </div>
                <div className='starte5col2'>
                    <div><h6>695.93%</h6><p>ROI</p></div>
                    <div><h6>677.45</h6><p>PNL(USDT)</p></div>
                </div>
                <div className='starte5col1'>
                    <p>Running Time</p>
                    <p>95d 7h 30m</p>
                </div>
                <button>Use Parameter</button>
            </div>
            <div className='strate5col'>
                <div className='starte5col1'>
                    <p>GMT/BUSD</p>
                    <div><img src={binance4}/>52</div>
                </div>
                <div className='starte5col2'>
                    <div><h6>695.93%</h6><p>ROI</p></div>
                    <div><h6>677.45</h6><p>PNL(USDT)</p></div>
                </div>
                <div className='starte5col1'>
                    <p>Running Time</p>
                    <p>95d 7h 30m</p>
                </div>
                <button>Use Parameter</button>
            </div>
            <div className='strate5col'>
                <div className='starte5col1'>
                    <p>GMT/BUSD</p>
                    <div><img src={binance4}/>52</div>
                </div>
                <div className='starte5col2'>
                    <div><h6>695.93%</h6><p>ROI</p></div>
                    <div><h6>677.45</h6><p>PNL(USDT)</p></div>
                </div>
                <div className='starte5col1'>
                    <p>Running Time</p>
                    <p>95d 7h 30m</p>
                </div>
                <button>Use Parameter</button>
            </div>
            <div className='strate5col'>
                <div className='starte5col1'>
                    <p>GMT/BUSD</p>
                    <div><img src={binance4}/>52</div>
                </div>
                <div className='starte5col2'>
                    <div><h6>695.93%</h6><p>ROI</p></div>
                    <div><h6>677.45</h6><p>PNL(USDT)</p></div>
                </div>
                <div className='starte5col1'>
                    <p>Running Time</p>
                    <p>95d 7h 30m</p>
                </div>
                <button>Use Parameter</button>
            </div>
            <div className='strate5col'>
                <div className='starte5col1'>
                    <p>GMT/BUSD</p>
                    <div><img src={binance4}/>52</div>
                </div>
                <div className='starte5col2'>
                    <div><h6>695.93%</h6><p>ROI</p></div>
                    <div><h6>677.45</h6><p>PNL(USDT)</p></div>
                </div>
                <div className='starte5col1'>
                    <p>Running Time</p>
                    <p>95d 7h 30m</p>
                </div>
                <button>Use Parameter</button>
            </div>
            <div className='strate5col'>
                <div className='starte5col1'>
                    <p>GMT/BUSD</p>
                    <div><img src={binance4}/>52</div>
                </div>
                <div className='starte5col2'>
                    <div><h6>695.93%</h6><p>ROI</p></div>
                    <div><h6>677.45</h6><p>PNL(USDT)</p></div>
                </div>
                <div className='starte5col1'>
                    <p>Running Time</p>
                    <p>95d 7h 30m</p>
                </div>
                <button>Use Parameter</button>
            </div>
            <div className='strate5col'>
                <div className='starte5col1'>
                    <p>GMT/BUSD</p>
                    <div><img src={binance4}/>52</div>
                </div>
                <div className='starte5col2'>
                    <div><h6>695.93%</h6><p>ROI</p></div>
                    <div><h6>677.45</h6><p>PNL(USDT)</p></div>
                </div>
                <div className='starte5col1'>
                    <p>Running Time</p>
                    <p>95d 7h 30m</p>
                </div>
                <button>Use Parameter</button>
            </div>
        </div>
        {open ?
        <div className='staterow6'>
            <div className='rfpopupcol1'>
                <h6>Ranking Settings</h6>
                <button onClick={handleDiv}><i class="fa-solid fa-xmark"></i></button>
            </div>
            <p>All your strategy orders participate in the ranking in the strategy pool by default. Once disabled, your strategy order will not be displayed in the strategy pool when the ranking data is updated next time. Ranking Data refreshes hourly and is last updated at 2022-08-17 15:12:59.</p>
            <div className='history3col2'>
                <p>Spot Grid</p>
                <p>Futures Grid</p>
            </div>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="signed-in"/>
            <label for="vehicle2" className='graph1agree'> All your strategy orders participate in the ranking by default</label>
            <div className='state6row2'>
                <p>Market</p>
                <p>ROI</p>
                <p>PNL</p>
                <p>Running Time</p>
                <p>Action</p>
            </div>
                    
        </div>  : null}

    </div>
  )
}

export default Strategy