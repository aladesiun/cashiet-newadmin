import { useState, useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast from 'react-hot-toast';
import httpServices from "../../hooks/http-services";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import dateFormat, { masks } from "dateformat";


const Products = () => {
   
    var CurrencyFormat = require('react-currency-format');
    const now = new Date();
    let navigate = useNavigate()
    const [Loading, setLoading] = useState(false);
    const [Products, setProducts] = useState([]);
    const [query, setQuery] = useState('')
    const url = query ? `/products/filter/?name=${query}` : "/products/filter";
    const handleInputChange = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);


    }
    const getProducts = async () => {
        setLoading(true);
        try {
            const response = await httpServices.get(url)
            if (response.status == 200) {
                setLoading(false)
                let result = response.data.products;
                console.log(response.data.products);
                setProducts(result)
                toast.success(response.data.message)
            }
            else {
                setProducts(null)
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
                    // window.location.href = '/products';
                    toast.success(response.message)
    
    
                }
                else {
                    toast.error('failed to delete')
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

                        <div className="card-header">
                            <h5>Products</h5>
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
                            <form className="form-inline search-form search-box" onSubmit={(e) => { e.preventDefault(); getProducts() }}>
                                <div className="form-group flex">
                                    <input className="form-control" type="text" placeholder="Search.." value={query} onChange={handleInputChange} />

                                </div>
                            </form>
                            <a href="/products/new" className="btn btn-primary mt-md-0 mt-2">Add Products</a>
                        </div>
                        <div className="card-body">
                            <div className="user-status table-responsive products-table">
                                <table className="table table-bordernone mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col capitalize"></th>
                                            <th scope="col capitalize">Name</th>
                                            <th scope="col capitalize">Categories</th>
                                            <th scope="col capitalize">Price</th>
                                            <th scope="col capitalize">Sku</th>
                                            <th scope="col capitalize">Actions</th>
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

                                        {Products && Products.map((product) => (<tr key={product._id} >
                                            <td className="img-td" ><img src={product.image && product.image.url} alt={product._id + "product"} className="" style={{ width: '118px', height: "77px", borderRadius: '10px' }}></img></td>

                                            <td className="capitalize">{product.name}</td>
                                            <td className="capitalize">{product.category? product.category.name : 'not set'}</td>
                                            <td className="capitalize"><CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'???'} /></td>
                                            <td className="capitalize">{product.sku ?? 'not set'}</td>
                                            <td className="capitalize">
                                                <div className="form-button d-flex flex-nowrap  align-items-center">
                                                    <Link to={"/product/" + product._id}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                                    </Link>
                                                    <div className="mx-3 d-flex flex-nowrap align-items-center" >
                                                        <Link className="" to={"/product/edit/" + product._id}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></Link>
                                                        <Link to="#" className="m-2" onClick={() => {deleteProduct(product._id) }}>
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
                            {Products.length < 1 && <>

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

export default Products;