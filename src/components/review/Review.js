import React from "react";
import "./review.css";
import foto from "../../assets/bc.png";
import ReactStars from 'react-rating-stars-component'

function Review() {
  return (
    <div>
      <div className="main-input">
        <div>
          <img className="foto1" src={foto} />
        </div>
        <div>
          <p className="nama-user">Yudi Kaka</p>
          <ReactStars classNames="bintang" size={30} activeColor="red" />
          <input className="input-review" type="text" placeholder="Leave a review" />
        </div>
      </div>

      <div className="main-review">
        <div className="user-container">
          <div>
            <img className="foto1" src={foto} alt="" />
          </div>
          <div>
            <p className="nama-user">Yudi Kaka</p>
            <p className="user-review">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
              <br /> magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco <br />
              laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim
              veniam, quis nostrud exercitation <br />
              ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
