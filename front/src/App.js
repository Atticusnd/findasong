
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Search from './components/Search/Search.js';
import Login from './components/Login/Login.js';
import useToken from './Hooks/useToken.js';


function App() {
  const { token, setToken } = useToken();

  useEffect(() => {
    const handleInvalidToken = e => {
      if (e.key === 'token' && e.oldValue && !e.newValue) {
        localStorage.removeItem('token');
        window.location.reload();
      }
    }
    window.addEventListener('storage', handleInvalidToken)
    return function cleanup() {
      window.removeEventListener('storage', handleInvalidToken)
    }
  }, [])

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
