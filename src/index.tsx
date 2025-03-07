import { createRoot } from 'react-dom/client';
import { ColorModeScript } from '@chakra-ui/react';
import App from './App';
import './i18n';

createRoot(document.getElementById('root')!).render(
  <>
    <ColorModeScript />
    <App />
  </>
);
