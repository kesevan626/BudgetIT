import React, { useContext, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import '../styles/product.css'
import BudgetContext from '../context/BudgetContext'

const AddProduct = () => {
    const  {Products} = useContext(BudgetContext)
    const filterNumber = Products.map(num => num.Product_Number)
    const [state, setState] = useState({
        'Id': 0,
        'Product_Name': "",
        'Product_Number': null,
        'Date_of_Order': "22/03/2022",
        'Quantity': 0,
        'Price': 0,
        'Product_details': ""
    })

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(state.Product_Number === 0 || state.Product_Number === null){
            const generate = Math.random()*100000
            const box = Math.round(generate)
            setState(state.Product_Number = box)
            Products.push(state)
            console.log(Products)
        }  
        setState({
            'Id': 0,
            'Product_Name': "",
            'Product_Number': null,
            'Date_of_Order': "22/03/2022",
            'Quantity': 0,
            'Price': 0,
            'Product_details': ""
        })  
    }

    const changeProductNum=(e)=>{
            filterNumber.forEach((num)=>{
                let check = num.toString() === e.target.value
                if(check){
                    e.target.value = 0
                    setState({...state,Product_Number : 0})
                }
            })
    }

  return (
    <div className="toy">
      <main className="customer-list">
            <h3>Add-Product</h3>
                <div className="content">
                    <div className="middle">
                        <form action="" className="form">
                            <div className="form-group">
                                <label htmlFor="Product">Product Name</label>
                                <input type="text" name="Product" value={state.Product_Name} onChange={(e)=>setState({...state,Product_Name : e.target.value})} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="quantity">Available Quantity</label>
                                <input type="number" name="quantity"value={state.Quantity} onChange={(e)=>setState({...state,Quantity : e.target.value})} id="" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="product_No">Product Number</label>
                                
                                <input type="text" name="product_No" 
                                    onChange={(e)=>{setState({...state,Product_Number : e.target.value});}} 
                                    className="form-control" 
                                    placeholder='Leave Blank to Automatic Generate'
                                    onKeyUp={changeProductNum}
                                    value={state.Product_Number}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="product_No">Product Price</label>
                                <input type="number" name="price" value={state.Price} onChange={(e)=>setState({...state,Price : e.target.value})} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Product_details"> Product Details</label>
                                <input type="text" name="Product_details" value={state.Product_details} onChange={(e)=>setState({...state,Product_details : e.target.value})} className="form-control" />
                            </div>
                            <button type="submit" className="btn" onClick={handleSubmit}>Add</button>
                        </form>

                        <div className="product-content-list">
                            <h2>List of Avaliable Products</h2>
                        <table>
                        <thead>
                          <tr>
                            <td>Id</td>
                            <td>Product Name</td>
                            <td>Product Number</td>
                            <td>Date_of_Order</td>
                            <td>Available Quantity</td>
                            <td>Price</td>
                          </tr>
                        </thead>
                        <tbody>  
                            {Products.map((product,index)=>(
                                <tr key={index}>
                                    <td>{product.Id}</td>
                                    <td>{product.Product_Name}</td>
                                    <td>{product.Product_Number}</td>
                                    <td>{product.Date_of_Order}</td>
                                    <td>{product.Quantity}</td>
                                    <td>{product.Price}</td>
                                    <td><MdDelete /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                        </div>
                    </div>
                </div>
      </main>
    </div>
  )
}

export default AddProduct