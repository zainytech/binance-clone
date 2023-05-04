import React from 'react'
import Sidebar from '../Components/Sidebar'
import './Apimanagement.css'

const Apimanagement = () => {
  return (
    <div className='management'>
      <div className='manage-second'>
            <Sidebar/>
        </div>
        <div className='manage-first'>
        <div className='management-first'>
            <h2>API Management</h2>
            <div>
                <button className='api-btn'>Create API </button>
                <button className='api-btn'>Create Text Report API </button>
                <button className='api-btn'>Delete all API</button>
            </div>
        </div>

        <div className='management-sec'>
            <ol>
                <li>Each account can create up to 30 API Keys.</li>
                <li>Do not disclose your API Key to anyone to avoid asset losses. It is recommended to bind IP for API Key to increase your account security.</li>
                <li>Be aware that your API Key may be disclosed by authorizing it to a third-party platform.</li>
                <li>You will not be able to create an API if KYC is not completed.</li>
            </ol>
        </div>

        <div className='searchg api-search'>
            <div>
                <i class="fa-brands fa-searchengin"></i>
            </div>
            <p>Your Sub Accounts have not 
            create any API Keys yet.</p>
        </div>
        </div>
    </div>
  )
}

export default Apimanagement