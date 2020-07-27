import styled from 'styled-components';

export const StyledContact = styled.div`
    padding: 100px 10px;
    text-align: center;

    h2 {
        font-family: 'Yellowtail', cursive;
    }

    div {
        position: absolute;
        bottom: 0px;
    }

    a {
        text-decoration: none;
        padding: 5px;
        display: block;
    }

    p > a {
        display: inline;
    }
`