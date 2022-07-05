import { Link } from "react-router-dom";
const NavHeader = () => {
    return ( 
        <div className="page-main-header">
  <div className="main-header-right row">
    <div className="main-header-left d-lg-none w-auto">
      <div className="logo-wrapper">
        <a href="index.html">
          <img className="blur-up lazyloaded d-block d-lg-none" src="assets/images/dashboard/multikart-logo-black.png" alt />
        </a>
      </div>
    </div>
    <div className="mobile-sidebar w-auto">
      <div className="media-body text-end switch-sm">
        <label className="switch">
          <a href="javascript:void(0)">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-align-left" id="sidebar-toggle">
              <line x1={17} y1={10} x2={3} y2={10} />
              <line x1={21} y1={6} x2={3} y2={6} />
              <line x1={21} y1={14} x2={3} y2={14} />
              <line x1={17} y1={18} x2={3} y2={18} />
            </svg>
          </a>
        </label>
      </div>
    </div>
    <div className="nav-right col">
      <ul className="nav-menus">
        <li>
          <form className="form-inline search-form">
            <div className="form-group">
              <input className="form-control-plaintext" type="search" placeholder="Search.." />
              <span className="d-sm-none mobile-search">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
                  <circle cx={11} cy={11} r={8} />
                  <line x1={21} y1={21} x2="16.65" y2="16.65" />
                </svg>
              </span>
            </div>
          </form>
        </li>
        <li>
          <a className="text-dark" href="javascript:void(0)" onclick="javascript:toggleFullScreen()">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-maximize-2">
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1={21} y1={3} x2={14} y2={10} />
              <line x1={3} y1={21} x2={10} y2={14} />
            </svg>
          </a>
        </li>
        <li className="onhover-dropdown">
          <a className="txt-dark" href="javascript:void(0)">
            <h6>EN</h6>
          </a>
          <ul className="language-dropdown onhover-show-div p-20">
            <li>
              <a href="javascript:void(0)" data-lng="en"><i className="flag-icon flag-icon-is" /> English</a>
            </li>
            <li>
              <a href="javascript:void(0)" data-lng="es"><i className="flag-icon flag-icon-um" /> Spanish</a>
            </li>
            <li>
              <a href="javascript:void(0)" data-lng="pt"><i className="flag-icon flag-icon-uy" /> Portuguese</a>
            </li>
            <li>
              <a href="javascript:void(0)" data-lng="fr"><i className="flag-icon flag-icon-nz" /> French</a>
            </li>
          </ul>
        </li>
        <li className="onhover-dropdown">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="badge badge-pill badge-primary pull-right notification-badge">3</span><span className="dot" />
          <ul className="notification-dropdown onhover-show-div p-0">
            <li>Notification <span className="badge badge-pill badge-primary pull-right">3</span></li>
            <li>
              <div className="media">
                <div className="media-body">
                  <h6 className="mt-0">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag shopping-color">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                        <line x1={3} y1={6} x2={21} y2={6} />
                        <path d="M16 10a4 4 0 0 1-8 0" />
                      </svg>
                    </span>
                    Your order ready for Ship..!
                  </h6>
                  <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="media">
                <div className="media-body">
                  <h6 className="mt-0 txt-success">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-download download-color font-success">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1={12} y1={15} x2={12} y2={3} />
                      </svg>
                    </span>
                    Download Complete
                  </h6>
                  <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="media">
                <div className="media-body">
                  <h6 className="mt-0 txt-danger">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-alert-circle alert-color font-danger">
                        <circle cx={12} cy={12} r={10} />
                        <line x1={12} y1={8} x2={12} y2={12} />
                        <line x1={12} y1={16} x2="12.01" y2={16} />
                      </svg>
                    </span>
                    250 MB trash files
                  </h6>
                  <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer.</p>
                </div>
              </div>
            </li>
            <li className="bg-light txt-dark"><a href="javascript:void(0)">All</a> notification</li>
          </ul>
        </li>
        <li>
          <a href="javascript:void(0)">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square right_side_toggle">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span className="dot" />
          </a>
        </li>
        <li className="onhover-dropdown">
          <div className="media align-items-center">
            <img className="align-self-center pull-right img-50 blur-up lazyloaded" src={require('../assets/images/dashboard/user3.jpg')} alt="header-user" />
            <div className="dotted-animation"><span className="animate-circle" /><span className="main-circle" /></div>
          </div>
          <ul className="profile-dropdown onhover-show-div p-20">
            <li>
              <a href="/profile">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
                Edit Profile
              </a>
            </li>
           
           
          </ul>
        </li>
      </ul>
      <div className="d-lg-none mobile-toggle pull-right">
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal">
          <circle cx={12} cy={12} r={1} />
          <circle cx={19} cy={12} r={1} />
          <circle cx={5} cy={12} r={1} />
        </svg>
      </div>
    </div>
  </div>
</div>
     );
}
 
export default NavHeader;