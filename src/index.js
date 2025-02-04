import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import cors from 'cors'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const cors = require('cors');

// App.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET","POST","PUT","DELETE"],
//     credentials: true,
//     optionSuccessStatus: 200
//   })
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
