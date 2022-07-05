import { useNavigate, Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios'
import toast from "react-hot-toast";

const Signup = () => {
    let navigate = useNavigate()

    const [admin, setAdmin] = useState({ email: "", password: "", username: '' });
    const [Loading, setLoading] = useState(false);
    let endpoint = process.env.REACT_APP_ENDPOINT;
    let token = process.env.REACT_APP_ADMIN_TOKEN;
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAdmin((prevState) => ({
            ...prevState,
            [name]: value.replace(/\s/g, '')
        }))

    }
    const createAdmin = async () => {
        setLoading(true)
        try {
            const response = await axios.post(endpoint + '/users/admin/signup', admin, {
                headers: { Authorization: 'Bearer ' + token }
            })
            if (response.status) {
                toast.error(response.message);
                setLoading(false)
                window.location.href="/signin"

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
        <div className="page-wrapper">
            <div className="authentication-box">
                <div className="container">
                    <div className="w-3">
                        <div className="p-0t">
                            <div className="logo-wrapper">
                                <img className="d-none d-lg-block blur-up lazyloaded" src={require('../../assets/images/index.png')} alt=""></img>
                            </div>
                            <div className="card tab2-card card-login">
                                <div className="card-body">
                                    <ul className="nav nav-tabs nav-material" id="top-tab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="top-profile-tab" data-bs-toggle="tab" href="#top-profile" role="tab" aria-controls="top-profile" aria-selected="true">
                                                <span className="icon-user me-2"></span>Admin Sign Up
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="top-tabContent">

                                        <div className="tab-pane fade show active" id="top-profile" role="tabpanel" aria-labelledby="top-profile-tab">
                                            <form className="form-horizontal auth-form" onSubmit={(e) => { e.preventDefault(); createAdmin() }}>

                                                <div className="form-group">
                                                    <input required name="email" type="email"
                                                        className="form-control" placeholder="email" id="email1" onChange={handleInputChange}></input>
                                                </div>
                                                <div className="form-group">
                                                    <input required name="username" type="username"
                                                        className="form-control" placeholder="username" id="username1" onChange={handleInputChange}></input>
                                                </div>
                                                <div className="form-group">
                                                    <input required name="password" type="password"
                                                        className="form-control" placeholder="password" onChange={handleInputChange}></input>
                                                </div>


                                                <div className="form-terms">
                                                        <div className="">
                                                            <Link to="/signin" className=" btn-default forgot-pass">
                                                                Already have an account?
                                                            </Link>
                                                        </div>
                                                    </div>
                                                <div className="form-button">
                                                    <button className="btn btn-primary" type="submit">
                                                        {!Loading && 'Sign Up'}
                                                        {Loading && 'Loading...'}
                                                    </button>
                                                </div>

                                            </form>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Signup;
