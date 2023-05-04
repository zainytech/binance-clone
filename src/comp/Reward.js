import React from 'react'
import './Reward.css'

import image19 from './assets/image19.png'
import Sidebar from '../Components/Sidebar'
const Reward = () => {
  return (
    <div className='reward'>
      <div className='reward2'>
        <Sidebar/>
      </div>
      <div className='reward1'>

        <div className='reward-row1'>
          <h2>Reward</h2>
          <img src={image19} alt='Reward' class="css-qxoefu"/>
        </div>


        <div className='reward-row2'>
           <div className='rewfirst'>
              <p>Voucher Type</p>
              <form action='#'>
                <label htmlFor='sort'></label>
                <select name='sort' id='sort' className='selection--style'>
                  <option value='All(0)'> All(0) </option>
                  <option value='Bonus Voucher（0）'> Bonus Voucher（0）</option>
                  <option value='Trading Fee Rebate Voucher（0）'> Trading Fee Rebate Voucher（0）</option>
                  <option value='Flexible Trial Fund（0）'> Flexible Trial Fund（0）</option>
                  <option value='VIP Upgrade（0）'> VIP Upgrade（0） </option>
                  <option value='Token Voucher（0）'> Token Voucher（0） </option>
                  <option value='0% Interest Voucher（0）'> 0% Interest Voucher（0） </option>
                  <option value='Locked Trial Fund（0）'> Locked Trial Fund（0） </option>
                </select>
              </form>
           </div>

           <div className='rewfirst'>
            <p>Status</p>
              <form action='#'>
                <label htmlFor='sort'></label>
                <select name='sort' id='sort' className='selection--style'>
                  <option value='All(0)' className='selection-option'> All(0) </option>
                  <option value='Available' className='selection-option'> Available</option>
                  <option value='Redeemed' className='selection-option'> Redeemed </option>
                  <option value='Expired ' className='selection-option'> Expired </option>
                  <option value='Invalid' className='selection-option'> Invalid </option>
                </select>
              </form>
           </div>

           <div className='rewfirst'>
            <p>Order By</p>
              <form action='#'>
                <label htmlFor='sort'></label>
                <select name='sort' id='sort' className='selection--style'>
                  <option value='Received Date Earliest to Latest'> Received Date Earliest to Latest </option>
                  <option value='Received Date Latest to Earliest'> Received Date Latest to Earliest </option>
                </select>
              </form>
           </div>

           <div className='rewforth'>
             <button>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-vvdvek"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5h18v4a3 3 0 100 6v4H3v-4a3 3 0 100-6V5zm12.5 2.5H13v9h2.5v-9z" fill="currentColor"></path></svg>
              Voucher Code
             </button>
           </div>

          </div>

          
          <div className='searchg'>
                <div>
                    <i class="fa-brands fa-searchengin"></i>
                </div>
                <p>You have not added any payment methods</p>
            </div>
             
      </div>
      
    </div>
  )
}

export default Reward