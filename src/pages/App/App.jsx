import './App.css';
import { useState } from 'react';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import AuthPage from '../AuthPage/AuthPage';
import { Route, Routes } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

function App() {
  const [user, setUser] = useState(getUser())

  return (
    <div className="App">
      {
        user?
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </div>
  );
}

export default App;
