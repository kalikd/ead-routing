import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// function tick() {
//   const element = <><h1>Hello Class!</h1><h3>{new Date().toLocaleTimeString()}</h3></>
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000)



ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
