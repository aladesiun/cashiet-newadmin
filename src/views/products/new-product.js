import { useState, useContext, useEffect } from "react";
import toast from 'react-hot-toast';
import axios from "axios";
import useGet from "../../hooks/get";
import { useDropzone } from "react-dropzone";
import Dropzone from "react-dropzone";
import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
const AddProduct = () => {

    const { data } = useGet("/categories");
    const { data: subcategory } = useGet("/subcategory");
    const [keywords, setKeywords] = useState('');
    const [keywordsArr, setKeywordsArr] = useState([]);
    const [imagesArr, setImagesArr] = useState([]);
    const [productId, setProuctId] = useState(null)
    const [heroFiles, setHeroFiles] = useState([]);
    const [files, setFiles] = useState([]);
    const editorRef = useRef(null);
    const [product, setProduct] = useState({ name: "", price: "", image: '', category: "", subCategoryOne: '', subCategoryTwo: '', description: "", productHeight: "", productWidth: "", productLength: "", quantity: "" });
    const [Loading, setLoading] = useState(false);
    let endpoint = process.env.REACT_APP_ENDPOINT;
    let token = localStorage.getItem('_ux');
    console.log(product);
    useEffect(() => {
        if (productId != null) {
            uploadGallery()

        }
    }, [productId])

    useEffect(() => {
        if (imagesArr.length < 5) {
            setImagesArr(prevState => [...imagesArr, ...files])
        } else {
            toast.error('you can only upload up to 5 product images');
            return;
        }
    }, [files])
    useEffect(() => {
        setProduct((prevState) => ({
            ...prevState,
            image: heroFiles[0]
        }))
    }, [heroFiles])

    const handleDescription = ()=>{
        if (editorRef.current) {
            let desc = editorRef.current.getContent();
            setProduct((prevState) => ({
                ...prevState,
                description: desc
            }))
        }
    }
    const handleKeyword = () => {
        console.log('clicked');
        if (keywords.length >= 2) {
            setKeywordsArr(data => [...data, keywords]);
            setKeywords('')

        }
        console.log(keywordsArr);

    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const uploadGallery = async () => {


        let formData = new FormData();
        formData.append('productId', productId)


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
                toast.success('successfully added gallery');
                setLoading(false)

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
    const addProduct = async (e) => {
        if (imagesArr.length < 3) {
            toast.error("Gallery pictures must be greater than 3");
            return;
        }
        setLoading(true)

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


        try {
            console.log(formData);
            const response = await axios.post(endpoint + '/products', formData, {
                headers: {
                    Authorization: 'Bearer ' + token,
                }
            })
            if (response.status) {
                setProuctId(response.data.productId)
                alert(response.data.productId)
                toast.success('successfully added a new product');
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


    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })))
        },
        maxSize: 1000000,
        maxFiles: 5,
        onError: ((error) => {
            alert(error)
        })
    })

    const images = imagesArr.map(file => (
        <img key={file.name} src={file.preview} alt="image" style={{ width: '140px', height: '14ß0px' }}></img>
        // <img style={{ width: "200px", height: "200px", margin: "0", display: "block" }} src={ file.preview ?? "https://via.placeholder.com/200x200"} alt="Hero Image" />

    ))

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
                <form onSubmit={e => { e.preventDefault(); addProduct(e) }} enctype='multipart/form-data'>
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
                                                    <option key={category._id} value={category._id}>{category.name}</option>

                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-form-label categories-basic"><span>*</span>
                                                Sub Categories 1</label>
                                            <select className="custom-select form-control" required name="subCategoryOne" onChange={handleInputChange}>
                                                <option value>--Select--</option>
                                                {subcategory.subcategories && subcategory.subcategories.map((category) => (
                                                    <option key={category._id} value={category._id}>{category.name}</option>

                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-form-label categories-basic"><span>*</span>
                                                Sub Categories 2</label>
                                            <select className="custom-select form-control" required name="subCategoryTwo" onChange={handleInputChange}>
                                                <option value>--Select--</option>
                                                {subcategory.subcategories && subcategory.subcategories.map((category) => (
                                                    <option key={category._id} value={category._id}>{category.name}</option>

                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="validationCustom01" className="col-form-label pt-0"><span className="mx-1">Added Keywords <i>Atleast two</i>:</span>{keywordsArr.toString()}</label>

                                            <input value={keywords} onChange={e => setKeywords(e.target.value)} className="form-control" type="text" />
                                            <button type="button" className="btn btn-primary my-2" onClick={() => handleKeyword()}>Add</button>
                                        </div>
                                        <div className="form-group">
                                            <label>Description</label>
                                            <Editor
                                            apiKey='z04rnfohe8q4u1alj8mdf1o25k5xzjdyfk37qd9bwbt2g0oz' 
                                            name="description" 
                                            onKeyUp={e=>handleDescription()}
                                                onInit={(evt, editor) => editorRef.current = editor}
                                                initialValue=""
                                                init={{
                                                    height: 500,
                                                    menubar: false,
                                                    plugins: [
                                                        'advlist autolink lists link image charmap print preview anchor',
                                                        'searchreplace visualblocks code fullscreen',
                                                        'insertdatetime media table paste code help wordcount'
                                                    ],
                                                    toolbar: 'undo redo | formatselect | ' +
                                                        'bold italic backcolor | alignleft aligncenter ' +
                                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                                        'removeformat | help',
                                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                }}
                                            />
                                        </div>

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="validationCustom01" className="col-form-label pt-0"><span>*</span>Image file <i className="text-danger">Not more than 1mb</i></label>
                                        <Dropzone onDrop={(acceptedFiles) => {
                                            console.log(acceptedFiles);
                                            setHeroFiles(
                                                acceptedFiles.map(file => Object.assign(file, {
                                                    preview: URL.createObjectURL(file)
                                                }))
                                            )
                                        }} name="heroImage" multiple={false} maxSize={1000000} accept="images">
                                            {({ getRootProps, getInputProps }) => (
                                                <div {...getRootProps({ className: 'dropzone' })}>
                                                    <input {...getInputProps()} />
                                                    <span style={{ fontSize: ".8rem" }} className="d-flex sm-dropzone">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-plus"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
                                                    </span>

                                                </div>
                                            )}
                                        </Dropzone>
                                    </div>

                                    <img style={{ width: "200px", height: "200px", margin: "0", display: "block" }} src={heroFiles.length > 0 ? heroFiles[0].preview : "https://via.placeholder.com/200x200"} alt="Hero Image" />



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
                                        <input name="quantity" onChange={handleInputChange} className="form-control" type="number" required />
                                    </div>
                                    <h4 className="my-3">Product Gallery <i className="text-danger">*Not more than 1mb</i></h4>
                                    <p className="my-3"> <i className="text-danger">*Upload maximum of 5 minimum of 3</i></p>
                                    <div className="dropArea" {...getRootProps()}>
                                        <input name="image" {...getInputProps()}></input>
                                        <p>Drag and drop</p>
                                        <div className="img-preview p-3 rounded">
                                            {images}
                                        </div>
                                    </div>

                                    {/* <button onClick={e => uploadGallery(e)}>upload</button> */}
                                    <div className="form-group mb-0 my-2">
                                        <div className="product-buttons">
                                            <button type="submit" className="btn btn-primary ">{!Loading ? 'Add Product' : 'Adding..'}</button>
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