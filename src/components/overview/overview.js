import React from 'react';
import './overview.css';

const overview = ({
  synopsis,
  release_date,
  budget,
  director,
  featured_song,
}) => {
  return (
    <div className="over">
      <div className="info">
        <h2 className="border">
          <span style={{ color: 'black', fontSize: '48px' }}>Synopsis</span>
        </h2>
        <p>{synopsis}</p>
      </div>

      <div className="info">
        <h2 className="border">
          <span style={{ color: 'black', fontSize: '48px' }}>Movie Info</span>
        </h2>
        <h5>Release date : {release_date}</h5>
        <h5>Budget :{budget}</h5>
        <h5>Director : {director}</h5>
        <h5>Featured song : {featured_song}</h5>
      </div>
    </div>
  );
};

export default overview;
