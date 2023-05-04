import React from 'react'
import './Strategy2.css'

import video from './Img/video.png';
import setting from './Img/setting.png';
import { Link } from 'react-router-dom';

const Strategy2 = () => {
  return (
    <div className='strat2'>
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
                <p>Create Strategy</p>
                <p>Strategy Pool</p>
                <p>Trading Analysis</p>                
            </div>
            <div className='strate2col2'>
                <button><img src={setting}/>Setting</button>
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

        <div className='strat2row4'>
            <h6>Long term yeild strategy</h6>
            <div className='strat4col1'>
                <div>
                    <p>Spot Grid</p>
                    <p>Buy low and sell high automatically 24/7 with just one click.</p>
                    <p><span>20,613 </span>Strategies Are Running. Total Investment <span>78,858,750.44 USDT</span></p>
                </div>
                <div className='strat4col2'>
                <Link to='/strategy-trading' style={{textDecoration: 'none', color: 'white'}}><button>Create</button></Link>
                </div>
            </div>
            <div className='strat4col1'>
                <div>
                    <p>Spot Grid</p>
                    <p>Buy low and sell high automatically 24/7 with just one click.</p>
                    <p><span>20,613 </span>Strategies Are Running. Total Investment <span>78,858,750.44 USDT</span></p>
                </div>
                <div className='strat4col2'>
                <Link to='/strategy-trading3' style={{textDecoration: 'none', color: 'white'}}><button>Create</button>
                </Link>
                </div>
            </div>
        </div>

        <div className='strat2row4'>
            <h6>Smart Trading</h6>
            <div className='strat4col1'>
                <div>
                    <p>TWAP</p>
                    <p>Slice large orders into smaller ones to get a better execution price. Available on API trading.</p>
                </div>
                <div className='strat4col2'><button>Create</button></div>
            </div>
            <div className='strat4col1'>
                <div>
                    <p>VP</p>
                    <p>Limit the market impact of your large orders by dividing them across a specific market volume ratio. API only.</p>
                </div>
                <div className='strat4col2'><button>API Access</button></div>
            </div>
        </div>
    </div>
  )
}

export default Strategy2