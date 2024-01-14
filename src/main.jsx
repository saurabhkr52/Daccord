import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
// import App from './App';
// import Page from './div';
import Complete from './whole';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
  <Complete />
  </StrictMode>
);
