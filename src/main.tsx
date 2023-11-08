import { LazyMotion, domAnimation } from 'framer-motion';

import { App } from './App.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LazyMotion features={domAnimation} strict>
      <App />
    </LazyMotion>
  </React.StrictMode>
);
