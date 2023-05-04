import React from 'react'
import './Referral.css'
import { Link, NavLink } from 'react-router-dom';

import bitcoin from "../assets/BinImages/bitcoin.png";
import bnb from "../assets/BinImages/bnb.png";
import eth from "../assets/BinImages/eth.png";
import download from './assets/download.png';
import download1 from './assets/download1.png';
import download2 from './assets/download2.jpg';
import download3 from './assets/download3.png';
import download4 from './assets/download4.png';
import download5 from './assets/download5.png';
import download6 from './assets/download6.png';
import download7 from './assets/download7.png';
import download8 from './assets/download8.png';
import image1 from './assets/image1.png';
import image11 from './assets/image11.png';
import image12 from './assets/image12.png';
import image13 from './assets/image13.png';

const Referral = () => {
  return (
    <div className='referral'>
        
        <div className='reeff'>
            <div className='lite'>
                 <div className='lite-first'>
                    <div>                    
                        <NavLink to='/referral'><h6>Lite Referral</h6></NavLink>
                        <NavLink to='/standard-referral'><h6>Standard Referral</h6></NavLink>
                        <NavLink to="/refer-friends"><h6>Refer Friends</h6></NavLink>
                    </div>
                    <NavLink to='/liteoverview'><button style={{color: "white", fontSize: "13px"}}> View Activate History & Overview > </button></NavLink>
                 </div>

                 <div className='lite-sec'>
                    <div className='lite-head'>
                        <h3>Refer Friends.</h3>
                        <h3>Get 100 USDT Trading Fee Credit Each.</h3>
                        <Link to="/refer-friends" style={{textDecoration: 'none', color: 'blue', fontWeight: 'bold'}}><p>View referral rules </p></Link>
                    </div>

                    <div className='lite-btn'>
                        <button className='lite-btn2'>
                            <p>Lite Referral ID</p>
                            <div>
                              <p>CPA_00J0TA4GZR</p>                                
                            </div>
                        </button>
                        <button className='lite-btn2'>
                            <p>Lite Referral Link</p>
                            <div>
                              <p>https://ww...TA4GZR</p>                                
                            </div>
                        </button>
                        <button className='lite-btn1'>Invite Friends</button>
                    </div>
                 </div>
            </div>
        </div>

        <div className='ref-tip'>
        <div className='referral3'>
            <div className='referralrow'>
                <img src={image11} alt='rules' class="css-14gt749"/>
                <h3>Tips</h3>
            </div>
            
            <div className='refrow1'>
                <div className='refcol1'>
                    <p>1</p>
                    <p>Step 1</p>
                    <p>Share your referral link with friends</p>
                </div>
                <div className='refcol1'>
                    <p>2</p>
                    <p>Step 2</p>
                    <p>Invite friends to sign up and accumulatively deposit more than $50</p>
                </div>
                <div className='refcol1'>
                <img src={image13} alt='rules' class="css-3tndv1 css-3tndv"/>  
                    <p>Step 3</p>
                    <p>Receive 100 USDT trading fee rebate voucher each</p>
                </div>
            </div>

            <div className='refrow2'>
                <div className='refdat1'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-jvw6n9"><path d="M12.011 2H12C6.472 2 2 6.472 2 12c0 5.527 4.472 10 10 10 5.516 0 9.988-4.473 10-9.989.012-5.527-4.461-10-9.989-10.011zm.998 16.984h-2.018v-2.007h2.018v2.007zm0-4.633h-2.018V5.005h2.018v9.346z" fill="currentColor"></path></svg>
                    <p>You have not completed KYC</p>
                </div>
                <div className='refdat2'>
                    <Link to="/kyc" style={{textDecoration: 'none'}}><button className='ref-btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1k9k1hu"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5h18v14H3V5zm7 5a2 2 0 11-4 0 2 2 0 014 0zm3-1h6v2.5h-6V9zm6 4.5h-6V16h6v-2.5zm-8 0V16H5v-2.5h6z" fill="currentColor"></path></svg>
                            <p>Verify Now</p>      
                    </button></Link>
                </div>
            </div>
        </div>

        <div className='referral3'>
            <div className='refrow13'>
                <div className='refdata'>
                    <img src={image12} alt='rules' class="css-14gt749"/>
                    <h4>Rules</h4>
                </div>

                <div className='refdt1'>
                    <Link to='/history2'><p>FAQ </p></Link>
                </div>
            </div>

            <div className='refrow'><p>Share your Lite Referral ID / link with a friend who does not have a Binance account.</p></div>
            
            <div className='refrow3'>
                <p>Regular Task:</p>
                <p>Referees must accumulatively deposit more than $50 within 14 days of registration. Both referrer and referee will be rewarded with a 100 USDT trading fee rebate voucher each.</p>
            </div>

            <div className='refrow4'><p>Disclaimer: You can only claim one reward per referral. For example, you will not be eligible for Standard Referral rewards if friends sign up using your [Lite Referral Mode] ID / link.</p></div>
            
        </div>

        <div className='referral3'>
            <div className='refdata'>
                <img src={image1} alt='rules' class="css-14gt749"/>
                <h3>Overview</h3>
            </div>

            <div className='refgrid1'>
                <div>
                    <p>Quarterly Bonus (BUSD)</p>
                    <h4>0</h4>
                </div>
                <div>
                    <p>Trading Fee Rebate Voucher (USDT)</p>
                    <h4>0</h4>
                </div>
                <div>
                    <p>Total Referrals</p>
                    <h4>0</h4>
                </div>
                <div>
                    <p>Successful Referrals</p>
                    <h4>0</h4>
                </div>
            </div>

            <div className='grdata'>
                <p>Claim your reward before it expires. Complete KYC verification within 7 days after the reward is available for redemption. The reward will be distributed to your Reward Center within 48 hours after you complete verification.</p>
            </div>

            <div className='refdat2'>
                <a><button className='ref1-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-jvw6n9"><path d="M12.011 2H12C6.472 2 2 6.472 2 12c0 5.527 4.472 10 10 10 5.516 0 9.988-4.473 10-9.989.012-5.527-4.461-10-9.989-10.011zm.998 16.984h-2.018v-2.007h2.018v2.007zm0-4.633h-2.018V5.005h2.018v9.346z" fill="currentColor"></path></svg>
                   <p>Pending verification</p>      
                </button></a>
            </div>
        </div>

        <div className='referral3'>
            <div className='ref-rew'>
                <div className='refdata'>
                   <img src={image13} alt='rules' class="css-14gt749"/>
                   <h3>My Rewards</h3>
                </div>
                <div className='ref-all'>
                    <p>All ></p>
                </div>
            </div>

            <div className='bonus'>
                <p>ID</p>
                <p>Distribution Date</p>
                <p>Bonus</p>
                <p>Reward Type</p>
                <p>Reward Name</p>
                <p>Status</p>
            </div>

            <div className='invit'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-q9egnk"><path fill-rule="evenodd" clip-rule="evenodd" d="M26 8h38l20 20v60H26V8zm48 29H36v4h38v-4zm0 9H36v4h38v-4zm-38 9h38v4H36v-4zm34 16l-4-4-4 4 4 4 4-4z" fill="url(#not-found-data_svg__paint0)"></path><path opacity="0.15" d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z" fill="#929AA5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z" fill="url(#not-found-data_svg__paint1)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z" fill="url(#not-found-data_svg__paint2)"></path><defs><linearGradient id="not-found-data_svg__paint0" x1="55" y1="8" x2="55" y2="88" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5" stop-opacity="0.1"></stop><stop offset="1" stop-color="#929AA5" stop-opacity="0.25"></stop></linearGradient><linearGradient id="not-found-data_svg__paint1" x1="4.172" y1="68.75" x2="24.328" y2="68.75" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="not-found-data_svg__paint2" x1="15" y1="48" x2="55" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg>
                 <p>No rewards</p>
                 <button>Invite Friends</button>
            </div>
        </div>

        <div className='referral3'>
            <div className='ref-rew'>
                <div className='refdata'>
                    <img src={image13} alt='rules' class="css-14gt749"/>
                    <h3>My Referrals</h3>
                </div>
                <div className='ref-all'>
                    <p>All ></p>
                </div>
            </div>

            <div className='reg1'>
                <button className='reg-btn'>All</button>
                <button className='reg-btn'>Successful</button>
                <button className='reg-btn'>Pending</button>
            </div>

            <div className='bonus'>
                <p>ID</p>
                <p>Registered</p>
                <p>Task completed</p>
            </div>

            <div className='invit'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-q9egnk"><path fill-rule="evenodd" clip-rule="evenodd" d="M26 8h38l20 20v60H26V8zm48 29H36v4h38v-4zm0 9H36v4h38v-4zm-38 9h38v4H36v-4zm34 16l-4-4-4 4 4 4 4-4z" fill="url(#not-found-data_svg__paint0)"></path><path opacity="0.15" d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z" fill="#929AA5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z" fill="url(#not-found-data_svg__paint1)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z" fill="url(#not-found-data_svg__paint2)"></path><defs><linearGradient id="not-found-data_svg__paint0" x1="55" y1="8" x2="55" y2="88" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5" stop-opacity="0.1"></stop><stop offset="1" stop-color="#929AA5" stop-opacity="0.25"></stop></linearGradient><linearGradient id="not-found-data_svg__paint1" x1="4.172" y1="68.75" x2="24.328" y2="68.75" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="not-found-data_svg__paint2" x1="15" y1="48" x2="55" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg>
                 <p>No rewards</p>
                 <button>Invite Friends</button>
            </div>

            <div className='grdata'>
                <p>As per our Terms of Use and in compliance with local regulations, any user that is a resident in Singapore that you have previously referred will be removed from your referral list. You will also not be able to refer new users who are resident in Singapore.</p>
            </div>
        </div>

        <div className='referral3'>
            <div className='token'>
                <h6>Reward Tokens</h6>
                <div className='ref-icons'>
                    <img alt="" src={bitcoin} class="css-m8"/>
                    <img alt="" src={bnb} class="css-m8"/>
                    <img alt="" src={eth} class="css-m7"/>
                    <img alt="" src={download} class="css-m7"/>
                    <img alt="" src={download1} class="css-m7"/>
                    <img alt="" src={download2} class="css-m7"/>
                    <img alt="" src={download3} class="css-m7"/>
                    <img alt="" src={download4} class="css-m7"/>
                    {/* <img alt="" src=' https://assets.coingecko.com/coins/images/14735/large/LOOM.png?1617967111' class="css-m7"/> */}
                    <img alt="" src={download5} class="css-m7"/>
                    <img alt="" src={download6} class="css-m7"/>
                    <img alt="" src=' https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/dfnspr3pzbeeuided4as' class="css-m7"/>
                    <img alt="" src={download7} class="css-m7"/>
                    <img alt="" src={download8} class="css-m7"/>
                    <img alt="" src='https://www.marketbeat.com/logos/cryptocurrencies/stratis-STRAX.png?v=2022-10-05' class="css-m7"/>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Referral
