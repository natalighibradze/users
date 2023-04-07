import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Typography, Input } from '@mui/material';
import jwtDecode from 'jwt-decode';
import './Navigation.scss';
import { useStore } from '../../store/StoreContext';
import axios from 'axios';
const Navigation = () => {
  const { productQuantity: cartSize, handleChangeTheme, setSearchedProducts } = useStore();
  const [inputValue, setInputValue] = useState('');
  // const [products, setProducts] = useState([]);
  const userToken = localStorage.getItem("token");
  const user = jwtDecode(userToken);
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  const handleSubmit = async () => {
    try {
      const { data : {products} } = await axios(`https://dummyjson.com/products/search?q=${inputValue}`);
      setSearchedProducts(products);
      // navigate('/products');
    } catch (err) {
      console.log(err);
    }
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
          <li>
            <Link to={'/profile'}>
               {user.username}
            </Link>
          </li>
        </ul>
        <Input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <Button variant="contained" color="error" onClick={handleSubmit}>
          Submit
        </Button>
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