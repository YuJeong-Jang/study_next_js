import React from 'react'

export default function ProductList({products}) {
  return (
    <ul>
      {
        products.map(product => {
          return <li key={product}>{product}</li>
        })
      }
      {/* <li>{products[0]}</li>
      <li>{products[1]}</li>
      <li>{products[2]}</li> */}
    </ul>
  )
}
