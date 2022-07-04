import {Link} from 'react-router-dom'
const SideNavHeader = () => {
    return (
        <div className="page-sidebar">
        <div className="main-header-left d-none d-lg-block">
            <div className="logo-wrapper">
                <Link  to="/">
                    <img className="d-none d-lg-block blur-up lazyloaded" src="assets/images/dashboard/multikart-logo.png" alt=""></img>
                </Link>
            </div>
        </div>
        <div className="sidebar custom-scrollbar">
            <div  className="sidebar-back d-lg-none d-block"><i className="fa fa-times" aria-hidden="true"></i></div>
            <div className="sidebar-user">
                <img className="img-60" src="assets/images/dashboard/user3.jpg" alt="#"></img>
                <div>
                    <h6 className="f-14">JOHN</h6>
                    <p>general manager.</p>
                </div>
            </div>
            <ul className="sidebar-menu">
                <li className="active">
                    <Link className="sidebar-header active" to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        <span>Dashboard</span>
                    </Link>
                </li>

                <li>
                    <Link className="sidebar-header" to="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                        <span>Products</span>
                        <i className="fa fa-angle-right pull-right"></i>
                    </Link>

                    <ul className="sidebar-submenu">
                        <li>
                            <Link  to="/product">
                                <i className="fa fa-circle"></i>
                                <span></span>
                                <i className="fa fa-angle-right pull-right"></i>
                            </Link>
                            <Link  to="/new ">
                                <i className="fa fa-circle"></i>
                                <span></span>
                                <i className="fa fa-angle-right pull-right"></i>
                            </Link>

                           
                        </li>

                    </ul>
                </li>

                <li>
                    <Link className="sidebar-header" to=" "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg><span>Settings</span><i className="fa fa-angle-right pull-right"></i></Link>
                    <ul className="sidebar-submenu">
                        <li>
                            <Link  to="profile"><i className="fa fa-circle"></i>Profile
                            </Link>
                        </li>
                    </ul>
                </li>

                <li>
                    <Link className="sidebar-header" to="invoice"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-archive"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg><span>Invoice</span></Link>
                </li>

                <li>
                    <Link className="sidebar-header" to="forgot-password">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-key"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                        <span>Forgot Password</span>
                    </Link>
                </li>

                <li>
                    <Link className="sidebar-header" to="/signin">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
                        <span>Login</span>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
    );
}
 
export default SideNavHeader;