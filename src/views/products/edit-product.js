import { useState, useContext, useEffect } from "react";
import toast from 'react-hot-toast';
import axios from "axios";
import useGet from "../../hooks/get";
import { useDropzone } from "react-dropzone";
import Dropzone from "react-dropzone";
import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useParams } from "react-router-dom";
const AddProduct = () => {
    const { _id }= useParams();
    const { data } = useGet("/categories");
    const { data: subcategory } = useGet("/subcategory");


    const [editProduct, setEditProduct] = useState({name:'' , price: "", image: '', category: "", description: "", subCategoryOne:"", subCategoryTwo:"", gallery:"", keywords:"", length:"", width:"", height:""});
    const [error, setError] = useState(false)
    const [keywords, setKeywords] = useState('');
    const [description, setDescription] = useState('');
    const [keywordsArr, setKeywordsArr] = useState([]);
    const [imagesArr, setImagesArr] = useState([]);
    const [productId, setProuctId] = useState(null)
    const [heroFiles, setHeroFiles] = useState([]);
    const [files, setFiles] = useState([]);
    const editorRef = useRef(null);
    const [Loading, setLoading] = useState(false);
    console.log(editProduct);
    let endpoint = process.env.REACT_APP_ENDPOINT;
    let token = localStorage.getItem('_ux');
    let url = '/products/' + _id;


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
        setEditProduct((prevState) => ({
            ...prevState,
            image: heroFiles[0]
        }))
    }, [heroFiles])
    useEffect(()=>{
        getData()
    }, [])
    const getData=async()=>{
        setLoading(true)
        await axios.get(endpoint + url, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        })
        .then((data)=>{
            if (data.status) {
                let result = data.data.product
                setLoading(false);
                setEditProduct(result)
                console.log(result);
            }
        }) 
        .catch((error)=> {
            setLoading(false)
            setError(true)
            toast.error(error.response.data.message)
        })
       }
    const handleDescription = ()=>{
        if (editorRef.current) {
            let desc = editorRef.current.getContent();
            setDescription(desc)
            console.log(editProduct);
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
        setEditProduct((prevState) => ({
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
            const response = await axios.put(endpoint + '/product-gallery/'+_id, formData, {
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
        console.log(editProduct.image);
        if (imagesArr.length < 3 && editProduct.gallery.images.length < 3) {
            toast.error("Gallery pictures must be greater than 3");
            return;
        }
        setLoading(true)

        e.preventDefault();

        setEditProduct((prevState) => ({
            ...prevState,
            keywords: keywordsArr
        }))
        let formData = new FormData();

        for (var field in editProduct) {
            if (field != 'description'  && field != 'image' && field != 'keywords' && field != 'dimension' && field != 'gallery' && field != 'category' && field != 'subCategoryOne' && field != 'subCategoryTwo') {
                formData.append(field, editProduct[field]);
            }
        }
        if (keywordsArr.length < 1) {
            for (var i = 0; i < editProduct.keywords.length; i++) {
                formData.append('keywords',editProduct.keywords[i]);
            }
        }
        for (var i = 0; i < keywordsArr.length; i++) {
            formData.append('keywords', keywordsArr[i]);
        }
        for(var field in editProduct.dimension){
            formData.append(field, editProduct.dimension[field])

        }
        if (editProduct.image instanceof File ) {
        formData.append('image', editProduct.image)
        }
        formData.append('description', description)
        formData.append('category', editProduct.category._id)
        console.log(formData);
        try {
            const response = await axios.put(endpoint + url, formData, {
                headers: {
                    Authorization: 'Bearer ' + token,
                }
            })
            if (response.status) {
                toast.success('successfully added a new product');
                setLoading(false)

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
        accept: { 
        'image/*': ['.png','.jpg'],
        'text/html': ['.html', '.htm']
    },
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

    ))
    const defaultImgs= editProduct.gallery ? editProduct.gallery.images.map(file => (
        <img key={file.name} src={file.url} alt="image" style={{ width: '140px', height: '14ß0px' }}></img>

    )):[];
    return (
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
                                <li className="breadcrumb-item active">Edit Product</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            {/* Container-fluid Ends*/}
            {/* Container-fluid starts*/}
            <div className="container-fluid">
                <form onSubmit={e => { e.preventDefault(); addProduct(e); uploadGallery(e) }} enctype='multipart/form-data'>
                    <div className="row product-adding">
                        <div className="col-xl-6">
                            <div className="card">

                                <div className="card-body">
                                    <div className="digital-add needs-validation">
                                        <div className="form-group">
                                            <label htmlFor="validationCustom01" className="col-form-label pt-0"><span>*</span>Name</label>
                                            <input name="name" value={editProduct.name} onChange={handleInputChange} className="form-control" type="text" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="validationCustom01" className="col-form-label pt-0"><span>*</span>Price</label>
                                            <input name="price" value={editProduct.price} onChange={handleInputChange} className="form-control" type="number" required />
                                        </div>
                                        <div className="form-group">
                                            <label className="col-form-label categories-basic"><span>*</span>
                                                Categories</label>
                                            <select className="custom-select form-control" required name="category" value={editProduct.category.name} onChange={handleInputChange}>
                                                <option value={editProduct.category._id}>{editProduct.category.name}</option>
                                                {data.categories && data.categories.map((category) => (
                                                    <option key={category._id} value={category._id}>{category.name}</option>

                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-form-label categories-basic"><span>*</span>
                                                Sub Categories 1</label>
                                            <select className="custom-select form-control" required name="subCategoryOne" value={editProduct.subCategoryOne} onChange={handleInputChange}>
                                                <option value={editProduct.subCategoryOne?._id}>{editProduct.subCategoryOne?.name}</option>

                                                {subcategory.subcategories && subcategory.subcategories.map((category) => (
                                                    <option key={category._id} value={category._id}>{category.name}</option>

                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-form-label categories-basic"><span>*</span>
                                                Sub Categories 2</label>
                                            <select className="custom-select form-control" required name="subCategoryTwo" value={editProduct.subCategoryTwo} onChange={handleInputChange}>
                                                <option value={editProduct.subCategoryTwo?._id}>{editProduct.subCategoryTwo?.name}</option>

                                                {subcategory.subcategories && subcategory.subcategories.map((category) => (
                                                    <option key={category._id} value={category._id}>{category.name}</option>

                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="validationCustom01" className="col-form-label pt-0"><span className="mx-1">Added Keywords <i>Atleast two</i>:</span>{editProduct.keywords && editProduct.keywords.toString()},{keywordsArr.toString()}</label>

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
                                                initialValue={editProduct.description}
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
                                 



                                </div>
                            </div>

                        </div>
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="validationCustom01" className="col-form-label pt-0"><span>*</span>Height</label>
                                        <input name="productHeight" value={editProduct.dimension?.height} onChange={handleInputChange} className="form-control" type="number" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="validationCustom01" className="col-form-label pt-0"><span>*</span>Width</label>
                                        <input name="productWidth" value={editProduct.dimension?.width} onChange={handleInputChange} className="form-control" type="number" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="validationCustom01" className="col-form-label pt-0"><span>*</span>Length</label>
                                        <input name="productLength" value={editProduct.dimension?.length} onChange={handleInputChange} className="form-control" type="number" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="validationCustom01" className="col-form-label pt-0"><span>*</span>quantity</label>
                                        <input name="quantity" value={editProduct.quantity} onChange={handleInputChange} className="form-control" type="number" required />
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-file-plus"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
                                                    </span>

                                                </div>
                                            )}
                                        </Dropzone>
                                    </div>

                                    <img style={{ width: "200px", height: "200px", margin: "0", display: "block" }} src={heroFiles.length > 0 ? heroFiles[0].preview : editProduct.image && editProduct.image.url} alt="Hero Image" />
                                    <h4 className="my-3">Product Gallery <i className="text-danger">*Not more than 1mb</i></h4>
                                    <p className="my-3"> <i className="text-danger">*Upload maximum of 5 minimum of 3</i></p>
                                    <div className="dropArea" {...getRootProps()}>
                                        <input name="image" {...getInputProps()}></input>
                                        <p>Drag and drop</p>
                                        <div className="img-preview p-3 rounded">
                                            {images}
                                            {defaultImgs}
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