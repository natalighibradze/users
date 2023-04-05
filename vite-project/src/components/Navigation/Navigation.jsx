import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import axios from 'axios';

import './Navigation.scss';
import { useStore } from '../../store/StoreContext';

const Navigation = () => {
  const { productQuantity: cartSize, handleChangeTheme } = useStore();

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const searchResult = await axios.get(`https://dummyjson.com/products/search?q=${searchTerm}`);
    navigate(`/search/${searchTerm}`, { searchResult });
  };

  return (
    <header className="container">
      <nav className="subcontainer">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart {cartSize}</Link>
          </li>
        </ul>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <Button type="submit" variant="contained" color="error" >
            Search
          </Button>
        </form>
        <Button variant="contained" color="error" onClick={handleLogOut}>
          Log out
        </Button>
        <Typography variant="subtitle1" color="white" onClick={handleChangeTheme}>
          Change Theme
        </Typography>
      </nav>
    </header>
  );
};
export default Navigation;
