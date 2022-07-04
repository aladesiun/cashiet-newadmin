import { Link } from "react-router-dom";
const NavHeader = () => {
    return ( 
        <div className="page-main-header">
                    <div className="main-header-right row">
                        <div className="main-header-left d-lg-none w-auto">
                            <div className="logo-wrapper">
                                <a href="index.html">
                                    <img className="blur-up lazyloaded d-block d-lg-none" src="assets/images/dashboard/multikart-logo-black.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="mobile-sidebar w-auto">
                            <div className="media-body text-end switch-sm">
                                <label className="switch">
                                    <a href="javascript:void(0)">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="feather feather-align-left"
                                            id="sidebar-toggle"
                                        >
                                            <line x1="17" y1="10" x2="3" y2="10"></line>
                                            <line x1="21" y1="6" x2="3" y2="6"></line>
                                            <line x1="21" y1="14" x2="3" y2="14"></line>
                                            <line x1="17" y1="18" x2="3" y2="18"></line>
                                        </svg>
                                    </a>
                                </label>
                            </div>
                        </div>
                       
                    </div>
                </div>
     );
}
 
export default NavHeader;