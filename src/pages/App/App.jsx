// import { useState } from 'react'
import { useEffect, useState } from 'react'
// import utils from '../../utlis/utlis'
import ProductsForm from '../../Components/ProductsForm/ProductsForm'
import ProductTable from '../../Components/ProductTable/ProductTable'
import { getItemFromStorage } from '../../utlis/utlis'
// import './App.css'

function App() {
  const [products, setProducts] = useState(getItemFromStorage())

  const parentFunc = (obj) => {
    const hasProduct = products.some(item => item.productId === obj.productId)
    // setProducts([...products, obj])
    if(!hasProduct){
    setProducts([...products, obj])

    }
    
  }

  const removeItemFunc = (id) => {
    const filterArr = products.filter(item => item.productId !== id)
    setProducts(filterArr)
  }
  useEffect(() => {

  localStorage.setItem("products", JSON.stringify(products))
   
  }, [products])

  // const getDataFromLocalStorage = () => {
  //   return localStorage.getItem("products", JSON.parse(products))
  // }
  
  return (
    <>
     <div>
      <h2>Products List</h2>
      <div className='formContanier'>
        <ProductsForm parentFunc={parentFunc} />
      <h2>Product Table</h2>

        <ProductTable products={products} removeItemFunc={removeItemFunc}/>
      </div>

     </div>
    </>
  )
}

export default App
