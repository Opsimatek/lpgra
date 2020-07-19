import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
    }
    *, *::after, *::before {
        box-sizing: border-box;
    }
    body {
        align-items: center;
        background: ${({ theme }) => theme.primaryLight};
        color: ${({ theme }) => theme.primaryDark};
        display: flex;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        justify-content: center;
        text-rendering: optimizeLegibility;
    }

    img {
        display: block;
        width: 200px;
        margin: 0 auto;
        height: 200px;
    }

    main {
        height: 100%;
    }

    @media(min-width: ${({ theme }) => theme.mobile}) {

    }
    `
