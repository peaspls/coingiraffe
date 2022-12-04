import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import ReactDOM from 'react-dom/client'
import App from "./components/App";

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
)