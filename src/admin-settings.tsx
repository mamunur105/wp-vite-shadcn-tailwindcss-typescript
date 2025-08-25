import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './admin/App';
import './index.css';
import "./admin/main.scss"; // appended CSS
ReactDOM.createRoot(document.getElementById('root_int')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
