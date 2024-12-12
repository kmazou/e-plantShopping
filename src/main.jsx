// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Your main app component
import './index.css'; // Your CSS file
import { Provider } from 'react-redux'; // Import Provider to connect Redux to your app
import store from './store.js'; // Import the Redux store

// Wrap the App component with the Provider to connect the Redux store
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Provide the Redux store to the entire app */}
      <App />
    </Provider>
  </React.StrictMode>,
);
