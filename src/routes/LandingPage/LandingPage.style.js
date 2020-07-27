import styled from 'styled-components';
import background from '../../images/fountain.jpg';

export const StyledLandingPage = styled.div`
    padding: 10px 50px;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    color: white;
    margin: 0px;

    section {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 0 10px;
        background: rgba(80, 80, 80, 0.6);
        box-shadow: 0px -2px 30px rgb(80, 80, 80);
    }
    
    span {
        font-weight: 650;
    }
`