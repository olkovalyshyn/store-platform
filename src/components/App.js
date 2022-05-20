import { useState, useEffect } from 'react';
import './App.css';
import ProductCards from './productCard';
import fetchProducts from '../api';

function App() {
  const [arrProducts, setArrProducts] = useState();

  useEffect(async () => {
    await fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setArrProducts(data));
  }, []);

  return (
    <div>
      <ProductCards api={arrProducts} />
    </div>
  );
}

export default App;
