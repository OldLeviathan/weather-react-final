import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from "./Components/App";
import GlobalStyleWrapper from "./style";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <GlobalStyleWrapper/>
      <App/>
    </BrowserRouter>
);
