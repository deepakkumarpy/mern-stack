import './App.css';
import Home from "./components/homepage/Home"
import Login from './components/login/Login';
import Register from './components/register/Register';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useState } from 'react';



function App() {
  const [user ,setLoginUser]=useState({})
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ user && user._id ? <Home setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>}/>
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />}/>
          <Route path="/register"element={<Register/>}/>
          <Route/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
