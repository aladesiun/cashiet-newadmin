import { useState, useContext, useEffect } from "react";
import toast from 'react-hot-toast';
import axios from "axios";
import useGet from "../../hooks/get";
import { useDropzone } from "react-dropzone";

const AddProduct = () => {

    const { data } = useGet("/categories");
    const { data: subcategory } = useGet("/subcategory");
    const [keywords, setKeywords] = useState('');
    const [keywordsArr, setKeywordsArr] = useState([]);
    const [imagesArr, setImagesArr] = useState([]);

    const handleKeyword = () => {
        console.log('clicked');
        setKeywordsArr(data => [...data, keywords]);
        setKeywords('')
        console.log(keywordsArr);

    }
    const [product, setProduct] = useState({ name: "", price: "", image: '', category: "", subCategoryOne: '', subCategoryTwo: '', description: "", productHeight: "", productWidth: "", productLength: "", quantity: "" });
    console.log(product);
    const [Loading, setLoading] = useState(false);
    let endpoint = process.env.REACT_APP_ENDPOINT;
    let token = localStorage.getItem('_ux');

    const ImageFile = (e) => {
        let file = e.target.files[0];

        if (file) {
            setProduct((prevState) => ({
                ...prevState,
                image: file
            }))
        }
    }
    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const addProduct = async (e) => {

        e.preventDefault();
        setProduct((prevState) => ({
            ...prevState,
            keywords: keywordsArr
        }))
        let formData = new FormData();

        for (var field in product) {
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
            const response = await axios.post(endpoint + '/products', formData, {
                headers: {
                    Authorization: 'Bearer ' + token,
                }
            })
            if (response.status) {
                toast.success('successfully added your profile');
                setLoading(false)
                console.log(formData);
                window.location.href = "/products"

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
    const uploadGallery= async(e)=>{
        e.preventDefault();
        
        let formData = new FormData();

       
        for (var i = 0; i < imagesArr.length; i++) {
            formData.append('images', imagesArr[i]);
        }
        console.log(formData);

        setLoading(true)

        try {
            console.log(formData);
            const response = await axios.post(endpoint + '/product-gallery', formData, {
                headers: {
                    Authorization: 'Bearer ' + token,
                }
            })
            if (response.status) {
                toast.success('successfully added your profile');
                setLoading(false)
                console.log(formData);
                // window.location.href = "/products"

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
    const [files, setFiles]= useState([]);
    const { getRootProps, getInputProps} = useDropzone({
        accept:"image/*",
        onDrop:(acceptedFiles)=>{
            setFiles(
                acceptedFiles.map(file => Object.assign(file,{
                    preview:URL.createObjectURL(file)
                })),
            setImagesArr(prevState =>[...prevState, ...files])

            )
        }
    })
        console.log(imagesArr);
            
    const images = files.map(file =>(
        <img key={file.name} src={file.preview} alt="image" style={{width:'200px', height:'200px'}}></img>
    ))
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
                        <div className="col-xl-6">
                            <div className="card">

                                <div className="card-body">
                                    <div className="digital-add needs-validation">
                                        <div className="form-group">
                                            <label htmlFor="validationCustom01" className="col-form-label pt-0"><span>*</span>Name</label>
                                            <input name="name" onChange={handleInputChange} className="form-control" type="text" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="validationCustom01" className="col-form-label pt-0"><span>*</span>Price</label>
                                            <input name="price" onChange={handleInputChange} className="form-control" type="number" required />
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
                                            <label className="col-form-label categories-basic"><span>*</span>
                                                Sub Categories 1</label>
                                            <select className="custom-select form-control" required name="subCategoryOne" onChange={handleInputChange}>
                                                <option value>--Select--</option>
                                                {subcategory.subcategories && subcategory.subcategories.map((category) => (
                                                    <option value={category._id}>{category.name}</option>

                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-form-label categories-basic"><span>*</span>
                                                Sub Categories 2</label>
                                            <select className="custom-select form-control" required name="subCategoryTwo" onChange={handleInputChange}>
                                                <option value>--Select--</option>
                                                {subcategory.subcategories && subcategory.subcategories.map((category) => (
                                                    <option value={category._id}>{category.name}</option>

                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="validationCustom01" className="col-form-label pt-0"><span className="mx-1">Added Keywords <i>Atleast two</i>:</span>{keywordsArr.toString()}</label>

                                            <input value={keywords} onChange={e => setKeywords(e.target.value)} className="form-control" type="text" />
                                            <button type="button" className="btn btn-primary my-2" onClick={() => handleKeyword()}>Add</button>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-form-label">Description</label>
                                            <textarea rows={5} cols={12} defaultValue={""} name="description" onChange={handleInputChange} />
                                        </div>

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="validationCustom01" className="col-form-label pt-0"><span>*</span>Image file</label>
                                        <input onChange={e => ImageFile(e)} accept="avatar/*" multiple className="form-control" type="file" required />
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
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="validationCustom01" className="col-form-label pt-0"><span>*</span>Height</label>
                                        <input name="productHeight" onChange={handleInputChange} className="form-control" type="number" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="validationCustom01" className="col-form-label pt-0"><span>*</span>Width</label>
                                        <input name="productWidth" onChange={handleInputChange} className="form-control" type="number" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="validationCustom01" className="col-form-label pt-0"><span>*</span>Length</label>
                                        <input name="productLength" onChange={handleInputChange} className="form-control" type="number" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="validationCustom01" className="col-form-label pt-0"><span>*</span>quantity</label>
                                        <input name="quantity"  className="form-control" type="number" required />
                                    </div>
                                    <h4 className="my-3">Product Gallery</h4>
                                    <div className="dropArea" {...getRootProps()}>
                                        <input name="image" {...getInputProps()}></input>
                                        <p>Drag and drop</p>
                                    </div>
                                    <div className="img-preview">
                                        {images}
                                    </div>
                                    <button onClick={e=> uploadGallery(e)}>upload</button>
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