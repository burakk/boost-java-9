/*
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
*/

import { createRoot } from "react-dom/client";

import { StrictMode } from "react";

const rootEl = document.getElementById("root");

import App from "./App";

const root = createRoot(rootEl);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
