import { createGlobalStyle } from 'styled-components';

const GlobalStyle =  createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
    } 

    body {
        background-color: #333;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3em;
    }
`

export { GlobalStyle }