import { isValidElement, useEffect, useState } from 'react'
import './ProductsForm.css'
export default function ProductsForm({parentFunc}) {
  const [productId, setProductId] = useState('')
  const [productName, setProductName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [color, setColor] = useState('red')

  const clearValue = () => {
    setProductId("")
    setProductName("")
    setQuantity("")
    setPrice("")
    setDescription("")
    setColor("")
  }
  
  const handleInput = (e) => {
    e.preventDefault()
  
    const product = {
      productId,
      productName,
      quantity,
      price,
      description,
      color
    }

    if(product.productId !== "" && product.productId !== "" && product.quantity !== "" && product.price !== "" && product.description !== "" && product.color !== ""){
    parentFunc(product)

    }
    // parentFunc(product)
    clearValue()
  }
  
  const colorHandler = (e) => {
    setColor(e.target.value);
  };
  
  return (
    <>
    <div className='form-container'>

		    <form onSubmit={handleInput}>
        <div className="input-area">
        <p>
        <label>Product Id: </label>
        <input onChange={(e)=> setProductId(e.target.value)} value={productId} type="text" />	
        </p>			
        <p>
        <label>Product Name: </label>
        <input onChange={(e)=> setProductName(e.target.value)} value={productName} type="text" />
        </p>
        <p>
        <label>Quantity: </label>
        <input onChange={(e) => setQuantity(e.target.value)} value={quantity} type="text"   />
        </p>
        <p>
        <label>Price: </label>
        <input onChange={(e)=> setPrice(e.target.value)} value={price} type="text"   />
        </p>
        
        <p><label>Description: </label>
        <textarea onChange={(e)=> setDescription(e.target.value)} value={description} name="" id="" cols="40" rows="2"  ></textarea ></p>
        <p>
        <label>Color: </label>
        <select name="color" id="color" onChange={colorHandler} value={color}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="orange">Orange</option>
        </select></p>
        </div>

        <div className="buttons">
          <button type="submit">Submit</button>
        </div>
        </form>
    </div>
    </>
  )
}
