import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`  
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  box-sizing: inherit;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primaryColor};
  font-family: 'Montserrat', sans-serif;
}

body::-webkit-scrollbar {
  display: none;
}

h1,
h2,
h3 {
  font-weight: 700;
  line-height: 1.1;
  margin-top: 0;
}

p {
  margin: 0;
}

a,
a:visited,
a:active {
  text-decoration: none;
}

.link{
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
}
`;

export default GlobalStyles;
