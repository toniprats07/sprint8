import "./App.css";
import logo from "./images/logo.png";
import Home from "./routes/Home"
import Main from "./routes/Main"
import Error from "./routes/Error"
import Nav from "./Nav"
import { BrowserRouter,Route, Navigate, Routes } from "react-router-dom";
import { useState } from "react";
import Modal from "./components/Modal"
import {Context} from "./context/UserContext";
import PrivateRoute from "./routes/PrivateRoutes";

function App() {

  const [openLogin,setOpenLogin]=useState(false);

  const openLoger=()=>{
    setOpenLogin(true);
  }

  return (

    <BrowserRouter>
    <Context>
      {openLogin && <Modal setOpenLogin={setOpenLogin}/>}
      <header>
        <div className="login-box">
        <div className="login" onClick={openLoger}>Login</div>
        </div>
        <img src={logo} alt="logo" width="200px" />
      </header>
      <Nav/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Navigate to="/"/>}/>
          <Route path="/starships" element={
          <PrivateRoute>
          <Main/>
          </PrivateRoute>
          } />
          <Route path="/login" element={<Modal setOpenLogin={setOpenLogin}/> }/>
          <Route path="*" element={<Error/>}/>
      </Routes>
      </Context>
    </BrowserRouter>
    
  );
}

export default App;
