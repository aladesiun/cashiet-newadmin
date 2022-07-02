import React, { useState } from "react";
import axios from 'axios';

export const AdminContext = React.createContext({admin:{}});


export default props =>{
    let details = localStorage.getItem('_ux');
    const [adminDetails, setAdminDetails]= useState("admin from context");
    if (localStorage.getItem('_ux')) {
        // setAdminDetails('hello');
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
        <AdminContext.Provider value={{ admin:adminDetails,  signin:signin}}>
            {props.children}
        </AdminContext.Provider>
    )
} 