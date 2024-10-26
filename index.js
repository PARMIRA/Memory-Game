import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from './game'; // Adjust this if your Game component file is named differently
import './index.css'; // Optional, if you have global styles

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Game />
    </React.StrictMode>
  );
} else {
  console.error('Could not find root element to mount to!');
}


