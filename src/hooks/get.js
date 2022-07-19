import { useState, useContext, useEffect } from "react";
import toast from 'react-hot-toast';
import axios from "axios";

const useGet = (url) =>{
    let endpoint = process.env.REACT_APP_ENDPOINT;
    let token = localStorage.getItem('_ux');
    let superToken = process.env.REACT_APP_TOKEN;
    const [data, setData] = useState({});
    const [Loading, setLoading] = useState(false);
    const [Error, setError] = useState(false);

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
            setData(data.data)
            // toast.success('success')
        }
        
    }) 
    .catch((error)=> {
        setLoading(false)
        setError(true)
        toast.error(error.response.data.message)
    })
   }
     useEffect(()=>{
       getData()
        
     },[url])
     return {data,Loading, Error}
}
export default useGet;