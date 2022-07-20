import { useState, useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast from 'react-hot-toast';
import httpServices from "../../hooks/http-services";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Orders = () => {
    let navigate = useNavigate()
    const [Loading, setLoading] = useState(false);
    const [orders, setorders] = useState([]);
    const [query, setQuery] = useState('')
    const url = query ? `/orders/filter/?name=${query}` : "/order";
    
    const handleInputChange = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
    }
    console.log(orders);
    const getorders = async () => {
        setLoading(true);
        try {
            const response = await httpServices.get(url)
            if (response.status == 200) {
                setLoading(false)
                let result = response.data.orders;
                console.log(response.data.orders);
                setorders(result)
                toast.success(response.data.message)
            }
            else {
                setorders(null)
                toast.success(response.data.message)

            }
        }
        catch (e) {
            setLoading(false)
            toast.error(e.message)
        }
    }
    const deleteOrder = async (_id) => {
        try {
            const response = await httpServices.delete('/orders/' + _id)
            if (response.status) {
                setLoading(false)
                // window.location.href='/orders';


            }
            else {
                toast.success(response.data.message)
            }
        }
        catch (e) {
            setLoading(false)
            toast.error(e.message)

        }
    }
    useEffect(() => {
        getorders()
    }, []);

    return (
        <div className="page-body ">
            <div className="product-cont">
                <div className="col-xl-12 xl-100">
                    <div className="card height-equal">

                        <div className="card-header">
                            <h5>orders</h5>
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
                        <div className="d-flex justify-content-between align-items-center bg-white p-3">
                            <form className="form-inline search-form search-box" onSubmit={(e) => { e.preventDefault(); getorders() }}>
                                <div className="form-group flex">
                                    <input className="form-control" type="text" placeholder="Search.." value={query} onChange={handleInputChange} />

                                </div>
                            </form>
                            <a href="/orders/new" className="btn btn-primary mt-md-0 mt-2">Add orders</a>
                        </div>
                        <div className="card-body">
                            <div className="user-status table-responsive orders-table">
                                <table className="table table-bordernone mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col capitalize">Products name</th>
                                            <th scope="col capitalize">payment</th>
                                            <th scope="col capitalize">Rem..Amount</th>
                                            <th scope="col capitalize">user</th>
                                            <th scope="col capitalize">DeliveryStatus</th>
                                            <th scope="col capitalize"></th>
                                            <th scope="col capitalize"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Loading &&
                                            <tr>
                                                <td className="w-[300px] mx-auto  my-9 flex justify-between items-center ">
                                                    <Skeleton count={1} width={200} height={100} box={true} />
                                                </td>
                                                <td className="w-[300px] mx-auto  my-9 flex justify-between items-center ">
                                                    <Skeleton count={1} width={50} height={10} box={true} />
                                                </td>
                                                <td className="w-[300px] mx-auto  my-9 flex justify-between items-center ">
                                                    <Skeleton count={1} width={50} height={10} box={true} />
                                                </td>
                                                <td className="w-[300px] mx-auto  my-9 flex justify-between items-center ">
                                                    <Skeleton count={1} width={50} height={10} box={true} />
                                                </td>
                                                <td className="w-[300px] mx-auto  my-9 flex justify-between items-center ">
                                                    <Skeleton count={1} width={50} height={10} box={true} />
                                                </td>
                                                <td className="w-[300px] mx-auto  my-9 flex justify-between items-center ">
                                                    <Skeleton count={1} width={50} height={10} box={true} />
                                                </td>

                                            </tr>
                                        }

                                        {orders && orders.map((order) => (<tr key={order._id} >
                                            {order.orderItems.map((product)=>(
                                                  <td key={product._id}>
                                                    <p>{product.product ?  <p className="text-success">{product.product.name}</p>: <p className="text-danger">Not available</p>}</p>
                                                  </td>
                                            ))}
                                          

                                            <td className="capitalize">{order.paymentStatus}</td>
                                            <td className="capitalize">{order.remainingAmount}</td>
                                            <td className="capitalize">{order.user ? order.user.email : 'null'}</td>
                                            <td className="capitalize">{order.deliveryStatus}</td>
                                            <td className="capitalize">
                                                <div className="form-button">
                                                    <Link className="btn btn-primary" to={"/order/" + order._id}>View</Link>
                                                    <div className="form-button m-4 flex" >
                                                        <Link className="" to={"/order/edit/" + order._id}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></Link>
                                                        <Link to="#" className="m-2" onClick={() => { deleteOrder(order._id) }}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                        </Link>
                                                    </div>
                                                </div>

                                            </td>

                                        </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                            {orders.length < 1 && <>

                                {!Loading && <div className="text-center w-full my-3 text-dangers"><h3>Product not found</h3></div>}

                            </>}
                            <div className="code-box-copy">
                                <button className="code-box-copy__btn btn-clipboard"
                                    data-clipboard-target="#example-head4" title=""
                                    data-original-title="Copy"><i className="icofont icofont-copy-alt"></i></button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Orders;