import React from 'react';
import './header.css';

const Header = () => {
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
          <p>Sign in</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
