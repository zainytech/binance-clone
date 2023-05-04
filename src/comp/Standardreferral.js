import React from 'react'
import './Standardreferral.css'

import image14 from './assets/image14.png';
import image15 from './assets/image15.png';
import image16 from './assets/image16.png';
import image17 from './assets/image17.png';
import image18 from './assets/image18.png';

import { Link, NavLink } from 'react-router-dom';

const Standardreferral = () => {
  return (
    <div className='standardref'>
        <div className='reeff'>
            <div className='stand'>
                 <div className='stand-first'>
                    <div>
                        <NavLink to='/referral'><h6>Lite Referral</h6></NavLink>
                        <NavLink to='/standard-referral'><h6>Standard Referral</h6></NavLink>
                        <NavLink to="/refer-friends"><h6>Refer Friends</h6></NavLink>
                    </div>
                 </div>

                 <div className='stand-sec'>
                    <div className='stand-head'>
                        <h3>Refer Friends. Earn Crypto Together.</h3>
                        <p>Earn up to 40% commission on every trade across Binance Spot, Futures, and Pool.</p>
                        <Link to="/refer-friends" style={{textDecoration: 'none', color: 'blue', fontWeight: 'bold'}}><p>View referral rules </p></Link>
                    </div>

                    <div className='stand-btn'>
                        <div className='btn-col1'>
                            <p>Default Referral</p>
                            <a href='#'><p>Change referral settings > </p></a>
                        </div>
                        <div className='btn-col2'>
                            <div>
                                <p>You receive</p>
                                <h6>20%</h6>
                            </div>
                            <div>
                                <p>Friends receive</p>
                                <h6>0%</h6>
                            </div>
                        </div>
                        <button className='stand-btn2'>
                            <p>Lite Referral ID</p>
                            <div>
                              <p>CPA_00J0TA4GZR</p>                                
                            </div>
                        </button>
                        <button className='stand-btn2'>
                            <p>Lite Referral Link</p>
                            <div>
                              <p>https://ww...TA4GZR</p>                                
                            </div>
                        </button>
                        <div className='stand-invite'>
                            <button className='stand-btn1'>Invite Friends</button>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-f1b9tf"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 4h7v7H4V4zm0 9h7v7H4v-7zm11 0h-2v4h4v-2h3v-2h-4v2h-1v-2zm5 3h-2v2h-2v2h4v-4zm-5 2h-2v2h2v-2zM13 4h7v7h-7V4zM8.5 6.5h-2v2h2v-2zm-2 9h2v2h-2v-2zm11-9h-2v2h2v-2z" fill="currentColor"></path></svg>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>

        <div className='ref-tip standhide'>
            
            <div className='stand-dashboard'>
            <div className='referral3'>
                <div className='stand-dashb'>
                    <h6>Dashboard</h6>
                    <h6>Referral</h6>
                    <h6>Commission Rebate</h6>
                    <h6>Referral Kickback</h6>
                </div>
            </div>
            </div>    
            
            <div className='referral3'>
                <div className='dashcol1'>
                    <img src={image14} alt='Dashboard' class="css-3tndv1"/>
                    <h4>Dashboard</h4>
                </div>

                <div className='dashcol2'>
                    <div>
                        <form action='#'>
                            <label htmlFor='sort'></label>
                            <select name='sort' id='sort' className='selection--style'>
                                <option value='All Accounts'> All Accounts </option>
                                <option value='Spot'> Spot</option>
                                <option value='Future'> Future</option>
                                <option value='Mining'> Mining</option>
                            </select>
                        </form>
                    </div>
                    <p>All</p>
                    <p>Yesterday</p>
                    <p>This Week</p>
                    <p>This Month</p>
                </div>

                <div className='dashcol3'>
                    <div>
                        <div className='dashcol-ear'>
                            <p>Your Earnings</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-jvw6n9"><path d="M12.011 2H12C6.472 2 2 6.472 2 12c0 5.527 4.472 10 10 10 5.516 0 9.988-4.473 10-9.989.012-5.527-4.461-10-9.989-10.011zm.998 16.984h-2.018v-2.007h2.018v2.007zm0-4.633h-2.018V5.005h2.018v9.346z" fill="currentColor"></path></svg>
                        </div>
                        <h6>0 BTC</h6>
                        <p>+0BTC</p>
                    </div>
                    <div>
                        <div className='dashcol-ear'>
                            <p>Friends Who Started Trading</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-jvw6n9"><path d="M12.011 2H12C6.472 2 2 6.472 2 12c0 5.527 4.472 10 10 10 5.516 0 9.988-4.473 10-9.989.012-5.527-4.461-10-9.989-10.011zm.998 16.984h-2.018v-2.007h2.018v2.007zm0-4.633h-2.018V5.005h2.018v9.346z" fill="currentColor"></path></svg>
                        </div>
                        <h6>0</h6>
                        <p>+0</p>
                    </div>
                    <div>
                        <div className='dashcol-ear'>
                            <p>Friends</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-jvw6n9"><path d="M12.011 2H12C6.472 2 2 6.472 2 12c0 5.527 4.472 10 10 10 5.516 0 9.988-4.473 10-9.989.012-5.527-4.461-10-9.989-10.011zm.998 16.984h-2.018v-2.007h2.018v2.007zm0-4.633h-2.018V5.005h2.018v9.346z" fill="currentColor"></path></svg>
                        </div>
                        <h6>0</h6>
                        <p>+0</p>
                    </div>
                    <div>
                        <div className='dashcol-ear'>
                            <p>Top Referrer Bonus</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-jvw6n9"><path d="M12.011 2H12C6.472 2 2 6.472 2 12c0 5.527 4.472 10 10 10 5.516 0 9.988-4.473 10-9.989.012-5.527-4.461-10-9.989-10.011zm.998 16.984h-2.018v-2.007h2.018v2.007zm0-4.633h-2.018V5.005h2.018v9.346z" fill="currentColor"></path></svg>
                        </div>
                        <h6>4.55746617 BTC</h6>
                        <p>ID 42520824</p>
                    </div>
                </div>
                <p className='grdata'>* Data update time refers to UTC + 0 time zone. The data maintenance time is 3am - 5am (UTC+0) every day. During this period, the calculation of today's data is based on the assets of previous day. After maintenance, all data will be displayed properly</p>
                <p className='grdata'>* Statement: due to the complexity of financial data, there might be nuances and delay. Data displayed above is for reference only. We sincerely apologize for any inconvenience.</p>
            </div>


            <div className='referral3'>
                <div className='ref-rew'>
                    <div className='refdata'>
                        <img src={image15} alt='Referrals' class="css-3tndv1"/>
                        <h3>Referrals</h3>
                    </div>
                    <button >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1iztezc"><path d="M2 12C2 6.477 6.477 2 12 2v10l7.071 7.071A9.97 9.97 0 0112 22C6.477 22 2 17.523 2 12z" fill="url(#chart-pie-g_svg__paint0_linear)"></path><path d="M19.071 4.929c3.905 3.905 3.905 10.237 0 14.142L12 12l7.071-7.071z" fill="#76808F"></path><defs><linearGradient id="chart-pie-g_svg__paint0_linear" x1="10.536" y1="22" x2="10.536" y2="2" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>
                    </button>
        
                </div>

                <div className='stand-bonus'>
                    <p>All Accounts</p>
                    <p>Spot</p>
                    <p>Futures</p>
                    <p>Mining</p>
                </div>

                <div className='invit'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-q9egnk"><path fill-rule="evenodd" clip-rule="evenodd" d="M26 8h38l20 20v60H26V8zm48 29H36v4h38v-4zm0 9H36v4h38v-4zm-38 9h38v4H36v-4zm34 16l-4-4-4 4 4 4 4-4z" fill="url(#not-found-data_svg__paint0)"></path><path opacity="0.15" d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z" fill="#929AA5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z" fill="url(#not-found-data_svg__paint1)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z" fill="url(#not-found-data_svg__paint2)"></path><defs><linearGradient id="not-found-data_svg__paint0" x1="55" y1="8" x2="55" y2="88" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5" stop-opacity="0.1"></stop><stop offset="1" stop-color="#929AA5" stop-opacity="0.25"></stop></linearGradient><linearGradient id="not-found-data_svg__paint1" x1="4.172" y1="68.75" x2="24.328" y2="68.75" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="not-found-data_svg__paint2" x1="15" y1="48" x2="55" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg>
                    <p>No Data</p>
                </div>

                <div className='stand-export'>
                    <p className='grdata'>All data from the past day is displayed, except for Mining Pool data. For your detailed transaction history, tap "Export".</p>
                    <a>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-ivry7e"><path fill="currentColor" d="M4 4h5v2.5H4zM4 17.5h16V20H4z"></path><path fill="currentColor" d="M4 4h2.5v16H4zM17.5 15H20v5h-2.5z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.768 7.018l-8.485 8.485-1.768-1.768L17 5.25l.884.884.884.884z" fill="currentColor"></path><path d="M12 4h8v8l-8-8z" fill="currentColor"></path></svg>
                        <span>Export</span>
                    </button>
                    </a>
                </div>
                <p className='grdata'>As per our Terms of Use and in compliance with local regulations, any user that is a resident in Singapore that you have previously referred will be removed from your referral list. You will also not be able to refer new users who are resident in Singapore.</p>
            </div>

            <div className='referral3'>
                <div className='ref-rew'>
                    <div className='refdata'>
                        <img src={image16} alt='Commission Rebate' class="css-3tndv1"/>
                        <h3>Commission Rebate</h3>
                    </div>
                    <button >
                        <img src={image18} alt='Commission Rebate' class="css-3tndv1"/>
                    </button>
        
                </div>

                <div className='stand-comm'>
                    <img src={image17} alt='Commission Rebate' class="css-1iztezc"/>
                    <p className='grdata'>Your referral commission will be credited to your wallet balance within the next 72 hours. If you do not receive your commission within 72 hours, please contact our online support center for further assistance.</p>
                </div>

                <div className='stand-bonus'>
                    <p>Summary</p>
                    <p>Spot(Margin Included)</p>
                    <p>Futures</p>
                    <p>Mining</p>
                </div>

                <div className='invit'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-q9egnk"><path fill-rule="evenodd" clip-rule="evenodd" d="M26 8h38l20 20v60H26V8zm48 29H36v4h38v-4zm0 9H36v4h38v-4zm-38 9h38v4H36v-4zm34 16l-4-4-4 4 4 4 4-4z" fill="url(#not-found-data_svg__paint0)"></path><path opacity="0.15" d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z" fill="#929AA5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z" fill="url(#not-found-data_svg__paint1)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z" fill="url(#not-found-data_svg__paint2)"></path><defs><linearGradient id="not-found-data_svg__paint0" x1="55" y1="8" x2="55" y2="88" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5" stop-opacity="0.1"></stop><stop offset="1" stop-color="#929AA5" stop-opacity="0.25"></stop></linearGradient><linearGradient id="not-found-data_svg__paint1" x1="4.172" y1="68.75" x2="24.328" y2="68.75" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="not-found-data_svg__paint2" x1="15" y1="48" x2="55" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg>
                    <p>No Data</p>
                </div>

                <div className='stand-export'>
                    <p className='grdata'>Only records from the past 7 days are shown. For your detailed transaction history, tap "Export".</p>
                    <a>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-ivry7e"><path fill="currentColor" d="M4 4h5v2.5H4zM4 17.5h16V20H4z"></path><path fill="currentColor" d="M4 4h2.5v16H4zM17.5 15H20v5h-2.5z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.768 7.018l-8.485 8.485-1.768-1.768L17 5.25l.884.884.884.884z" fill="currentColor"></path><path d="M12 4h8v8l-8-8z" fill="currentColor"></path></svg>
                        <span>Export</span>
                    </button>
                    </a>
                </div>
                
            </div>

            <div className='referral3'>
                <div className='ref-rew'>
                    <div className='refdata'>
                        <img src={image16} alt='Commission Rebate' class="css-3tndv1"/>
                        <h3>Referral Kickback</h3>
                    </div>
                    <button >
                        <img src={image18} alt='Commission Rebate' class="css-3tndv1"/>
                    </button>
        
                </div>

                <div className='stand-comm'>
                    <img src={image17} alt='Commission Rebate' class="css-1iztezc"/>
                    <p className='grdata'>Your referral commission will be credited to your wallet balance within the next 72 hours. If you do not receive your commission within 72 hours, please contact our online support center for further assistance.</p>
                </div>

                <div className='stand-bonus'>
                    <p>Summary</p>
                    <p>Spot</p>
                    <p>Margin</p>
                    <p>Futures</p>
                    <p>Mining</p>
                </div>

                <div className='invit'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-q9egnk"><path fill-rule="evenodd" clip-rule="evenodd" d="M26 8h38l20 20v60H26V8zm48 29H36v4h38v-4zm0 9H36v4h38v-4zm-38 9h38v4H36v-4zm34 16l-4-4-4 4 4 4 4-4z" fill="url(#not-found-data_svg__paint0)"></path><path opacity="0.15" d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z" fill="#929AA5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z" fill="url(#not-found-data_svg__paint1)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z" fill="url(#not-found-data_svg__paint2)"></path><defs><linearGradient id="not-found-data_svg__paint0" x1="55" y1="8" x2="55" y2="88" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5" stop-opacity="0.1"></stop><stop offset="1" stop-color="#929AA5" stop-opacity="0.25"></stop></linearGradient><linearGradient id="not-found-data_svg__paint1" x1="4.172" y1="68.75" x2="24.328" y2="68.75" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="not-found-data_svg__paint2" x1="15" y1="48" x2="55" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg>
                    <p>No Data</p>
                </div>

                <div className='stand-export'>
                    <p className='grdata'>Only records from the past 7 days are shown. For your detailed transaction history, tap "Export".</p>
                    <a>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-ivry7e"><path fill="currentColor" d="M4 4h5v2.5H4zM4 17.5h16V20H4z"></path><path fill="currentColor" d="M4 4h2.5v16H4zM17.5 15H20v5h-2.5z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.768 7.018l-8.485 8.485-1.768-1.768L17 5.25l.884.884.884.884z" fill="currentColor"></path><path d="M12 4h8v8l-8-8z" fill="currentColor"></path></svg>
                        <span>Export</span>
                    </button>
                    </a>
                </div>
                
            </div>

            <div className='referral3'>
                <div className='stand-last'>
                    <h2>Binance Affiliates Program</h2>
                    <button>Join Now</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Standardreferral