import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for createRoot
import './index.css';
import App from './App.jsx';

import { Provider } from 'react-redux';
import { store } from './app/store.js';

const root = createRoot(document.getElementById('root')); // Proper usage of createRoot
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
