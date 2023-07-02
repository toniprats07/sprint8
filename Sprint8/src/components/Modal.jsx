import React, { useContext, useEffect } from "react";
import "../App.css";
import logo from "../images/logo.png";
import icon from "../images/lightsaber.png";
import { UserContext } from "../context/UserContext";

const Modal = ({ setOpenLogin}) => {


  const {user, setUser}=useContext(UserContext);

  useEffect(() => {
    const storedUser = window.localStorage.getItem("User");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const closeLogin = () => {
    setOpenLogin(false);
  };

  const saveUser = (user) => {
    setUser(user);
    window.localStorage.setItem("User", user);
    console.log(' el teu usuari es '+ user)
  }
  
  return (
    <>
      <main className="modal">
        <section className="panell">
          <div className="header-login">
           <img src={logo} alt="" width="160px" />
           <img src={icon} className="close" onClick={closeLogin} alt=""/>
          </div>
          <p className="text-login">ENTER YOUR USERNAME</p>
          <input type="text" placeholder={"Username"} onChange={(e)=>saveUser(e.target.value)} value={user}/>
        </section>
      </main>
    </>
  );
};

export default Modal;