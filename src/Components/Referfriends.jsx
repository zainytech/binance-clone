import React, { useState } from 'react'
import './Referfriends.css'

import binance8 from './Img/binance8.png';
import binance9 from './Img/binance9.png';
import binance12 from './Img/binance12.png';
import gift1 from './Img/gift1.png';
import gift2 from './Img/gift2.png';
import gift3 from './Img/gift3.png';
import gift4 from './Img/gift4.png';
import gift5 from './Img/gift5.png';
import rect3 from './Img/rect3.png';
import circles from './Img/circles.png';
import reward from './Img/reward.png';
import reward1 from './Img/reward1.png';
import reward2 from './Img/reward2.png';
import reward3 from './Img/reward3.png';
import reward4 from './Img/reward4.png';
import reward5 from './Img/reward5.png';
import reward6 from './Img/reward6.png';
import reward7 from './Img/reward7.png';
import reward8 from './Img/reward8.png';
import reward9 from './Img/reward9.png';
import tor from './Img/tor.png';
import telegram from './Img/telegram.png';
import tiktok from './Img/tiktok.png';
import twitter from './Img/twitter.png';
import linkedin from './Img/linkedin.png';
import instagram from './Img/instagram.png';
import facebook from './Img/facebook.png';
import discord from './Img/discord.png';
import youtube from './Img/youtube.png';

const Referfriends = () => {
    const [open, setOpen] = useState(false);
    const openDiv=()=>{
        setOpen(!open)
    }
    const handleDiv=()=>{
        setOpen(!open)
    }
  return (
    <div className='rfriends'>
        <div className='rfiendscol1'>
            <div className='rfiends1row1'><img src={circles}/></div>
            <div className='rfiends1row2'>
                <h2>Refer Friends <br/>
                    Win Up to $500 in Mystery Boxes</h2>
                <p>Time: 2022-07-27 ~ 2022-08-11</p>
                <div>
                    <button>Rules</button>
                    <button>Back to lit mode</button>
                    <button onClick={openDiv}>Invite Friends</button>
                </div>
            </div>
        </div>
        <div className='rfiendscol2'>
            <img src={binance8} className='col2img'/>
            <div className='rfriends2row1'>
                <div>
                    <img src={gift1} className='gift'/>
                    <p>Opened (Total) <span>15,976</span></p>
                </div>
                <div>
                    <img src={gift1}/>
                    <p>Opened (Total) <span>15,976</span></p>
                </div>
            </div>
        </div>
        <hr className='friendshr'/>
        <div className='rfiendscol3'>
            <div className='rfriends3row1'>
                <div>
                    <img src={gift2} className='gift'/>
                    <p>My Rewards</p>
                </div>
                <div>
                    <img src={gift3}/>
                    <p>My Referrals</p>
                </div>
                <div>
                    <img src={gift4}/>
                    <p>Tips</p>
                </div>
                <div>
                    <img src={gift5}/>
                    <p>Treasure Map</p>
                </div>
            </div>
        </div>
        <hr className='friendshr'/>
        <div className='rfiendscol4'>
            <img src={binance9} className='rfcol4img'/>
        </div>
        <div className='rfiendscol5'>
            <div className='rfriends5row1'>
                <h4>Rules</h4>
                <p>Each referral must complete the following tasks: <br/>
                        1. Cumulatively deposit more than $50<br/>
                        2. Cumulatively trade more than $200<br/>
                        Completing a task will unlock a Mystery Box for both the inviter and referral. The deposit task must be completed first.<br/>
                        Share this campaign on social media, and once your friend [clicks or scans your referral link/ QR code], you will stand to win tokens from the Pooled Mystery Box.<br/>
                        When referring friends, you must choose between the two referral modes (Lite Referral or Standard Referral).</p>
                <button>
                    <p>View More</p>
                    <img src={rect3}/>
                </button>
                </div>
            <div className='rfriends5row2'>
                <h4>Rewards</h4>
                <div>
                    <img src={reward}/>
                    <img src={reward1}/>
                    <img src={reward2}/>
                    <img src={reward3}/>
                    <img src={reward4}/>
                    <img src={reward5}/>
                    <img src={reward6}/>
                    <img src={reward7}/>
                    <img src={reward8}/>
                    <img src={reward9}/>
                </div>
            </div>
        </div>
        { open ? 
        <div className='rfriendspopup'>
            <div className='rfpopupcol1'>
                <h6>Share this with your friends</h6>
                <button onClick={handleDiv}><i class="fa-solid fa-xmark"></i></button>
            </div>
            <img src={binance12} className='rfpopupimg'/>
            <button className='rfpopupbtn'>
                <p>Lite Referral ID</p>
                <div><p>LIMIT_JLM7RHZA</p><img src={tor}/></div>
            </button>
            <button className='rfpopupbtn'>
                <p>Lite Referral Link</p>
                <div><p>https://ww...M7RHZA</p><img src={tor}/></div>
            </button>
            <div className='rfpopupcol2'>
                <img src={discord}/>
                <img src={telegram}/>
                <img src={facebook}/>
                <img src={tiktok}/>
                <img src={instagram}/>
                <img src={twitter}/>
                <img src={linkedin}/>
                <img src={youtube}/>
            </div>
        </div> : null}

    </div>
  )
}

export default Referfriends