import React from "react";
import { createRoot } from "react-dom/client"; 
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Orbitron', sans-serif;
    background-color: #1a1a2e;
    color: white;
    text-align: center;
    padding: 20px;
  }
`;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
