import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import CharacterContext from './context/CharacterContext';
import EpisodeContext  from './context/EpisodeContext';
import LocationContext from './context/LocationContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <LocationContext>
      <CharacterContext>
        <EpisodeContext>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </EpisodeContext>
      </CharacterContext>
    </LocationContext>
  </React.StrictMode>
);

reportWebVitals();
