import { useNavigate, Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios'
import toast from "react-hot-toast";

const CreateUser = () => {
    let navigate = useNavigate()

    const [user, setUser] = useState({ email: "", password: "", username: '' });
    const [Loading, setLoading] = useState(false);
    let endpoint = process.env.REACT_APP_ENDPOINT;
    let token = process.env.REACT_APP_user_TOKEN;
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value.replace(/\s/g, '')
        }))

    }
    const createUser = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await axios.post(endpoint + '/users/signup', user, {
                headers: { Authorization: 'Bearer ' + token }
            })
            if (response.status) {
                setLoading(false)

                toast.success('User created successfully');
                setUser({ email: "", password: "", username: '' });

                window.location.href="/users"

            }
            else {
               
            }
        }
        catch (error) {
            setLoading(false)
            var error_message = error.response.data.message;
            toast.error(error_message);
        }
    }
    return ( 
        <div className="page-body">
        {/* Container-fluid starts*/}
        <div className="container-fluid">
            <div className="page-header">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="page-header-left">
                            <h3>Create user
                                <small>Cashiet user panel</small>
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
            <form onSubmit={(e) => { createUser(e) }} enctype='multipart/form-data'>
                <div className="row product-adding">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>General</h5>
                            </div>
                            <div className="card-body">
                                <div className="digital-add needs-validation">
                                    <div className="form-group">
                                        <label htmlFor="validationCustom01" className="col-form-label pt-0"><span>*</span>Email</label>
                                        <input value={user.email} name="email" onChange={handleInputChange} className="form-control" id="validationCustom01" type="email" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="validationCustom01" className="col-form-label pt-0"><span>*</span>username</label>
                                        <input value={user.username} name="username" onChange={handleInputChange} className="form-control" id="validationCustom01" type="text" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="validationCustom01" className="col-form-label pt-0"><span>*</span>passord</label>
                                        <input value={user.password} name="password" onChange={handleInputChange} className="form-control" id="validationCustom01" type="text" required />
                                    </div>
                                   
                          
                                   

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
     );
}
 
export default CreateUser;