import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import fetchProducts from '../api';
import Navigation from './navigation/navigation';
import Product from './product/product';
import Cart from './cart/cart';
import User from './user/user';

function App() {
  const [arrProducts, setArrProducts] = useState();

  useEffect(() => {
    fetchProducts().then(res => setArrProducts(res));
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="cart" element={<Cart />} />
        <Route path="user" element={<User />} />
        <Route
          path="product"
          element={arrProducts && <Product api={arrProducts} />}
        />
        {/* 
        <Cart />
        <User />
        {arrProducts && <Product api={arrProducts} />} */}
      </Routes>
    </div>
  );
}

export default App;
