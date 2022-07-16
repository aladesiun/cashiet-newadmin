import { useState, useContext, useEffect } from "react";
import toast from 'react-hot-toast';

import axios from 'axios'
const CreateProfile = () => {
    const [profile, setProfile]= useState({firstName:"", middleName:"", lastName:"", gender:"", nationality:"", dob:"", phoneNumber:""});
    console.log(profile);
    const [Loading, setLoading] = useState(false);
    let endpoint = process.env.REACT_APP_ENDPOINT;
    let token = localStorage.getItem("_ux");
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevState) => ({
            ...prevState,
            [name]: value 
        }))
    }
    const CreateProfile= async ()=>{
            setLoading(true)
            try {

                const response = await axios.post(endpoint + '/profile', profile, {
                    headers: { Authorization: 'Bearer ' + token }
                })
                if (response.status) {
                    toast.success('successfully added your profile');
                    setLoading(false)
                    window.location.href="/profile"
    
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
    return (
        <div className="card-body">
            <div className="row product-adding">

                <div className="col-xl-7">
                    <form className="needs-validation add-product-form" novalidate enctype='multipart/form-data' onSubmit={(e) =>{e.preventDefault(); CreateProfile()}}>
                        <div className="form">
                            <div className="form-group mb-3 row">
                                <label htmlFor="validationCustom01" className="col-xl-3 col-sm-4 mb-0">firstName :</label>
                                <div className="col-xl-8 col-sm-7">
                                    <input className="form-control" id="validationCustom01" type="text" required onChange={handleInputChange} name="firstName" />
                                </div>
                            </div>
                            <div className="form-group mb-3 row">
                                <label htmlFor="validationCustom01" className="col-xl-3 col-sm-4 mb-0">lastName :</label>
                                <div className="col-xl-8 col-sm-7">
                                    <input className="form-control" id="validationCustom01" type="text" required onChange={handleInputChange} name="lastName" />
                                </div>
                            </div>

                            <div className="form-group mb-3 row">
                                <label htmlFor="validationCustom01" className="col-xl-3 col-sm-4 mb-0">middleName :</label>
                                <div className="col-xl-8 col-sm-7">
                                    <input className="form-control" id="validationCustom01" type="text" required onChange={handleInputChange} name="middleName" />
                                </div>
                            </div>
                            <div className="form-group mb-3 row">
                                <label htmlFor="validationCustom01" className="col-xl-3 col-sm-4 mb-0">gender :</label>
                                <div className="col-xl-8 col-sm-7">

                                <select className="form-control" id="validationCustom01" required onChange={handleInputChange} name="gender" >
                                    <option value="">--select--</option>
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                </select>
                                </div>
                            </div>
                            <div className="form-group mb-3 row">
                                <label htmlFor="validationCustom01" className="col-xl-3 col-sm-4 mb-0">nationality</label>
                                <div className="col-xl-8 col-sm-7">
                                    <input className="form-control" id="validationCustom01" type="text" required onChange={handleInputChange} name="nationality" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group mb-3 row">
                            <label htmlFor="validationCustom01" className="col-xl-3 col-sm-4 mb-0">dob :</label>
                            <div className="col-xl-8 col-sm-7">
                                <input className="form-control" id="validationCustom01" type="date" required onChange={handleInputChange} name="dob" />
                            </div>
                        </div>
                        <div className="form-group mb-3 row">
                            <label htmlFor="validationCustom01" className="col-xl-3 col-sm-4 mb-0">Phone :</label>
                            <div className="col-xl-8 col-sm-7">
                                <input className="form-control" id="validationCustom01" type="number" required onChange={handleInputChange} name="phoneNumber" />
                            </div>
                        </div>
                        {/* <div className="form-group mb-3 row">
                            <label htmlFor="validationCustom01" className="col-xl-3 col-sm-4 mb-0">Profle picture :</label>
                            <div className="col-xl-8 col-sm-7">
                                <input className="form-control" id="validationCustom01" type="file" required onChange={handleInputChange} name="phoneNumber" />
                            </div>
                        </div> */}
                        <div className="form">
                            <div className="form-group row">

                                <div className="offset-xl-3 offset-sm-4 mt-4">
                                    <button type="submit" className="btn btn-primary">{Loading ? "Adding" : 'Add'}</button>
                                    <button type="button" className="btn btn-light">Discard</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateProfile;