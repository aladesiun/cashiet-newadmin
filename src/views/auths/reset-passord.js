import { useState } from "react";
import axios from 'axios'
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
const ResetPassword = () => {
    const [searchParams, setSearchParams]= useSearchParams();
    const resetToken = searchParams.get('token');
    const userId= searchParams.get('user');
    let endpoint = process.env.REACT_APP_ENDPOINT;
    let token = process.env.REACT_APP_ADMIN_TOKEN;
    const [password, setPassword] = useState({password:"", token:resetToken, userId:userId});
    console.log(password);
    const [Loading, setLoading] = useState(false);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPassword((prevState) => ({
            ...prevState,
            [name]: value.replace(/\s/g, '')
        }))
    }
    const resetPassword= async ()=>{
        setLoading(true)
        try {
            const response = await axios.post(endpoint + '/password/reset', password, {
                headers: { Authorization: 'Bearer ' + token }
            })
            if (response.status) {
                toast.success(response.message);
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
        <div className="flex justify-content-center forgot-cont">

            <div className="card tab2-card card-login mb-0">
                <div className="card-body">
                    <div className="tab-content" id="top-tabContent">
                        <div className="tab-pane fade show active" id="top-profile" role="tabpanel">
                            <form className="form-horizontal reset-pass auth-form" onSubmit={(e)=>{e.preventDefault(); resetPassword()}}>
                                <h3 className="forgot-title">Set New Password</h3>
                                <div className="form-group reset-input">
                                    <label>New Password</label>
                                    <input required name="password" onChange={handleInputChange} type="text" className="form-control" placeholder="Username / Phone Number" id="exampleInputEmail1" />
                                </div>
                                <div className="form-button mt-3">
                                    <button className="btn btn-primary" type="submit">{Loading ? 'Reseting' : 'Reset Password'}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;