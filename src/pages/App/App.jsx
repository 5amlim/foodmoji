import './App.css';
import * as ordersAPI from "../../utilities/orders-api"
import { useState } from 'react';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import AuthPage from '../AuthPage/AuthPage';
import MyCart from '../MyCart/MyCart';
import { Route, Routes } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const [user, setUser] = useState(getUser())
  const [cart, setCart] = useState(null)
  const navigate = useNavigate();

  useEffect (function(){
    async function getCart(){
      let order = await ordersAPI.getCart()
      setCart(order)
    }
    getCart()
  }, [])

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }

  return (
    <div className="App">
      {
        user?
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/" element={<NewOrderPage cart={cart} setCart={setCart} handleChangeQty={handleChangeQty} handleCheckout={handleCheckout} />} />
            <Route path="/cart" element={<MyCart cart={cart} handleChangeQty={handleChangeQty} handleCheckout={handleCheckout}/>} />
            <Route path="/orders" element={<OrderHistoryPage user={user}/>} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </div>
  );
}

export default App;
