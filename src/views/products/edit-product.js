import { useState, useContext, useEffect } from "react";
import toast from 'react-hot-toast';
import { useParams } from "react-router-dom";
import useGet from "../../hooks/get";
import axios from "axios";

const EditProduct = () => {
    let { _id } = useParams();
    const [product, setProduct] = useState({ });
    const { data:categories } = useGet("/categories");
    const [editProduct, setEditProduct] = useState({name:'' , price: "", image: '', category: "", description: "",});
    const [newProduct, setNewProduct] = useState({name:'' , price: "", image: '', category: "", description: "",});
    const [Loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    let url = '/products/' + _id;
    let endpoint = process.env.REACT_APP_ENDPOINT;
    let token = localStorage.getItem('_ux');
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const [keywords, setKeywords] = useState('');
    const [keywordsArr, setKeywordsArr] = useState([]);
    const getData=async()=>{
        setLoading(true)
    
        await axios.get(endpoint + url, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        })
        .then((data)=>{
            if (data.status) {
                setLoading(false);
                setProduct(data.data.product)
                console.log(product);
                // toast.success('success')
            }
            
        }) 
        .catch((error)=> {
            setLoading(false)
            setError(true)
            toast.error(error.response.data.message)
        })
       }

    const handleKeyword = () => {
        console.log('clicked');
        setKeywordsArr(data => [...data, keywords]);
        setKeywords('')
        console.log(keywordsArr);

    }
    const ImageFile = (e) => {
        let file = e.target.files[0];

        if(file){
            setProduct((prevState) => ({
                ...prevState,
                image: file
            }))
        }
    }
    setTimeout(() => {
        setEditProduct(product);
    }, 50);
    
    const edit = async (e) => {
        
        e.preventDefault();
        setProduct((prevState) => ({
            ...prevState,
            keywords: keywordsArr
        }))
        let formData = new FormData();
        
        for(var field in product){
            if (field != 'keywords') {
                formData.append(field, product[field]);
            }
        }
        for (var i = 0; i < keywordsArr.length; i++) {
            formData.append('keywords', keywordsArr[i]);
          }
        console.log(formData);

        setLoading(true)
        
        try {
            console.log(formData);
            const response = await axios.put(endpoint + '/products', formData, {
                headers: {
                    Authorization: 'Bearer ' + token,
                }
            })
            if (response.status) {
                toast.success('successfully added your profile');
                setLoading(false)
                console.log(formData);
                window.location.href="/products"

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
        getData()
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
                                <h3>Edit Product
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
                <form onSubmit={(e) => { edit(e) }} enctype='multipart/form-data'>
                    <div className="row product-adding">
                        <div className="col-xl-12">
                            <div className="card">
                                
                                <div className="card-body">
                                    <div className="digital-add needs-validation">
                                        <div className="form-group">
                                            <label htmlFor="validationCustom01" className="col-form-label pt-0"><span>*</span>Name</label>
                                            <input name="name" onChange={handleInputChange} value={ editProduct.name ? editProduct.name : ''} className="form-control" id="validationCustom01" type="text" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="validationCustom01" className="col-form-label pt-0"><span>*</span>Price</label>
                                            <input name="price" onChange={handleInputChange}   className="form-control" id="validationCustom01" type="number" required />
                                        </div>
                                        <div className="form-group">
                                            <label className="col-form-label categories-basic"><span>*</span>
                                                Categories</label>
                                            <select className="custom-select form-control" required name="category" onChange={handleInputChange} >
                                                {categories.categories && categories.categories.map((category) => (
                                                    <option value={category._id}>{category.name}</option>

                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="validationCustom01" className="col-form-label pt-0"><span className="mx-1">Added Keywords:</span>{keywordsArr.toString()}</label>

                                            <input value={keywords} onChange={e => setKeywords(e.target.value)} className="form-control" id="validationCustom01" type="text" />
                                            <button type="button" className="btn btn-primary my-2" onClick={() => handleKeyword()}>Add</button>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-form-label">Description</label>
                                            <textarea rows={5} cols={12} defaultValue={""} name="description" onChange={handleInputChange} />
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
        </>
    )
}
export default EditProduct;