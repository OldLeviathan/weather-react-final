import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import GlobalStyleWrapper from "./style";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyleWrapper/>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
