import { useState, useContext, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import { AdminContext }  from '../../contexts/Admin-context';
import Notification from "../../components/notification";
const Signin = () => {
    let navigate = useNavigate()
    const admins = useContext(AdminContext);
    const [admin, setAdmin] = useState({ email: "", password: ""});
    const [Loading, setLoading] = useState(false);
    const [NotifySuccess, setNotifySuccess] = useState({ status: false, message: "" })
    const [NotifyFailed, setNotifyFailed] = useState({ status: false, message: "" })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAdmin((prevState) => ({
            ...prevState,
            [name]: value.replace(/\s/g, '')
        }))

    }
    const signin = () => {
        setLoading(true);
        
        admins.signin({
            endpoint: "/users/admin/login",
            details: admin,
        }).then((data) => {
            if (data.status) {
                setLoading(false);
                var admin_token= data.data.token;
                localStorage.setItem('_ux', admin_token);
                setNotifySuccess({
                    ...NotifySuccess,
                    status:true,
                    message:'welcome'
                })
                setTimeout(() => {
                    setNotifySuccess({
                        ...NotifySuccess,
                        status:false,
                    })
                }, 3000);
                navigate('/') 
         

            }else{
                setLoading(false);

            setNotifyFailed(
                {
                    ...NotifyFailed,
                    status:true,
                    message:"Connection error"
                })
                setTimeout(() => {
                    setNotifyFailed(
                        {
                            ...NotifyFailed,
                            status:false,
                        })
                   }, 3000);
                }
            }).catch((error) => {
            setLoading(false);

                var error_message = error.response.data.message;
                    setNotifyFailed(
                        {
                            ...NotifyFailed,
                            status:true,
                            message:error_message
                        })
                        setTimeout(() => {
                            setNotifyFailed(
                                {
                                    ...NotifyFailed,
                                    status:false,
                                })
                           }, 3000);
               
                setLoading(false);
            });
    };
    useEffect(() => {
        
       
    }, []);
  console.log(admins);
    return (

        <div className="page-wrapper">

            <div className="authentication-box">
                <div className="container">
                    <div className="p-3 w-40 mx-auto rounded  bg-white">
                        <p className="text-primary">Create Admin</p>
                        {/* Notification component passed notification messages as props */}

                        <form className="form-horizontal auth-form" onSubmit={(e) => { e.preventDefault(); signin() }}>
                            <Notification notifyFailed={NotifyFailed} notifySuccess={NotifySuccess} />
                            <div className="form-group">
                                <input required="" name="email" type="email"
                                    className="form-control" placeholder="email" id="email1" onChange={handleInputChange}></input>
                            </div>
                           
                            <div className="form-group">
                                <input required="" name="password" type="password"
                                    className="form-control" placeholder="password" onChange={handleInputChange}></input>
                            </div>
                            <div className="form-button">
                                <button className="btn btn-primary" type="submit">
                                    {!Loading && 'Login'}
                                    {Loading && 'Loading...'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;