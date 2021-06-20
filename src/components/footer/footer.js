import React from 'react';

// import logo from assets/footer-assets
import appleStore from '../../assets/footer-assets/applestore.png';
import googlePlay from '../../assets/footer-assets/googleplay.png';
import facebook from '../../assets/footer-assets/face 1.png';
import pinterest from '../../assets/footer-assets/pinterest 1.png';
import instagram from '../../assets/footer-assets/instagram 1.png';

import './footer.css';

const footer = () => {
  return (
    <footer>
      <div className="main-content">
        <div className="left box">
          <div className="title">
            <h2></h2>
            <h2>MilanTV</h2>
          </div>
          <div className="content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard
            </p>
          </div>
        </div>

        <div className="center box">
          <div className="content">
            <ul>
              <li>Tentang Kami</li>
              <li>Blog</li>
              <li>Layanan</li>
              <li>Karir</li>
              <li>Pusat Media</li>
            </ul>
          </div>
        </div>

        <div className="right box">
          <div className="title">
            <h2>Download</h2>
          </div>
          <div className="content">
            <div className="socials">
              <img src={googlePlay} alt="" />
              <img src={appleStore} alt="" />
            </div>
          </div>
          <div className="title1">
            <h2>Social Media</h2>
          </div>
          <div className="content">
            <div className="social">
              <div className="sns">
                <img src={facebook} alt="" />
              </div>
              <div className="sns">
                <img src={pinterest} alt="" />
              </div>
              <div className="sns">
                <img src={instagram} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2000-202 MilanTV. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default footer;
