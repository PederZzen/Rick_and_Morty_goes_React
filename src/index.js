import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import CharacterContext from './context/CharacterContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CharacterContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CharacterContext>
  </React.StrictMode>
);

reportWebVitals();
