import React, { useContext } from 'react'
import { MdLightMode, MdDarkMode, MdLineWeight} from 'react-icons/md'
import logo from './assets/logo.svg'
import BudgetContext from '../context/BudgetContext'

const Dashboard = () => {
  const {toggler, toggle, handleSideBar} = useContext(BudgetContext)

  return (
    <div className="dash-bar">
        <div className="header">
          <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
            <MdLineWeight style={{fontSize: '20px', color: 'var(--text-black)'}} onClick={handleSideBar}/>
            <h3>Dashboard</h3>
          </div>
            <input type="date" name="" id="" />
        </div>
        <div className="profile">
            <div className="theme-div">
                <span className={!toggle ? 'theme' : null} onClick={toggler}><MdLightMode /></span>
                <span className={toggle ? 'theme' : null} onClick={toggler}><MdDarkMode/></span>
            </div>
            <div className="image">
              <div className="admin">
                <div className="text-muted">Hey,<span>Hayden</span></div>
                <p className="text-muted">Admin</p>
              </div>
              <img src={logo} alt=""  />
            </div>
        </div>
    </div>
  )
}

export default Dashboard