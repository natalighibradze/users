import React from 'react';
import jwtDecode from 'jwt-decode';

function UserPage() {
  const userToken = localStorage.getItem('token');
  const user = jwtDecode(userToken);
  console.log(user);
  return (
    <div>
      <h1>User Page</h1>
      <img src={user.image} alt="" />
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Gender: {user.gender}</p>
    </div>
  );
}

export default UserPage;