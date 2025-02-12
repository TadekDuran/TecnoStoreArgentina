'use client'
import React, { useState } from 'react';
import { getProducts } from '@/utils/middlewares/getProducts'

export default function Home() {
  const [products, setProducts] = useState([]);
  const handleGetProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return <div>
    <h1 className='bg-red-600 py-5 px-3' onClick={handleGetProducts}>GET PRODUCTS</h1>
    <div>
      {products.map((product) => (
        <div key={product.id} className='p-10'>
          <h2>{product.maker} {product.model}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  </div>
}