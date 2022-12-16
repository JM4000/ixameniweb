import React from 'react';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';


const LogButton = ({ logIn }) => {
  const navigate = useNavigate();
  const verify = (token) => {
    axios.get("http://localhost:8000/usuarios/logIn/" + token.credential).then((response) => {
      logIn(token);
      navigate("/mapa")
    });
  };

  return (
    <div class="container">
      <div class="child">
        <GoogleLogin
          onSuccess={credentialResponse => {
            verify(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </div>

    </div>

  )
}

export default LogButton