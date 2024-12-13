import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Target container 'root' is not a DOM element."); // Ensure the root element exists
}

const root = ReactDOM.createRoot(rootElement); // Use createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
