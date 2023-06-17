import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { makeServer } from "./server";
import { BrowserRouter } from 'react-router-dom';
import AuthContextWrapper from './Contexts/AuthContext';
import PostContextWrapper from './Contexts/PostContext';

// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextWrapper>
        <PostContextWrapper>
          <App />
        </PostContextWrapper>
      </AuthContextWrapper>
    </BrowserRouter>
  </React.StrictMode>
);

