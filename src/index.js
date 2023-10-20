import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Navbar from './Navbar';
import Pickk from './Pickk'
import Pow from './Pow';
import Service from'./Service';
import Join from'./Join';
import Case from './Case';
import Last from './Last';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Pickk/>
    <Pow />
    <Service/>
    <Join/>
    <Case/>
    <Last/>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
