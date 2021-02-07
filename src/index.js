import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import AppPokemon from "./AppPokemon";
import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <AppPokemon />
  </React.StrictMode>,
  document.getElementById("root")
);
