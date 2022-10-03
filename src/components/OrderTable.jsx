import React from 'react'
import {Order} from '../utils/index'
import {NavLink} from 'react-router-dom'

const OrderTable = () => {

  return (
    <div className="order-table">
        <h3>Recent Updates</h3>
        <div className="table">
            <div className='table-head'>
                    <p>id</p>
                    <p>Product Name</p>
                    <p>Order Number</p>
                    <p>Payment</p>
                    <p>Status</p>
                    <p style={{color: 'transparent'}}>details</p>
            </div>
            <div className='table-body'>   
            {Order.slice(0,6).map((order, index)=>(
                 <div key={index}>
                    <p>{order.id}</p>
                    <p>{order.product_name}</p>
                    <p>{order.product_No}</p>
                    <p>{order.payment}</p>
                    <p>
                        {order.Status}
                    </p>
                    <p className="detail-btn">Details</p>
                </div>
            ))}
                <NavLink to="/Order"><button className='btn'>Show More</button></NavLink>
            </div>
        </div>  
    </div>
  )
}

export default OrderTable