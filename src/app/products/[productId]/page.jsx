import React from 'react'

export default function page({params}) {
    // 다이나믹 
    // http://localhost:3000/products/1
    // http://localhost:3000/products/2
    const {productId} = params;
  return (
    <div>{productId}번 상품입니다.</div>
  )
}
