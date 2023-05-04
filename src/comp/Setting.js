import React from 'react'
// import Sidebar  from './Sidebar';
import './Setting.css';
import Sidebar from '../Components/Sidebar';
import '../Components/Sidebar'

import person from './assets/person.png';
import image21 from './assets/image21.png';
import image5 from './assets/image5.png';
import image23 from './assets/image23.png';
import image25 from './assets/image25.png';
import image26 from './assets/image26.png';
import image27 from './assets/image27.png';
import image28 from './assets/image28.png';

const Setting = () => {
  return (
    <div className='setting'>
      <div className='setting-second'>
        <Sidebar/>
      </div>

      <div className='setting-first'>

        <div className='sett1-head'>
          <h2>Settings</h2>
          <img src={image21} alt='Settings' class="css-mls08q"/>
        </div>

        <div className='sett1-body'>
          <h4>My Profile</h4>
          <div className='sett1-col1'>
            <div className='sett1-row1'>
              <img src={image5} alt='Nickname' class="css-1iztezc"/>
              <div>
                <h6>Nickname</h6>
                <p>Set a customized nickname for your profile</p>
              </div>
            </div>

            <div className='sett1-row2'>
              <p>Anonymous-User-1a91a</p>
              <button>Edit</button>
            </div>
          </div>
          <div className='sett1-col1'>
            <div className='sett1-row1'>
              <img src={image23} alt='Avatar' class="css-1iztezc"/>
              <div>
                <h6>Avatar</h6>
                <p>Select an avatar to personalize your account. You can purchase your own avatar in NFT Marketplace</p>
              </div>
            </div>

            <div className='sett1-row2'>
              <img src={person} alt='anonymous person' className='person'/>
              <button>Edit</button>
            </div>
          </div>
          <div className='sett1-col1'>
            <div className='sett1-row1'>
              <img src={image25} alt='P2P Profile Settings' class="css-1iztezc"/>
              <div>
                <h6>P2P Profile Settings</h6>
                <p>Edit your P2P nickname here</p>
              </div>
            </div>

            <div className='sett1-row2'>
              <p className='anony-none'>Anonymous-User-1a91a</p>
              <button className='anony-btn'>Manage</button>
            </div>
          </div> 
        </div>

        <div className='sett1-body'>
        
          <h4>Preferences</h4>
          <div className='sett1-col1'>
            <div className='sett1-row1'>
              <img src={image26} alt='Confirmation Reminders' class="css-1iztezc"/>
              <div>
                <h6>Order Confirmation Reminders</h6>
                <p>If the order reminder function is enabled, it will need to be reconfirmed every time an order is submitted.</p>
              </div>
            </div>

            <div className='sett1-row2'>
              <div className='row-tick'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-kddq4d"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-4.934-4.483L10.2 13.383l-2.716-2.716-1.768 1.767 4.484 4.484 7.634-7.634-1.768-1.767z" fill="currentColor"></path></svg>
                <p>Stop-Limit Order,Auto Borrow/Repay for Margin</p>
              </div>
              <button>Edit</button>
            </div>
          </div>

            <div className='sett2-col1'>
              <div className='sett1-row1'>
                <img src={image23} alt='Notification' class="css-1iztezc"/>
                <h6>Notification</h6>
              </div>

              <div className='sett2-col2'>
                <div className='sett2-row1'>
                  <div className='sett2-row2'>
                    <h6>Notification Language</h6>
                    <p>Email and app push notification language settings.</p>
                  </div>
                  <div className='sett1-row2'>
                    <div className='row-tick'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-kddq4d"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-4.934-4.483L10.2 13.383l-2.716-2.716-1.768 1.767 4.484 4.484 7.634-7.634-1.768-1.767z" fill="currentColor"></path></svg>
                      <p>English</p>
                    </div>
                    <button>Manage</button>
                  </div>
                </div>

                <div className='sett2-row1'>
                  <div className='sett2-row2'>
                    <h6>On-site Notifications</h6>
                    <p>Once enabled, you will receive relevant notifications within the app and website.</p>
                  </div>

                  <div className='sett1-row2'>
                    <div  className='row-tick'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-kddq4d"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-4.934-4.483L10.2 13.383l-2.716-2.716-1.768 1.767 4.484 4.484 7.634-7.634-1.768-1.767z" fill="currentColor"></path></svg>
                      <p>Activities,Trade Notification,Binance News,System Messages</p>
                    </div>
                    <button>Manage</button>
                  </div>
                </div>
                
                <div className='sett2-row1'>
                  <div className='sett2-row2'>
                    <h6>Marketing Emails</h6>
                    <p>Select whether you want to receive marketing emails from us.</p>
                  </div>
                  <div className='sett1-row2'>
                    <div  className='row-tick'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-kddq4d"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-4.934-4.483L10.2 13.383l-2.716-2.716-1.768 1.767 4.484 4.484 7.634-7.634-1.768-1.767z" fill="currentColor"></path></svg>
                      <p>On</p>
                    </div>
                    <button>Disable</button>
                  </div>
                </div>
              </div>
            </div>
         
        </div>

        <div className='sett1-body'>
          <h4>Marketing and Analytics</h4>
          <p>Opt out of sharing data with 3rd party marketing vendors for analytics and to improve targeted advertising.</p>
          <div className='sett1-col1'>
            <div className='sett1-row1'>
              <img src={image27} alt='Analytics' class="css-1iztezc"/>
              <div>
                <h6>Analytics</h6>
                <p>Binance may share usage data to 3rd party analytics platforms to help improve our products and marketing.</p>
              </div>
            </div>

            <div className='sett1-row2'>
              <div className='row-tick'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-kddq4d"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-4.934-4.483L10.2 13.383l-2.716-2.716-1.768 1.767 4.484 4.484 7.634-7.634-1.768-1.767z" fill="currentColor"></path></svg>
                <p>On</p>
              </div>
              <button>Edit</button>
            </div>
          </div>
          <div className='sett1-col1'>
            <div className='sett1-row1'>
              <img src={image28} alt='Advertising' class="css-1iztezc"/>
              <div>
                <h6>Advertising</h6>
                <p>Binance may share usage data to 3rd party ad platforms to help improve our targeting and marketing quality.</p>
              </div>
            </div>

            <div className='sett1-row2'>
              <div className='row-tick'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-kddq4d"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-4.934-4.483L10.2 13.383l-2.716-2.716-1.768 1.767 4.484 4.484 7.634-7.634-1.768-1.767z" fill="currentColor"></path></svg>
                <p>On</p>
              </div>
              <button>Edit</button>
            </div>
          </div>
       
        </div>

      </div>
    </div>
  )
}

export default Setting