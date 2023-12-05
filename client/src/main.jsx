import React from 'react';
import ReactDOM  from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import {ChainId , ThirdwebProvider } from '@thirdweb-dev/react';
import App from './App';
import './index.css';
import { StateContextProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider  clientId="e6252e6cc91a29b5fcb6efbb42e23a0d" activeChain="goerli">
        <Router>
        <StateContextProvider>
        <App/>
        </StateContextProvider>
            
        </Router>
    </ThirdwebProvider>
)