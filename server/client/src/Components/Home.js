import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <div className="homepage">
      <span></span>
      <div className="home-content">
        <div className="title">
          <h3>mark.it</h3>
        </div>
      </div>
      <div className="home-buttons">
        <div className="start-options">
          <Link to='/new_list'>
            <button type="button">Start Shopping!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
