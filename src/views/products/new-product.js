import { useState, useContext, useEffect } from "react";
import toast from 'react-hot-toast';
import axios from "axios";
const AddProduct = () => {
    const [product, setProduct] = useState({ name: "", price: "", keywords: [], image: "", category: "", description: "", });
    
    const [Loading, setLoading] = useState(false);
    let endpoint = process.env.REACT_APP_ENDPOINT;
    let token = process.env.REACT_APP_ADMIN_TOKEN;
    console.log(product);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const addProduct = (e) => {
        e.preventDefault()
        setLoading(true);

        axios.post({
            endpoint: endpoint + "/products",
            details: product,
        }).then((data) => {
            if (data.status) {
                setLoading(false);
                toast.success('success');

                window.location.href = "/products"

            }
            else {
                toast.error('An error occured please try again');
                setLoading(false);
                window.location.reload();
            }
        }).catch((error) => {
            setLoading(false);
            var error_message = error.response.data.message;
            toast.error(error_message);
        });
    };
    return (
        <div className="page-body">
            <div className="card product-cont">
                <div className="card-body">
                    <div className="row product-adding">

                        <div className="col-xl-7">
                            <form className="needs-validation add-product-form" novalidate enctype='multipart/form-data' onSubmit={(e) => addProduct(e)}>
                                <div className="form">
                                    <div className="form-group mb-3 row">
                                        <label htmlFor="validationCustom01" className="col-xl-3 col-sm-4 mb-0">Name :</label>
                                        <div className="col-xl-8 col-sm-7">
                                            <input className="form-control" id="validationCustom01" type="text" required onChange={handleInputChange} name="name" />
                                        </div>
                                        <div className="valid-feedback">Looks good!</div>
                                    </div>
                                    <div className="form-group mb-3 row">
                                        <label htmlFor="validationCustom01" className="col-xl-3 col-sm-4 mb-0">Price :</label>
                                        <div className="col-xl-8 col-sm-7">
                                            <input className="form-control" id="validationCustom01" type="text" required onChange={handleInputChange} name="price" />
                                        </div>
                                        <div className="valid-feedback">Looks good!</div>
                                    </div>

                                    <div className="form-group mb-3 row">
                                        <label htmlFor="validationCustom01" className="col-xl-3 col-sm-4 mb-0">Keyword :</label>
                                        <div className="col-xl-8 col-sm-7">
                                            <input className="form-control" id="validationCustom01" type="text" required onChange={handleInputChange} name="keywords" />
                                        </div>
                                        <div className="valid-feedback">Looks good!</div>
                                    </div>
                                    <div className="form-group mb-3 row">
                                        <label htmlFor="validationCustom01" className="col-xl-3 col-sm-4 mb-0">Image :</label>
                                        <div className="col-xl-8 col-sm-7">
                                            <input className="form-control" id="validationCustom01" type="file" required onChange={handleInputChange} name="image" />
                                        </div>
                                        <div className="valid-feedback">Looks good!</div>
                                    </div>
                                </div>
                                <div className="form-group mb-3 row">
                                    <label htmlFor="validationCustom01" className="col-xl-3 col-sm-4 mb-0">Category:</label>
                                    <div className="col-xl-8 col-sm-7">
                                        <input className="form-control" id="validationCustom01" type="text" required onChange={handleInputChange} name="category" />
                                    </div>
                                    <div className="valid-feedback">Looks good!</div>
                                </div>
                                <div className="form-group mb-3 row">
                                    <label htmlFor="validationCustom01" className="col-xl-3 col-sm-4 mb-0">Description:</label>
                                    <div className="col-xl-8 col-sm-7">
                                    <textarea id="editor1" name="editor1" cols={10} rows={4} style={{ "display": "block", "width":"" }}   />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    
                                    <div className="offset-xl-3 offset-sm-4 mt-4">
                                        <button type="submit" className="btn btn-primary">Add</button>
                                        <button type="button" className="btn btn-light">Discard</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AddProduct;