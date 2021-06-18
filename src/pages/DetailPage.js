import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FETCH_MOVIES_BY_ID } from '../constant';
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

  const {
    budget,
    description,
    director,
    featured_song,
    rating,
    id: id_movie,
    release_date,
    trailer,
    poster,
    synopsis,
    title,
    reviews,
  } = detail;

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
    const res = await axios.get(`${FETCH_MOVIES_BY_ID(id)}`);
    setDetail(res.data.data);
  };

  useEffect(() => {
    fetchMoviesById(id);
  }, []);

  const showOverview = isShow.overview ? (
    <Overview
      synopsis={synopsis}
      release_date={release_date}
      budget={budget}
      director={director}
      featured_song={featured_song}
    />
  ) : null;
  const showCharacters = isShow.characters ? <Characters /> : null;
  const showReview = isShow.review ? <Review reviews={reviews} /> : null;

  return (
    <div>
      <Header />
      <Banner
        title={title}
        rating={rating}
        description={description}
        poster={poster}
        trailer={trailer}
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
