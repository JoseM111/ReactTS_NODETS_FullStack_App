import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const app = ReactDOM;

app.createRoot(
    document.getElementById('root') as HTMLElement,
  )
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
