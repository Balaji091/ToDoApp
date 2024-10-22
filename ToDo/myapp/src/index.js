import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './redux/store'; // Import the store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap your App with Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
