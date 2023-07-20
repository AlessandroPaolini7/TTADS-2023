import styled from "styled-components";

const BodyContainer = styled.div`
    flex: 0.8;
    background-color: #232323;
    `


const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
    `;

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    flex:0.5;
    min-width: 75px;
    background-color: #fff;
    color:#181818;
    border-radius: 30px;
    padding:10px;

    & input{
        border: none;
        width: 100%;
        
    }
    `;

const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    & h4{
        margin-left: 15px;
        margin-right: 15px;
    }`;

const gradientStyle = {
    backgroundImage: `linear-gradient(to right, black, #232323)`,
  };

const cardStyle = {
    backgroundColor: '#181818'
}


export { cardStyle,gradientStyle, BodyContainer, HeaderContainer, HeaderLeft, HeaderRight };