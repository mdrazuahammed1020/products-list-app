// import { useState } from 'react'
import './ProductTable.css'
import ProductRow from '../ProductRow/ProductRow'
export default function ProductTable({products, removeItemFunc}) {
  
  return (
    <>
    <div className='table-container'>
      <table>
      <thead>
      <tr>
      <th>Product Id</th>
      <th>Product Name</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>Description</th>
      <th>Color</th>
      <th>Delete</th>
      </tr>
      </thead>
      
      <ProductRow products={products} removeItemFunc={removeItemFunc}/>
    </table>
    </div>
    </>
  )
}
