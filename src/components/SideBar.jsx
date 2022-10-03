import React, { useContext } from 'react'
import logo from './assets/logo.svg';
import { MdDashboard, MdAnalytics,
        MdPeople, MdAdd, MdSettings, MdMessage, 
        MdCheckroom, MdReport, MdLogout, MdClose} 
from 'react-icons/md';
import BudgetContext from '../context/BudgetContext';
import { Link, NavLink } from 'react-router-dom';
import { Order } from '../utils';

const SideBar = () => {
  const {showSideBar, closeSideBar} = useContext(BudgetContext)
  const orderList = Order.map(order => order)
  const pendingOrder = orderList.filter(list => list.Status === "Pending").length
 
    window.addEventListener('load', ()=>{
      if(window.screen.width > 400){
        document.querySelector('#side').classList.remove('close')
        document.querySelector('#side').classList.add('side-bar')
      }
    })
    window.addEventListener('resize', ()=>{
      if(window.screen.width > 400){
        document.querySelector('#side').classList.remove('close')
        document.querySelector('#side').classList.add('side-bar')
      }
    })
    
  return (
    <div className={showSideBar ? "side-bar" : "close"} id='side'>
        <div className='logo'>
            <img src={logo} alt="" />
            <Link to="/">
            <p>Budget <span>{'>'}</span> IT</p>
            </Link>
            <MdClose onClick={closeSideBar} />
        </div>
        <nav>
          <ul>
            <li className='link'><NavLink to="/Dashboard"><span><MdDashboard /></span>Dashboard</NavLink></li>
            <li className='link'><NavLink to="/Customer"><span><MdPeople /></span>Customer</NavLink></li>
            <li className='link'><NavLink to="/Order"><span><MdCheckroom /></span>Order <p>{pendingOrder}</p></NavLink></li>
            <li className='link'><NavLink to="/Analytics"><span><MdAnalytics /></span>Analytics</NavLink></li>
            <li className='link'><NavLink to="/Messages"><span><MdMessage /></span>Messages <p>15</p></NavLink></li>
            <li className='link'><NavLink to="/Report"><span><MdReport /></span>Reports <p>1</p></NavLink></li>
            <li className='link'><NavLink to="/Settings"><span><MdSettings /></span>Settings</NavLink></li>
            <li className='link'><NavLink to="/Product"><span><MdAdd/></span> Add Product</NavLink></li>
            <li className='link'><NavLink to="/log-out"><span><MdLogout /></span>Logout</NavLink></li>
          </ul>
        </nav>
    </div>
  )
}

export default SideBar