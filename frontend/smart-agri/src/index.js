import React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './main'; // Import the Main component

// Get the root DOM element
const rootElement = document.getElementById('root');

// Create a root for the React application
const root = createRoot(rootElement);

// Render the Main component
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
