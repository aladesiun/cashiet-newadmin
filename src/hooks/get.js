import { useState, useContext, useEffect } from "react";
import toast from 'react-hot-toast';
import axios from "axios";

const useGet = (url) =>{
    let endpoint = process.env.REACT_APP_ENDPOINT;
    let token = process.env.REACT_APP_ADMIN_TOKEN;
    const [data, setData] = useState({});
    const [Loading, setLoading] = useState(false);

   
     useEffect(()=>{
        setLoading(true)

            axios.get(endpoint+"/"+url)
            .then((data)=>{
                setLoading(false);
                console.log(data);
                setData(data.data.product)
                toast.success('success')
            }) 
            .catch((error)=> {
                setLoading(false)

                toast.error(error.message)
            })
        
     },[url])
     return {data,Loading}
}
export default useGet;