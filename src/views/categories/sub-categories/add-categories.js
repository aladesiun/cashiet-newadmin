import { useState } from "react";
import toast from 'react-hot-toast';
import axios from 'axios'
import useGet from "../../../hooks/get";

const AddSubCategories = () => {
    const { data } = useGet("/categories");
    const [SubCategory, setSubCategory] = useState({ name: "", category:"" });
    console.log(SubCategory);
    const [Loading, setLoading] = useState(false);
    let endpoint = process.env.REACT_APP_ENDPOINT;
    let token = localStorage.getItem("_ux");
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSubCategory((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const CreateSubCategory = async () => {
        setLoading(true)
        try {

            const response = await axios.post(endpoint + '/subcategory', SubCategory, {
                headers: { Authorization: 'Bearer ' + token }
            })
            if (response.status) {
                toast.success('successfully added your profile');
                setLoading(false)
                // window.location.href="/sub-categories"

            }
            else {
                setLoading(false)

            }
        }
        catch (error) {
            setLoading(false)
            var error_message = error.response.data.message;
            toast.error(error_message);
        }
    }
    return (<>
        <div className="page-body">
            {/* Container-fluid starts*/}
            <div className="container-fluid">
                <div className="page-header"></div>
                <div className="card-body bg-white rounded">
                    <div className="row product-adding">

                        <div className="col-xl-7">
                            <form className="needs-validation add-product-form" novalidate enctype='multipart/form-data' onSubmit={(e) => { e.preventDefault(); CreateSubCategory() }}>
                                <div className="form">
                                    <div className="form-group mb-3 row">
                                        <label htmlFor="validationCustom01" className="col-xl-3 col-sm-4 mb-0">Name :</label>
                                        <div className="col-xl-8 col-sm-7">
                                            <input className="form-control" id="validationCustom01" type="text" required onChange={handleInputChange} name="name" />
                                        </div>
                                    </div>
                                    <div className="form-group mb-3 row">
                                        <label htmlFor="validationCustom01" className="col-xl-3 col-sm-4 mb-0">Category :</label>
                                        <div className="col-xl-8 col-sm-7">
                                        <select className="custom-select form-control" required name="category" onChange={handleInputChange}>
                                            <option disabled>--Select--</option>
                                            {data.categories && data.categories.map((category) => (
                                                <option value={category._id}>{category.name}</option>

                                            ))}
                                        </select>
                                        </div>
                                    </div>

                                </div>
                                <div className="form">
                                    <div className="form-group row">

                                        <div className="offset-xl-3 offset-sm-4 mt-4">
                                            <button type="submit" className="btn btn-primary">{Loading ? "Adding" : 'Add'}</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default AddSubCategories;