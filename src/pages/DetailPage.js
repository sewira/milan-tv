import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GET_MOVIE_BY_ID } from '../constant';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  console.log(detail);

  const fetchMoviesById = async (id) => {
    const res = await axios.get(`${GET_MOVIE_BY_ID(parseInt(id))}`);

    setDetail(res.data);
  };

  useEffect(() => {
    fetchMoviesById(id);
  }, []);

  return <div>DetailPage {id} </div>;
};

export default DetailPage;
