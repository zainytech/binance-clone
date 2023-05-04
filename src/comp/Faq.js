import React from 'react'
import { useState } from 'react';
import './Faq.css';
import pic1 from './assets/pic1.png';
import pic2 from './assets/pic2.png';
import pic3 from './assets/pic3.png';
import pic4 from './assets/pic4.png';
import pic5 from './assets/pic5.png';
import pic6 from './assets/pic6.png';
import pic8 from './assets/pic8.png';
import pic9 from './assets/pic9.png';
import pic10 from './assets/pic10.png';
import pic11 from './assets/pic11.png';
import pic12 from './assets/pic12.png';
import pic13 from './assets/pic13.png';
import pic14 from './assets/pic14.png';
import pic15 from './assets/pic15.png';
import pic16 from './assets/pic16.png';
import pic17 from './assets/pic17.png';
import pic18 from './assets/pic18.png';
import pic19 from './assets/pic19.png';
import pic20 from './assets/pic20.png';
import pic21 from './assets/pic21.png';
import searchicon from './assets/searchicon.png';

const Faq = () => {
  
  const [data, setData] = useState(true);
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [data3, setData3] = useState("");
  const [data4, setData4] = useState("");
  const [data5, setData5] = useState("");
  const [data6, setData6] = useState("");
  const [data7, setData7] = useState("");
  const [data8, setData8] = useState("");
  const [data9, setData9] = useState("");
  const [data10, setData10] = useState("");
  const [article, setArticle] = useState(3);
  const [toggleClass, setToggleClass] = useState(true)

  return (
    <div className='faq'>
        <div className='faq-col1'>
            <h2>FAQ</h2>
            <div class="searchbar-div">
              <img src={searchicon}/>
              <input data-bn-type="input" placeholder="Search help articles" value=""></input>
              <button class="search-btn">Search</button>
            </div>
        </div>

        <div className='faq-col2'>  
            <div className='faq-row1'>
                <div>
                  <button className='faq-btn'  onClick={()=>setData(!data)}>
                     <img src={pic1} alt='admin pics' className='css-1jb0e7n'/>
                     <p>Account Functions</p>
                     { data ? <svg aria-hidden="true" class="svg-icon iconArrowDownLg css-18aifpu" width="36" height="36" viewBox="0 0 36 36"><path d="M2 11h32L18 27 2 11Z"></path></svg>: 
                     <svg aria-hidden="true" class="svg-icon iconArrowUpLg css-18aifpu" width="36" height="36" viewBox="0 0 36 36" ><path d="M2 25h32L18 9 2 25Z"></path></svg>
                      }   
                  </button>
                  { data ? ( <div className='faq-div'>
                    <p>Guide to Account Functions</p>
                    <p>Identity Verification</p>
                    <p>Two-factor Authentication</p>
                    <p>Email Issues</p>
                    <p>Referral & Affiliates</p>
                    <p>Voucher</p>
                    <p>Wallets</p>
                    <p>Task Center</p>
                  </div>) : null}
                </div>

                <button className='faq-btn'>
                  <img src={pic2} alt='admin pics' className='css-1jb0e7n'/>
                  <p>Tutorial</p> 
                </button>

                <button className='faq-btn'>
                  <img src={pic3} alt='admin pics' className='css-1jb0e7n'/>
                  <p>Binance Fan Token</p> 
                </button>

                <div>
                  <button className='faq-btn'  onClick={()=>setData1(!data1)}>
                     <img src={pic4} alt='admin pics' className='css-1jb0e7n'/>
                     <p>Binance Earn</p>
                     {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-18aifpu"><path d="M16.5 8.49v2.25L12 15.51l-4.5-4.77V8.49h9z" fill="currentColor"></path></svg> */}
                     { data1 ? <svg aria-hidden="true" class="svg-icon iconArrowDownLg css-18aifpu" width="36" height="36" viewBox="0 0 36 36"><path d="M2 11h32L18 27 2 11Z"></path></svg>: 
                     <svg aria-hidden="true" class="svg-icon iconArrowUpLg css-18aifpu" width="36" height="36" viewBox="0 0 36 36" ><path d="M2 25h32L18 9 2 25Z"></path></svg>
                      }   
                  </button>
                  { data1 ? ( <div className='faq-div'>
                    <p>Simple Earn</p>
                    <p>ETH 2.0 Staking</p>
                    <p>DOT Parachain Slot Auction</p>
                    <p>Launchpad&Launchpool</p>
                    <p>Binance Pool</p>
                    <p>Auto-Invest</p>
                    <p>BNB Vault</p>
                    <p>DeFi Staking</p>
                    <p>Liquidity Farming</p>
                    <p>Dual Investment</p>
                    <p>Swamp Farming</p>
                  </div> ) : null}
                </div>

                <div>
                  <button className='faq-btn' onClick={()=>setData2(!data2)}>
                     <img src={pic5} alt='admin pics' className='css-1jb0e7n'/>
                     <p>Crypto Deposit/Withdrawal</p>
                     {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-18aifpu"><path d="M16.5 8.49v2.25L12 15.51l-4.5-4.77V8.49h9z" fill="currentColor"></path></svg> */}
                     { data2 ? <svg aria-hidden="true" class="svg-icon iconArrowDownLg css-18aifpu" width="36" height="36" viewBox="0 0 36 36"><path d="M2 11h32L18 27 2 11Z"></path></svg>: 
                     <svg aria-hidden="true" class="svg-icon iconArrowUpLg css-18aifpu" width="36" height="36" viewBox="0 0 36 36" ><path d="M2 25h32L18 9 2 25Z"></path></svg>
                      }   
                  </button>
                  { data2 ? ( <div className='faq-div'>
                    <p>Deposit/Withdraw Guide</p>
                    <p>Crypto Deposit</p>
                    <p>Crypto Withdrawal</p>
                  </div>) : null}
                </div>

                <div>
                  <button className='faq-btn' onClick={()=>setData3(!data3)}>
                     <img src={pic6} alt='admin pics' className='css-1jb0e7n'/>
                     <p>Buy Crypto (Fiat/P2P)</p>
                     {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-18aifpu"><path d="M16.5 8.49v2.25L12 15.51l-4.5-4.77V8.49h9z" fill="currentColor"></path></svg> */}
                     { data3 ? <svg aria-hidden="true" class="svg-icon iconArrowDownLg css-18aifpu" width="36" height="36" viewBox="0 0 36 36"><path d="M2 11h32L18 27 2 11Z"></path></svg>: 
                     <svg aria-hidden="true" class="svg-icon iconArrowUpLg css-18aifpu" width="36" height="36" viewBox="0 0 36 36" ><path d="M2 25h32L18 9 2 25Z"></path></svg>
                      }   
                  </button>
                  { data3 ? ( <div className='faq-div'>
                    <p>P2P Trading</p>
                    <p>Credit/Debit Card</p>
                    <p>Bank Transfer</p>
                    <p>Third Party Payment Channels</p>
                  </div>) : null}
                </div>

                <div>
                  <button className='faq-btn' onClick={()=>setData4(!data4)}>
                     <img src={pic8} alt='admin pics' className='css-1jb0e7n'/>
                     <p>Spot & Margin Trading</p>
                     {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-18aifpu"><path d="M16.5 8.49v2.25L12 15.51l-4.5-4.77V8.49h9z" fill="currentColor"></path></svg> */}
                     { data4 ? <svg aria-hidden="true" class="svg-icon iconArrowDownLg css-18aifpu" width="36" height="36" viewBox="0 0 36 36"><path d="M2 11h32L18 27 2 11Z"></path></svg>: 
                     <svg aria-hidden="true" class="svg-icon iconArrowUpLg css-18aifpu" width="36" height="36" viewBox="0 0 36 36" ><path d="M2 25h32L18 9 2 25Z"></path></svg>
                      }   
                  </button>
                  { data4 ? ( <div className='faq-div'>
                    <p>Spot Trading</p>
                    <p>Margin Trading</p>
                  </div>) : null}
                </div>

                <div>
                  <button className='faq-btn'  onClick={()=>setData5(!data5)}>
                     <img src={pic9} alt='admin pics' className='css-1jb0e7n'/>
                     <p>Crypto Derivatives</p>
                     {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-18aifpu"><path d="M16.5 8.49v2.25L12 15.51l-4.5-4.77V8.49h9z" fill="currentColor"></path></svg> */}
                     { data5 ? <svg aria-hidden="true" class="svg-icon iconArrowDownLg css-18aifpu" width="36" height="36" viewBox="0 0 36 36"><path d="M2 11h32L18 27 2 11Z"></path></svg>: 
                     <svg aria-hidden="true" class="svg-icon iconArrowUpLg css-18aifpu" width="36" height="36" viewBox="0 0 36 36" ><path d="M2 25h32L18 9 2 25Z"></path></svg>
                      }   
                  </button>
                  { data5 ? ( <div className='faq-div'>
                    <p>Futures Contracts</p>
                    <p>Options</p>
                    <p>Leveraged Tokens</p>
                  </div>) : null}
                </div>

                <div>
                  <button className='faq-btn'  onClick={()=>setData6(!data6)}>
                     <img src={pic10} alt='admin pics' className='css-1jb0e7n'/>
                     <p>Finance</p>
                     {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-18aifpu"><path d="M16.5 8.49v2.25L12 15.51l-4.5-4.77V8.49h9z" fill="currentColor"></path></svg> */}
                     { data6 ? <svg aria-hidden="true" class="svg-icon iconArrowDownLg css-18aifpu" width="36" height="36" viewBox="0 0 36 36"><path d="M2 11h32L18 27 2 11Z"></path></svg>: 
                     <svg aria-hidden="true" class="svg-icon iconArrowUpLg css-18aifpu" width="36" height="36" viewBox="0 0 36 36" ><path d="M2 25h32L18 9 2 25Z"></path></svg>
                      }   
                  </button>
                  { data6 ? ( <div className='faq-div'>
                    <p>Crypto Loans</p>
                    <p>Binance Card</p>
                    <p>gift Card</p>
                    <p>Binance Pay</p>
                  </div>) : null}
                </div>

                <div>
                  <button className='faq-btn'  onClick={()=>setData7(!data7)}>
                     <img src={pic11} alt='admin pics' className='css-1jb0e7n'/>
                     <p>API</p>
                     {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-18aifpu"><path d="M16.5 8.49v2.25L12 15.51l-4.5-4.77V8.49h9z" fill="currentColor"></path></svg> */}
                     { data7 ? <svg aria-hidden="true" class="svg-icon iconArrowDownLg css-18aifpu" width="36" height="36" viewBox="0 0 36 36"><path d="M2 11h32L18 27 2 11Z"></path></svg>: 
                     <svg aria-hidden="true" class="svg-icon iconArrowUpLg css-18aifpu" width="36" height="36" viewBox="0 0 36 36" ><path d="M2 25h32L18 9 2 25Z"></path></svg>
                      }   
                  </button>
                  { data7 ? ( <div className='faq-div'>
                    <p>API Trading Rules</p>
                  </div>) : null}
                </div>

                <div>
                  <button className='faq-btn'  onClick={()=>setData8(!data8)}>
                     <img src={pic12} alt='admin pics' className='css-1jb0e7n'/>
                     <p>Security</p>
                     {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-18aifpu"><path d="M16.5 8.49v2.25L12 15.51l-4.5-4.77V8.49h9z" fill="currentColor"></path></svg> */}
                     { data8 ? <svg aria-hidden="true" class="svg-icon iconArrowDownLg css-18aifpu" width="36" height="36" viewBox="0 0 36 36"><path d="M2 11h32L18 27 2 11Z"></path></svg>: 
                     <svg aria-hidden="true" class="svg-icon iconArrowUpLg css-18aifpu" width="36" height="36" viewBox="0 0 36 36" ><path d="M2 25h32L18 9 2 25Z"></path></svg>
                      }   
                  </button>
                  { data8 ? ( <div className='faq-div'>
                    <p>Security Tips</p>
                    <p>Law Enforcement</p>
                  </div>) : null}
                </div>

                <div>
                  <button className='faq-btn'  onClick={()=>setData9(!data9)}>
                     <img src={pic13} alt='admin pics' className='css-1jb0e7n'/>
                     <p>Other Topics</p>
                     {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-18aifpu"><path d="M16.5 8.49v2.25L12 15.51l-4.5-4.77V8.49h9z" fill="currentColor"></path></svg> */}
                     { data9 ? <svg aria-hidden="true" class="svg-icon iconArrowDownLg css-18aifpu" width="36" height="36" viewBox="0 0 36 36"><path d="M2 11h32L18 27 2 11Z"></path></svg>: 
                     <svg aria-hidden="true" class="svg-icon iconArrowUpLg css-18aifpu" width="36" height="36" viewBox="0 0 36 36" ><path d="M2 25h32L18 9 2 25Z"></path></svg>
                      }   
                  </button>
                  { data9 ? ( <div className='faq-div'>
                    <p>Binance Terms of Use</p>
                    <p>Business Cooperation</p>
                  </div>) : null}
                </div>

                <button className='faq-btn'>
                  <img src={pic14} alt='admin pics' className='css-1jb0e7n'/>
                  <p>Binance Convert</p> 
                </button>

                <button className='faq-btn'>
                  <img src={pic15} alt='admin pics' className='css-1jb0e7n'/>
                  <p>Binance Link</p> 
                </button>

                <div>
                  <button className='faq-btn'  onClick={()=>setData10(!data10)}>
                     <img src={pic16} alt='admin pics' className='css-1jb0e7n'/>
                     <p>NFT</p>
                     {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-18aifpu"><path d="M16.5 8.49v2.25L12 15.51l-4.5-4.77V8.49h9z" fill="currentColor"></path></svg> */}
                     { data10 ? <svg aria-hidden="true" class="svg-icon iconArrowDownLg css-18aifpu" width="36" height="36" viewBox="0 0 36 36"><path d="M2 11h32L18 27 2 11Z"></path></svg>: 
                     <svg aria-hidden="true" class="svg-icon iconArrowUpLg css-18aifpu" width="36" height="36" viewBox="0 0 36 36" ><path d="M2 25h32L18 9 2 25Z"></path></svg>
                      }   
                  </button>
                  { data10 ? ( <div className='faq-div'>
                    <p>Get Started</p>
                    <p>NFT Staking</p>
                    <p>Buy NFTs</p>
                    <p>Sell NFTs</p>
                    <p>Mint NFTs</p>
                    <p>Deposit NFTs</p>
                    <p>Withdraw NFTs</p>
                    <p>Security Tips</p>
                    <p>Other</p>
                  </div>) : null}
                </div>

                <button className='faq-btn'>
                  <img src={pic17} alt='admin pics' className='css-1jb0e7n'/>
                  <p>VIP</p> 
                </button>

            </div>

            <div className='faq-row2'>
             { article === 1 && (
              <div className='row2-data'>
                <h2>How to Earn More Referral Commission from the Standard Referral Mode</h2>
                <p>2021-09-30 15:51</p>
                <p>The Binance Standard Referral Mode allows you to invite friends and earn up to 40% commission every time they trade on Binance. You can earn referral commission from both the Spot and Futures markets.</p>
                <p>For more information on how to earn referral bonuses, please refer to <a href='#'>Binance Standard Referral Mode Guide</a>.</p>
                <h4>How to invite more friends to register via my standard referral link?</h4>
                <p>The more friends you refer, the more referral bonus you can get. For bonus calculation details, please refer to the Binance Standard Referral Mode Guide.</p>
                <p>Here are some tips for inviting your friends to join Binance:</p>
                <h6>1. Share your Standard referral link on social media</h6>
                <p>Go to [Profile] - [Referral] - [<a href='#'>Standard Referral</a>] and click [Invite Friends]. The system will generate a banner image with your unique standard referral QR code. You can download the image in different sizes, or click on the various social media icons to share it directly. Once your friends successfully register on Binance and start trading, you will get referral commissions.</p>
                <h6>2. Customize the referral kickback rate to share the commission with your friends</h6>
                <p>Go to [Standard Referral] and click [Change referral settings] to customize the referral kickback percentage. The default rate is 20%, meaning that you get 20% of the spot trading fees paid by the friends you refer. Click on the percentages below to adjust the proportion of the referral kickback you want to share with your friends. The more referral kickback you share, the higher the chance they will register via your link.</p>
                <h6>3. Add your standard referral link to your social media accounts</h6>
                <p>You can add your standard referral ID/link to the bio of your social media accounts to increase the chance of more people registering through your link.</p>
                <h6>4. Share industry news along with your standard referral link</h6>
                <p>When you share crypto-related news on your social media, consider sharing it along with your standard referral link or QR code on a banner image to increase the chance of more people registering through your link.</p>
                <img src={pic18} alt='binance referral program' className='css-qajiez'/>
                <p><i>* If the new user did not register a Binance Account using your Referral ID, you will not receive any referral commissions for Spot and Margin trading from this new user.</i></p>
                <p><i>The same user, however, can still activate a new Futures Account with your Futures Referral ID. You will then only receive referral commissions for Futures trading from this user.</i></p>
                <p><i>* If the system detected a user deleted his account in order to create a new account to benefit from the referral program, Binance reserves the right to terminate all referral commissions from the account.</i></p>
                
              </div>
             )}
             { article === 2 && (<div className='row2-data'>
                <h2>Binance Lite Referral Limited-Time Activity: The DOT DASH Game</h2>
                <p>2022-11-30 09:22</p>
                <h4>How to play DOT DASH?</h4>
                <p><b>Step 1:</b>Visit the DOT DASH Game landing page to claim your daily free chances to play.</p>
                <p><b>Step 2:</b>Select the Single Mode or the 2-Player Mode to start.</p>
                <p><b>Single Mode:</b>You will play the game alone and it takes one chance to play.</p>
                <p><b>2-Player Mode: </b>You will play as a team of two. Each player controls a Piggy character. To play with your friends, invite them to register for a Binance account during the activity period via Lite Referral Mode. After they register, you can initiate a 2-Player Mode game and the system will deduct one chance from your account only. Inviters can either send game invitations to their referred friends via Binance inmail, or share the link to the game on their social media account. Please do not exit the game before it ends or the points collected will not be recorded and the chances that have been deducted will not be returned.</p>
                <p><b>Step 3:</b> Use the direction keys on your keyboard or move your fingers across the mobile screen to control Piggy’s directions.</p>
                <ul>
                  <li><b>Piggy:</b>The character you control. Control Piggy to gobble up dots, Power Pellets, and Eggies while avoiding the Dinos.</li>
                  <li><b>Dinos: </b> Dinos pursue Piggy in the game. Avoid the Dinos or your Piggy will not survive.</li>
                  <li><b>Dot: </b>Gobble up a dot to get 10 points.</li>
                  <li><b>Power Pellets:</b>Gobble up a Power Pellet to get 50 points and temporarily transform the Dinos into Eggies.</li>
                  <li><b>Eggies:</b>Gobble up an Eggie to get 200 points.</li>
                </ul>
                <p>When your Piggy gobbles up all the dots and Power Pellets, the map will be renewed with new dots and Power Pellets. Each game lasts for 5 minutes. You can keep playing until both the Piggies are caught by Dinos or when the time runs out. You will see the points accumulated from the game after it ends.</p>
                <h4>How to get more chances to play the game?</h4>
                <p>There are two ways to get chances to play the DOT DASH game.</p>
                <h6>1. Visit the game’s landing page every day</h6>
                <p>Log in to your Binance account and visit the<a href='#'> DOT DASH Game landing page</a> every day. You will get two chances on your first visit. From your second visit onwards, you will get one chance each day.</p>              
                 <h6>2. Refer friends to Binance</h6>
                 <p>Generate a Lite Referral Mode link/ID from the <a href='#'>Lite Referral landing page</a> or the <a href='#'>DOT DASH Game landing page</a>. Invite a non-Binance user to sign up for a Binance account using your Lite Referral Mode link/ID. You can get two chances for the DOT DASH game for every successful referral during the activity period.</p>
                 <p>Note: If you do not have a Binance account, you only get one chance to play the DOT DASH Game during the activity period in the Single Mode. The points you accumulate will not be recorded and you are not eligible for any rewards.</p>
                 <h4>How to get rewards?</h4>
                 <h6>Single Mode Rewards</h6>
                 <p>You can earn one share from the 8,000 BUSD prize pool by accumulating at least 5,000 points in a Single Mode game. There is no limit on the number of shares you can earn, but you can only win a maximum of 100 BUSD. To get more shares, simply play more games. Binance will calculate the Single Mode rewards based on the formula below after the activity ends.</p>
                <p>Single Mode Rewards = 8,000 BUSD * Your Earned Shares / Total Shares Earned by All Players</p>
                <h6>2-Player Mode Rewards</h6>
                <p>Work as a team with your referred friend to accumulate as many points as possible in the 2-Player Mode. The team that accumulates the highest points in one round of the game by the end of the activity period will win 1 BTC, which will be shared equally between the two players on the team.</p>
                <p>The team rankings will be displayed on the Leaderboard on the<a href='#'> DOT DASH Game landing page</a>. If two or more teams accumulated the same number of points at the end of the activity, the team that generated the highest points first would win the 1 BTC prize.</p>
                <p>You can form as many teams as possible to play the DOT DASH game during the activity period. Please note that each team can only play the 2-Player Mode game twice. Once the two chances are used up, you can invite other friends you referred to form new teams to play.</p>
                <h6>Lite Referral Mode Rewards</h6>
                <p>Once your friend registers for a Binance account via your Lite Referral Mode link/ID, completes <a href='#'>identity verification</a>, and deposits more than $50 within 14 days after registration, you will both receive a 100 USDT Trading Fee Rebate Voucher. Click <a href='#'>here</a> to learn more.</p>
                <h4>Terms and Conditions</h4>
                <ul>
                  <li>Each new Binance user can only be referred via one referral mode. If a new user registers for a Binance account via the <a href='#'>Lite Referral ID/link</a>, the user who invited them will not be eligible for any <a href='#'>commission-based</a> rewards under the Standard Referral Mode.</li>
                  <li>Sub-accounts and corporate accounts cannot be used to participate in this activity.</li>
                  <li>If the system identifies a user as a “risk user”, the ranking of that particular team will be removed from the Leaderboard and the risk user will not be qualified for any rewards.</li>
                  <li>If a user registers for multiple accounts through the same device or IP, Binance will deem the referrals for such accounts as invalid.</li>
                  <li>Users will be able to check their rewards via the <a href='#'>DOT DASH Game Landing Page</a> > My Rewards within three days after the Activity ends.</li>
                  <li>To be eligible for rewards, you must complete <a href='#'>identity verification</a> within seven days after the activity ends. You will receive the rewards in the form of a Binance Gift Card within 48 hours after completing identity verification. To redeem your rewards, go to [Gift Card] - [<a href='#'>History</a>].</li>
                  <li>All rewards must be redeemed within seven days after distribution.</li>
                  <li>Binance reserves the right to cancel or amend any activity or activity rules at its sole discretion.</li>
                  <li>Binance reserves the right to disqualify users from participating in the referral program and revoke any reward from users who engage in dishonest or abusive activities to earn rewards. This includes bulk-account registrations to obtain additional bonuses, usage of <a href='#'>"Phising"</a> websites containing referral links, posting referral links as advertisements on search engines, and any other activity in connection with unlawful, fraudulent, or harmful purposes.</li>
                  <li>All participants must strictly abide by the Binance Terms of Use. Any breach of the <a href='#'>Binance Terms of Use</a> will disqualify the user from earning referral rewards.</li>
                  <li>Singapore residents are disqualified from participating and receiving any rewards in the Binance DOT DASH activity.</li>
                  <li>Binance has the sole discretion to decide and determine whether a user will be entitled to earn any referral reward and reserves the right to amend these Terms & Conditions from time to time.</li>
                  <li>If the system detects that a user has deleted his account in order to create a new account to benefit from the referral program, Binance reserves the right to terminate all referral commissions from the account.</li>
                </ul>

              </div>)}
             { article === 3 && ( <div className='row2-data'>
                <h2>How to Use Binance Lite Referral</h2>
                <p>2022-11-18 19:29</p>
                <p>Experience a new way of earning rewards by inviting your friends to join Binance. When a friend you’ve invited registers for a Binance account and makes a deposit worth more than $50, you’ll both receive 100 USDT in credits that you can use to offset your trading fees.</p>
                <h4>1. How can I earn referral rewards?</h4>
                <p>Step 1: Select [<a href='#'>Lite Referral</a>] mode and share your referral link with friends.</p>
                <p>Please note: Lite Referral rewards cannot be earned on top of Standard Referral rewards. To earn rewards from our regular commission-based referral program, please choose [<a href='#'>Standard Referral</a>] instead.</p>
                <p>Step 2: Once your friend registers for a Binance account, completes Identity Verification, and makes accumulative deposits worth more than $50 within 14 days after registration, you’ll each receive a 100 USDT Trading Fee Rebate Voucher (formerly known as Cashback Voucher).</p>
                <p>Your friend can make their deposit using any of the following channels:</p>
                <ul>
                  <li>Cash Deposit</li>
                  <li>But Crypt with debit/credit card</li>
                  <li>P2P Trading</li>
                  <li>Deposit Crypto</li>
                </ul>
                <p>Please note that any deposit via a third-party payment method or from another Binance account will not be counted towards the user’s deposit volume.</p>
                <h4>2. How do I claim my referral rewards?</h4>
                <p>To be eligible for referral rewards, you must complete Identity Verification within Seven days after the reward is available. Once you complete Identity Verification, the reward will be automatically distributed to your [Reward Center] within 48 hours. Please note that any unclaimed rewards will expire in seven days.</p>
                <p>If you have not completed Identity Verification within seven days, only your friend will be eligible to receive the reward.</p>
                <p>For example:</p>
                <p>User A invites User B via Lite Referral.</p>
                <p>User B makes accumulative deposits of more than $50 and completes Identity Verification.</p>
                <p>User A has not completed Verification, so only User B is eligible for the reward.</p>
                <p>Once User A completes Identity Verification, User A will also be eligible for the reward.</p>
                <h4>3. How can I use the Trading Fee Rebate Voucher?</h4>
                <p>After receiving the voucher, go to [<a href='#'>Reward Center</a>] to redeem it within seven days. Please note that all the Trading Fee Rebate Vouchers are valid for 14 days once activated. Following activation, the rebate earned from trading fees will be distributed to the user’s spot account in USDT before 23:59:59 the next day.</p>
                <p>For more details on how to use Trading Fee Rebate Vouchers, please refer to <a href='#'>Trading Fee Rebate Voucher Terms and Conditions</a>.</p>
                <h4>4. How many Trading Fee Rebate Vouchers can I get?</h4>
                <p>There are no restrictions on the number of Trading Fee Rebate Vouchers you can earn.</p>
                <h4>5. How can I get more rewards?</h4>
                <p>You can earn more Trading Fee Rebate Vouchers by inviting more friends to join Binance and complete their first deposit.</p>
                <h6>Terms and Conditions</h6>
                <ol>
                  <li>Each new Binance user can only be referred via one referral mode. If a new user registers for a Binance account via the <a href='#'>Lite Referral ID/link</a>, the user who invited them will not be eligible for any commission-based rewards under the Standard Referral Mode.</li>
                  <li>Eligible rewards can be unlocked within 7 days after distribution. The Trading Fee Rebate Vouchers will expire after 7 days, after which the rewards can no longer be claimed.</li>
                  <li>All rewards are distributed in the form of Trading Fee Rebate Vouchers. To redeem, please go to [<a href='#'>Reward Center</a>]. Trading Fee Rebate Vouchers will be valid for 14 days once activated.</li>
                  <li>Sub-accounts cannot be used to participate in this event. Deposits made via a sub-account or account transfer will not be eligible for rewards.</li>
                  <li>Any deposit via a third-party payment method or from another Binance account will not be counted towards the user’s deposit volume.</li>
                  <li>Users need to complete <a href='#'>Identity Verification</a> within 7 days after the reward is available for redemption. The reward will be automatically distributed to the [<a href='#'>Reward Center</a>] within 48 hours after they complete Identity Verification.</li>
                  <li>Binance will use real-time fiat currency to USD exchange rate to calculate the deposit and trading amounts in USD</li>
                  <li>Binance reserves the right to disqualify users from participating in the referral program and revoke any reward from users who engage in dishonest or abusive activities to earn referral rewards. This includes bulk account registrations to obtain additional bonuses, <a href='#'>usage of “phishing” websites containing referral links, posting referral links as advertisements on search engines</a>, and any other activity associated with unlawful, fraudulent, or harmful purposes.</li>
                  <li>Binance reserves the right to cancel or amend any Activity or Activity Rules at our sole discretion.</li>
                  <li>All users must strictly abide by the Binance Terms of Use. Any breach of the <a href='#'>Binance Terms of Use</a> will disqualify the user from earning referral rewards.</li>

                  <li> Binance has the sole discretion to determine and decide whether a user is entitled to earn any referral rewards, and reserves the right to amend these Terms & Conditions from time to time. If you have any questions, please contact <a href='#'>customer service</a>.</li>
                  <li>If the system detects that a user has deleted their account in order to create a new account to benefit from the referral program, Binance reserves the right to terminate all referral commissions due to their account.</li>
                  <li>Starting from 2022-11-18 12:00 (UTC), Singapore residents are disqualified from participating in the Binance Referral Program as a referrer or referred applicant.</li>
                </ol>
              </div>)}
              { article === 4 && (<div className='row2-data'>
                <h2>What Is Affiliate Rewards Bootcamp and Frequently Asked Questions</h2>
                <p>2022-03-11 15:21</p>
                <img src={pic19} alt='affiliate rewards bootcamp' className='css-19g68el'/>
                <h4>What is the Affiliate Rewards Bootcamp?</h4>
                <p>Affiliate Rewards Bootcamp is a seven-class course designed for crypto enthusiasts. No prior experience is required. All you need is a can-do attitude and a thirst for knowledge. You also won’t be on your own, as one of our seasoned crypto content experts will be guiding you throughout the journey. With each class, you’ll discover essential skills and tools to succeed in the crypto-creator economy.</p>
                <p>Some classes will feature a hands-on project that lets you practice with a real audience. You can also win rewards by completing the classes and projects, such as bonus incentives, extra commission, and up to $3,000 in BUSD. For additional information, please check out our blog.</p>
                <h4>How do I join the Affiliate Rewards Bootcamp?</h4>
                <p>This Bootcamp is currently available to all existing Binance users outside of the restricted regions. Please note that this Bootcamp is only available in select languages. If you’re interested in becoming the next crypto influencer, sign up from the <a href='#'>Bootcamp landing page</a> within the sign-up period. Sign-ups outside of this period will not be eligible to participate in the current Bootcamp and will be put on the waiting list for our next Bootcamp. You can check the registration status or sign-up for the waiting list <a href='#'>here</a>.</p>
                <h4>Frequently Asked Questions</h4>
                <h6>1. How do I access the Bootcamp class videos?</h6>
                <p>After the sign-up period, users who successfully signed up will receive class one via the email linked to their Binance account. After that, you'll receive the rest of the class videos and project instructions daily for a total of eight days.</p>
                <h6>2. What will I learn from this Bootcamp?</h6>
                <p>This e-course contains seven classes. Please see each class topic below.</p>
                <ul>
                  <li>Class one: What does it mean to become a crypto influencer</li>
                  <li>Class two: Introduction to Binance trading products and how to promote products to users</li>
                  <li>Class three: How to create quality and effective content</li>
                  <li>Class four: User-generated content for non-trading Binance products</li>
                  <li>Class five: How to effectively attract new invitees</li>
                  <li>Class six: How to convert registered users to active users</li>
                  <li>Class seven: Tips and tricks from a top affiliate</li>
                </ul>
                <h6>3. What are the class projects?</h6>
                <p>Each class has its own project where you will have to complete tasks related to the class. Class projects are designed to help you get the most out of your learning experience and enhance your understanding of the entire Binance ecosystem. Users who complete all class projects are eligible to receive up to $3,000 in BUSD.</p>
                <h6>4. Is there a deadline for completing the class projects?</h6>
                <p>Yes, participants must complete all class projects within one month of receiving the email for class one. For example, class one began on Mar 28, 2022, and the deadline to submit your projects will be April 28, 2022</p>
                <p>Please note that projects are accepted and evaluated on a rolling basis. If you need additional time to complete your project, you can raise a query in the Telegram group chat you received in the class one email. Participants are encouraged only to submit projects when they are absolutely ready.</p>
                <h6>5. I passed the Bootcamp. What happens next?</h6>
                <p>Participants who pass the Bootcamp are eligible to become a Binance Affiliate and have the opportunity to experience the program as a Bootcamp graduate.</p>
                <p>As a graduate, you are eligible to receive additional BUSD rewards on a monthly basis and have the opportunity to participate in specialized graduate campaigns.</p>
                <h6>6. Do I have to complete all the class projects?</h6>
                <p>No, it is not mandatory to complete all class projects. However, the more projects you complete, the larger your reward amount. We encourage you to try to complete all five projects.</p>
                <h6>7. Are there any rewards for completing class projects?</h6>
                <p>Yes, participants who complete one class project will be eligible to join the Binance Affiliate Program and receive all the benefits of being an affiliate. You can also get up to $3,000 in BUSD for completing all projects and additional ongoing rewards for being a Bootcamp graduate.</p>
                <p>As a Binance Affiliate, you’re entitled to more commission (up to 50% for Spot trading). You’ll also get a sign-up bonus package for your community and an incentive-filled content program.</p>
                <h6>8. What is the exclusivity pathway? </h6>
                <p>To access all seven class videos, you must agree to promote Binance for a three-month period. If you do not want to go through the exclusivity pathway, you will only have access to classes one, two, and four with fewer reward options. Moreover, the maximum reward will only be 500 BUSD.</p>
                <h6>9. How do I submit a project?</h6>
                <p>You will receive an email with the submission form after the last class video, or you can submit it <a href='#'> here</a>.</p>
                <p>You can select which classes you would like to submit projects for. Please note that you must submit the published content links when submitting the projects for classes two, three, and four.</p>
                <h6>10. Some projects require content submissions, can I submit the same content for multiple projects?</h6>
                <p>No, each class project requires original content. The same content cannot be submitted for multiple projects.</p>
                <h6>11. Do I have to complete the class projects in order?</h6>
                <p>No, once you have watched all the class videos, you can complete the class projects as you see fit.</p>
                <h6>12. How can I see my total registrations for class five?</h6>
                <p>Go to the <a href='#'>referral dashboard</a>, select <b>[Standard Referral]</b>, and click <b> [Referrals]</b>.</p>
                <h6>13. How do I know if I passed a class project?</h6>
                <p>After the project submission deadline, the projects you uploaded will be evaluated. You’ll receive the results and the total reward amount via email.</p>
                <h6>14. How do I achieve the minimum BTC trading volume?</h6>
                <p>We will calculate the trading volume in BTC from users you invited to Binance. This includes the trading volume in all Binance trading markets.</p>
                <h6>15. What are the minimum requirements for receiving the project rewards?</h6>
                <p>To be eligible to receive the reward for any class project, you must pass each of their minimum requirements. <b>Please note that to pass the Bootcamp, you only need to pass the minimum requirements for one project</b>. However, metrics such as the total number of followers, new referrals, and active referrals are taken into consideration during the evaluation process. If you pass project number 3 or project number 4, but your Binance referral account is inactive, then you may not be eligible to receive a reward for those class projects.</p>
              
              
              </div>)}
              { article === 5 && (<div className='row2-data'>
                <h2>Terms and Conditions for Lite Referral Limited-Time Activities</h2>
                <p>2022-01-07 13:57</p>
                <p>For a limited time only, you can refer your friends to register for a Binance account and you’ll both get a chance to receive rewards.</p>
                <h4>1. How to participate in limited-time Lite Referral Activities?</h4>
                <p>Step 1: Select an ongoing <a href='#'><b>[Lite Referral]</b></a> activity and share your referral link with friends during the activity period.</p>
                <p>Please note that you cannot earn the limited-time Lite Referral Activity rewards and the Standard Referral rewards at the same time. To earn rewards from the regular commission-based referral program, please choose [Standard Referral] instead.</p>
                <p>Step 2: Once your friend registers for a Binance account and completes the following tasks, you will both receive rewards.</p>
                <p>Deposit Task: The friend you referred needs to deposit more than $50 (cumulative across multiple deposits) via any of the following channels:</p>
                <ul>
                  <li><a href='#'>Cash deposit</a></li>
                  <li><a href='#'>Buy crypto with debit/credit card</a></li>
                  <li><a href='#'></a>P2P trading</li>
                  <li><a href='#'>Deposit crypto</a></li>
                </ul>
                <p>Any deposit via a third-party payment method or another Binance account will not be counted towards the deposit volume.</p>
                <p>Trading Task: The friend you referred needs to trade more than $200 (cumulative across multiple trades) on any <a href='#'>Spot Market</a> or <a href='#'> Convert</a> trading pairs, including buy and sell orders.</p>
                <p>Note: They must complete the deposit task first to unlock the trading task.</p>
                <p>If your friend didn’t complete the deposit task, both of you won’t be eligible to receive any rewards for the trading task, even if they traded more than $200.</p>
                <h6>2. How to claim the rewards?</h6>
                <p>Once the friend you referred completes the deposit and trading tasks, both of you are eligible to receive the rewards. To unlock the rewards, you and your friend need to complete <a href='#'>Identity Verification</a> first. It can take up to 7 days for your verification to process, so you are recommended to complete Identity Verification within 7 days after the activity ends.</p>
                <p>After completing your Identity Verification, follow the instructions to claim the rewards. Please claim them within 7 days after the activity ends or they will expire. You will receive your rewards within 48 hours after claiming.</p>
                <h6>3. How many tasks can I do to earn rewards?</h6>
                <p>Each user can complete up to 20 tasks: 10 deposit tasks and 10 trading tasks.</p>
                <h6>4. How can I get more rewards?</h6>
                <p>Simply invite more friends and encourage them to complete their deposit and trading tasks to win more rewards.</p>
                <p>For example:</p>
                <p>User A invited 10 friends. All of them completed the deposit tasks, and 9 completed the trading tasks.</p>
                <p>User A will get 10 rewards from the deposit tasks and 9 rewards from the trading tasks.  </p>
                <p>If User A wants to get the remaining reward, they can either remind the referred friend to complete the trading task, or invite a new friend to complete both the deposit and trading tasks.</p>
                <h6>5. What is a Pooled reward, and how can I get it?</h6>
                <p>Select an ongoing [Lite Referral] activity and click the [Share] button to share the offer on your social media during the activity period. Binance will select 5,000 users that have successfully shared* the activity and claimed the most task Mystery Boxes for the Pooled reward. The selected users can share the $10,000 prize pool, out of which 3 lucky users can each receive 1 BNB. The more tasks you complete, the more likely you can get the 1 BNB reward. Winners will receive the reward tokens within 72 hours after the activity ends.</p>
                <p>*“Successful sharing” means that at least 1 person clicked on the link or scanned the QR code you shared on your social media.</p>
                <h6>Terms and Conditions</h6>
                <ol>
                  <li> Each new Binance user can only be referred via one Referral mode. If a new user registered a Binance account via the Lite Referral activity ID/link, the user who invited them will not be eligible for any <a href='#'>commission-based</a> reward from the regular Standard Referral Program.</li> 
                  <li>Eligible rewards can be unlocked within 7 days after the activity ends. After 7 days, the rewards will expire and cannot be claimed.</li>
                  <li>Sub-accounts cannot be used to participate in this event. Deposits made via a sub-account or account transfer will not be qualified.</li>
                  <li>Any deposit via a third-party payment method or another Binance account will not be counted towards the deposit volume.</li>
                  <li>Rewards are distributed on a first-come, first-served basis. When the prize pool runs out, no rewards will be distributed.</li>
                  <li> Rewards for the Pooled Prize will be distributed within 72 hours after the activity ends. Eligible users will be able to check their rewards and the winner’s list. The 3 BNB winners will be announced 7 days after the activity ends.</li>
                  <li>During the activity period, Binance will use the real-time fiat currency-to-USD exchange rate to calculate the deposit and trading amounts in USD.</li>
                  <li>Binance reserves the right to disqualify users from participating in the referral program and revoke any reward from users who engage in dishonest or abusive activities to earn rewards. This includes bulk-account registrations to obtain additional bonuses, usage of “phishing” websites containing referral links, posting referral links as advertisements on search engines, and any other activity in connection with unlawful, fraudulent, or harmful purposes. </li>
                  <li>Binance reserves the right to cancel or amend any Activity or Activity Rules at its sole discretion.</li>
                  <li> All participants must strictly abide by the <a href='#'>Binance Terms of Use</a>. Any breach of the Binance Terms of Use will disqualify the user from earning referral rewards.</li>
                  <li> Binance has the sole discretion to decide and determine whether a user will be entitled to earn any referral reward and reserves the right to amend these Terms & Conditions from time to time. If you have any questions, please contact <a href='#'>customer service</a>.</li>
                  <li>If the system detects that a user has deleted his account in order to create a new account to benefit from the referral program, Binance reserves the right to terminate all referral commissions from the account.</li>
                </ol>
                <p><i>Note: This article was updated on 25 October 2022 to include more details on the Terms and Conditions for Lite Referral Limited-Time Activities.</i></p>
             
              </div>)}
              { article === 6 && (<div className='row2-data'>
                <h2>Binance Standard Referral Mode Guide</h2>
                <p>2021-04-20 11:17</p>
                <p>Experience a new way of earning crypto by inviting your friends to join the Binance community. Invite friends and earn crypto together!</p>
                <h4>Binance Standard Referral Mode Rules:</h4>
                <h6>Spot (Margin) & Futures:</h6>
                <p>For every new user successfully referred to Binance via the Standard Referral Mode, the referrer will receive a commission on fees anytime the new referred user trades on any of Binance’s Spot (Margin) or Futures markets. This means you can now invite users via a Spot standard referral link or a Futures referral link and receive the commission from both. You can also give your friends a discount on trading fees when they sign up using your standard referral link. <a href='#'>(Invite now)</a></p>
                <p>Example:</p>
                <p>User A invites User B via a Spot standard referral link. User A will receive a referral commission on User B’s trading fees whenever User B trades on any of Binance’s Spot, Margin, or Futures markets.</p>
                <p>*To earn both Spot and Futures commission when referring a friend, you need to ensure you have opened a Futures account before inviting friends. If you refer a friend using your Spot standard referral link, but you haven’t opened a Futures account, you will only earn commissions from their Spot trading fees.</p>
                <p>Example:</p>
                <p>User A invites User B via a Futures referral link. User A can receive referral commission on User B’s trading fees anytime User B trades on any of Binance’s Spot, Margin, or Futures markets.</p>
                <p>* If the new user did not register a Binance Account using your Referral ID, you will not receive any referral commissions for Spot and Margin trading from this new user.</p>
                <p>The same user, however, can still activate a new Futures Account with your Futures Referral ID. You will then only receive referral commissions for Futures trading from this user.</p>
                <p>* If the system detected a user deleted his account in order to create a new account to benefit from the referral program, Binance reserves the right to terminate all referral commissions from the account.</p>
                <p>Commission and kickback/discount rate:</p>
                <p>Spot:</p>
                <table className='faq-table'>
                  <tr>
                    <td>Inviter’s Daily BNB Balance</td>
                    <td>Inviter’s Base Referral Rate</td>
                    <td>Rate Received by the Inviter</td>
                    <td>Rate Received by the Invitee</td>
                  </tr>
                  <tr>
                    <td rowSpan='3'> 500 BNB</td>
                    <td rowSpan='3'>20%</td>
                    <td>20%</td>
                    <td>0%</td>
                  </tr>
                  <tr><td>15%</td><td>5%</td></tr>
                  <tr><td>10%</td><td>10%</td></tr>
                  <tr>
                    <td rowSpan='6'> ≥ 500 BNB </td>
                    <td rowSpan='6'>40%</td>
                    <td>40%</td>
                    <td>0%</td>
                  </tr>
                  <tr><td>35%</td><td>5%</td></tr>
                  <tr><td></td><td></td></tr>
                  <tr><td>30%</td><td>10%</td></tr>
                  <tr><td>25%</td><td>15%</td></tr>
                  <tr><td>20%</td><td>20%</td></tr>
                  
                </table>
                <ul>
                  <li>If the inviter’s daily average BNB account balance is less than 500 BNB and their base standard referral rate is 20%, they can choose to share 0%, 5% or 10% with the friends they invite.</li>
                  <li>If the inviter’s daily average BNB account balance is 500 BNB or above, their base standard referral rate will be increased to 40%, and they can choose to share 0%, 5%, 10%, 15%, or 20% with the friends they invite.</li>
                  <li>The spot commission and kickback rates for referred users registered through a Futures referral link are set as per the rate set on the ‘default’ Spot referral link.</li>
                  <li>For more details, please refer to the Daily average <a href='#'>BNB Balance Calculation Rules</a>.</li>
                  <li>For more details, please refer to the <a href='#'>Spot referral rules</a>.</li>
                </ul> 
                <p>Futures:</p>
                <table className='faq-table'>
                  <tr>
                    <td>Inviter’s Daily BNB Balance</td>
                    <td>Inviter’s Base Referral Rate</td>
                    <td>Rate Received by the Inviter</td>
                    <td>Rate Received by the Invitee</td>
                  </tr>
                  <tr>
                    <td>＜ 500 BNB</td>
                    <td>20%</td>
                    <td>10%</td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td> ≥ 500 BNB</td>
                    <td>30%</td>
                    <td>20%</td>
                    <td>10%</td>
                  </tr>
                </table>
                <ul>
                  <li>If the inviter’s daily average BNB account balance is less than 500 BNB, their base referral rate is 20%, of which they will share 10% with the invitee, leaving the inviter with 10% referral bonus.</li>
                  <li>If the inviter’s daily average BNB account balance is 500 BNB or above, their base referral rate is 30%, of which they will share 10% with the invitee, leaving the inviter with a 20% referral bonus.</li>
                  <li>For more details, please refer to the <a href='#'>Futures referral rules</a>.</li>
                </ul>
                <p>Spot and Futures referral programs consolidation:</p>
                <p>Binance has consolidated the trading fee commission for the Spot Standard Referral Mode and the Futures referral program on 2020-05-11 16:00 (UTC). This means you can now invite users via a Spot Standard Referral link or a Futures referral link and receive a commission from both. However, the consolidated commission does not apply to users referred to Binance via the Spot Standard Referral Mode or the Futures referral program prior to 2020-05-07 13:00 (UTC)</p>
                <p>Visit here to see the detailed rules for the Spot Standard Referral Mode and the Futures referral program updates.</p>
                <h4>What is the Binance Pool Referral Program?</h4>
                <p>Binance Pool is a comprehensive service platform dedicated to improving the income of miners. It provides mining services to users with a focus on PoW and PoS. When your friends sign up to Binance Pool using your referral link or code and start mining, you'll get a percentage of their pool fee income as a referral reward. In addition, you can also get transaction fee referral rewards for Spot, Margin, and Futures markets.</p>
                <p>You can earn a 30% commission when you invite your friends to Binance Pool. This means that you will receive 30% of the invitee’s Mining Pool fee income. The final commission rate is calculated by the total estimated profit * mining fee (2.5%) * commission rate (30%).</p>
                <p>Visit <a href='#'>here</a> to see the detailed referral rules for Binance Pool.</p>
                <p>Example:</p>
                <p>The invitee has an estimated profit of 0.0000697 BTC. The amount of commission the inviter can receive is calculated based on the following:</p>
                <p>Estimated Profit * Mining Fee * Commission Rate = Referral Commission</p>
                <p>0.0000697 BTC * 2.5% * 30% = 0.00000052 BTC</p>
                <img src={pic20} alt='commmsion calculation' className='css-19g68el'/>
                <h4>What is the Affiliate Rewards Bootcamp?</h4>
                <img src={pic19} alt='affiliate rewards bootcamp' className='css-19g68el'/>
                <p>The <a href='#'>Affiliate Rewards Bootcamp</a> is a fast-track program where you’ll learn how to build your crypto audience from scratch and transform it into an income-generating machine. Complete the classes and projects, and you can take home rewards like bonus incentives, extra commission, and up to $3,000 in BUSD. For more details, please refer to the <a href='#'> Affiliate Rewards Bootcamp</a> homepage.</p>
                <ul>
                  <li>Binance reserves the right to disqualify users from participating in the Binance Standard Referral Program and revoke any commission from users who engage in dishonest or abusive activities to earn commissions. This includes bulk-account registrations to obtain additional bonuses, usage of “phishing” websites containing referral links, posting referral links as advertisements on search engines, and any other activity in connection with unlawful, fraudulent, or harmful purposes.</li>
                  <li>Binance reserves the right to cancel or amend the Standard Referral Program or Program Rules at its sole discretion.</li>
                  <li>All users must strictly abide by the Binance Terms of Use. Any breach of the <a href='#'>Binance Terms of Use</a> will disqualify the user from earning the Standard Referral Commissions.</li>
                  <li>Binance has the sole discretion to decide and determine whether a user will be entitled to earn any commission and reserves the right to amend these Terms & Conditions from time to time. If you have any questions, please contact <a href='#'>customer service</a>.</li>
                  <li>Starting from 2022-11-18 12:00 (UTC), Singapore residents are disqualified from participating in the Binance Referral Program as a referrer or referred applicant.</li>
                </ul>
                <p><i>Note: This article was updated on 18 November 2022 to include more details on the Terms and Conditions for Binance Standard Referral Program.</i></p>

              </div>)}
              { article === 7 && (<div className='row2-data'>
                <h2>Frequently Asked Questions on Binance Standard Referral Mode</h2>
                <p>2021-04-19 14:41</p>
                <h4>1. What is the Binance Standard Referral Mode?</h4>
                <p>For every new user successfully referred to Binance via the Standard Referral Mode, the referrer will receive a commission on fees anytime the referred user trades on any of Binance’s Spot or Futures markets. This means you can now invite users via a Spot standard referral link or a Futures referral link and receive the commission from both. Please note that the referral commission for the Futures market is limited to 12 months starting from the time the invitee opens a Futures account.</p>
                <h4>2. Can my invitee use my standard referral code after creating their Binance account?</h4>
                <p>A referral code must be used when the user open a Binance account. Please make sure that you or your invitees enter the correct referral code. If they forget to use the referral code when signing up or entered the wrong referral code, the commission cannot be collected.</p>
                <h4>3. How can I check my commission history?</h4>
                <p>You can check your referral commission from <a href='#'>[Referral]</a> - <b>[Commission Rebate]</b>. The funds are credited to your account every hour.</p>
                <p>You can also click on the chart icon to download your commission rebate data.</p>
                <h4>4. Why haven’t I received the referral commission from my invitees?</h4>
                <p>Standard Referral commission is calculated in real-time and transferred to the respective Binance accounts every hour. You will only be able to receive referral commissions once your invitee makes a transaction.</p>
                <p>For Futures trading, you can only receive a referral commission from invitees who are regular or VIP 1 users for 12 months from their respective days of registration.</p>
                <p>To learn both Spot and Futures commission when referring a friend, you will need to ensure you have opened a Futures account. If you refer a friend using your Spot standard referral link, but you haven’t opened a Futures account, then you can only earn commission from their Spot trading fees.</p>
                <h4>5. How can I check the UID of the invitees I referred?</h4>
                <p>Go to <a href='#'>[Standard Referral]</a> and click <b> [Referrals]</b>. You can see their UIDs under <b>[All Accounts]</b>.</p>
                <h4>6. Can I change my referrer?</h4>
                <p>No, once the referral relationship has been established it cannot be changed.</p>
                <h4>7. What’s the difference between referral commission and rebate?</h4>
                <p>The referral commission rate and the rebate rate are both a part of the base referral bonus. Once the invitee makes a transaction, the inviter will receive a referral commission and the invitee will receive a rebate.</p>
                <h4>8. When will I receive the standard referral commission and what’s the settlement token?</h4>
                <p>All standard referral commissions (those received by inviters and those shared with their invited friends) are calculated in real-time and transferred to the respective Binance accounts every hour.</p>
                <p>The settlement assets of referral commissions are the same as the commission fees generated by the actual transaction of the invited friend (invitee). If the invitee uses the BNB fee discount, the settlement assets of referral commissions and referral commissions returned will be in BNB.</p>
                <h4>9. When is my referral rate updated?</h4>
                <p>Referral rates are calculated at 02:00 (UTC) every day and are updated at 10:00 (UTC).</p>
                <h4>10. Where can I find my standard referral link?</h4>
                <p>If you're using the Binance website, log in to your Binance account and click <b>[Dashboard]</b> - <b>[Referral]</b> - <a href='#'> [Standard Referral]</a>.</p>
                <p>Alternatively, log in to your Binance App and tap <b> [Referral]</b> on the homepage and go to <b>[Standard Referral]</b>.</p>
                <h4>11. How do I create, set up, and manage my referral links?</h4>
                <ul>
                  <li>Log in to your Binance account and click <a href='#'><b>[Dashboard] </b></a>- <a href='#'>[Referral]</a> - <a href='#'>[Standard Referral]</a>. Click <b> [Change referral settings]</b>.</li>
                  <li>Click <b>[+ Add New Referral]</b> and set your friends’ commission rebate rate. The default referral rate is 20%, you can choose to share 0%, 5%, or 10% with the friends you invite. Click <b>[Confirm]</b>.</li>
                  <li>Click <b>[Copy]</b> next to the invite link and send it to your friends. Once they successfully register at Binance and start trading, referral commissions (those received by you and those shared with your invited friends) are calculated in real-time and transferred to the respective Binance accounts every hour.</li>
                </ul>
                <h4>12. Can I delete my current Binance Account and register for a new account with a new referral code?</h4>
                <p>If the system detected a user deleted his account in order to create a new account to benefit from the referral program, Binance reserves the right to terminate all referral commissions from the account.</p>
                <p>Note: If the new user did not register a Binance Account using your Referral ID, you will not receive referral commissions for Spot and Margin trading from this user.</p>
                <p>The same user can still activate a new Futures Account with your futures Referral ID, you will then receive commissions for Futures trading from this user only.</p>
                <p>Note: If your daily average BNB account balance is 500 BNB or more, the base Spot referral rate will be increased to 40%, and you can choose to share 0%, 5%, 10%, 15%, or 20% with your friends. Binance may adjust the proportion of referrals at any point and reserves the right to adjust the rules of the Standard Referral Mode.</p>
              
              </div>)}
              { article === 8 && (<div className='row2-data'>
                 <h2>Binance Affiliate Program Guide</h2>
                 <p>2021-04-19 13:54</p>
                 <p>The Binance Affiliate Program allows you to earn up to 50% of referral commission and up to $72,000 bonuses per month on every qualified trade. Read on to learn more about the program.</p>
                 <h4>What is the Binance Affiliate Program?</h4>
                 <p>The Binance Affiliate Program offers different commission rates for Spot and Futures trading. You can create unique referral links via the Standard Referral Mode and invite new users to register and trade on Binance. When someone registers through your <a href='#'><b>Standard Referral link</b></a>, they’ll be automatically attributed as your referred traders. You’ll receive a commission on every trade they make from Spot, Futures, Margin trading, or Binance Pool.</p>
                 <h4>Who can apply for the Binance Affiliate Program?</h4>
                 <p>Crypto community leaders and content creators (such as YouTubers) interested in becoming Binance Affiliate partners and meeting the following requirements can register for the program</p>
                 <h6>Individual</h6>
                 <ul>
                  <li>Social media account with 5,000+ followers or subscribers on one or more social media platforms (Youtube, Twitter, Facebook, Instagram, etc.)</li>
                 </ul>
                 <h6>Crypto Communities</h6>
                 <ul>
                  <li>Financial leaders or opinion leaders with a community of 500+ members on one or more community groups (Telegram, Facebook, WeChat, Reddit, QQ, VK, etc.)</li>
                 </ul>
                 <h6>Business/Organization</h6>
                 <ul>
                  <li>A user base of 2,000+;</li>
                  <li>Market analysis platform with 5,000+ daily visits;</li>
                  <li>Industry media platform;</li>
                  <li>Crypto fund;</li>
                  <li>Aggregate trading platform.</li>
                 </ul>
                 <h4>How does the Binance Affiliate Program work?</h4>
                 <h6>Step 1: Become a Binance Affiliate</h6>
                 <p>Go to the <a>Binance Affiliate website</a>. Click [Become an affiliate] and complete the form. We will evaluate your application and contact you if you meet the program criteria.</p>
                 <h6>Step 2: Create and share your Standard Referral links</h6>
                 <p>Visit the <a href='#'>Standard Referral Mode</a> page to create and manage your standard referral links from your Binance Account. You can also track the performance of each referral link you share with your community and customize them for various channels using different discounts.</p>
                 <h6>Step 3: Sit back, relax, and earn commissions</h6>
                 <p>When someone registers for a Binance account through your standard referral link, you can get up to 50% commission every time they complete a trade.</p>
                 <h4>What are the benefits of joining the Binance Affiliate Program?</h4>
                 <h6>Spot Affiliates</h6>
                 <table className='faq-table'>
                   <tr>
                    <td>Category</td>
                    <td>Total Referred Traders*</td>
                    <td>Commission</td>
                    <td>Note</td>
                   </tr>
                   <tr>
                    <td rowSpan='2'>Spot Affiliates</td>
                    <td> 500 </td>
                    <td> 41% </td>
                    <td>BNB holding requirement waived</td>
                   </tr>
                   <tr>
                    <td> ≥ 500 </td>
                    <td> 50% </td>
                    <td> BNB holding requirement waived </td>
                   </tr>
                 </table>
                 <p>* ”Total referred traders” refers to the number of users registered with your referral link and completed a Spot, Futures, Margin, or mining transaction.</p>
                 <h6>Futures Affiliates</h6>
                 <p>You will receive a 40% base referral bonus when you join the program. This means you get 30% of the trading fees from the users you invite, while they can receive a 10% discount on trading fees. Please note that this 10% discount will only be valid for 30 days from the date of Futures account activation.</p>
                 <p>*The referral commission for the Futures market is limited to one year starting from when the new user opens their Futures account.</p>
                 <h4>How will your Binance Affiliate Program membership be evaluated?</h4>
                 <p>Your referral commission rate will be reviewed and adjusted every quarter (90 days). Existing Binance Affiliates that meet the requirements below can continue to receive referral commission benefits, which will be valid for the next 90 days from the day of evaluation.</p>
                 <h6>Binance Affiliate Program membership requirements</h6>
                 <ul>
                  <li><b>Spot (41%) and Futures (30%): </b>You onboarded 10 new traders, and they generated 50+ BTC in trading volume.</li>
                  <li><b>Spot (50%) and Futures (30%): </b>You onboarded 100 new traders, and they generated 500+ BTC in trading volume.</li>
                 </ul>
                 <p>For example, User A currently enjoys a 50% Spot referral commission rate. In the last quarter, User A only onboarded 50 new traders, and they generated 100 BTC in trading volume. Their Spot referral commission rate will be lowered from 50% to 41% for the next 90 days.</p>
                 <p>If User A onboarded 100 new traders, and the new traders generated 500 BTC in trading volume. User A’s Spot referral commission rate will be increased to 50% for the next 90 days.</p>
                 <h6>Notes:</h6>
                 <ul>
                  <li>For first-time applicants: To be eligible for the 50% Spot referral commission rate, you must have onboarded at least 500 traded referrals to Binance. Please contact your account manager or <a href='#'>customer support</a> to apply.</li>
                  <li>“Traded referrals” refer to new users that registered for a Binance account with your <a href='#'>Standard Referral link</a> and completed a Spot, Futures, Margin, or mining transaction.</li>
                  <li>For more details on the Binance Affiliate Program, please check out ​​this blog article.</li>
                 </ul>
                 <h4>Additional Program Benefits</h4>
                 <h6>Binance Futures Affiliate Monthly Bonus Campaign</h6>
                 <p>In addition to earning a 30% commission and providing a 10% discount to your referrals, all Binance Futures Affiliates are eligible to earn a bonus of up to 72,000 USDT based on the fees paid by their referrals over one calendar month.</p>
                 <p>For example, if your referrals generate the equivalent of 15,000 USDT in trading fees between 2022-04-01 and 2022-04-30, in addition to your standard 30% referral commission, you can receive a bonus of 1,500 USDT.</p>
                 <p>Bonuses will be distributed directly to your Binance Futures account in USDT before the 15th day of every month.</p>
                 <img src={pic21} className='css-19g68el'/>
                 <p>For more details, please refer to <a href='#'>Futures Affiliates Bonus Program</a>.</p>
                 <h6>Rules:</h6>
                 <ul>
                  <li>Binance does not allow any affiliate member to solicit an existing Binance user to create a new account with the sole purpose of becoming their referee. If Binance determines that an affiliate has manipulated the referral process, then the affiliate’s membership will be downgraded, and the commission rate will be reduced to 20% for Spot and 10% for Futures.</li>
                  <li>Binance does not allow any affiliate member to offer any additional referral kickback (share referral commission with invitee) privately. If Binance determines that an affiliate has offered any referral kickback privately, then the affiliate’s membership will be downgraded and the commission rate will be reduced to 20% for Spot and 10% for Futures.</li>
                  <li>Binance will void the qualification for any referral commission of the member’s account if any referral violation listed here is found (all commission rates will be reduced to 0%).</li>
                  <li>If Binance determines that an affiliate conducts any damaging and/or defamatory behavior to Binance, their membership and qualification will be terminated, with their commission rate reduced to 0%. Binance reserves the right to retrieve all referral commissions that have been distributed to affiliates’ accounts. Including but not limited to the following scenarios: 1. Affiliate posts false Binance-related information or negative comments about Binance on social media; 2. Affiliate directs users to claim compensation from Binance; 3. Affiliate endorses themselves by using misleading words, especially Binance related, including but not limited to terms such as "partnership", "cooperation", "association", etc.</li>
                  <li>Binance reserves the right to disqualify users from participating in the Affiliate Program and revoke any commissions from users who engage in dishonest or abusive activities to earn commissions. This includes bulk-account registrations to obtain additional bonuses, using “phishing” websites containing referral links, posting referral links as advertisements on search engines, and any other activity concerning unlawful, fraudulent, or harmful purposes.</li>
                  <li>Binance reserves the right to cancel or amend the Affiliate Program or program rules at our sole discretion.</li>
                  <li>All users must strictly abide by the <a href='#'> Binance Terms of Use</a>. Any breach of the terms of use will disqualify the user from earning affiliate commissions.</li>
                  <li>Binance has the sole discretion to decide and determine whether an affiliate will be entitled to earn any commissions and reserves the right to amend these terms and conditions from time to time. If you have any questions, please contact <a href='#'>mer service</a>.</li>
                  <li>If the system detects that a user has deleted their existing account to create a new one so they can benefit from the referral program, Binance reserves the right to terminate all referral commissions from the account.</li>
                  <li>All affiliate members agree to be bound by and to accept the Affiliate Program Standard <a href='#'>Terms and Conditions</a>.</li>
                 </ul>
                 <p><i>Note: This article was updated on 30 December 2022 to include additional details to the Binance Affiliate Program’s terms and conditions.</i></p>

              </div>)}
              { article === 9 && (<div className='row2-data'>
                <h2>What is Affiliate Content Program and Frequently Asked Questions</h2>
                <p>2021-11-11 18:24</p>
                <h4>What is the Affiliate Content Program?</h4>
                <p>Our Binance Affiliate Content Program is designed to help creators of all stripes monetize their content and earn top crypto rewards. Simply by sharing their original content with their audiences, content creators can earn up to $1,800 in BUSD per month, unlimited commission rewards for NFT, Dual and Swap content, as well as capped commission rewards for Fiat and P2P content. With new challenges to choose from every month, Affiliates can find the right topic to showcase their creative talents.</p>
                <h4>How do I join the Affiliate Content Program?</h4>
                <p>This program is currently available to all existing Binance affiliates. If you’re interested in joining, simply click the [Submit Content] button on the <a href='#'>content program landing page</a> when your content is ready. Remember to check the landing page each month that you would like to participate in order to stay up to date with important announcements, changes and new content topics for the month.</p>
                <img/>
                <p>Please note, the content you submit must already be published and must match one of the listed content topics of the month. Ensure you submit the correct link and the current amount of views your content has garnered. Content views and likes are used to calculate the Most Impressive Content reward.</p>
                <h4>Frequently Asked Questions</h4>
                <h6>1. Can I include my affiliate link in the content?</h6>
                <p>Yes, please make sure to include your referral link somewhere in the content. You can also attach your referral link to all CTAs requested in the detailed rules section. For example, https://www.binance.com/en/buy-sell-crypto (Binance URL) + registration attachment (?ref=) + referral code (IJUID3ZL) = https://www.binance.com/en/buy-sell-crypto?ref=IJUID3ZL.</p>
                <h6>2. Can I write content on any topic?</h6>
                <p>No, the content that you create must match one of the listed content topics of the month. You can create content on any of the topics listed for the designated month. Make sure you read your content topic’s detailed rules, including key points, call-to-actions and content format.</p>
                <h6>3. Can I create content in any format?</h6>
                <p>Your content can come in any format, including but not limited to: videos, articles and infographics. Occasionally we will request content in a specific format, so click <b>[Detailed Rules]</b> on your chosen topic before you get started.</p>
                <h6>4. I have already created content on a listed topic. Can I submit the same content?</h6>
                <p>No. Only content created and posted during the campaign month will be accepted. For example, only content posted between October 1-31st will be accepted for the month of October.</p>
                <h6>5. Can I create content on more than one topic of the month?</h6>
                <p>Yes. Creating content on multiple topics will increase your chances of winning and unlocking more content rewards. However, content topics that have a fixed $300 BUSD reward must receive at least an 18/30 on the evaluation scale. Commission based topics are based on your performance and do not require a minimum score.</p>
                <h6>6. How long can I keep the commission based rewards?</h6>
                <p>The commission based rewards will be unlocked for eligible content creators who submit content on a commission based topic, including the Fiat and P2P content challenge for a period of 3 months. After 3 months, your commission rewards will be re-evaluated based on your overall performance.</p>
                <h6>7. Can I create content on topics from the previous month?</h6>
                <p>No. You cannot create content on topics from a previous month once the content deadline for that month has passed.</p>
                <h6>8. How do I submit more than one content topic?</h6>
                <p>We have updated the submission form to allow multiple content topic submissions for the month. Please note that you must submit a content piece for every reward that you would like to get. You can also create content that incorporates multiple content topics.</p>
                <h6>9. How will my content be evaluated?</h6>
                <p>A panel of judges in your local region will grade your content across six categories, with each category worth five points for a total of 30 points. To qualify for award consideration, you must score a minimum of 18 out of 30 points. Referral traffic, total views, and total likes will also be taken into consideration when grading your content. Please note that commission based topics are based on your performance and do not require a minimum score.</p>
                <h6>10. What are the rewards for creating content?</h6>
                <p>Please take a look at the below chart to see our rewards list.</p>
                <table className='faq-table'>
                  <tr><td>NFT</td><td>20% commission</td></tr>
                  <tr><td>Liquid Swap</td><td>15% commission</td></tr>
                  <tr><td>Dual Investment</td><td>3% commission</td></tr>
                  <tr><td>Fiat</td><td>$5 for every fiat deposit ≥ $100</td></tr>
                  <tr><td>P2P</td><td>$5 for every Binance P2P deposit ≥ $100</td></tr>
                  <tr><td>Loans</td><td>$300</td></tr>
                  <tr><td>Margin</td><td>$300</td></tr>
                  <tr><td>Futures</td><td>$300</td></tr>
                  <tr><td>Brand</td><td>$300</td></tr>
                  <tr><td>Social</td><td>$100</td></tr>
                </table>
                <p>Creators are also eligible to receive a reward for the most creative ($500), most viral ($500), and most impressive ($500) content. Each region has its own list of top creators and bonus reward categories.</p>
                <h6>11. Is there a cap on how much commission that I can make?</h6>
                 <p>There is no commission cap for the commission based rewards. However, there is a cap on the Fiat and P2P content reward model. The budget will be re-evaluated and adjusted based on overall performance. The February budget is set to 48K for Fiat and 3K for P2P, and will be distributed on a first come, first served basis.</p>
                 <h6>12. When will I receive my rewards?</h6>
                 <p>After you submit your content, we will notify you by the 15th of the following month. The bonus will be credited to your Spot Wallet. You can check the distribution record via “distribution history” in your Spot wallet. Commission based rewards and additional rewards will also be calculated by the 15th.</p>
                 <h6>13. Can I delete my current Binance Account and register for a new account with a new referral code? </h6>
                 <p>If the system detected a user deleted his account in order to create a new account to benefit from the referral program, Binance reserves the right to terminate all referral commissions from the account.</p>
                 <p>Please read our <a href='#'>blog</a> post for full details, including the rewards and evaluation process.</p>             
              
              </div>)}
            </div>

            <div className='faq-row3'>
              <h6>Related Articles</h6>
              <button onClick={()=>setArticle(1)}><p>How to Earn More Referral Commission from the Standard Referral Mode</p></button>
              <button onClick={()=>setArticle(2)}><p>Binance Lite Referral Limited-Time Activity: The DOT DASH Game</p></button>
              <button onClick={()=>setArticle(3)}><p>How to Use Binance Lite Referral</p></button>
              <button onClick={()=>setArticle(4)}><p>What Is Affiliate Rewards Bootcamp and Frequently Asked Questions</p></button>
              <button onClick={()=>setArticle(5)}><p>Terms and Conditions for Lite Referral Limited-Time Activities</p></button>
              <button onClick={()=>setArticle(6)}><p>Binance Standard Referral Mode Guide</p></button>
              <button onClick={()=>setArticle(7)}><p>Frequently Asked Questions on Binance Standard Referral Mode</p></button>
              <button onClick={()=>setArticle(8)}><p>Binance Affiliate Program Guide</p></button>
              <button onClick={()=>setArticle(9)}><p>What is Affiliate Content Program and Frequently Asked Questions</p></button>
            </div>
        </div>
    </div>
  )
}

export default Faq