import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AdminContext } from '../../contexts/Admin-context';
import toast from "react-hot-toast";
const Signin = () => {
    let navigate = useNavigate()
    const admins = useContext(AdminContext);
    console.log(admins.admin);
    const [Admin, setAdmin] = useState({ email: "", password: "" });
    const [Loading, setLoading] = useState(false);
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
            details: Admin,
        }).then((data) => {
            if (data.status) {
                setLoading(false);
                window.location.href = "/"
                toast.success('success');

            }
            else {
                toast.error('An error occured please try again');
                setLoading(false);
                window.location.reload();
            }
        }).catch((error) => {
            setLoading(false);
            var error_message = error.response.data.message;
            toast.error(error_message);
        });
    };
    useEffect(() => {


    }, []);
    return (
        <>
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
                                                    <span className="icon-user me-2"></span>Admin Login
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="top-tabContent">

                                            <div className="tab-pane fade show active" id="top-profile" role="tabpanel" aria-labelledby="top-profile-tab">
                                                <form className="form-horizontal auth-form" onSubmit={(e) => { e.preventDefault(); signin() }}>
                                                    <div className="form-group">

                                                        <input required name="email" type="email" value={Admin.email}
                                                            className="form-control" placeholder="email" id="email1" onChange={handleInputChange}></input>
                                                    </div>
                                                    <div className="form-group">
                                                        <input required name="password" type="password" value={Admin.password}
                                                            className="form-control" placeholder="password" onChange={handleInputChange}></input>
                                                    </div>

                                                    <div className="form-terms">
                                                        <div className="">

                                                            <a href="/forgot-password" className="btn-default forgot-pass mr-2">
                                                                Forgot Password!
                                                            </a>
                                                            <a href="/signup" className=" btn-default forgot-pass mx-5">
                                                                Don't have an account?
                                                            </a>
                                                        </div>
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
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
}

export default Signin;