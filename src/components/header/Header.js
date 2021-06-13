import React, { useState } from "react";
import "./header.css";
import Modal from "react-modal";

const Header = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [regisModal, setRegisModal] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-item logo">
        <p>Logo</p>
        <p>MilanTV</p>
      </div>
      <div className="navbar-item">
        <input type="text" placeholder="search movie" />
      </div>
      <div className="navbar-item">
        <div onClick={(e) => console.log(e.target)}>
          <p onClick={() => setLoginModal(true)}>Sign in</p>

          <Modal isOpen={loginModal} onRequestClose={()=> setLoginModal(false)}>
            <div className="login-wrapper">

                  <button className="btnClose" onClick={() =>setLoginModal(false)}>
                    X
                  </button>

                  <h4 className="title-modal">Milan TV</h4>

                  <div className="email-wrapper">
                    <label>Email</label><br/>
                    <input  className="input-email" type="text"  /><br/>
                  </div>

                  <div className="password-wrapper">
                    <label>Password</label><br/>
                    <input className="input-password" type="password" />
                  </div>

                  <button className="btnLogin">
                    Login
                  </button>

                  <p className="new-acc">Don't have an account? <span
                    onClick={() =>setLoginModal(false)}
                    >
                    Register
                    </span>
                  </p>
             </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Header;
