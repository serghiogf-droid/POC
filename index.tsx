import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

console.log("Index loaded OK"); // <-- agrega esto

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <div style={{ padding: 20 }}>
      <h1>Mounted OK</h1>
      <App />
    </div>
  </React.StrictMode>
);
