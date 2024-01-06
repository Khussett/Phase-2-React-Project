import React from 'react';
import App from './App';


const Home = ({ data }) => {
  return (
    <div className="home" id="home">
      {data.map((item, key) => (
        <div className="image" key={key}>
          <img src={item.urls.small} className="image" alt={item.alt_description} />
          <h4>Photo by {item.user.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default Home;
