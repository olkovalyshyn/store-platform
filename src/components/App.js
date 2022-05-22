import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { fetchProducts, fetchCart, fetchUser } from '../api';
import Navigation from './navigation/navigation';
import Product from './product/product';
import User from './user/user';
import Back from './back/back';

function App() {
  const [arrProducts, setArrProducts] = useState();
  // const [arrCarts, setArrCarts] = useState();
  const [arrUsers, setArrUsers] = useState();

  useEffect(() => {
    fetchProducts().then(res => setArrProducts(res));
    // fetchCart().then(res => setArrCarts(res));
    fetchUser().then(res => setArrUsers(res));
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />} />
        {/* <Route path="cart" element={<Cart />} /> */}
        <Route
          path="user"
          element={
            arrUsers && (
              <>
                <Back />
                <User api={arrUsers} />
              </>
            )
          }
        />
        <Route
          path="product"
          element={
            arrProducts && (
              <>
                <Back />
                <Product api={arrProducts} />
              </>
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
