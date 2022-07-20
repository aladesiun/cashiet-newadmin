import { useState, useContext, useEffect } from "react";
import toast from 'react-hot-toast';

import axios from 'axios'
const CreateUserProfile = () => {
    const [profile, setProfile] = useState({ firstName: "", middleName: "", lastName: "", gender: "", nationality: "", dob: "", phoneNumber: "" });
    console.log(profile);
    const [Loading, setLoading] = useState(false);
    let endpoint = process.env.REACT_APP_ENDPOINT;
    // let token = process.env.REACT_APP_TOKKEN;
    let token = localStorage.getItem('_ux');
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const CreateUserProfile = async () => {
        setLoading(true)
        try {

            const response = await axios.post(endpoint + '/profile', profile, {
                headers: { Authorization: 'Bearer ' + token }
            })
            if (response.status) {
                toast.success('successfully added your profile');
                setLoading(false)
                window.location.href = "/profile"

            }
            else {
                setLoading(false)

            }
        }
        catch (error) {
            setLoading(false)
            var error_message = error.response.data.message;
            toast.error(error_message);
        }
    }
    useEffect(() => {
    }, [])
    return (
        <div className="card-body">
            <div className="row">

                <div className="col-xl-12">
                    <form className="needs-validation add-product-form" novalidate enctype='multipart/form-data' onSubmit={(e) => { e.preventDefault(); CreateUserProfile() }}>
                        <div className="row">
                            <p className="text-danger capitalize">User has no profile yet. You can create one</p>
                            <div className="col-6">
                                <div className="form-group mb-3 row">
                                    <div className="col-xl-8 col-sm-7">
                                        <label htmlFor="validationCustom01" className="mb-1 text-sm capitalize fw-light">firstName :</label>
                                        <input className="form-control" id="validationCustom01" type="text" required onChange={handleInputChange} name="firstName" />
                                    </div>
                                </div>
                                <div className="form-group mb-3 row">
                                    <label htmlFor="validationCustom01" className="mb-1 text-sm capitalize fw-light">lastName :</label>
                                    <div className="col-xl-8 col-sm-7">
                                        <input className="form-control" id="validationCustom01" type="text" required onChange={handleInputChange} name="lastName" />
                                    </div>
                                </div>
                                <div className="form-group mb-3 row">
                                    <label htmlFor="validationCustom01" className="mb-1 text-sm capitalize fw-light">middleName :</label>
                                    <div className="col-xl-8 col-sm-7">
                                        <input className="form-control" id="validationCustom01" type="text" required onChange={handleInputChange} name="middleName" />
                                    </div>
                                </div>

                                    <div className="mt-4 mx-2">
                                        <button type="submit" className="btn btn-primary text-sm">{Loading ? "Adding....." : 'Add'}</button>
                                    </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group mb-3 row">
                                    <label htmlFor="validationCustom01" className="mb-1 text-sm capitalize fw-light">gender :</label>
                                    <div className="col-xl-8 col-sm-7">

                                        <select className="form-control" id="validationCustom01" required onChange={handleInputChange} name="gender" >
                                            <option value="" disabled>--select--</option>
                                            <option value="male">male</option>
                                            <option value="female">female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group mb-3 row">
                                    <label htmlFor="validationCustom01" className="mb-1 text-sm capitalize fw-light">nationality</label>
                                    <div className="col-xl-8 col-sm-7">
                                        <input className="form-control" id="validationCustom01" type="text" required onChange={handleInputChange} name="nationality" />
                                    </div>
                                </div>
                                <div className="form-group mb-3 row">
                                    <label htmlFor="validationCustom01" className="mb-1 text-sm capitalize fw-light">dob :</label>
                                    <div className="col-xl-8 col-sm-7">
                                        <input className="form-control" id="validationCustom01" type="date" required onChange={handleInputChange} name="dob" />
                                    </div>
                                </div>
                                <div className="form-group mb-3 row">
                                    <label htmlFor="validationCustom01" className="mb-1 text-sm capitalize fw-light">Phone :</label>
                                    <div className="col-xl-8 col-sm-7">
                                        <input className="form-control" id="validationCustom01" type="number" required onChange={handleInputChange} name="phoneNumber" />
                                    </div>
                                </div>
                            </div>


                        </div>

                        {/* <div className="form-group mb-3 row">
                            <label htmlFor="validationCustom01" className="mb-1 text-sm capitalize fw-light">Profle picture :</label>
                            <div className="col-xl-8 col-sm-7">
                                <input className="form-control" id="validationCustom01" type="file" required onChange={handleInputChange} name="phoneNumber" />
                            </div>
                        </div> */}

                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateUserProfile;