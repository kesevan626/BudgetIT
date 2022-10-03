import React from 'react'
import {Order} from '../utils/index'
import { MdAnalytics } from 'react-icons/md'

const Cards = () => {
    const expense = 3000
    const orderList = Order.map(order => order)
    const deliveredOrder = orderList.filter(list => list.payment === "Paid")
    const totalSales = deliveredOrder.map(paid => paid.price).reduce((a,b)=>a+b)
    const totalIncome = totalSales - expense


  return (
    <div className="cards-container">
        <div className="card">
            <div className="asset">
                <MdAnalytics />
                <p className="text">Total Sales</p>
                <h2>${totalSales.toLocaleString()}</h2>
                <p className="text-muted">Last 24 Hours</p>
            </div>
            <div className="progress">
                <svg width='120' height='120'>
                    <circle cx='45' cy='45' r='40' stroke='var(--danger-color)' strokeWidth={'10px'}>

                    </circle>
                </svg>
            </div>
        </div>
        <div className="card">
                <div className="asset expense">
                        <MdAnalytics />
                        <p className="text">Total expense</p>
                        <h2>${expense.toLocaleString()}</h2>
                        <p className="text-muted">Last 24 Hours</p>
                </div>
                <div className="progress">
                <svg>
                    <circle cx='45' cy='45' r='40' stroke='var(--warning-color)' strokeWidth={'10px'}></circle>
                </svg>
            </div>
        </div>
        <div className="card">
            <div className="asset income">
                <MdAnalytics />
                <p className="text">Total Income</p>
                <h2>${totalIncome.toLocaleString()}</h2>
                <p className="text-muted">Last 24 Hours</p>
            </div>
            <div className="progress">
                <svg>
                    <circle cx='45' cy='45' r='40' stroke='var(--success-color)' strokeDashoffset='50' strokeWidth={'10px'}></circle>
                </svg>
            </div>
        </div>
    </div>
  )
}

export default Cards