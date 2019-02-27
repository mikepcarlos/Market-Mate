import React from 'react';

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
          <button type="button">New List</button>
          <br></br>
          <button type="button">Current List</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
