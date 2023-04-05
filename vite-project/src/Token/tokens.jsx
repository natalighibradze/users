import React, { useState } from 'react'

function Login() {
    const [token, setToken] = useState('');
  
    const login = () => {
      axios.post('https://dummyjson.com/auth/login', {
        username: 'username',
        password: 'password'
      })
      .then(function (response) {
        const token = response.data.token;
        setToken(token);
        localStorage.setItem('token', token);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  
    useEffect(() => {
      // Check for token in local storage
      const token = localStorage.getItem('token');
  
      // If token exists, set it in state
      if (token) {
        setToken(token);
      }
    }, []);
  
    return (
      <div>
        <button onClick={login}>Login</button>
      </div>
    );
  }
  
  export default App;
  