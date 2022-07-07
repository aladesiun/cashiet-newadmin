import useGet from "../../hooks/get";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import toast from 'react-hot-toast';
import axios from 'axios';
const EditCategory = () => {
    let endpoint = process.env.REACT_APP_ENDPOINT;
    let token = localStorage.getItem('_ux');
    let { _id } = useParams();
    let url = "/categories/" + _id;
    const { data, Loading } = useGet(url);
    const Category = data ? data.category : 'dd';
    const [categoryDetails, setCategoryDetails] = useState({ name: '', slug: '' })
    console.log(categoryDetails);
    console.log(Category);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCategoryDetails((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const editCategory = async () => {
        try {
            const response = await axios.put(endpoint + url, categoryDetails, {
                headers: { Authorization: 'Bearer ' + token }
            })
            if (response.status) {
                toast.success('successfully Edited category');
                window.location.href="/categories"

            }
            else {

            }
        }
        catch (error) {
            var error_message = error.response.data.message;
            toast.error(error_message);
        }
    }

    return (
        <>
            <div className="page-body ">
                {/* Container-fluid starts*/}
                <div className="container-fluid bg-white p-3">
                    <div className="page-header">
                        <h3 className="text-dark">Edit Category</h3>
                    </div>
                    <form onSubmit={(e) => { e.preventDefault(); editCategory()}}>
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <td>
                                        Current Name:  {Category && Category.name}
                                        <div className="form">
                                            <div className="form-group mb-3 row">
                                                <div className="col-xl-8 col-sm-7">
                                                    <input className="form-control" id="validationCustom01" type="text" onChange={handleInputChange} name="name" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Current slug:{Category && Category.slug}
                                        <div className="form">
                                            <div className="form-group mb-3 row">
                                                <div className="col-xl-8 col-sm-7">
                                                    <input className="form-control" id="validationCustom01" type="text" onChange={handleInputChange} name="slug" />
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
    );
}
export default EditCategory;