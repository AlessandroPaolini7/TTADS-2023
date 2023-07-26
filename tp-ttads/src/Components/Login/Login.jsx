import React from "react";
import { LoginContainer, LoginButton } from "./styles.js";
const Login = () => {
    return (
        <LoginContainer>
            <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="Logo de spotify" />
            <LoginButton href="#" >Login with Spotify</LoginButton>
        </LoginContainer>
    );
}

export default Login;