import styled from 'styled-components';
import background from '../../images/fountain.jpg';

export const StyledLandingPage = styled.div`
    padding: 10px 50px;
    background-image: 
        linear-gradient(
            rgba( 0, 0, 0, 0),
            rgba(0, 0, 0, 0.7)
        ),
        url(${background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    color: white;
    // margin-top: 30px;
    margin: 0px;

    div {
        position: absolute;
        bottom: 10px;
        left: 10px;
    }
    span {
        font-weight: 650;
    }
`