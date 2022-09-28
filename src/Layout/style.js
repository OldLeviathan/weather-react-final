import {createGlobalStyle} from "styled-components/dist/styled-components.browser.cjs";

const StyledLayout = createGlobalStyle`
  main{
    margin: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export default StyledLayout;