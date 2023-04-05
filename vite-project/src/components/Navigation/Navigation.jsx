import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

import jwtDecode from 'jwt-decode';
import './Navigation.scss';
import { useStore } from '../../store/StoreContext';



const Navigation = () => {
  const { productQuantity: cartSize, handleChangeTheme } = useStore();

  const userToken = localStorage.getItem("token");
  const user = jwtDecode(userToken);

  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
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
// export default UsersPage;