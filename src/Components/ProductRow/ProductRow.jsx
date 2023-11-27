
export default function ProductRow({products, removeItemFunc}) {
  console.log(products)
  const deleteItem = (id) => {
    removeItemFunc(id)
  }
  return (
    
      <tbody>
        {
      products.map(item => (
      <tr key={item.productId}>
      <td>{item.productId}</td>
      <td>{item.productName}</td>
      <td>{item.quantity}</td>
      <td>{item.price}</td>
      <td>{item.description}</td>
      <td>{item.color}</td>
      <td style={{color: 'red'}} onClick={()=> deleteItem(item.productId)} >Delete</td>
      </tr>
          ))
        }
      </tbody>
    
  )
}

// onClick={()=>deleteItem(item.productId)}