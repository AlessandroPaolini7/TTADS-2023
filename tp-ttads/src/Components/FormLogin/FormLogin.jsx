import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {FormLoginContainer, FormLogin, NavLogin, LoginButton, UsernameInput} from './styles.js';
import styled from 'styled-components/macro';

export default function InputWithIcon() {
  return (
    <FormLoginContainer>
      <NavLogin>
        <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="Logo de spotify" />
      </NavLogin>
      <FormLogin>
        <h1 css={`margin: 60px; font-size:50px;`}>Log in to Spotify</h1>
        <span>Email or username</span>
        <UsernameInput id="login-username" type="text" placeholder="Email or username"  />
        <span>Password</span>
        <UsernameInput id="login-password" type="password" placeholder="Password"  />
        <LoginButton>
          Entrar
        </LoginButton>
      </FormLogin>
    </FormLoginContainer>
    
  );
}