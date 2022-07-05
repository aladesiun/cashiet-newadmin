import { useState, useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AdminContext } from '../../contexts/Admin-context';
import toast from 'react-hot-toast';
import httpServices from "../../hooks/http-services";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Product from "./product";

const Products = () => {
    let navigate = useNavigate()
    const [Loading, setLoading] = useState(false);
    const [Products, setProducts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('name'))
    const url = query ? `/products/filter/${query}` : "/products/filter";
    const handleInputChange = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        setSearchParams({
            name: newQuery
        })

    }
    const getProducts = async () => {
        setLoading(true);
        try {
            const response = await httpServices.get(url)
            if (response.status) {
                setLoading(false)
                let result = response.data.products;
                console.log(response.data.products);
                setProducts(result)
                toast.success(response.data.message)
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
    const deleteProduct = async (_id) => {
        try {
            const response = await httpServices.delete('/products/' + _id)
            if (response.status) {
                setLoading(false)
                let result = response.data.products.results;
                console.log(response.data.products.results);
                toast.success(response.data.message)
                window.location.reload();



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
        getProducts()
    }, []);

    return (
        <div className="page-body ">
            <div className="product-cont">
                <div className="col-xl-12 xl-100">
                    <div className="card height-equal">
                        <div className="card-body">
                            <div className="user-status table-responsive products-table">
                                <table className="table table-bordernone mb-0">
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

                                        

                                    </tbody>
                                </table>
                            </div>
                            <div className="page-body">
                                {/* Container-fluid starts*/}
                                <div className="container-fluid">
                                    <div className="page-header">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="page-header-left">
                                                    <h3>
                                                        Product List
                                                        <small>Multikart Admin panel</small>
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
                                                    <li className="breadcrumb-item active">Product List</li>
                                                </ol>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center bg-white p-3">
                                            <form className="form-inline search-form search-box" onSubmit={(e) => { e.preventDefault(); getProducts() }}>
                                                <div className="form-group flex">
                                                    <input className="form-control" type="text" placeholder="Search.." value={query} onChange={handleInputChange} />

                                                </div>
                                            </form>
                                            <Link to="page-create.html" className="btn btn-primary mt-md-0 mt-2">Add New Page</Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Container-fluid Ends*/}
                                {/* Container-fluid starts*/}
                                <div className="container-fluid">
                                    <div className="row products-admin ratio_asos">
                                    {Products && Products.map((product) => (
                                              <div className="col-xl-3 col-sm-6" key={product.id}>
                                              <div className="card">
                                                  <div className="card-body product-box">
                                                      <div className="img-wrapper">
                                                          <div className="front">
                                                              <a href="javascript:void(0)" className="bg-size " style={{"background-size": "cover", "background-position": "center center", "display": "block" }}>
                                                                  {/* <img src={require(Products &  product.image.url)} className="img-fluid blur-up lazyload bg-img" alt style={{ "display": "" }} /> */}
                                                              </a>
                                                              <div className="product-hover">
                                                                  <ul>
                                                                      <li>
                                                                          <button className="btn" type="button" data-original-title title><i className="ti-pencil-alt" /></button>
                                                                      </li>
                                                                      <li>
                                                                          <button className="btn"><i className="ti-trash" /></button>
                                                                      </li>
                                                                  </ul>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div className="product-detail">
                                                          <div className="rating"><i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /></div>
                                                          <a href="javascript:void(0)">
                                                              <h6>{product.name}</h6>
                                                          </a>
                                                          <h4>{product.price}<del>$600.00</del></h4>
                                                          <ul className="color-variant">
                                                              <li className="bg-light0" />
                                                              <li className="bg-light1" />
                                                              <li className="bg-light2" />
                                                          </ul>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                            ))}
                                      
                                    </div>
                                </div>
                                {/* Container-fluid Ends*/}
                            </div>
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

export default Products;