import React from 'react'
import './Strategy4.css';

import video from './Img/video.png';
import setting from './Img/setting.png';
import rect4 from './Img/rect4.png';
import rect6 from './Img/rect6.png';

const Strategy4 = () => {
  return (
    <div className='strat4'>
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

        <div className='state-sec'>
            <div className='straterow4'>
                <h4>Trending Market Top 10</h4>
                <div className='strate4col1'>
                    <div>
                        <div>
                            <button>Spot Grid</button>
                            <p>Futures Grid</p>
                        </div>
                        <p>Copy Popularity</p>
                    </div>
                    <p>Data refresh hourly. Last update on 2022 08-16 13:12:56</p>
                </div>
            </div>

            <div className='strate4btn1'>
                <button><img src={rect6}/>Go Back</button>
            </div>

            <div className='state3row1-scroll'>
                <div className='stat3row1'>
                    <div className='stat3col1'>
                        <p>Ranking</p>
                        <p>No.1</p>
                        <p>No.2</p>
                        <p>No.3</p>
                        <p>No.4</p>
                        <p>No.5</p>
                        <p>No.6</p>
                        <p>No.7</p>
                        <p>No.8</p>
                        <p>No.9</p>
                        <p>No.10</p>
                        <p>No.11</p>
                        <p>No.12</p>
                        <p>No.13</p>
                        <p>No.14</p>
                        <p>No.15</p>
                        <p>No.16</p>
                    </div>
                    <div className='stat3col1'>
                        <p>Market</p>
                        <p>BTC/BUSD</p>
                        <p>BTC/BUSD</p>
                        <p>BTC/BUSD</p>
                        <p>BTC/BUSD</p>
                        <p>BTC/BUSD</p>
                        <p>BTC/BUSD</p>
                        <p>BTC/BUSD</p>
                        <p>BTC/BUSD</p>
                        <p>BTC/BUSD</p>
                        <p>BTC/BUSD</p>
                        <p>BTC/BUSD</p>
                        <p>BTC/BUSD</p>
                        <p>BTC/BUSD</p>
                        <p>BTC/BUSD</p>
                        <p>BTC/BUSD</p>
                        <p>BTC/BUSD</p>
                    </div>
                    <div className='stat3col1'>
                        <p>Total Strategies in Running</p>
                        <p>2498</p>
                        <p>2498</p>
                        <p>2498</p>
                        <p>2498</p>
                        <p>2498</p>
                        <p>2498</p>
                        <p>2498</p>
                        <p>2498</p>
                        <p>2498</p>
                        <p>2498</p>
                        <p>2498</p> 
                        <p>2498</p>
                        <p>2498</p>
                        <p>2498</p>
                        <p>2498</p>
                        <p>2498</p>                    
                    </div>
                    <div className='stat3col1'>
                        <p>Action</p>
                        <button>Create</button>
                        <button>Create</button>
                        <button>Create</button>
                        <button>Create</button>
                        <button>Create</button>
                        <button>Create</button>
                        <button>Create</button>
                        <button>Create</button>
                        <button>Create</button>
                        <button>Create</button>
                        <button>Create</button>
                        <button>Create</button>
                        <button>Create</button>
                        <button>Create</button>
                        <button>Create</button>
                        <button>Create</button>
                    </div>
                </div>
                <div className='stat3col2'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <img src={rect4}/>
                </div>           
            </div>  
        </div>
    </div>
  )
}

export default Strategy4