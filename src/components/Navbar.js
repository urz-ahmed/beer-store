/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Navbar = ({ searchQuery, handleSearch, toggleAbout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light blue">
      <div className="container-fluid">
        <a
          className="navbar-brand text-primary font-weight-bold border border-secondary shadow"
          href="/"
        >
          CraftHops
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <a className="nav-link" href="#" onClick={toggleAbout}>
                  About
                </a>
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearch}
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
