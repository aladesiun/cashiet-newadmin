import { Link } from "react-router-dom";
import NavHeader from "../components/NavHeader";

const Home = () => {
    return (
        <>
            <div className="page-wrapper">

        <div className="page-main-header">
            <div className="main-header-right row">
                <div className="main-header-left d-lg-none w-auto">
                    <div className="logo-wrapper">
                        <a to="index.html">
                            <img className="blur-up lazyloaded d-block d-lg-none"
                                src="assets/images/dashboard/multikart-logo-black.png" alt=""></img>
                        </a>
                    </div>
                </div>
                <div className="mobile-sidebar w-auto">
                    <div className="media-body text-end switch-sm">
                        <label className="switch">
                            <a to="javascript:void(0)">
                                <i id="sidebar-toggle" data-feather="align-left"></i>
                            </a>
                        </label>
                    </div>
                </div>
                <div className="nav-right col">
                    <ul className="nav-menus">
                        <li>
                            <form className="form-inline search-form">
                                <div className="form-group">
                                    <input className="form-control-plaintext" type="search" placeholder="Search.."></input>
                                    <span className="d-sm-none mobile-search">
                                        <i data-feather="search"></i>
                                    </span>
                                </div>
                            </form>
                        </li>
                        <li>
                            <a className="text-dark" to="#!" onClick="javascript:toggleFullScreen()">
                                <i data-feather="maximize-2"></i>
                            </a>
                        </li>
                        <li className="onhover-dropdown">
                            <a className="txt-dark" to="javascript:void(0)">
                                <h6>EN</h6>
                            </a>
                            <ul className="language-dropdown onhover-show-div p-20">
                                <li>
                                    <a to="javascript:void(0)" data-lng="en">
                                        <i className="flag-icon flag-icon-is"></i>English</a>
                                </li>
                                <li>
                                    <a to="javascript:void(0)" data-lng="es">
                                        <i className="flag-icon flag-icon-um"></i>Spanish</a>
                                </li>
                                <li>
                                    <a to="javascript:void(0)" data-lng="pt">
                                        <i className="flag-icon flag-icon-uy"></i>Portuguese</a>
                                </li>
                                <li>
                                    <a to="javascript:void(0)" data-lng="fr">
                                        <i className="flag-icon flag-icon-nz"></i>French</a>
                                </li>
                            </ul>
                        </li>
                        <li className="onhover-dropdown">
                            <i data-feather="bell"></i>
                            <span className="badge badge-pill badge-primary pull-right notification-badge">3</span>
                            <span className="dot"></span>
                            <ul className="notification-dropdown onhover-show-div p-0">
                                <li>Notification <span className="badge badge-pill badge-primary pull-right">3</span></li>
                                <li>
                                    <div className="media">
                                        <div className="media-body">
                                            <h6 className="mt-0">
                                                <span>
                                                    <i className="shopping-color" data-feather="shopping-bag"></i>
                                                </span>Your order ready for Ship..!
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
                                                    <i className="download-color font-success" data-feather="download"></i>
                                                </span>Download Complete
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
                                                    <i className="alert-color font-danger" data-feather="alert-circle"></i>
                                                </span>250 MB trash files
                                            </h6>
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="txt-dark"><a to="javascript:void(0)">All</a> notification</li>
                            </ul>
                        </li>
                        <li>
                            <a to="javascript:void(0)">
                                <i className="right_side_toggle" data-feather="message-square"></i>
                                <span className="dot"></span>
                            </a>
                        </li>
                        <li className="onhover-dropdown">
                            <div className="media align-items-center">
                                <img className="align-self-center pull-right img-50 blur-up lazyloaded"
                                    src="assets/images/dashboard/user3.jpg" alt="header-user"></img>
                                <div className="dotted-animation">
                                    <span className="animate-circle"></span>
                                    <span className="main-circle"></span>
                                </div>
                            </div>
                            <ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
                                <li>
                                    <a to="javascript:void(0)">
                                        <i data-feather="user"></i>Edit Profile
                                    </a>
                                </li>
                                <li>
                                    <a to="javascript:void(0)">
                                        <i data-feather="mail"></i>Inbox
                                    </a>
                                </li>
                                <li>
                                    <a to="javascript:void(0)">
                                        <i data-feather="lock"></i>Lock Screen
                                    </a>
                                </li>
                                <li>
                                    <a to="javascript:void(0)">
                                        <i data-feather="settings"></i>Settings
                                    </a>
                                </li>
                                <li>
                                    <a to="javascript:void(0)">
                                        <i data-feather="log-out"></i>Logout
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="d-lg-none mobile-toggle pull-right">
                        <i data-feather="more-horizontal"></i>
                    </div>
                </div>
            </div>
        </div>

                <div className="page-body-wrapper">

                  <NavHeader/>

                    <div className="right-sidebar" id="right_side_bar">
                        <div>
                            <div className="container p-0">
                                <div className="modal-header p-l-20 p-r-20">
                                    <div className="col-sm-8 p-0">
                                        <h6 className="modal-title font-weight-bold">FRIEND LIST</h6>
                                    </div>
                                    <div className="col-sm-4 text-end p-0">
                                        <i className="me-2" data-feather="settings"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="friend-list-search mt-0">
                                <input type="text" placeholder="search friend"></input>
                                <i className="fa fa-search"></i>
                            </div>
                            <div className="p-l-30 p-r-30 friend-list-name">
                                <div className="chat-box">
                                    <div className="people-list friend-list">
                                        <ul className="list">
                                            <li className="clearfix">
                                                <img className="rounded-circle user-image blur-up lazyloaded"
                                                    src="assets/images/dashboard/user.jpg" alt=""></img>
                                                <div className="status-circle online"></div>
                                                <div className="about">
                                                    <div className="name">Vincent Porter</div>
                                                    <div className="status">Online</div>
                                                </div>
                                            </li>
                                            <li className="clearfix">
                                                <img className="rounded-circle user-image blur-up lazyloaded"
                                                    src="assets/images/dashboard/user1.jpg" alt=""></img>
                                                <div className="status-circle away"></div>
                                                <div className="about">
                                                    <div className="name">Ain Chavez</div>
                                                    <div className="status">28 minutes ago</div>
                                                </div>
                                            </li>
                                            <li className="clearfix">
                                                <img className="rounded-circle user-image blur-up lazyloaded"
                                                    src="assets/images/dashboard/user2.jpg" alt=""></img>
                                                <div className="status-circle online"></div>
                                                <div className="about">
                                                    <div className="name">Kori Thomas</div>
                                                    <div className="status">Online</div>
                                                </div>
                                            </li>
                                            <li className="clearfix">
                                                <img className="rounded-circle user-image blur-up lazyloaded"
                                                    src="assets/images/dashboard/user3.jpg" alt=""></img>
                                                <div className="status-circle online"></div>
                                                <div className="about">
                                                    <div className="name">Erica Hughes</div>
                                                    <div className="status">Online</div>
                                                </div>
                                            </li>
                                            <li className="clearfix">
                                                <img className="rounded-circle user-image blur-up lazyloaded"
                                                    src="assets/images/dashboard/user3.jpg" alt=""></img>
                                                <div className="status-circle offline"></div>
                                                <div className="about">
                                                    <div className="name">Ginger Johnston</div>
                                                    <div className="status">2 minutes ago</div>
                                                </div>
                                            </li>
                                            <li className="clearfix">
                                                <img className="rounded-circle user-image blur-up lazyloaded"
                                                    src="assets/images/dashboard/user5.jpg" alt=""></img>
                                                <div className="status-circle away"></div>
                                                <div className="about">
                                                    <div className="name">Prasanth Anand</div>
                                                    <div className="status">2 hour ago</div>
                                                </div>
                                            </li>
                                            <li className="clearfix">
                                                <img className="rounded-circle user-image blur-up lazyloaded"
                                                    src="assets/images/dashboard/designer.jpg" alt=""></img>
                                                <div className="status-circle online"></div>
                                                <div className="about">
                                                    <div className="name">Hileri Jecno</div>
                                                    <div className="status">Online</div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="page-body">
                        <div className="container-fluid">
                            <div className="page-header">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="page-header-left">
                                            <h3>Dashboard
                                                <small>Multikart Admin panel</small>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <ol className="breadcrumb pull-right">
                                            <li className="breadcrumb-item">
                                                <Link to="/index">
                                                    <i data-feather="home"></i>
                                                </Link>
                                            </li>
                                            <li className="breadcrumb-item active">Dashboard</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xxl-3 col-md-6 xl-50">
                                    <div className="card o-hidden widget-cards">
                                        <div className="warning-box card-body">
                                            <div className="media static-top-widget align-items-center">
                                                <div className="icons-widgets">
                                                    <div className="align-self-center text-center">
                                                        <i data-feather="navigation" className="font-warning"></i>
                                                    </div>
                                                </div>
                                                <div className="media-body media-doller">
                                                    <span className="m-0">Earnings</span>
                                                    <h3 className="mb-0">$ <span className="counter">6659</span><small> This
                                                        Month</small>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-md-6 xl-50">
                                    <div className="card o-hidden widget-cards">
                                        <div className="secondary-box card-body">
                                            <div className="media static-top-widget align-items-center">
                                                <div className="icons-widgets">
                                                    <div className="align-self-center text-center">
                                                        <i data-feather="box" className="font-secondary"></i>
                                                    </div>
                                                </div>
                                                <div className="media-body media-doller">
                                                    <span className="m-0">Products</span>
                                                    <h3 className="mb-0">$ <span className="counter">9856</span><small> This
                                                        Month</small>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-md-6 xl-50">
                                    <div className="card o-hidden widget-cards">
                                        <div className="primary-box card-body">
                                            <div className="media static-top-widget align-items-center">
                                                <div className="icons-widgets">
                                                    <div className="align-self-center text-center"><i data-feather="message-square"
                                                        className="font-primary"></i></div>
                                                </div>
                                                <div className="media-body media-doller"><span className="m-0">Messages</span>
                                                    <h3 className="mb-0">$ <span className="counter">893</span><small> This
                                                        Month</small></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-md-6 xl-50">
                                    <div className="card o-hidden widget-cards">
                                        <div className="danger-box card-body">
                                            <div className="media static-top-widget align-items-center">
                                                <div className="icons-widgets">
                                                    <div className="align-self-center text-center"><i data-feather="users"
                                                        className="font-danger"></i></div>
                                                </div>
                                                <div className="media-body media-doller"><span className="m-0">New Vendors</span>
                                                    <h3 className="mb-0">$ <span className="counter">5631</span><small> This
                                                        Month</small></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 xl-100">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Market Value</h5>
                                            <div className="card-header-right">
                                                <ul className="list-unstyled card-option">
                                                    <li><i className="icofont icofont-simple-left"></i></li>
                                                    <li><i className="view-html fa fa-code"></i></li>
                                                    <li><i className="icofont icofont-maximize full-card"></i></li>
                                                    <li><i className="icofont icofont-minus minimize-card"></i></li>
                                                    <li><i className="icofont icofont-refresh reload-card"></i></li>
                                                    <li><i className="icofont icofont-error close-card"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="market-chart"></div>
                                            <div className="code-box-copy">
                                                <button className="code-box-copy__btn btn-clipboard"
                                                    data-clipboard-target="#example-head" title="Copy"><i
                                                        className="icofont icofont-copy-alt"></i></button>
                                                <pre><code className="language-html" id="example-head">&lt;!-- Cod Box Copy begin --&gt;
                                                    &lt;div className="market-chart"&gt;&lt;/div&gt;
                                                    &lt;!-- Cod Box Copy end --&gt;</code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 xl-100">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Latest Orders</h5>
                                            <div className="card-header-right">
                                                <ul className="list-unstyled card-option">
                                                    <li><i className="icofont icofont-simple-left"></i></li>
                                                    <li><i className="view-html fa fa-code"></i></li>
                                                    <li><i className="icofont icofont-maximize full-card"></i></li>
                                                    <li><i className="icofont icofont-minus minimize-card"></i></li>
                                                    <li><i className="icofont icofont-refresh reload-card"></i></li>
                                                    <li><i className="icofont icofont-error close-card"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="user-status table-responsive latest-order-table">
                                                <table className="table table-bordernone">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Order ID</th>
                                                            <th scope="col">Order Total</th>
                                                            <th scope="col">Payment Method</th>
                                                            <th scope="col">Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td className="digits">$120.00</td>
                                                            <td className="font-danger">Bank Transfers</td>
                                                            <td className="digits">On Way</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td className="digits">$90.00</td>
                                                            <td className="font-secondary">Ewallets</td>
                                                            <td className="digits">Delivered</td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td className="digits">$240.00</td>
                                                            <td className="font-warning">Cash</td>
                                                            <td className="digits">Delivered</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td className="digits">$120.00</td>
                                                            <td className="font-primary">Direct Deposit</td>
                                                            <td className="digits">$6523</td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td className="digits">$50.00</td>
                                                            <td className="font-primary">Bank Transfers</td>
                                                            <td className="digits">Delivered</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <Link to="/order" className="btn btn-primary mt-4">View All Orders</Link>
                                            </div>
                                            <div className="code-box-copy">
                                                <button className="code-box-copy__btn btn-clipboard"
                                                    data-clipboard-target="#example-head1" title=""
                                                    data-original-title="Copy"><i className="icofont icofont-copy-alt"></i></button>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 xl-50">
                                    <div className="card order-graph sales-carousel">
                                        <div className="card-header b-header">
                                            <h6>Total Sales</h6>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="small-chartjs">
                                                        <div className="flot-chart-placeholder" id="simple-line-chart-sparkline-3">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="value-graph">
                                                        <h3>42% <span><i className="fa fa-angle-up font-primary"></i></span></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="media">
                                                <div className="media-body">
                                                    <span>Sales Last Month</span>
                                                    <h2 className="mb-0">9054</h2>
                                                    <p>0.25% <span><i className="fa fa-angle-up"></i></span></p>
                                                </div>

                                                <div className="bg-primary b-r-8">
                                                    <div className="small-box">
                                                        <i data-feather="briefcase"></i>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="sales-contain">
                                                <h5 className="f-w-600">Gross sales of August</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 xl-50">
                                    <div className="card order-graph sales-carousel">
                                        <div className="card-header b-header">
                                            <h6>Total purchase</h6>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="small-chartjs">
                                                        <div className="flot-chart-placeholder" id="simple-line-chart-sparkline">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="value-graph">
                                                        <h3>20% <span><i className="fa fa-angle-up font-secondary"></i></span></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="media">
                                                <div className="media-body">
                                                    <span>Monthly purchase</span>
                                                    <h2 className="mb-0">2154</h2>
                                                    <p>0.13% <span><i className="fa fa-angle-up"></i></span></p>
                                                </div>
                                                <div className="bg-secondary b-r-8">
                                                    <div className="small-box">
                                                        <i data-feather="credit-card"></i>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="sales-contain">
                                                <h5 className="f-w-600">Avg Gross purchase</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 xl-50">
                                    <div className="card order-graph sales-carousel">
                                        <div className="card-header b-header">
                                            <h6>Total cash transaction</h6>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="small-chartjs">
                                                        <div className="flot-chart-placeholder" id="simple-line-chart-sparkline-2">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="value-graph">
                                                        <h3>28% <span><i className="fa fa-angle-up font-warning"></i></span></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="media">
                                                <div className="media-body">
                                                    <span>Cash on hand</span>
                                                    <h2 className="mb-0">4672</h2>
                                                    <p>0.8% <span><i className="fa fa-angle-up"></i></span></p>
                                                </div>
                                                <div className="bg-warning b-r-8">
                                                    <div className="small-box">
                                                        <i data-feather="shopping-cart"></i>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="sales-contain">
                                                <h5 className="f-w-600">Details about cash</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 xl-50">
                                    <div className="card order-graph sales-carousel">
                                        <div className="card-header b-header">
                                            <h6>Daily Deposits</h6>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="small-chartjs">
                                                        <div className="flot-chart-placeholder" id="simple-line-chart-sparkline-1">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="value-graph">
                                                        <h3>75% <span><i className="fa fa-angle-up font-danger"></i></span></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="media">
                                                <div className="media-body">
                                                    <span>Security Deposits</span>
                                                    <h2 className="mb-0">0782</h2>
                                                    <p>0.25% <span><i className="fa fa-angle-up"></i></span></p>
                                                </div>
                                                <div className="bg-danger b-r-8">
                                                    <div className="small-box">
                                                        <i data-feather="calendar"></i>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="sales-contain">
                                                <h5 className="f-w-600">Gross sales of June</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Buy / Sell</h5>
                                            <div className="card-header-right">
                                                <ul className="list-unstyled card-option">
                                                    <li><i className="icofont icofont-simple-left"></i></li>
                                                    <li><i className="view-html fa fa-code"></i></li>
                                                    <li><i className="icofont icofont-maximize full-card"></i></li>
                                                    <li><i className="icofont icofont-minus minimize-card"></i></li>
                                                    <li><i className="icofont icofont-refresh reload-card"></i></li>
                                                    <li><i className="icofont icofont-error close-card"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-body sell-graph">
                                            <canvas id="myGraph"></canvas>
                                            <div className="code-box-copy">
                                                <button className="code-box-copy__btn btn-clipboard"
                                                    data-clipboard-target="#example-head3" title=""
                                                    data-original-title="Copy"><i className="icofont icofont-copy-alt"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 xl-100">
                                    <div className="card height-equal">
                                        <div className="card-header">
                                            <h5>Goods return</h5>
                                            <div className="card-header-right">
                                                <ul className="list-unstyled card-option">
                                                    <li><i className="icofont icofont-simple-left"></i></li>
                                                    <li><i className="view-html fa fa-code"></i></li>
                                                    <li><i className="icofont icofont-maximize full-card"></i></li>
                                                    <li><i className="icofont icofont-minus minimize-card"></i></li>
                                                    <li><i className="icofont icofont-refresh reload-card"></i></li>
                                                    <li><i className="icofont icofont-error close-card"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="user-status table-responsive products-table">
                                                <table className="table table-bordernone mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Details</th>
                                                            <th scope="col">Quantity</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col">Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Simply dummy text of the printing</td>
                                                            <td className="digits">1</td>
                                                            <td className="font-primary">Pending</td>
                                                            <td className="digits">$6523</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Long established</td>
                                                            <td className="digits">5</td>
                                                            <td className="font-secondary">Cancle</td>
                                                            <td className="digits">$6523</td>
                                                        </tr>
                                                        <tr>
                                                            <td>sometimes by accident</td>
                                                            <td className="digits">10</td>
                                                            <td className="font-secondary">Cancle</td>
                                                            <td className="digits">$6523</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Classical Latin literature</td>
                                                            <td className="digits">9</td>
                                                            <td className="font-primary">Return</td>
                                                            <td className="digits">$6523</td>
                                                        </tr>
                                                        <tr>
                                                            <td>keep the site on the Internet</td>
                                                            <td className="digits">8</td>
                                                            <td className="font-primary">Pending</td>
                                                            <td className="digits">$6523</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Molestiae consequatur</td>
                                                            <td className="digits">3</td>
                                                            <td className="font-secondary">Cancle</td>
                                                            <td className="digits">$6523</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Pain can procure</td>
                                                            <td className="digits">8</td>
                                                            <td className="font-primary">Return</td>
                                                            <td className="digits">$6523</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="code-box-copy">
                                                <button className="code-box-copy__btn btn-clipboard"
                                                    data-clipboard-target="#example-head4" title=""
                                                    data-original-title="Copy"><i className="icofont icofont-copy-alt"></i></button>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 xl-100">
                                    <div className="card height-equal">
                                        <div className="card-header">
                                            <h5>Empolyee Status</h5>
                                            <div className="card-header-right">
                                                <ul className="list-unstyled card-option">
                                                    <li><i className="icofont icofont-simple-left"></i></li>
                                                    <li><i className="view-html fa fa-code"></i></li>
                                                    <li><i className="icofont icofont-maximize full-card"></i></li>
                                                    <li><i className="icofont icofont-minus minimize-card"></i></li>
                                                    <li><i className="icofont icofont-refresh reload-card"></i></li>
                                                    <li><i className="icofont icofont-error close-card"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="user-status table-responsive products-table">
                                                <table className="table table-bordernone mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Designation</th>
                                                            <th scope="col">Skill Level</th>
                                                            <th scope="col">Experience</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="bd-t-none u-s-tb">
                                                                <div
                                                                    className="align-middle image-sm-size img-radius align-top m-r-15 rounded-circle blur-up lazyloaded"
                                                                    src="assets/images/dashboard/user2.jpg" alt=""
                                                                    data-original-title="" title="">
                                                                    <div className="d-inline-block">
                                                                        <h6 className="mb-0">John Deo <span
                                                                            className="text-muted digits">(14+
                                                                            Online)</span></h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>Designer</td>
                                                            <td>
                                                                <div className="progress-showcase">
                                                                    <div className="progress"  style={{height:" 8px",}} >
                                                                        <div className="progress-bar bg-primary" role="progressbar"
                                                                            style={{width:" 30%",}} aria-valuenow="50"
                                                                            aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="digits">2 Year</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="bd-t-none u-s-tb">
                                                                <div
                                                                    className="align-middle image-sm-size img-radius align-top m-r-15 rounded-circle blur-up lazyloaded"
                                                                    src="assets/images/dashboard/user1.jpg" alt=""
                                                                    data-original-title="" title="">
                                                                    <div className="d-inline-block">
                                                                        <h6 className="mb-0">Holio Mako <span
                                                                            className="text-muted digits">(250+ Online)</span>
                                                                        </h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>Developer</td>
                                                            <td>
                                                                <div className="progress-showcase">
                                                                    <div className="progress"  style={{height:" 8px",}}>
                                                                        <div className="progress-bar bg-secondary"
                                                                            role="progressbar" style={{width:" 70%",}}
                                                                            aria-valuenow="50" aria-valuemin="0"
                                                                            aria-valuemax="100"></div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="digits">3 Year</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="bd-t-none u-s-tb">
                                                                <div
                                                                    className="align-middle image-sm-size img-radius align-top m-r-15 rounded-circle blur-up lazyloaded"
                                                                    src="assets/images/dashboard/user3.jpg" alt=""
                                                                    data-original-title="" title="">
                                                                    <div className="d-inline-block">
                                                                        <h6 className="mb-0">Mohsib lara<span
                                                                            className="text-muted digits">(99+ Online)</span>
                                                                        </h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>Tester</td>
                                                            <td>
                                                                <div className="progress-showcase">
                                                                    <div className="progress" style={{height:" 8px",}}>
                                                                        <div className="progress-bar bg-primary" role="progressbar"
                                                                            style={{width:" 60%",}} aria-valuenow="50"
                                                                            aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="digits">5 Month</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="bd-t-none u-s-tb">
                                                                <div
                                                                    className="align-middle image-sm-size img-radius align-top m-r-15 rounded-circle blur-up lazyloaded"
                                                                    src="assets/images/dashboard/user.jpg" alt=""
                                                                    data-original-title="" title="">
                                                                    <div className="d-inline-block">
                                                                        <h6 className="mb-0">Hileri Soli <span
                                                                            className="text-muted digits">(150+ Online)</span>
                                                                        </h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>Designer</td>
                                                            <td>
                                                                <div className="progress-showcase">
                                                                    <div className="progress" style={{height:" 8px",}}>
                                                                        <div className="progress-bar bg-secondary"
                                                                            role="progressbar" style={{width:" 30%",}}
                                                                            aria-valuenow="50" aria-valuemin="0"
                                                                            aria-valuemax="100"></div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="digits">3 Month</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="bd-t-none u-s-tb">
                                                                <div
                                                                    className="align-middle image-sm-size img-radius align-top m-r-15 rounded-circle blur-up lazyloaded"
                                                                    src="assets/images/dashboard/designer.jpg" alt=""
                                                                    data-original-title="" title="">
                                                                    <div className="d-inline-block">
                                                                        <h6 className="mb-0">Pusiz bia <span
                                                                            className="text-muted digits">(14+ Online)</span>
                                                                        </h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>Designer</td>
                                                            <td>
                                                                <div className="progress-showcase">
                                                                    <div className="progress" style={{height:" 8px",}}>
                                                                        <div className="progress-bar bg-primary" role="progressbar"
                                                                            style={{width: '90%',}} aria-valuenow="50"
                                                                            aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="digits">5 Year</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="code-box-copy">
                                                <button className="code-box-copy__btn btn-clipboard"
                                                    data-clipboard-target="#example-head5" title=""
                                                    data-original-title="Copy"><i className="icofont icofont-copy-alt"></i></button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Sales Status</h5>
                                            <div className="card-header-right">
                                                <ul className="list-unstyled card-option">
                                                    <li><i className="icofont icofont-simple-left"></i></li>
                                                    <li><i className="view-html fa fa-code"></i></li>
                                                    <li><i className="icofont icofont-maximize full-card"></i></li>
                                                    <li><i className="icofont icofont-minus minimize-card"></i></li>
                                                    <li><i className="icofont icofont-refresh reload-card"></i></li>
                                                    <li><i className="icofont icofont-error close-card"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-xl-3 col-sm-6 xl-50">
                                                    <div className="order-graph">
                                                        <h6>Orders By Location</h6>
                                                        <div className="chart-block chart-vertical-center">
                                                            <canvas id="myDoughnutGraph"></canvas>
                                                        </div>
                                                        <div className="order-graph-bottom">
                                                            <div className="media">
                                                                <div className="order-color-primary"></div>
                                                                <div className="media-body">
                                                                    <h6 className="mb-0">Saint Lucia <span
                                                                        className="pull-right">$157</span></h6>
                                                                </div>
                                                            </div>
                                                            <div className="media">
                                                                <div className="order-color-secondary"></div>
                                                                <div className="media-body">
                                                                    <h6 className="mb-0">Kenya <span className="pull-right">$347</span>
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className="media">
                                                                <div className="order-color-danger"></div>
                                                                <div className="media-body">
                                                                    <h6 className="mb-0">Liberia<span className="pull-right">$468</span>
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className="media">
                                                                <div className="order-color-warning"></div>
                                                                <div className="media-body">
                                                                    <h6 className="mb-0">Christmas Island<span
                                                                        className="pull-right">$742</span></h6>
                                                                </div>
                                                            </div>
                                                            <div className="media">
                                                                <div className="order-color-success"></div>
                                                                <div className="media-body">
                                                                    <h6 className="mb-0">Saint Helena <span
                                                                        className="pull-right">$647</span></h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-sm-6 xl-50">
                                                    <div className="order-graph sm-order-space">
                                                        <h6>Sales By Location</h6>
                                                        <div className="peity-chart-dashboard text-center">
                                                            <span className="pie-colours-1">4,7,6,5</span>
                                                        </div>
                                                        <div className="order-graph-bottom sales-location">
                                                            <div className="media">
                                                                <div className="order-shape-primary"></div>
                                                                <div className="media-body">
                                                                    <h6 className="mb-0 me-0">Germany <span
                                                                        className="pull-right">25%</span></h6>
                                                                </div>
                                                            </div>
                                                            <div className="media">
                                                                <div className="order-shape-secondary"></div>
                                                                <div className="media-body">
                                                                    <h6 className="mb-0 me-0">Brasil <span
                                                                        className="pull-right">10%</span></h6>
                                                                </div>
                                                            </div>
                                                            <div className="media">
                                                                <div className="order-shape-danger"></div>
                                                                <div className="media-body">
                                                                    <h6 className="mb-0 me-0">United Kingdom<span
                                                                        className="pull-right">34%</span></h6>
                                                                </div>
                                                            </div>
                                                            <div className="media">
                                                                <div className="order-shape-warning"></div>
                                                                <div className="media-body">
                                                                    <h6 className="mb-0 me-0">Australia<span
                                                                        className="pull-right">5%</span></h6>
                                                                </div>
                                                            </div>
                                                            <div className="media">
                                                                <div className="order-shape-success"></div>
                                                                <div className="media-body">
                                                                    <h6 className="mb-0 me-0">Canada <span
                                                                        className="pull-right">25%</span></h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 xl-100">
                                                    <div className="order-graph xl-space">
                                                        <h6>Revenue for last month</h6>
                                                        <div className="ct-4 flot-chart-container"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="code-box-copy">
                                                <button className="code-box-copy__btn btn-clipboard"
                                                    data-clipboard-target="#example-head2" title="" data-original-title="Copy">
                                                    <i className="icofont icofont-copy-alt"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 xl-100">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Market Value</h5>
                                    <div className="card-header-right">
                                        <ul className="list-unstyled card-option">
                                            <li><i className="icofont icofont-simple-left"></i></li>
                                            <li><i className="view-html fa fa-code"></i></li>
                                            <li><i className="icofont icofont-maximize full-card"></i></li>
                                            <li><i className="icofont icofont-minus minimize-card"></i></li>
                                            <li><i className="icofont icofont-refresh reload-card"></i></li>
                                            <li><i className="icofont icofont-error close-card"></i></li>
                                        </ul>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    <footer className="footer">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 footer-copyright text-start">
                                    <p className="mb-0">Copyright 2019 © Multikart All rights reserved.</p>
                                </div>
                                <div className="col-md-6 pull-right text-end">
                                    <p className=" mb-0">Hand crafted & made with<i className="fa fa-heart"></i></p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}

export default Home;