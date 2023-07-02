import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-link">
        <nav>
          <NavLink className={({isActive})=>(isActive ? "actived":null)} to="/home">HOME</NavLink>
          <NavLink className={({isActive})=>(isActive ? "actived":null)} to="/starships">STARSHIPS</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
