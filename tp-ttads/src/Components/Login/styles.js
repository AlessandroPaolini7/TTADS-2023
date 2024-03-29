import styled from "styled-components";

const LoginContainer = styled.div`
display:grid;
place-items:center;
height:100vh;
background-color:#000;
& img{
    width:100%;
}
`

const LoginButton = styled.a`
padding:20px;
background-color:#1db954;
border-radius:90px;
color:#fff;
font-weight:bold;
text-decoration:none;
text-transform:uppercase;
`
export{LoginContainer,LoginButton}