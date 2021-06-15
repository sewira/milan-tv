import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GET_MOVIE_BY_ID } from '../constant';
import { useParams } from 'react-router-dom';
import Overview from '../components/overview/overview';
import Header from '../components/header/Header';
import Footer from '../components/footer/footer';


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

  return (
    <div>
      <Header/>
      <Overview/>
      <Footer/>

    </div>
  )
};


export default DetailPage;
