import Home from './home/Home'
import Login from './login/Login'
import Signin from './signin/Signin'
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useState } from "react"
import Dashboard from './music/Dashboard';

function App() {
  const [user ,setLoginUser]=useState({})
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/> }/>
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />}/>
          <Route path="/Signin"element={<Signin/>}/>
          <Route path="/dashboard" element={user && user._id ? <Dashboard setLoginUser={setLoginUser}/> : <Home setLoginUser={setLoginUser}/>}/>
          <Route/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
