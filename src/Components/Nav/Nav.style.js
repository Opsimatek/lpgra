import styled from 'styled-components';

export const StyledNav = styled.header`
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

    @media (min-width: ${({ theme }) => theme.mobile}) {
        height: 110px;
    }

    h1 {
        margin: 5px 0;
        vertical-align: middle;
        font-weight: 600;
        position: absolute;
        top: 1rem;
        left: 5rem;
        text-align: center;
        font-size: 1.2rem;

        @media (min-width: ${({ theme }) => theme.mobile}) {
            font-size: 2rem;
            text-align: center;
          }

        @media (min-width: 850px) {
            width: 90vw;
        }

        @media (max-width: 260px) {
            font-size: 0.9rem;
        }
      }
    `