import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Signin from './views/auths/signin';
import Signup from './views/auths/signup';
import AdminProvider from './contexts/Admin-context';
import ProtectRoute from './protect-routes';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AdminProvider> 
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
     
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route element={<ProtectRoute/>}>
        <Route path="/" element={<Home/>}></Route>
      </Route>
      </Route>
    </Routes>
    </BrowserRouter>
  </AdminProvider>,
 
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
