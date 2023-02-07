import { useProducts } from './hooks/products';
import {Product} from './components/Product'
import { Loader } from './components/Loader';
import { ErrorMessage } from './components/ErrorMessage';
import { Modal } from './components/Modal';
import { CreateProduct } from './components/CreateProduct';
import { useContext } from 'react';
import { IProduct } from './models';
import { ModalContext } from './context/ModalContext';

// import {products} from './data/product'

function App() {
  const { loading, products, error, addProduct } = useProducts()
  const { modal, open, close} = useContext(ModalContext)
    const createHandler = (product: IProduct) =>{
    close()
    addProduct(product)
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      { loading && <Loader/> }
      { error && <ErrorMessage error = {error}/>  }
      { products.map(product => <Product product={product} key={product.id}/>) }
      
      {modal && <Modal title='Create new product ' onClose={close}>
        <CreateProduct onCreate={createHandler}/>
      </Modal>}

      <button className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
      onClick={open}
      >+</button>
    </div>
  );
 }

export default App;
