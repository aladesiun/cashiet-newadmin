import { Link, Outlet } from "react-router-dom";
import NavHeader from "../components/NavHeader";
import SideNavHeader from "../components/SideNav";

const Layout = () => {
    return (
        <>
            <div className="page-wrapper">
                <NavHeader/>
                <div className="page-body-wrapper">

                    <SideNavHeader/>                    
                   
                    <Outlet></Outlet>
                   
                    <footer className="footer">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 footer-copyright text-start">
                                    <p className="mb-0"> Copyright 2019 © Cashiet All rights reserved.</p>
                                </div>
                                
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}

export default Layout;