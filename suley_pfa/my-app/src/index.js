// filepath: c:\Users\Dell user\Desktop\progetPFA\RYVOX_websitePFA\suley_pfa\my-app\src\index.js
//import React from 'react';
//import ReactDOM from 'react-dom/client'; // Utilisez 'react-dom/client' pour React 18
//import './index.css';
//import App from './App';

//const root = ReactDOM.createRoot(document.getElementById('root')); // Créez un root
//root.render(
  //<React.StrictMode>
   // <App />
  //</React.StrictMode>
//);


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // ton fichier CSS
import App from './App'; // ton fichier App
import { BrowserRouter } from 'react-router-dom'; // Import de BrowserRouter

// Envelopper l'application dans BrowserRouter
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
