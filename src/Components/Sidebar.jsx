import React from 'react'
import './Sidebar.css';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    return(
        <>
          <div className='dash-sidebar'>
            <div className="dashside-col1">
                    <NavLink to="/dashboard3" style={{textDecoration: 'none'}}><p className='dashp'>Dashboard</p></NavLink>
                    <NavLink to="/security" style={{textDecoration: 'none'}}><p className='dashp'>Security</p></NavLink>
                    <NavLink to="/identification" style={{textDecoration: 'none'}}><p className='dashp'>Identification</p></NavLink>
                    <NavLink to="/payment" style={{textDecoration: 'none'}}><p className='dashp'>Payment</p></NavLink>
                    <NavLink to='/referral' style={{textDecoration: 'none'}}><p className='dashp'>Referral</p></NavLink>
                    <NavLink to='/reward' style={{textDecoration: 'none'}}><p className='dashp' id='dashp-reawrd'>Reward Center</p></NavLink>
                    <NavLink to='/task' style={{textDecoration: 'none'}}><p className='dashp' id='dashp-task'>Task Center</p></NavLink>
                    <NavLink to='/api-management' style={{textDecoration: 'none'}}><p className='dashp' id='dashp-api'>API Management</p></NavLink>
                    <NavLink to='/setting' style={{textDecoration: 'none'}}><p className='dashp'>Settings</p></NavLink>
                </div>
          </div>            
        </>
    );
}

export default Sidebar;