import React from 'react'
import {Customers} from '../utils/index'
import '../styles/customer.css';
import { MdArrowDropDown } from 'react-icons/md';
import { useState } from 'react';

const CustomerList = () => {
  const [newCustomer, setnewCustomer] = useState(Customers)
  let customerArray = []

  const handleChange = (e) => {
    Customers.forEach((customer) => {
      if (customer.name.includes(e.target.value)) {
        customerArray.push(customer)
        setnewCustomer(customerArray)
      }
    })
  }
  const handleSort=()=>{
    const sorted = newCustomer.sort((a,b)=> b.No_Of_Orders - a.No_Of_Orders)
    newCustomer.push(sorted)
    // setnewCustomer(sorted)
    // console.log(sorted)
  }
  return (
    <div className="toy">
      <main className="customer-list">
        <h3> Budget-IT Customer List</h3>
        <div className="content">
          <div className="middle">
            <div className="search-customer">
              <input type="text" className="search" onKeyUp={handleChange} placeholder='Search by Name' />
              <button onClick={handleSort}>sort by <MdArrowDropDown /></button>
            </div>
            <div>
              {newCustomer.map((customer, index) => (
                <div key={index} className="customer-card">
                  <p>{customer.id}</p>
                  <p>{customer.name}</p>
                  <p className="text-muted">+{customer.phone_number}</p>
                  <p>{customer.date_joined}</p>
                  <p>{customer.No_Of_Orders}</p>
                  <p>{customer.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CustomerList