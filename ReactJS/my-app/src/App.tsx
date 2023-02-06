import { useProducts } from './hooks/products';
import {Product} from './components/Product'
import { Loader } from './components/Loader';
import { ErrorMessage } from './components/ErrorMessage';
// import {products} from './data/product'





function App() {
  
  const { loading, products, error } = useProducts()

  return (
    <div className="container mx-auto max-w-2xl pt-5">

      { loading && <Loader/> }
      { error && <ErrorMessage error = {error}/>  }
      { products.map(product => <Product product={product} key={product.id}/>) }
      
      {/* <Product product = {products[0]}/>
      <Product product = {products[1]}/> */}
    </div>

  );
 
}

export default App;
