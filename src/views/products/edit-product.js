import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from '../../contexts/Admin-context';
import toast from 'react-hot-toast';
import httpServices from "../../hooks/http-services";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useGet from "../../hooks/get";
const EditProduct = () => {
    let { _id } = useParams();
    const { data, Loading, Error } = useGet('/products/' + _id);
    const Products = data ? data.product : " ";
    console.log(Products);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // setCategoryDetails((prevState) => ({
        //     ...prevState,
        //     [name]: value
        // }))
    }

    useEffect(() => {
    }, [])
    return (
        <>
            <div className="page-body ">
                {/* Container-fluid starts*/}
                <div className="container-fluid bg-white p-3">
                    <div className="page-header">
                        <h3 className="text-dark">Edit Category</h3>
                    </div>
                    <form onSubmit={(e) => { e.preventDefault();  }}>
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    {Products && <div className="img-td" style={{ width: '200px', maxHeight: '200px' }}><img src={Products &&  Products.image.url} alt={"Products" + Products._id} className="img-fluid"></img></div>}

                                </tr>
                                <tr>
                                    <td>
                                        Current Name:  {Products && Products.name}
                                        <div className="form">
                                            <div className="form-group mb-3 row">
                                                <div className="col-xl-8 col-sm-7">
                                                    <input className="form-control" id="validationCustom01" type="text" onChange={handleInputChange} name="name" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Current price:  {Products && Products.price}
                                        <div className="form">
                                            <div className="form-group mb-3 row">
                                                <div className="col-xl-8 col-sm-7">
                                                    <input className="form-control" id="validationCustom01" type="text" onChange={handleInputChange} name="price" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    
                                </tr>
                               
                                    <tr>
                                    <td>
                                        Current width:  {Products && Products.dimension.width}
                                        <div className="form">
                                            <div className="form-group mb-3 row">
                                                <div className="col-xl-8 col-sm-7">
                                                    <input className="form-control" id="validationCustom01" type="text" onChange={handleInputChange} name="price" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Current height:  {Products && Products.dimension.height}
                                        <div className="form">
                                            <div className="form-group mb-3 row">
                                                <div className="col-xl-8 col-sm-7">
                                                    <input className="form-control" id="validationCustom01" type="text" onChange={handleInputChange} name="height" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td>
                                        Current height:  Description
                                        <div className="form">
                                            <div className="form-group mb-3 row">
                                                <div className="col-xl-8 col-sm-7">
                                                    <input className="form-control" id="validationCustom01" type="text" onChange={handleInputChange} name="height" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    </tr>
                            </tbody>
                            <button type="submit" className="btn btn-primary">Edit</button>
                        </table>
                    </form>
                </div>
            </div>
        </>
    )
}
export default EditProduct;