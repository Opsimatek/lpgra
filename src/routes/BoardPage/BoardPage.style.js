import styled from 'styled-components';

export const StyledBoard = styled.ul`
    list-style-type: none;
    text-align: center;
    margin: 0;
    padding: 100px 0;

    li {
        padding: 10px;
    }

    @media (min-width: ${({ theme }) => theme.mobile}) {
        li {    
            display: flex;
            align-items: center;
        }

        li > * {
            margin: 20px 100px;
        }
    }

    @media (min-width: ${({ theme }) => theme.desktop}) {
        li > * {
            margin: 20px 150px;
        }
    }
`