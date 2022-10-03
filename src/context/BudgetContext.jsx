import {createContext,   useState} from 'react'
// import AppReducer from '../AppReducer'
import {Products} from '../utils/index'

const BudgetContext = createContext()
export default BudgetContext;

export const BudgetProvider = ( {children} ) => {
    const [toggle, setToggle] = useState(false)
    const [showSideBar, setshowSideBar] = useState(true)
    const toggler = ()=>{
        setToggle(!toggle)
    }
    const handleSideBar = ()=>{
        setshowSideBar(!showSideBar)
    }
    const closeSideBar = ()=>{
        setshowSideBar(!showSideBar)
    }
    
    let contextData = {
        toggle,
        toggler,
        showSideBar,
        handleSideBar,
        closeSideBar,
        Products
    }
    return(
            <BudgetContext.Provider value={contextData}>
                    {children}
            </BudgetContext.Provider>
    )
}

