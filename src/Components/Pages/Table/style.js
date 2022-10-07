import {createGlobalStyle} from "styled-components/dist/styled-components.browser.cjs";

const StyledTable = createGlobalStyle`
  table{
    margin: 20px;
    table-layout: fixed;
    width: 90vh;
    border: 3px solid black;
    
  }
`

export default StyledTable;