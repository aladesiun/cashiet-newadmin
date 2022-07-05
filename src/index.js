import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Signin from './views/auths/signin';
import Signup from './views/auths/signup';
import AdminProvider from './contexts/Admin-context';
import ProtectRoute from './protect-routes';
import Layout from './views/layout';
import Products from './views/products/product-list';
import Product from './views/products/product';
import AddProduct from './views/products/new-product';
import ForgetPassword from './views/auths/forget-password';
import ResetPassword from './views/auths/reset-passord';
import EditProduct from './views/products/edit-product';
import Profile from './views/profile/profile';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AdminProvider> 
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
     
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/forgot-password' element={<ForgetPassword/>}></Route>
      <Route path='/password-reset' element={<ResetPassword/>}></Route>
      <Route element={<ProtectRoute/>}>
      <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/products/filter" element={<Products/>}></Route>
          <Route path="/product/:_id" element={<Product/>}></Route>
          <Route path="/products/new" element={<AddProduct/>}></Route>
          <Route path="/product/edit/_id" element={<EditProduct/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>

        </Route>
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
