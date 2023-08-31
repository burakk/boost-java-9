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

import App from "./App";
import { StrictMode } from "react";

// react root'u haline getirmek istediğin sıradan html elemanını seç
const rootEl = document.getElementById("root");

//react root'u oluştur
const root = createRoot(rootEl);

root.render(
  /*  StrictMode komponentlerinizin saflığını kontrol edebilmeniz için kullanılır */
  <StrictMode>
    <App />
  </StrictMode>
);

<h2>Hello</h2>; // jsx tag ( js extended ) js içerinde html'e çok benzeyen kod yazabilmen için

// --- İlk component'ımız ---

// 1. komponent'ler js function'larından yapılır
//2. sıradan fonksiyonları komponent fonksiyonlarından ayırt edilebilmesi için component fonksiyon isimlerinizi büyük harfle başlatın
//3. componentler jsx etiketi olarak yazılabilirler
//4. bir component function'u ile undefined, null, js expression'ları, jsx elemenları döndürbilirsiniz.
