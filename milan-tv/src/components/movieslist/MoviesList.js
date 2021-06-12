import React from 'react';

import './movieslist.css';

import bc from '../../assets/bc.png';

const MoviesList = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>Browse by category</h1>
      </div>

      <button className="btn">All</button>
      <button className="btn">Anime</button>
      <button className="btn">Action</button>
      <button className="btn">Adventure</button>
      <button className="btn">Sci-fi</button>
      <button className="btn">Comedy</button>

      <div className="card-container">
        <div className="card">
          <img src={bc} alt="" />
          <h3>Title</h3>
          <p>Genre</p>
        </div>
        <div className="card">
          <img src={bc} alt="" />
          <h3>Title</h3>
          <p>Genre</p>
        </div>
        <div className="card">
          <img src={bc} alt="" />
          <h3>Title</h3>
          <p>Genre</p>
        </div>
        <div className="card">
          <img src={bc} alt="" />
          <h3>Title</h3>
          <p>Genre</p>
        </div>
        <div className="card">
          <img src={bc} alt="" />
          <h3>Title</h3>
          <p>Genre</p>
        </div>
        <div className="card">
          <img src={bc} alt="" />
          <h3>Title</h3>
          <p>Genre</p>
        </div>
        <div className="card">
          <img src={bc} alt="" />
          <h3>Title</h3>
          <p>Genre</p>
        </div>
        <div className="card">
          <img src={bc} alt="" />
          <h3>Title</h3>
          <p>Genre</p>
        </div>
        <div className="card">
          <img src={bc} alt="" />
          <h3>Title</h3>
          <p>Genre</p>
        </div>
        <div className="card">
          <img src={bc} alt="" />
          <h3>Title</h3>
          <p>Genre</p>
        </div>
        <div className="card">
          <img src={bc} alt="" />
          <h3>Title</h3>
          <p>Genre</p>
        </div>
        <div className="card">
          <img src={bc} alt="" />
          <h3>Title</h3>
          <p>Genre</p>
        </div>
        <div className="card">
          <img src={bc} alt="" />
          <h3>Title</h3>
          <p>Genre</p>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
