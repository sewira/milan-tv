import React, { useState, useEffect } from 'react';
import './review.css';
import ReactStars from 'react-rating-stars-component';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useSelector } from 'react-redux';

function Review({ reviews, id }) {
  const [star, setStar] = useState();
  const [headLine, setHeadLine] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [isUser, setIsUser] = useState(false);

  const { token } = useSelector((state) => state.login);

  if (token === '') setIsUser(true);

  const ratingChanged = (newRating) => {
    setStar(newRating);
  };
  const user_id = jwt_decode(token);

  const submitReview = (e) => {
    e.preventDefault();
    // prettier-ignore
    if (star === null && headLine === '' && deskripsi === ''){
      alert('Tolong, Masukan Review')
    }
    {
      const config = {
        headers: { Authorization: token },
      };

      console.log(config.headers + 'headers');

      const data = {
        user_id: user_id.id,
        movie_id: id,
        headline: headLine,
        review: deskripsi,
        rating: star,
      };

      axios
        .post(
          'https://movie-app-teamc.herokuapp.com/api/create/review',
          data,
          config
        )
        .then((response) => console.log(response))
        .catch((err) => err.response.message);

      setStar();
      setHeadLine('');
      setDeskripsi('');
    }
  };

  return (
    <div className="review-container">
      <div className="main-input">
        <div>
          <ReactStars
            classNames="bintang"
            size={30}
            activeColor="red"
            count={10}
            onChange={ratingChanged}
            value={star}
          />
          <form onSubmit={submitReview} className="form-column">
            <input
              type="text"
              placeholder="Headline"
              className="headline"
              value={headLine}
              onChange={(e) => setHeadLine(e.target.value)}
            />
            <input
              className="input-review"
              type="text"
              placeholder="Leave a review"
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
            />
            <input type="submit" value="Submit" className="btn btn-review" />
          </form>
        </div>
      </div>

      <div className="main-review">
        <div className="user-container">
          {reviews.length > 0
            ? reviews.map((review, index) => (
                <div key={index} className="review-container">
                  <p className="nama-user">{review.headline}</p>
                  <p className="nama-user">
                    {review.rating}/10 <FaStar style={{ color: 'yellow' }} />
                  </p>
                  <p className="user-review">{review.review}</p>
                </div>
              ))
            : 'No one review yet'}
        </div>
      </div>
    </div>
  );
}

export default Review;
