import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const CardsCount = {
  CardsCount: 11,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      cardsCount = {CardsCount.CardsCount}
    />
  </React.StrictMode>,
);
