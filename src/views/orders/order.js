import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useGet from "../../hooks/get";
import { Carousel } from 'react-carousel-minimal';

const Order = () => {
    let { _id } = useParams();
    const { data, Loading, Error } = useGet('/order/admin/' + _id);
    const Order = data ? data.order : '';

    console.log(Order);

    useEffect(() => {
    }, [])
    return (
        <>
            <div className="page-body">
                {/* Container-fluid starts*/}
                <div className="container-fluid">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="page-header-left">
                                    <h3>
                                        Order Details
                                        <small>Cashiet Admin panel</small>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <ol className="breadcrumb pull-right">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
                                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                                <polyline points="9 22 9 12 15 12 15 22" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item">Physical</li>
                                    <li className="breadcrumb-item active">Order Detail</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Container-fluid Ends*/}
                {/* Container-fluid starts*/}
                <div className="container-fluid">
                    <div className="card">
                        {Loading &&
                            <div className="overflow-hidden d-block p-5">
                                <div className="">
                                    <Skeleton count={1} width={100} height={10} box={true} />
                                    <Skeleton count={1} width={1000} height={5} box={true} />
                                    <Skeleton count={1} width={160} height={8} box={true} />
                                    <Skeleton count={1} width={200} height={8} box={true} />
                                </div>
                                <div className="d-flex p-2">
                                    <Skeleton count={1} width={300} height={100} box={true} />
                                    <div className="d-flex px-2">
                                        <Skeleton count={2} width={100} height={50} box={true} />
                                    </div>
                                </div>
                                <Skeleton count={1} width={200} height={8} box={true} />
                            </div>

                        }
                        {Order &&
                            <div className="row product-page-main card-body">

                                <div className="col-xl-6">
                                    <div className="product-page-details product-right mb-0">
                                        {Order.orderItems && Order.orderItems.map((product) => (
                                            <div key={product._id}>


                                            </div>
                                        ))}
                                        <h2 className="">product details</h2>

                                        {Order.orderItems.map((product) => (
                                            <div key={product._id}>
                                               <div>
                                                    <p className="d-flex">Product name :{product.product ? <p className="text-success">{product.product.name}</p> : <p className="text-danger text-9">Not available</p>}</p>
                                                    <p className="d-flex">Product unitPrice:{product.product ? product.unitPrice : <p className="text-danger">Not available</p>}</p>
                                                    <p>quantity:{product.quantity}</p>
                                                    <hr/>
                                               </div>

                                            </div>
                                        ))}
                                        <div>
                                            <h2>Delivery Address</h2>
                                            <p>city :{Order.deliveryAddress.city}</p>
                                            <p>country :{Order.deliveryAddress.country}</p>
                                            <p>Email :{Order.deliveryAddress.email}</p>
                                            <p>Line 1 :{Order.deliveryAddress.line1}</p>
                                            <p>Line 2 :{Order.deliveryAddress.line2}</p>
                                            <p>Phone :{Order.deliveryAddress.phoneNumber}</p>
                                            <p>State  :{Order.deliveryAddress.state}</p>
                                            <p>Zip code  :{Order.deliveryAddress.zip}</p>
                                            <hr />
                                        </div>
                                        <h2>Delivery Details</h2>
                                        <p>Delivery date  :{Order.deliveryDate}</p>
                                        <p>Delivery status  :{Order.deliveryStatus}</p>
                                        <p>Failed transactions :{Order.failedTransactions}</p>
                                        <p>Order date :{Order.orderDate}</p>
                                        <hr />

                                        <div>
                                            <h6 className="product-title ">User Details</h6>
                                            {Order.user ? <div><p>User name  :{Order.user.username}</p>
                                                <p>Email  :{Order.user.email}</p>
                                                <p>Role  :{Order.user.role}</p>
                                                <p>Verified  :{Order.user.isVerified ? 'true' : 'false'}</p></div> : "User not available"}

                                        </div>

                                        <hr />
                                        <h6 className="product-title">Description</h6>
                                        <p>{Order.description}</p>
                                        <div className="m-t-15">
                                            <button className="btn btn-primary m-r-10" type="button">Delete</button>
                                            <a className="btn btn-secondary" href={"/product/edit/" + Order._id}>Edit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {Error && <div className="text-center"><h1 className="text-danger font-bold fs-3">Unable to fetch data at this monent</h1></div>}

                    </div>
                </div>
                {/* Container-fluid Ends*/}
            </div>

        </>
    );
}

export default Order;