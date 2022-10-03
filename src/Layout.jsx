import React, { useEffect, useContext } from 'react'
import SideBar from './components/SideBar'
import BudgetContext from './context/BudgetContext'
import Dashboard from './components/Dashboard';

const Layout = (props) => {
 const {toggle} = useContext(BudgetContext)

useEffect(() => {
  
},[])

  return (
        <div className={toggle ? "App dark-mode" : "App"}> 
          <div className="container"> 
            <SideBar /> 
            <main>
              <Dashboard />
              <div className="content">
                  {props.children}
              </div>
            </main>
          </div>
        </div>
  )
}

export default Layout