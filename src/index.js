import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
// import Header from './Components/Header/Header';
// import Footer from './Components/Footer/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Header/> */}
    <ToastContainer/>
    <App />
    {/* <Footer/> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

