import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import GlobalStyles from '~/components/GlobalStyles';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <App />
        </GlobalStyles>
    </React.StrictMode>,
);
