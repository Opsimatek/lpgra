import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 10px 0;
        padding: 35px 10px;
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
        // height: 100vh;
        justify-content: center;
        text-rendering: optimizeLegibility;
    }
    `
