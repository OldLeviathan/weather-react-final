import {createGlobalStyle} from "styled-components/dist/styled-components.browser.cjs";

const StyledForm = createGlobalStyle`
  form{
    margin: 20px;
  }
  input{
    background-color: transparent;
    border: 0;
    border-bottom: solid 2px #113a65;
    width: 50%;
    padding-bottom: 4px;
    color: #fff;
    font-weight: lighter;
    margin-bottom: 30px;
    margin-right: 20px;
    font-size: 40px;
    outline: none;
  }
  button{
    font-size: 30px;
    border: 2px solid #103a65;
    border-bottom: 4px solid #103a65;
    padding: 8px 20px;
    margin: 0 2px;
    border-radius: 2px;
    cursor: pointer;
    background-color: #235d9c;
    color: #fff;
    outline: none!important;
    &:hover{
      border-bottom: 2px solid #103a65;
      position: relative;
      top: 2px;
    }
    &:active{
      border-bottom: 2px solid transparent;
      border-color: transparent;
      position: relative;
      top: 2px;
    }
  }
  p{
    font-size: 40px;
  }
`
export default StyledForm;