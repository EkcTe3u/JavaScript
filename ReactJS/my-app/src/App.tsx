import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import {Product} from './components/Product'
// import {products} from './data/product'
import { IProduct } from './models';




function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function fetchProducts() {
    try{
      setError('')
      setLoading(true)
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
      setProducts(response.data)
      setLoading(false)
    }catch(e: unknown){
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)

    }

    
  }

  useEffect(() => {
  fetchProducts()
  }, [ ])

  return (
    <div className="container mx-auto max-w-2xl pt-5">

      {loading && <p className='text-center'>Loading ...</p>}
      {error && <p className='text-center text-red-600'>{error}</p>}
      {products.map(product => <Product product={product} key={product.id}/>)}
      
      {/* <Product product = {products[0]}/>
      <Product product = {products[1]}/> */}
    </div>

  );
 
}

export default App;
