import { Link, Navigate, useNavigate } from 'react-router-dom'
import { AdminContext } from "../contexts/Admin-context";
import { useState, useContext, useEffect } from "react";
const SideNavHeader = () => {
    const admins = useContext(AdminContext);
    let navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('adx')
        localStorage.removeItem('_ux')
        window.location.href = "/signin"
    }
    return (
        <div className="page-sidebar">
            <div className="main-header-left d-none d-lg-block">
                <div className="logo-wrapper">
                    <a href="/">
                        <img className="d-none d-lg-block blur-up lazyloaded" src={require('../assets/images/index.png')} alt=""></img>
                    </a>
                </div>
            </div>
            <div className="sidebar custom-scrollbar">
                <div className="sidebar-back d-lg-none d-block"><i className="fa fa-times" aria-hidden="true"></i></div>
                <div className="sidebar-user block ml-0">
                    <img className="img-60" src={require('../assets/images/dashboard/user3.jpg')} alt=""></img>

                    <div>
                        <h6 className="f-14">{admins && admins.admin.username}</h6>
                        <p>Admin</p>
                    </div>
                </div>
                <ul className="sidebar-menu">
                    {/* <li className="">
                        <a className="sidebar-header" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            <span>Dashboard</span>
                        </a>
                    </li> */}
                    <li>
                        <a className="sidebar-header" href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            <span>Dashboard</span>
                            <i className="fa fa-angle-right pull-right" />
                        </a>
                    </li>
                    <li className>
                        <a className="sidebar-header" href="javascript:void(0)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            <span>Profiles</span>
                            <i className="fa fa-angle-right pull-right" />
                        </a>
                        <ul className="sidebar-submenu" style={{ "display": "none" }}>
                            <li>
                                <a href="/profile">
                                    <i className="fa fa-circle" />
                                    <span>My Profile</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-circle" />
                                    <span>Users Profile</span>
                                </a>
                            </li>

                        </ul>
                    </li>

                    <li>
                        <a className="sidebar-header" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                            <span>Products</span>
                            <i className="fa fa-angle-right pull-right"></i>
                        </a>

                        <ul className="sidebar-submenu">
                            <li>
                                <a href="/products">
                                    <i className="fa fa-circle"></i>
                                    <span>Products</span>
                                </a>

                            </li>
                            <li>
                                <a href="/products/new">
                                    <i className="fa fa-circle"></i>
                                    <span>Add Product</span>
                                </a>

                            </li>

                        </ul>
                    </li>
                    <li>
                        <a className="sidebar-header" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                            <span>Users</span>
                            <i className="fa fa-angle-right pull-right"></i>
                        </a>

                        <ul className="sidebar-submenu">
                            <li>
                                <a href="/users">
                                    <i className="fa fa-circle"></i>
                                    <span>View users</span>
                                </a>

                            </li>
                            <li>
                                <a href="/user/new">
                                    <i className="fa fa-circle"></i>
                                    <span>Add Users</span>
                                </a>

                            </li>

                        </ul>
                    </li>

                    <li>
                        <a className="sidebar-header" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                            <span>Categories</span>
                            <i className="fa fa-angle-right pull-right"></i>
                        </a>

                        <ul className="sidebar-submenu">
                            <li>
                                <a href="/categories">
                                    <i className="fa fa-circle"></i>
                                    <span>Categories</span>
                                </a>

                            </li>
                            <li>
                                <a href="/category/new">
                                    <i className="fa fa-circle"></i>
                                    <span>Add Category</span>
                                </a>

                            </li>
                            <li>
                                <a href="/sub-categories">
                                    <i className="fa fa-circle"></i>
                                    <span>Sub categories</span>
                                </a>

                            </li>
                            <li>
                                <a href="/sub-category/new">
                                    <i className="fa fa-circle"></i>
                                    <span>Add Sub-Category</span>
                                </a>

                            </li>

                        </ul>
                    </li>
                    <li>
                        <a className="sidebar-header" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                            <span>Admins</span>
                            <i className="fa fa-angle-right pull-right"></i>
                        </a>

                        <ul className="sidebar-submenu">

                            <li>
                                <a href="/admins">
                                    <i className="fa fa-circle"></i>
                                    <span>Admins</span>
                                </a>

                            </li>
                            <li>
                                <a href="/admin/new">
                                    <i className="fa fa-circle"></i>
                                    <span>Create Admin</span>
                                </a>

                            </li>



                        </ul>
                    </li>
                    <li>
                        <a className="sidebar-header" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                            <span>Oders</span>
                            <i className="fa fa-angle-right pull-right"></i>
                        </a>

                        <ul className="sidebar-submenu">

                            <li>
                                <a href="/orders">
                                    <i className="fa fa-circle"></i>
                                    <span>Orders</span>
                                </a>

                            </li>

                        </ul>
                    </li>
                    <li>
                        <a href="#" className="sidebar-header bg-none" onClick={() => logout()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
                            <span>Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideNavHeader;