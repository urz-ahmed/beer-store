import React, { useState, useEffect } from 'react';
import './App.css';

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
      <h1 className="header-title">CraftyHops</h1>

        
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light blue">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              {/* CraftHops */}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  {/* Dropdown items go here */}
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">
                    Disabled
                    
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchQuery} // Connect value to searchQuery
                  onChange={handleSearch} // Connect onChange to handleSearch
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
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
