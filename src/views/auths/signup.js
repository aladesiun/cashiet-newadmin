import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios'
import Notification from "../../components/notification";
const Signup = () => {
    let navigate = useNavigate()

    const [admin, setAdmin] = useState({ email: "", password: "", username: '' });
    const [Loading, setLoading] = useState(false);
    const [NotifySuccess, setNotifySuccess] = useState({ status: false, message: "" })
    const [NotifyFailed, setNotifyFailed] = useState({ status: false, message: "" })
    let endpoint = process.env.REACT_APP_ENDPOINT;
    let token = process.env.REACT_APP_ADMIN_TOKEN;
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAdmin((prevState) => ({
            ...prevState,
            [name]: value.replace(/\s/g, '')
        }))

    }
    console.log(admin);
    const createAdmin = async () => {
        setLoading(true)
        try {
            const response = await axios.post(endpoint + '/users/admin/signup', admin, {
                headers: { Authorization: 'Bearer ' + token }
                })
            if (response.status) {
                setLoading(false)
                setNotifySuccess({
                    ...NotifySuccess,
                    status: true,
                    message: 'welcome'
                })
                navigate('signin')

            }
        }
        catch (e) {
            setLoading(false)
            setNotifyFailed(
                {
                    ...NotifyFailed,
                    status: true,
                    message: e.message
                })

            setTimeout(() => {
                setNotifyFailed(
                    {
                        ...NotifyFailed,
                        status: false,
                    })
            }, 3000);
        }
    }
    return (
        <div className="page-wrapper">

            <div className="authentication-box">
                <div className="container">
                    <div className="p-3 w-40 mx-auto rounded  bg-white">
                        <p className="text-primary">Create Admin</p>
                        {/* Notification component passed notification messages as props */}

                        <form className="form-horizontal auth-form" onSubmit={(e) => { e.preventDefault(); createAdmin() }}>
                            <Notification notifyFailed={NotifyFailed} notifySuccess={NotifySuccess} />
                            <div className="form-group">
                                <input required="" name="email" type="email"
                                    className="form-control" placeholder="email" id="email1" onChange={handleInputChange}></input>
                            </div>
                            <div className="form-group">
                                <input required="" name="username" type="text"
                                    className="form-control" placeholder="Username" id="username" onChange={handleInputChange}></input>
                            </div>
                            <div className="form-group">
                                <input required="" name="password" type="password"
                                    className="form-control" placeholder="password" onChange={handleInputChange}></input>
                            </div>
                            <div className="form-button">
                                <button className="btn btn-primary" type="submit">
                                    {!Loading && 'Create'}
                                    {Loading && 'Creating...'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
