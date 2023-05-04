import React from 'react';
import './Liteoverview.css';
import { NavLink } from 'react-router-dom';

const Liteoverview = () => {
  return (
    <div className='liteover'>
        <div className='over-first'>
            <div className='over-back'>                    
                <NavLink to='/referral'><h6>Lite Referral</h6></NavLink>
                <NavLink to='/standard-referral'><h6>Standard Referral</h6></NavLink>
            </div>
            <div className='over-back'>
                <NavLink to='/referral'><h3><i class="fa-solid fa-chevron-left"></i>Activity Dashboard</h3></NavLink>
            </div>
        </div>
        
        <div className='ref-tip'>
            
            <div className='stand-dashboard res'>
            <div className='referral3'>
                <div className='stand-dashb res-dashb'>
                    <h6>Dashboard</h6>
                    <h6>Lite Referrals</h6>
                    <h6>Lite Rewards</h6>
                    <h6>Activate History</h6>
                </div>
            </div>
            </div>    
            
            <div className='referral3'>
                <div className='dashcol1'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-3tndv1"><path d="M4 20H12V12H20V4H4V20Z" fill="url(#paint0_linear)"></path><path d="M12 28H28V12H20V20H12V28Z" fill="#707A8A"></path><defs><linearGradient id="paint0_linear" x1="12" y1="4" x2="12" y2="20" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>
                    <h4>Dashboard</h4>
                </div>

                <div className='dashcol2'>
                    <p>All</p>
                    <p>Today</p>
                    <p>This Week</p>
                    <p>This Month</p>
                </div>

                <div className='dashcol3'>
                    <div>
                        <div className='dashcol-ear'>
                            <p>Trading Fee Rebate Voucher (USDT)</p>
                        </div>
                        <h4>0 </h4>
                    </div>
                    <div>
                        <div className='dashcol-ear'>
                            <p>Token (BUSD)</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-jvw6n9"><path d="M12.011 2H12C6.472 2 2 6.472 2 12c0 5.527 4.472 10 10 10 5.516 0 9.988-4.473 10-9.989.012-5.527-4.461-10-9.989-10.011zm.998 16.984h-2.018v-2.007h2.018v2.007zm0-4.633h-2.018V5.005h2.018v9.346z" fill="currentColor"></path></svg>
                        </div>
                        <h4>0</h4>
                    </div>
                    <div>
                        <div className='dashcol-ear'>
                            <p>Total Referrals</p>
                        </div>
                        <h4>0</h4>
                    </div>
                    <div>
                        <div className='dashcol-ear'>
                            <p> Successful Referrals </p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-jvw6n9"><path d="M12.011 2H12C6.472 2 2 6.472 2 12c0 5.527 4.472 10 10 10 5.516 0 9.988-4.473 10-9.989.012-5.527-4.461-10-9.989-10.011zm.998 16.984h-2.018v-2.007h2.018v2.007zm0-4.633h-2.018V5.005h2.018v9.346z" fill="currentColor"></path></svg>
                        </div>
                        <h4>0</h4>
                    </div>
                </div>
            </div>

            <div className='referral3'>
                <div className='ref-rew'>
                    <div className='refdata'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="css-3tndv1"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.6667 7.91732C11.6667 6.30649 12.9725 5.00065 14.5833 5.00065C16.1942 5.00065 17.5 6.30649 17.5 7.91732C17.5 9.52815 16.1942 10.834 14.5833 10.834C12.9725 10.834 11.6667 9.52815 11.6667 7.91732Z" fill="url(#paint0_linear)"></path><path d="M15.833 12.5H13.333V16.6667H18.333V15C18.333 13.6193 17.2137 12.5 15.833 12.5Z" fill="#76808F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.91699 6.25C2.91699 4.17893 4.59592 2.5 6.66699 2.5C8.73806 2.5 10.417 4.17893 10.417 6.25C10.417 8.32107 8.73806 10 6.66699 10C4.59592 10 2.91699 8.32107 2.91699 6.25Z" fill="url(#paint1_linear)"></path><path d="M11.667 14.9993C11.667 13.1584 10.1746 11.666 8.33366 11.666H5.00033C3.15938 11.666 1.66699 13.1584 1.66699 14.9993V16.666H11.667V14.9993Z" fill="#76808F"></path><defs><linearGradient id="paint0_linear" x1="14.5833" y1="10.834" x2="14.5833" y2="5.00065" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="paint1_linear" x1="6.66699" y1="10" x2="6.66699" y2="2.5" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>
                    <h3>Lite Referrals</h3>
                    </div>
                </div>

                <div className='stand-bonus stand-lite'>
                    <p>ID</p>
                    <p>Referral ID</p>
                    <p>Type</p>
                    <p>Registration Date</p>
                </div>

                <div className='invit'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-q9egnk"><path fill-rule="evenodd" clip-rule="evenodd" d="M26 8h38l20 20v60H26V8zm48 29H36v4h38v-4zm0 9H36v4h38v-4zm-38 9h38v4H36v-4zm34 16l-4-4-4 4 4 4 4-4z" fill="url(#not-found-data_svg__paint0)"></path><path opacity="0.15" d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z" fill="#929AA5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z" fill="url(#not-found-data_svg__paint1)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z" fill="url(#not-found-data_svg__paint2)"></path><defs><linearGradient id="not-found-data_svg__paint0" x1="55" y1="8" x2="55" y2="88" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5" stop-opacity="0.1"></stop><stop offset="1" stop-color="#929AA5" stop-opacity="0.25"></stop></linearGradient><linearGradient id="not-found-data_svg__paint1" x1="4.172" y1="68.75" x2="24.328" y2="68.75" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="not-found-data_svg__paint2" x1="15" y1="48" x2="55" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg>
                    <p>No Referrals</p>
                </div>
                <p className='grdata'>As per our Terms of Use and in compliance with local regulations, any user that is a resident in Singapore that you have previously referred will be removed from your referral list. You will also not be able to refer new users who are resident in Singapore.</p>
            </div>

            <div className='referral3'>
                <div className='ref-rew'>
                    <div className='refdata'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="css-3tndv1"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.6667 7.91732C11.6667 6.30649 12.9725 5.00065 14.5833 5.00065C16.1942 5.00065 17.5 6.30649 17.5 7.91732C17.5 9.52815 16.1942 10.834 14.5833 10.834C12.9725 10.834 11.6667 9.52815 11.6667 7.91732Z" fill="url(#paint0_linear)"></path><path d="M15.833 12.5H13.333V16.6667H18.333V15C18.333 13.6193 17.2137 12.5 15.833 12.5Z" fill="#76808F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.91699 6.25C2.91699 4.17893 4.59592 2.5 6.66699 2.5C8.73806 2.5 10.417 4.17893 10.417 6.25C10.417 8.32107 8.73806 10 6.66699 10C4.59592 10 2.91699 8.32107 2.91699 6.25Z" fill="url(#paint1_linear)"></path><path d="M11.667 14.9993C11.667 13.1584 10.1746 11.666 8.33366 11.666H5.00033C3.15938 11.666 1.66699 13.1584 1.66699 14.9993V16.666H11.667V14.9993Z" fill="#76808F"></path><defs><linearGradient id="paint0_linear" x1="14.5833" y1="10.834" x2="14.5833" y2="5.00065" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="paint1_linear" x1="6.66699" y1="10" x2="6.66699" y2="2.5" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>
                    <h3>Lite Rewards</h3>
                    </div>
                </div>

                <div className='stand-bonus stand-lite'>
                    <p>Token</p>
                    <p>Amount</p>
                    <p>Reward Type</p>
                    <p>Distribution Time</p>
                    <p>Invitee ID</p>
                </div>

                <div className='invit'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-q9egnk"><path fill-rule="evenodd" clip-rule="evenodd" d="M26 8h38l20 20v60H26V8zm48 29H36v4h38v-4zm0 9H36v4h38v-4zm-38 9h38v4H36v-4zm34 16l-4-4-4 4 4 4 4-4z" fill="url(#not-found-data_svg__paint0)"></path><path opacity="0.15" d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z" fill="#929AA5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z" fill="url(#not-found-data_svg__paint1)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z" fill="url(#not-found-data_svg__paint2)"></path><defs><linearGradient id="not-found-data_svg__paint0" x1="55" y1="8" x2="55" y2="88" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5" stop-opacity="0.1"></stop><stop offset="1" stop-color="#929AA5" stop-opacity="0.25"></stop></linearGradient><linearGradient id="not-found-data_svg__paint1" x1="4.172" y1="68.75" x2="24.328" y2="68.75" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="not-found-data_svg__paint2" x1="15" y1="48" x2="55" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg>
                    <p>No Rewards</p>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default Liteoverview