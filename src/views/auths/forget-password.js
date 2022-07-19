import { useState } from "react";
import axios from 'axios'
import toast from "react-hot-toast";
const ForgetPassword = () => {
    let endpoint = process.env.REACT_APP_ENDPOINT;
    let token = process.env.REACT_APP_ADMIN_TOKEN;
    const [email, setEmail] = useState({ email: "" });
    const [Loading, setLoading] = useState(false);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmail((prevState) => ({
            ...prevState,
            [name]: value.replace(/\s/g, '')
        }))
    }
    const resetPassword = async () => {
        setLoading(true)
        try {
            const response = await axios.post(endpoint + '/password', email, {
                headers: { Authorization: 'Bearer ' + token }
            })
            if (response.status) {
                toast.success("A verification code has been sent to your email");
                setLoading(false)
                // window.location.href="/signin"

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
        <div className="flex justify-content-center forgot-cont">
            <div className="logo-wrapper">
                <img className="d-none d-lg-block blur-up lazyloaded" src={require('../../assets/images/index.png')} alt=""></img>
            </div>
            <div className="card tab2-card card-login mb-0">

                <div className="card-body">
                    <div className="tab-content" id="top-tabContent">

                        <div className="tab-pane fade show active" id="top-profile" role="tabpanel">
                            <form className="form-horizontal reset-pass auth-form" onSubmit={(e) => { e.preventDefault(); resetPassword() }}>
                                <h3 className="forgot-title">Forgot Password</h3>
                                <div className="form-group reset-input">
                                    <label>Enter your email address and we will send you a link to reset your password.</label>
                                    <input required name="email" onChange={handleInputChange} type="email" className="form-control" placeholder="Email" id="exampleInputEmail1" />
                                </div>
                                <div className="form-button mt-3">
                                    <button className="btn btn-primary" type="submit">Reset Password</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgetPassword;