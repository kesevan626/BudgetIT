import React, {useState} from 'react'
import {Order} from '../utils/index'
import {MdCarRental, MdDelete, MdSailing, MdWarning} from 'react-icons/md'

const OrderList = () => {
  const[Goods, setGoods] = useState(Order)
  const newSortArray = []

  const handleSelect=(stat)=>{
    const selected = Order.filter(order => order.Status === stat)
    setGoods(selected)
  }
  const handleSort=(e)=>{
    const selected = Order.map(order => order)
    selected.forEach((select)=>{
      if (select.product_No.toString().includes(e.target.value)){
        newSortArray.push(select)
        setGoods(newSortArray)
      }
    })
  }

  return (
    <div className="toy">
    <main className="customer-list" >
        <h3>Orders</h3>
        <div className="content">
                <div className="middle">
                  <div className="cards-container">
                      <div className="card" onClick={(e)=>{e.preventDefault();handleSelect('Delivered')}}>
                        <div className="deliver">
                          <MdCarRental />
                          <h2>Delivered</h2>
                        </div>
                        <p>{Order.filter(order => order.Status === 'Delivered').length}</p>
                      </div>
                      <div className="card" onClick={(e)=>{e.preventDefault();handleSelect('Pending')}}>
                        <div className="pending">
                          <MdSailing />
                          <h2>Pending</h2>
                        </div>                     
                        <p>{Order.filter(order => order.Status === 'Pending').length}</p>
                      </div>
                      <div className="card" onClick={(e)=>{e.preventDefault();handleSelect('Declined')}}>
                          <div className="decline">
                            <MdWarning />
                            <h2>Declined</h2>
                          </div>
                          <p>{Order.filter(order => order.Status === 'Declined').length}</p>
                      </div>
                  </div>
                    <button className="btn" onClick={(e)=>{e.preventDefault();setGoods(Order)}}>All</button>
                    <input type="number" onKeyUp={handleSort} className="form-control" name="" id="" 
                    placeholder='Quick search with Order Number'/>
                    <table>
                        <thead>
                          <tr>
                            <td>Id</td>
                            <td>Customer Name</td>
                            <td>Order Number</td>
                            <td>Date_of_Order</td>
                            <td>Status</td>
                            <td>Price</td>
                            <td>Payment</td>
                          </tr>
                        </thead>
                        <tbody>  
                          {Goods.map((order, index)=>(
                              <tr key={index}>
                                  <td>{order.id}</td>
                                  <td>{order.customer_name}</td>
                                  <td># {order.product_No}</td>
                                  <td>23/04/2022</td>
                                  <td>{order.Status}</td>
                                  <td>$ {order.price.toLocaleString()}</td>
                                  <td>{order.payment}</td>
                                  <td><MdDelete /></td>
                              </tr>
                          ))}
                        </tbody>
                    </table>
                </div>
        </div>
    </main>
</div>
  )
}

export default OrderList