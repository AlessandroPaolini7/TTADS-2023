import React from "react";
import { LoginContainer, LoginButton } from "./styles.js";
import { Navigate } from "react-router-dom";



function Login() {
    const [goToFormLogin, setGoToFormLogin] = React.useState(false);

    if (goToFormLogin) {
        return <Navigate to="/formlogin" />;
    }

    return (
        <LoginContainer>
            <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="Logo de spotify" />
            <LoginButton onClick={() => {setGoToFormLogin(true);}}>
                    Login with Spotify
            </LoginButton>
        </LoginContainer>
    );
}


export default Login;