import React from 'react';
import './overview.css';

const overview = ({
  overview,
  release_date,
  budget,
  revenue,
  runtime,
  status,
}) => {
  return (
    <div className="over">
      <div className="info">
        <h2 className="border">
          <span style={{ color: 'black', fontSize: '48px' }}>Synopsis</span>
        </h2>
        <p>{overview}</p>
      </div>

      <div className="info">
        <h2 className="border">
          <span style={{ color: 'black', fontSize: '48px' }}>Movie Info</span>
        </h2>
        <h5>Release date : {release_date}</h5>
        <h5>Budget :{budget}</h5>
        <h5>Revenue :{revenue}</h5>
        <h5>Runtime : {runtime}</h5>
        <h5>Status : {status}</h5>
      </div>
    </div>
  );
};

export default overview;
