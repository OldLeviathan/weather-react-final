import {createGlobalStyle} from "styled-components/dist/styled-components.browser.cjs";

const GlobalStyleWrapper = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: Calibri;
}
a{
  color: white;
}
header{

  width: 100vw;
  height: 10vh;
  background: black;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
}
body{
  color: black;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(45deg, rgba(45,176,224,1), rgba(96,40,168,1))0 0/auto 100% no-repeat;
  
}
`

export default GlobalStyleWrapper;