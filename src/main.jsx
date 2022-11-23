import React from 'react';
import { createRoot } from 'react-dom/client';
import Romantic from './components/romantic/romantic';

const content = document.querySelector('#aici');

const romantic = <Romantic />;

const root = createRoot(content);
root.render(romantic);
