import styled from 'styled-components';

export const StyledNav = styled.header`
    // h1 {
        // position: fixed;
        // top: 0;
        // left: 4.5rem;
        // text-align: center;
    // }
    height: 95px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E4F4FB;
    border-bottom: solid black 1px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    flex-direction: row;
    z-index: 99;

    h1 {
        margin: 5px 0;
        vertical-align: middle;
        // width: 100%;
        font-weight: 600;
        // background-color: white;
        // text-align: center;

        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 1.2rem;
            text-align: center;
            // display: block;
            margin-left: 70px
          }
      }
    `