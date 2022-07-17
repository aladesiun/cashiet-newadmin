
import { useState, useContext, useEffect, useRef} from "react";
import toast from 'react-hot-toast';
import axios from "axios";
import useGet from "./get";
const useAddProduct =()=>{
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


    
return{
    data, subcategory, product, setProduct, keywords, setKeywords, keywordsArr, setKeywordsArr, productId, setProuctId , heroFiles, setHeroFiles,
    editorRef, Loading, setLoading, handleDescription, handleInputChange, handleKeyword, uploadGallery, addProduct

}
}
export default useAddProduct;