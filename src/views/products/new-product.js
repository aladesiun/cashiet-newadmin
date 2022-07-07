import { useState, useContext, useEffect } from "react";
import toast from 'react-hot-toast';
import axios from "axios";
import useGet from "../../hooks/get";

const AddProduct = () => {
    const { data } = useGet("/categories");
    const [selectedImage, setSelectedImage] = useState();
    const [selectedImage_name, setSelectedImage_name] = useState()

    const [product, setProduct] = useState({ name: "", price: "", image: selectedImage_name, category: "", description: "", keywords: ['goods', 'cashiet'] });
    const [keywords, setKeywords] = useState([]);

    const [Loading, setLoading] = useState(false);
    let endpoint = process.env.REACT_APP_ENDPOINT;
    let token = localStorage.getItem('_ux');

    const ImageFile = (e) => {
        let file = e.target.files[0];
        setSelectedImage(file)
        setSelectedImage_name(file.name)
        let formdata = new FormData();
        formdata.append('image', selectedImage);
        formdata.append('name', "image");
        setProduct((prevState) => ({
            ...prevState,
            image: formdata
        }))
    }
    console.log(selectedImage);
    console.log(product);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const addProduct = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {

            const response = await axios.post(endpoint + '/products', product, {
                headers: { 
                    Authorization: 'Bearer ' + token, 
                }
            })
            if (response.status) {
                toast.success('successfully added your profile');
                setLoading(false)
                // window.location.href="/sign/"

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
    useEffect(() => {
    }, [])
    return (
        <div className="page-body">
            {/* Container-fluid starts*/}
            <div className="container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="page-header-left">
                                <h3>Add Products
                                    <small>Cashiet Admin panel</small>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ol className="breadcrumb pull-right">
                                <li className="breadcrumb-item">
                                    <a href="index.html">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                                    </a>
                                </li>
                                <li className="breadcrumb-item">Digital</li>
                                <li className="breadcrumb-item active">Add Product</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            {/* Container-fluid Ends*/}
            {/* Container-fluid starts*/}
            <div className="container-fluid">
                <form onSubmit={(e) => { addProduct(e) }} enctype='multipart/form-data'>
                    <div className="row product-adding">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>General</h5>
                                </div>
                                <div className="card-body">
                                    <div className="digital-add needs-validation">
                                        <div className="form-group">
                                            <label htmlFor="validationCustom01" className="col-form-label pt-0"><span>*</span>Name</label>
                                            <input name="name" onChange={handleInputChange} className="form-control" id="validationCustom01" type="text" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="validationCustom01" className="col-form-label pt-0"><span>*</span>Price</label>
                                            <input name="price" onChange={handleInputChange} className="form-control" id="validationCustom01" type="number" required />
                                        </div>
                                        <div className="form-group">
                                            <label className="col-form-label categories-basic"><span>*</span>
                                                Categories</label>
                                            <select className="custom-select form-control" required name="category" onChange={handleInputChange}>
                                                <option value>--Select--</option>
                                                {data.categories && data.categories.map((category) => (
                                                    <option value={category._id}>{category.name}</option>

                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="validationCustom01" className="col-form-label pt-0"><span className="mx-1">Added Keywords:</span>{product.keywords.toString()}</label>
                                            <form onSubmit={(e) => { e.preventDefault(); }}>
                                                <input value={keywords} className="form-control" id="validationCustom01" type="text" required />
                                                <button type="button" className="btn btn-primary">Add</button>


                                            </form>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-form-label">Description</label>
                                            <textarea rows={5} cols={12} defaultValue={""} name="description" onChange={handleInputChange} />
                                        </div>

                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label"><span>*</span> Status</label>
                                        <div className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
                                            <label className="d-block" htmlFor="edo-ani">
                                                <input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" />
                                                Enable
                                            </label>
                                            <label className="d-block" htmlFor="edo-ani1">
                                                <input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" />
                                                Disable
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="validationCustom01" className="col-form-label pt-0"><span>*</span>Image file</label>
                                        <input onChange={e => ImageFile(e)} accept="avatar/*" multiple className="form-control" id="validationCustom01" type="file" required />
                                    </div>
                                    <div className="form-group mb-0">
                                        <div className="product-buttons">
                                            <button type="submit" className="btn btn-primary">Add</button>
                                            <button type="button" className="btn btn-light">Discard</button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </form>
            </div>
            {/* Container-fluid Ends*/}
        </div>


    );
}

export default AddProduct;