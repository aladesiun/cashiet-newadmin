import React, { useState } from "react";
import axios from 'axios';

export const AdminContext = React.createContext({admin:{}});


export default props =>{
    const [adminDetails, setAdminDetails]= useState(
        {
            username:"",
            email:"",
        });
        const [data, setData]= useState('')
        const signup =(url, details)=>{

        };
        const fetchUsers = async()=>{
            try{
                const response = await axios.post('https://jsonplaceholder.typicode.com/users')

                if(response.status){
                    setData(response.data);
                    console.log(response);
                   
                }
            }
            catch (e) {
                setTimeout(() => {
                    
                },5000);
            }
        }
       const signin = async(data)=>{

            return  new Promise((resolve, reject) => {
                axios.post(process.env.REACT_APP_ENDPOINT + data.endpoint, data.details, {
                    headers: { Authorization: 'Bearer ' + process.env.REACT_APP_ADMIN_TOKEN
                    }
                })
                .then((data)=>{
                   
                    resolve(data);
                })
                .catch((error)=>{
                    reject(error);
                })
            });
       }

    return (
        <AdminContext.Provider value={{ admin:adminDetails, data:data, fetchUsers:fetchUsers, signin:signin}}>
            {props.children}
        </AdminContext.Provider>
    )
} 