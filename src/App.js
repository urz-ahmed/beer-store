import React, { useState,useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';

const API_URL = 'https://api.punkapi.com/v2/beers';

function App() {
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAbout, setShowAbout] = useState(false);

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        let url = API_URL;

        if (searchQuery) {
          url += `?beer_name=${searchQuery}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        setBeers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBeers();
  }, [searchQuery]);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar searchQuery={searchQuery} handleSearch={handleSearch} toggleAbout={toggleAbout} />
      </header>
      <div className="card-container">
        {showAbout ? (
          <About />
        ) : (
          beers.map((beer) => (
            <div key={beer.id} className="beer-card">
              <img src={beer.image_url} alt={beer.name} />
              <h2>{beer.name}</h2>
              <p>{beer.tagline}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
