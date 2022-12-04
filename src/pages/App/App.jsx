import './App.css';
import { useState, useEffect } from 'react';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import AuthPage from '../AuthPage/AuthPage';
import { Route, Routes } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

function App() {
  const [user, setUser] = useState(getUser())
  const [items, setItems] = useState([])

  useEffect(function(){
    async function getItems (){
      await fetch('https://fakestoreapi.com/products')
              .then(res=>res.json())
              .then(res=>setItems(res))
              .then(console.log(items))
              .catch(err => console.error(err));
  }
  getItems()
  }, []);

  return (
    <div className="App">
      {
        user?
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage items={items} />} />
            <Route path="/orders" element={<OrderHistoryPage items={items} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </div>
  );
}

export default App;
