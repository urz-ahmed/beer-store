import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const API_URL = 'https://api.punkapi.com/v2/beers';

  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const showHealthAlert = () => {
    toast.info('Beer is injurious to health');
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

  const handleSearch = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <header className="App-header">
        <h1>CraftsHop</h1>
        <input
          type="text"
          placeholder="Discover Your Favorite Brew"
          value={searchQuery}
          onChange={handleSearch}
          onFocus={showHealthAlert}
        />
      </header>
      <div className="card-container">
        {beers.map(beer => (
          <div
            key={beer.id}
            className={`beer-card`}
          >
            <img src={beer.image_url} alt={beer.name} />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
          </div>
        ))}
      </div>
      <ToastContainer />
    </>
  )
}

export default Home;
