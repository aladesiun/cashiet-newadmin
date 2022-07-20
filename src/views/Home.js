import { Link } from "react-router-dom";
import { AdminContext } from "../contexts/Admin-context";
import { useState, useContext, useEffect } from "react";

const Home = () => {
    const admins = useContext(AdminContext);
    return (

        <>
            <div className="page-body">
                <div className="container-fluid">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="page-header-left">
                                    <h3>Dashboard
                                        <small>Current Admin:</small>
                                        {admins && admins.admin.email}
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <ol className="breadcrumb pull-right">
                                    <li className="breadcrumb-item">
                                        <a href="/index">
                                            <i data-feather="Layout"></i>
                                        </a>
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
                                            <span className="m-0">Sold</span>
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
                                        <div className="media-body media-doller"><span className="m-0">In stock</span>
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
                                        <div className="media-body media-doller"><span className="m-0">Vendors</span>
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
                                                    <th scope="col capitalize">Order ID</th>
                                                    <th scope="col capitalize">Order Total</th>
                                                    <th scope="col capitalize">Payment Method</th>
                                                    <th scope="col capitalize">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="capitalize">1</td>
                                                    <td className="digits">$120.00</td>
                                                    <td className="font-danger">Bank Transfers</td>
                                                    <td className="digits">On Way</td>
                                                </tr>
                                                <tr>
                                                    <td className="capitalize">2</td>
                                                    <td className="digits">$90.00</td>
                                                    <td className="font-secondary">Ewallets</td>
                                                    <td className="digits">Delivered</td>
                                                </tr>
                                                <tr>
                                                    <td className="capitalize">3</td>
                                                    <td className="digits">$240.00</td>
                                                    <td className="font-warning">Cash</td>
                                                    <td className="digits">Delivered</td>
                                                </tr>
                                                <tr>
                                                    <td className="capitalize">4</td>
                                                    <td className="digits">$120.00</td>
                                                    <td className="font-primary">Direct Deposit</td>
                                                    <td className="digits">$6523</td>
                                                </tr>
                                                <tr>
                                                    <td className="capitalize">5</td>
                                                    <td className="digits">$50.00</td>
                                                    <td className="font-primary">Bank Transfers</td>
                                                    <td className="digits">Delivered</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <a href="/order" className="btn btn-primary mt-4">View All Orders</a>
                                    </div>
                                    <div className="code-box-copy">
                                        <button className="code-box-copy__btn btn-clipboard"
                                            data-clipboard-target="#example-head1" title=""
                                            data-original-title="Copy"><i className="icofont icofont-copy-alt"></i></button>

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
        </>
    );
}

export default Home;