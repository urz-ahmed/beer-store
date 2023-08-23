import React, { useState, useEffect } from 'react';
import './App.css';
//here i can use environment variable but i haven't use because i want to show you api url to show the transparency
const API_URL = 'https://api.punkapi.com/v2/beers';

function App() {
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearch = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Punk API Beers</h1>
        <input
          type="text"
          placeholder="Search by beer name"
          value={searchQuery}
          onChange={handleSearch}
        />
      </header>
      <div className="card-container">
        {beers.map(beer => (
          <div key={beer.id} className="beer-card">
            <img src={beer.image_url} alt={beer.name} />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
