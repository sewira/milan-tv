import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FETCH_MOVIE_BY_ID } from '../constant';
import { useParams } from 'react-router-dom';
import Overview from '../components/overview/overview';
import Review from '../components/review/Review';
import Characters from '../components/characters/Characters';
import Header from '../components/header/Header';
import Footer from '../components/footer/footer';
import './DetailPage.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';

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

  const { path, url } = useRouteMatch();

  return (
    <div>
      <Banner backdrop_path={detail.backdrop_path} />

      <Router>
        <div className="link-details">
          <div>
            <Link className="btn" to={`${url}/overview`}>
              Overview
            </Link>
          </div>
          <div>
            <Link className="btn" to={`${url}/characters`}>
              Characters
            </Link>
          </div>
          <div>
            <Link className="btn" to={`${url}/review`}>
              Review
            </Link>
          </div>
        </div>
        <div>
          <Switch>
            <Route exact path={`${path}/overview`}>
              <Overview />
            </Route>
            <Route exact path={`${url}/characters`}>
              <Characters />
            </Route>
            <Route exact path={`${url}/review`}>
              <Review />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default DetailPage;
