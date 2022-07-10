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
import Categories from './views/categories/categories';
import EditCategory from './views/categories/edit-category';
import AddCategories from './views/categories/add-categories';
import SubCategories from './views/categories/sub-categories/sub-categories';
import AddSubCategories from './views/categories/sub-categories/add-categories';
import Users from './views/users/users';
import CreateAdmin from './views/admin/create-admin';
import EditUser from './views/users/edit-user';
import User from './views/users/user';
import CreateUser from './views/users/create-user';
import Admins from './views/admin/admins';
import Oders from './views/oders/oders';
import Order from './views/oders/oder';

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

          <Route path="/products" element={<Products/>}></Route>
          <Route path="/product/:_id" element={<Product/>}></Route>
          <Route path="/products/new" element={<AddProduct/>}></Route>
          <Route path="/product/edit/:_id" element={<EditProduct/>}></Route>

          <Route path="/profile" element={<Profile/>}></Route>


          <Route path="/categories" element={<Categories/>}></Route>
          <Route path="/category/edit/:_id" element={<EditCategory/>}></Route>
          <Route path="/category/new" element={<AddCategories/>}></Route>

          <Route path="/sub-categories" element={<SubCategories/>}></Route>
          <Route path="/sub-category/new" element={<AddSubCategories/>}></Route>

          <Route path="/users" element={<Users/>}></Route>
          <Route path="/user/new" element={<CreateUser/>}></Route>
          <Route path="/user/:_id" element={<User/>}></Route>
          <Route path="/user/edit/:_id" element={<EditUser/>}></Route>


          <Route path="/admin/new" element={<CreateAdmin/>}></Route>
          <Route path="/admins" element={<Admins/>}></Route>


          <Route path="/orders" element={<Oders/>}></Route>
          <Route path="/order/:_id" element={<Order/>}></Route>






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
