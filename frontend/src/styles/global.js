// globalStyles.js
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  :root {
    --primary: #e7331c;
    --secondary: ;
    --text: #191825;
    --bg-black: #171717;
    --gray: #e0e0e0;
  }

  body {
    font-family: 'Poppins', cursive;
    font-synthesis: none;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .subtitle {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.1;
    color: var(--it-common-black);
    margin-bottom: 15px;
    font-family: rubik,sans-serif;
    background-color: rgba(255,220,96,.21);
    display: inline-block;
    padding: 10px 30px;
    border-radius: 30px;
  }
`;
 
export default GlobalStyle;
