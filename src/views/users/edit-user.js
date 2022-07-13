import useGet from "../../hooks/get";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import toast from 'react-hot-toast';
import axios from 'axios';
const EditUser = () => {
    let endpoint = process.env.REACT_APP_ENDPOINT;
    let token = process.env.REACT_APP_ENDPOINT;
    let { _id } = useParams();
    let url = "/profile/" + _id;
    const { data, Loading } = useGet(url);
    const user = data ? data.user : 'dd';
    const [userDetails, setuserDetails] = useState({})
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setuserDetails((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const editUser = async () => {
        try {
            const response = await axios.put(endpoint + url, userDetails, {
                headers: { Authorization: 'Bearer ' + token }
            })
            if (response.status) {
                toast.success('successfully Edited user');
                // window.location.href = "/users"

            }
            else {

            }
        }
        catch (error) {
            var error_message = error.response.data.message;
            toast.error(error_message);
        }
    }

    return (
        <>
            <div className="page-body ">
                {/* Container-fluid starts*/}
                <div className="container-fluid bg-white p-3">
                    <div className="page-header">
                        <h3 className="text-dark">Edit user</h3>
                    </div>
                    <form onSubmit={(e) => { e.preventDefault(); editUser() }}>
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <td>
                                        Current UserName:  {user && user.username}
                                        <div className="form">
                                            <div className="form-group mb-3 row">
                                                <div className="col-xl-8 col-sm-7">
                                                    <input className="form-control" id="validationCustom01" type="text" onChange={handleInputChange} name="username" placeholder="New" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Current Email:  {user && user.email}
                                        <div className="form">
                                            <div className="form-group mb-3 row">
                                                <div className="col-xl-8 col-sm-7">
                                                    <input className="form-control" id="validationCustom01" type="text" onChange={handleInputChange} name="email" placeholder="New" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr><tr>
                                    <td>
                                        Current Role:  {user && user.role}
                                        <div className="form">
                                            <div className="form-group mb-3 row">
                                                <div className="col-xl-8 col-sm-7">
                                                    <input className="form-control" id="validationCustom01" type="text" onChange={handleInputChange} name="role" placeholder="New" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            <button type="submit" className="btn btn-primary">Edit</button>
                        </table>
                    </form>
                </div>
            </div>
        </>
    );
}
export default EditUser;