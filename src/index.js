import React, { createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Loader } from './Components/Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const LoadingContext = createContext();
export const useLoading = () => useContext(LoadingContext);
const root = ReactDOM.createRoot(document.getElementById('root'));
const Index=()=>{
  const [loading, setLoading] = useState(false);

  return(
    <>
    <LoadingContext.Provider value={{loading,setLoading}}>
    <Loader loading={loading}></Loader>
    <ToastContainer/>
    <App />
    </LoadingContext.Provider>
    </>
  )
}
root.render(
  <>
  <Index/>
  </>
);

