import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FETCH_MOVIE_BY_ID } from '../constant';
import { useParams } from 'react-router-dom';
import './DetailPage.css';

import Banner from '../components/banner/Banner';
import Overview from '../components/overview/overview';
import Review from '../components/review/Review';
import Characters from '../components/characters/Characters';
import Header from '../components/header/Header';
import Footer from '../components/footer/footer';

const DetailPage = () => {
  const [detail, setDetail] = useState([]);

  const { id } = useParams();
  const { overview, release_date, budget, revenue, runtime, status, title } =
    detail;

  console.log(detail);

  const [isShow, setIsShow] = useState({
    overview: true,
    characters: false,
    review: false,
  });

  const handleOverview = () => {
    setIsShow({ overview: true, review: false, characters: false });
  };

  const handleReview = () => {
    setIsShow({ overview: false, review: true, characters: false });
  };

  const handleCharacters = () => {
    setIsShow({ overview: false, review: false, characters: true });
  };

  const fetchMoviesById = async (id) => {
    const res = await axios.get(`${FETCH_MOVIE_BY_ID(parseInt(id))}`);

    setDetail(res.data);
  };

  useEffect(() => {
    fetchMoviesById(id);
  }, []);

  const showOverview = isShow.overview ? (
    <Overview
      overview={overview}
      release_date={release_date}
      budget={budget}
      revenue={revenue}
      status={status}
      runtime={runtime}
    />
  ) : null;
  const showCharacters = isShow.characters ? <Characters /> : null;
  const showReview = isShow.review ? <Review /> : null;

  return (
    <div>
      <Header />
      <Banner
        backdrop_path={detail.backdrop_path}
        overview={overview}
        title={title}
      />
      <div className="link-details">
        <button
          className={`btn ${isShow.overview ? 'active' : null}`}
          onClick={handleOverview}
        >
          Overview
        </button>
        <button
          className={`btn ${isShow.characters ? 'active' : null}`}
          onClick={handleCharacters}
        >
          Characters
        </button>
        <button
          className={`btn ${isShow.review ? 'active' : null}`}
          onClick={handleReview}
        >
          Review
        </button>
      </div>
      {showOverview}
      {showCharacters}
      {showReview}
      <Footer />
    </div>
  );
};

export default DetailPage;
