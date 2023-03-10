import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { Auth0Provider } from '@auth0/auth0-react';
import MuiThemeProvider from 'theme';

axios.defaults.baseURL = 'https://back-end-pet-s-house.up.railway.app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-81gijsnknx2ntvs1.us.auth0.com"
      clientId="sYBEcObv3SIReXcOxoqM18RT8S1b89Wn"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <BrowserRouter>
        <MuiThemeProvider>
          <App />
        </MuiThemeProvider>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
