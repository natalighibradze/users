import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

import './Navigation.scss';
import { useStore } from '../../store/StoreContext';

import { Avatar } from '@mui/material';

const Navigation = () => {
  const { productQuantity: cartSize, handleChangeTheme } = useStore();
  const userInfo = {
    "id": 15,
    "username": "kminchelle",
    "email": "kminchelle@qq.com",
    "firstName": "Jeanne",
    "lastName": "Halvorson",
    "gender": "female",
    "image": "https://robohash.org/autquiaut.png?size=50x50&set=set1"
  }

  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleUserPage = () => {
    navigate(`/user/${userInfo.id}`);
  }

  const UsersPage = () => {
    return(
      <div>
        <h1>User Page</h1>
        <p>Username: {userInfo.username}</p>
        <p>Email: {userInfo.email}</p>
        <p>First Name: {userInfo.firstName}</p>
        <p>Last Name: {userInfo.lastName}</p>
        <p>Gender: {userInfo.gender}</p>
      </div>
    )
  }

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
        <Avatar src={userInfo.image} onClick={handleUserPage}/>
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