import React from 'react';
import './Taskcenter.css';


import task1 from './assets/task1.png';
import task2 from './assets/task2.png';
import image20 from './assets/image20.png';
import bitcoin from "../assets/BinImages/bitcoin.png";
import { useState } from 'react';
import Sidebar from '../Components/Sidebar';

const Taskcenter = () => {
  const [show, setShow] = useState(1);

  return (
    <div className='task'>
        <div className='task-second'>
          <Sidebar/>
        </div>
        <div className='task-first'>
            <div className='task-col1'>
              <h2>Task Center</h2>
              <img src={image20} alt='Task Center' class="css-ao1nt3"/>
            </div>

            <div className='task-col2'>
              <div className='task1'>
                  <div className='task-btn'>
                    <button onClick={()=>setShow(1)} className={ show === 2 && 'task-btn1'}>Beginner Tasks</button>
                    <button onClick={()=>setShow(2)} className={ show === 1 && 'task-btn1'}>Limited Tasks</button>
                  </div>
                  
                  {show === 2 && (
                    <div className='task-limited'>
                    <div className='tasklimit1'>
                      <div className='limit-col1'>
                        <img src={task1} alt='task-badge'/>
                        <div className='limit-row1'>
                          <h6>Verify your identity, get $20 cashback!</h6>
                          <a>View Rules</a>
                          <div className='limit-row2'>
                            <button>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-ew2l8i"><path d="M15 14h-2v-4h2v4z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22 4H2v6h1a2 2 0 110 4H2v6h20v-6h-1a2 2 0 110-4h1V4zM4 8.126V6h9v2h2V6h5v2.126a4.002 4.002 0 000 7.748V18h-5v-2h-2v2H4v-2.126a4.002 4.002 0 000-7.748z" fill="currentColor"></path></svg>
                              <p>20USDT</p>
                            </button>
                            <button>
                            Cashback Voucher
                            </button>
                          </div>
                          <p>Remaining Time: 06 : 02 : 52</p>
                        </div>
                      </div>
                      <div className='limit-col2'>
                        <button>Complete</button>
                      </div>
                    </div>

                    <div className='tasklimit1'>
                      <div className='limit-col1'>
                        <img src={bitcoin} alt='task-badge'/>
                        <div className='limit-row1'>
                          <h6>Make your first deposit and get $30 cashback!</h6>
                          <a>View Rules</a>
                          <div className='limit-row2'>
                            <button className='limit-btn2'>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-ew2l8i"><path d="M15 14h-2v-4h2v4z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22 4H2v6h1a2 2 0 110 4H2v6h20v-6h-1a2 2 0 110-4h1V4zM4 8.126V6h9v2h2V6h5v2.126a4.002 4.002 0 000 7.748V18h-5v-2h-2v2H4v-2.126a4.002 4.002 0 000-7.748z" fill="currentColor"></path></svg>
                              <p>30USDT</p>
                            </button>
                            <button>
                            Cashback Voucher
                            </button>
                          </div>
                          <p>Remaining Time: 06 : 02 : 52</p>
                        </div>
                      </div>
                      <div className='limit-col2'>
                        <button>Complete</button>
                      </div>
                    </div>

                    <div className='tasklimit1'>
                      <div className='limit-col1'>
                        <img src={task2} alt='task-badge'/>
                        <div className='limit-row1'>
                          <h6>Make your first trade and get $50 cashback!</h6>
                          <a>View Rules</a>
                          <div className='limit-row2'>
                            <button>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-ew2l8i"><path d="M15 14h-2v-4h2v4z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22 4H2v6h1a2 2 0 110 4H2v6h20v-6h-1a2 2 0 110-4h1V4zM4 8.126V6h9v2h2V6h5v2.126a4.002 4.002 0 000 7.748V18h-5v-2h-2v2H4v-2.126a4.002 4.002 0 000-7.748z" fill="currentColor"></path></svg>
                              <p>50USDT</p>
                            </button>
                            <button>
                            Cashback Voucher
                            </button>
                          </div>
                          <p>Remaining Time: 06 : 02 : 52</p>
                        </div>
                      </div>
                      <div className='limit-col2'>
                        <button>Complete</button>
                      </div>
                    </div>
                    </div>
                  )}
                  
                  {show === 1 && (
                    <div className='task-search'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-q9egnk"><path fill-rule="evenodd" clip-rule="evenodd" d="M26 8h38l20 20v60H26V8zm48 29H36v4h38v-4zm0 9H36v4h38v-4zm-38 9h38v4H36v-4zm34 16l-4-4-4 4 4 4 4-4z" fill="url(#not-found-data_svg__paint0)"></path><path opacity="0.15" d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z" fill="#929AA5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z" fill="url(#not-found-data_svg__paint1)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z" fill="url(#not-found-data_svg__paint2)"></path><defs><linearGradient id="not-found-data_svg__paint0" x1="55" y1="8" x2="55" y2="88" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5" stop-opacity="0.1"></stop><stop offset="1" stop-color="#929AA5" stop-opacity="0.25"></stop></linearGradient><linearGradient id="not-found-data_svg__paint1" x1="4.172" y1="68.75" x2="24.328" y2="68.75" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="not-found-data_svg__paint2" x1="15" y1="48" x2="55" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg>
                      <p>No Task Yet.</p>
                      <p>Stay tuned for more tasks</p>
                    </div>
                  )}
                  
              </div>

              <div className='task2'>
                  <div className='task2-col1'>
                    <h6>Notes</h6>
                    <div className='stand2-comm'>                     
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-du28g9 css-du28g8"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 18H8v3h8v-3zm-8.33-2.5a7 7 0 118.66 0h-3.08v-2.355l2.67-2.67-1.767-1.768L12 10.86 9.847 8.707 8.08 10.475l2.67 2.67V15.5H7.67z" fill="currentColor"></path></svg>
                      <p>Task status and reward distribution will be updated every 4 hours.</p>
                    </div>
                    <div className='stand2-comm'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-du28g9"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 18H8v3h8v-3zm-8.33-2.5a7 7 0 118.66 0h-3.08v-2.355l2.67-2.67-1.767-1.768L12 10.86 9.847 8.707 8.08 10.475l2.67 2.67V15.5H7.67z" fill="currentColor"></path></svg>
                      <p>Rewards are on a first-come, first served basis.</p>
                    </div>
                  </div>
                  <div className='task2-col1'>
                    <h6>FAQ</h6>
                    <div className='stand2-comm'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1j6co9r1"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3v18h14V7l-4-4H5zm3 6.5h8V12H8V9.5zm0 5h8V17H8v-2.5z" fill="currentColor"></path></svg>
                      <a>How to get Binance Tasks</a>
                    </div>
                    <div className='stand2-comm'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1j6co9r1"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3v18h14V7l-4-4H5zm3 6.5h8V12H8V9.5zm0 5h8V17H8v-2.5z" fill="currentColor"></path></svg>
                      <a>How to complete Binance Tasks</a>
                    </div>
                    <div className='stand2-comm'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1j6co9r1"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3v18h14V7l-4-4H5zm3 6.5h8V12H8V9.5zm0 5h8V17H8v-2.5z" fill="currentColor"></path></svg> 
                      <a>Task Center Terms & Conditions</a>
                    </div>
                    
                  </div>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Taskcenter