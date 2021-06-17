import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Modal from 'react-modal';
import Modal1 from 'react-modal';
import { handleLogin } from '../../redux/action/loginActions';
import { login } from '../../userService/userService';
import { registrasi } from '../../userService/userService';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesBySearch } from '../../redux/action/movieActions';
import jwt_decode from 'jwt-decode'
import {Dropdown, DropdownButton, ButtonGroup} from 'react-bootstrap'

const Header = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [fullnameRegis, setFullnameRegis] = useState('');
  const [usernameRegis, setUsernameRegis] = useState('');
  const [emailRegis, setEmailRegis] = useState('');
  const [passwordRegis, setPasswordRegis] = useState('');
  const [profilePicRegis, setProfilePicRegis] = useState('');

  const [loginModal, setLoginModal] = useState(false);
  const [regisModal, setRegisModal] = useState(false);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const fullnames = useSelector((state) => state.login);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getMoviesBySearch(search));
    setSearch('');
  };

  const loginHandler = (e) => {
    const store = window.localStorage;
    login(email, password)
      .then((response) => {
        store.setItem('token', response.data.token);
        const { token } = response.data;
        const decoded = jwt_decode(token);
        //store.setItem('data', JSON.stringify(token));
        dispatch(
          handleLogin(email,token, decoded.full_name))
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const regisHandler = (e) => {

    registrasi(fullnameRegis, usernameRegis, emailRegis, passwordRegis, profilePicRegis)
      .then((response) => {
        alert("Registrasi Success");
        console.log(response);
        setRegisModal(false)
        setLoginModal(true)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logoutHandler = () => {
    const store = window.localStorage
    store.clear('');
    window.location.reload();
  }
  return (
    <div className="navbar">
      <div className="navbar-item logo">
        <Link to={'/'}>
          <p>Logo</p>
        </Link>
        <Link to={'/'}>
          {' '}
          <p>MilanTV</p>
        </Link>
      </div>
      <div className="navbar-item">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search movie"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>

      <div>
          {
            fullnames.token === "" ? 
            
            <div className="navbar-item">
            <div onClick={(e) => console.log(e.target)}>
              <p onClick={() => setLoginModal(true)}>Sign in</p>
    
              <Modal
                isOpen={loginModal}
                onRequestClose={() => setLoginModal(false)}
              >
                <div className="login-wrapper">
                  <button className="btnClose" onClick={() => setLoginModal(false)}>
                    X
                  </button>
    
                  <h4 className="title-modal">Milan TV</h4>
    
                  <div className="email-wrapper">
                    <label>Email</label>
                    <br />
    
                    <input
                      value={email}
                      className="input-email"
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                    />
    
                    <br />
                  </div>
    
                  <div className="password-wrapper">
                    <label>Password</label>
                    <br />
                    <input
                      value={password}
                      className="input-password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
    
                  <button className="btnLogin" onClick={() => {
                    loginHandler();
                    setLoginModal(false);
                    }}>
                    Login
                  </button>
    
                  <p className="new-acc">
                    Don't have an account?{' '}
                    <span
                      onClick={() => {
                        setLoginModal(false);
                        setRegisModal(true);
                      }}
                    >
                      Register
                    </span>
                  </p>
                </div>
              </Modal>
              <Modal1
                isOpen={regisModal}
                onRequestClose={() => setRegisModal(false)}
              >
                <div className="login-wrapper">
                  <button className="btnClose" onClick={() => setRegisModal(false)}>
                    X
                  </button>
    
                  <h4 className="title-modal">Milan TV</h4>
    
                  <div className="email-wrapper">
                    <label>Full Name</label>
                    <br />
                    <input 
                    value={fullnameRegis}
                    className="input-email" 
                    type="text" 
                    onChange={(e) => setFullnameRegis(e.target.value)}
                    />
                    <br />
                  </div>
    
                  <div className="email-wrapper">
                    <label>Username</label>
                    <br />
                    <input 
                    value={usernameRegis}
                    className="input-email" 
                    type="text"
                    onChange={(e) => setUsernameRegis(e.target.value)} 
                    />
                    <br />
                  </div>
    
                  <div className="email-wrapper">
                    <label>Email</label>
                    <br />
                    <input 
                    value={emailRegis}
                    className="input-email" 
                    type="text" 
                    onChange={(e) => setEmailRegis(e.target.value)}
                    />
                    <br />
                  </div>
    
                  <div className="email-wrapper">
                    <label>Password</label>
                    <br />
                    <input 
                    value={passwordRegis}
                    className="input-email" 
                    type="password" 
                    onChange={(e) => setPasswordRegis(e.target.value)}
                    />
                    <br />
                  </div>
    
                  <div className="password-wrapper">
                    <label>Profil Picture</label>
                    <br />
                    <input 
                    value={profilePicRegis}
                    className="input-password" 
                    type="text" 
                    onChange={(e) => setProfilePicRegis(e.target.value)}
                    />
                  </div>
    
                  <button className="btnLogin" onClick={()=> regisHandler()}>Register</button>
    
                  <p className="new-acc">
                    Already have an account?{' '}
                    <span
                      onClick={() => {
                        setRegisModal(false);
                        setLoginModal(true);
                      }}
                    >
                      Login
                    </span>
                  </p>
                </div>
              </Modal1>
            </div>
          </div> 
          : 
          <div className="mb-2">
          {['down'].map((direction) => (
            <DropdownButton
              onClick={()=> logoutHandler()}
              as={ButtonGroup}
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant="secondary"
              title={` Welcome, ${fullnames.fullname} `}
            >
            </DropdownButton>
          ))}
        </div>
          // <div className="profile-user" onClick={()=> {logoutHandler();}} >welcome, {fullnames.fullname}</div>
          }  

        
      </div>
    </div>
  );
};
export default Header;
