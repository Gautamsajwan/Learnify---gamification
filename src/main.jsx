import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { Flip, Slide, ToastContainer, Zoom } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
// import ContextProvider from './context/ContextProvider.jsx';
import { AuthState } from './Contexts/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthState>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        newestOnTop={true}
        transition={Flip}
        theme="dark"
        className="text-base capitalize tracking-wide"
      />
      <App />
      </AuthState>
    </BrowserRouter>
  </React.StrictMode>,
)
