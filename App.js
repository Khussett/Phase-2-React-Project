import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('lamborghini');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const client_id = 'Z7oxk6lYPk_CiqY9ahsva0vEYqPmfp2DQRo4zdMHwe8';
  const fetchUrl = `https://api.unsplash.com/search/photos?client_id=${client_id}&query=${query}&page=${page}`;
  const fetchImages = () => {
    axios
      .get(fetchUrl, {
        headers: {},
      })
      .then((response) => {
        setData([...data, ...response.data.results]);
      })
      .catch((error) => {
        console.log(error);
      });
    setPage(page + 1);
  };

  useEffect(() => {
    fetchImages();
  }, [query]);

  const searchImages = (e) => {
    if (e.keyCode === 13) {
      setQuery(e.target.value);
      setData([]);
    }
  };

  return (
    <Router>
      <>
        <Navbar />
        <div className="form" id="form">
        
          <input
            type="text"
            className=""
            placeholder="Search for pics"
            onKeyDown={(e) => searchImages(e)}
            
          />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <InfiniteScroll
                dataLength={data.length}
                next={fetchImages}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                  <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
              >
                <Home data={data} />
              </InfiniteScroll>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
