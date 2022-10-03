import React from 'react'
import {MdAdd, MdAirplanemodeActive, MdAirplanemodeInactive, MdPeople} from 'react-icons/md'

const RightBar = () => {
  return (
    <div className='customer'>
        <h3>Recent Updates</h3>
        <div className="card recent">
            <div className="customer-container">
                <div className="customer-image">
                    <img src="" alt="" />
                </div>
                <div className="customer-article">
                    <span>Mike Tyson</span> received his order of Night Lion Tech GPS drone
                </div>
            </div>
            <div className="customer-container">
                <div className="customer-image">
                    <img src="" alt="" />
                </div>
                <div className="customer-article">
                    <span>Mike Tyson</span> received his order of Night Lion Tech GPS drone
                </div>
            </div>
            <div className="customer-container">
                <div className="customer-image">
                    <img src="" alt="" />
                </div>
                <div className="customer-article">
                    <span>Mike Tyson</span> received his order of Night Lion Tech GPS drone
                </div>
            </div>
            <div className="customer-container">
                <div className="customer-image">
                    <img src="" alt="" />
                </div>
                <div className="customer-article">
                    <span>Daniel Tyson</span> declined his order of Night Lion Tech GPS drone
                </div>
            </div>
        </div>

        <div className="sales">
            <h3>Sales Analytics</h3>
            <div className="card online">
                <MdAirplanemodeActive style={{backgroundColor: 'var(--success-color)'}}/>
                <div>
                    <p>ONLINE ORDERS</p>
                    <p className="text-muted">Last 24 Hours</p>
                </div>
                <div className="percent">
                    +39%
                </div>
                <div className="count">
                    1178
                </div>
            </div>
            <div className="card offline">
                <MdAirplanemodeInactive style={{backgroundColor: 'var(--danger-color)'}}/>
                <div>
                    <p>OFFLINE ORDERS</p>
                    <p className="text-muted">Last 24 Hours</p>
                </div>
                <div className="percent">
                    +20%
                </div>
                <div className="count">
                    670
                </div>
            </div>
            <div className="card new-customer">
                <MdPeople style={{backgroundColor: 'var(--success-color)'}}/>
                <div>
                    <p>NEW CUSTOMER</p>
                    <p className="text-muted">Last 24 Hours</p>
                </div>
                <div className="count">
                    70
                </div>
            </div>
            <div className="card product">
                <MdAdd style={{backgroundColor: 'var(--info-light-color)'}}/> Add Product
            </div>
        </div>
    </div>
  )
}

export default RightBar