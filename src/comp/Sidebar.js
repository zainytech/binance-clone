import React from 'react';
import './Sidebar.css';

import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
        <div className= 'side-header'>
            <div className='icons'>
                <NavLink to="/Dashboard" ><div><i className='fa-solid fa-user'></i> <span>Dashboard</span></div></NavLink>
                <NavLink to="/security"><div><i class="fa-solid fa-shield-halved" ></i><span>Security</span></div></NavLink>
                <NavLink to="/identification"><div><i className='fas fa-id-card'></i><span>Identification</span></div></NavLink>
                <NavLink to="/payment"><div><i class="fa-solid fa-money-check-dollar"></i><span>Payment</span></div></NavLink>
                <NavLink to='/referral'><div><i className='fa-solid fa-user-plus'></i><span>Referral</span></div></NavLink>
                <NavLink to='/reward'><div><i class="fa-solid fa-award"></i><span id='reward'>Reward Center</span></div></NavLink>
                <NavLink to='/task'><div><i className='fa-solid fa-clipboard-list'></i><span id='width'>Task Center</span></div></NavLink>
                <NavLink to='/api-management'><div><i className='fa-solid fa-gear'></i><span id='api'>API Management</span></div></NavLink>
                <NavLink to='/setting'><div><i className='fa-solid fa-gear'></i><span>Settings</span></div></NavLink>
            </div>
        </div> 
    </div>
  )
}

export default Sidebar