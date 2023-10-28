import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from "../../src/streamflixlogo.png"


function Navbar() {

    const [show, handleShow] = useState(false);

  /*useEffect(() => {
      window.addEventListener("scroll", () =>{
          if(window.scrollY > 100){
              handleShow(true);
          }else handleShow(false);
      });
      return () => {
          window.removeEventListener("scroll");
      }
    
  }, [])*/

    return (
        <div className={`navbar ${show && "nav__black"}`}>
            
            <img
            className="nav__logo"
             src={logo}
             alt="STREAMFLIX" />
            <img
            className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="AVATAR"
            />
            
        </div>
    )
}

export default Navbar;