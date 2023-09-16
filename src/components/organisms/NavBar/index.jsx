import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../atoms/Icons';
import './index.scss';
import logo from './../../../assets/tv.png';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = import.meta.env.VITE_API_KEY;

export const NavBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${apiUrl}/search/movie?api_key=${apiKey}&query=${searchQuery}`
    );
    const data = await response.json();
    setSearchResults(data.results);
    onSearch(searchQuery);
  };

  const handleClick = () => {
    window.location.reload();
  };

  return (
    <>
      <nav className="navbar flex justify-between items-center mx-24 max-[980px]:mx-10 max-[500px]:mx-4 ">
        <Link className="logo flex items-center" onClick={handleClick} to="/">
          <img src={logo} alt="MovieBox Logo" />
          <p className="logo-name">MovieBox</p>
        </Link>
        <div className="search">
          <form onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="What do you want to watch"
              className="input"
              id="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          <Icon name="search" className="search-icon " />
        </div>
        <div className="signin-menu flex items-center">
          <p className="sign-in">Sign in</p>
          <Icon name="menu" />
        </div>
      </nav>
      <div className="search-results">
        {searchResults.map((movie) => (
          <Link
            key={movie.id}
            to={`/search/${movie.id}`}
            className="search-result"
            rel="noopener noreferrer"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
            <p>{movie.release_date}</p>
          </Link>
        ))}
      </div>
    </>
  );
};
