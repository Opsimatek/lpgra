import styled from 'styled-components';
import background from '../../images/fountain.jpg';

export const StyledLandingPage = styled.div`
    padding: 10px 50px;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    color: white;
    margin: 0px;

    section {
        position: absolute;
        top: 100px;
        left: 0;
        padding: 0 10px;
        background: rgba(80, 80, 80, 0.5);
        box-shadow: 0px 2px 30px rgb(80, 80, 80);
    }
    
    p > span {
        font-weight: 650;
    }

    div > span {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 0.9rem;
    }

    @media (max-width: 350px) {
        font-size: 0.8rem;
    }
`