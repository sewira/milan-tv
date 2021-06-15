import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FETCH_MOVIE_BY_ID } from '../constant';
import { useParams } from 'react-router-dom';
import Overview from '../components/overview/overview';
import Header from '../components/header/Header';
import Footer from '../components/footer/footer';

import Banner from '../components/banner/Banner';

const DetailPage = () => {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  const fetchMoviesById = async (id) => {
    const res = await axios.get(`${FETCH_MOVIE_BY_ID(parseInt(id))}`);

    setDetail(res.data);
  };

  useEffect(() => {
    fetchMoviesById(id);
  }, []);

  return (
    <div>
      <Banner backdrop_path={detail.backdrop_path} />
      <Overview />
    </div>
  );
};

export default DetailPage;
