import { useState, useContext, useEffect } from "react";
import toast from 'react-hot-toast';
import { useParams } from "react-router-dom";
import useGet from "../../hooks/get";
import axios from "axios";

const EditProduct = () => {
    let { _id } = useParams();
    const [editProduct, setEditProfile] = useState({});
    console.log(editProduct);
    const { data, Loading, Error } = useGet('/products/' + _id);
    const Products = data ? data.product : " ";
    let url = '/products/' + _id;
    console.log(Products);
    let endpoint = process.env.REACT_APP_ENDPOINT;
    let token = localStorage.getItem('_ux');
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditProfile((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const editProfile = async () => {
        try {
            const response = await axios.put(endpoint + url, editProduct, {
                headers: { Authorization: 'Bearer ' + token }
            })
            if (response.status) {
                toast.success('successfully added your profile');
                // window.location.href="/profile"

            }
            else {

            }
        }
        catch (error) {
            var error_message = error.response.data.message;
            toast.error(error_message);
        }
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
                    <form onSubmit={(e) => { e.preventDefault(); editProduct() }}>
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    {Products && <div className="img-td" style={{ width: '200px', maxHeight: '200px' }}><img src={Products && Products.image.url} alt={"Products" + Products._id} className="img-fluid"></img></div>}

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
                                        
                                        <div className="form">
                                            <div className="form-group mb-3 row">
                                                <div className="col-xl-8 col-sm-7">
                                                    <div className="form-floating">
                                                        <textarea onChange={handleInputChange}  className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ "height": "100px" }} defaultValue={""} />
                                                        <label htmlFor="floatingTextarea2">Current Description:
                                                        </label>

                                                        {/* {Products && Products.description.length > 2 ? Products.description.substring(0,20)+"...":  Products.description} */}
                                                    </div>
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