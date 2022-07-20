import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useGet from "../../hooks/get";
import EditProduct from "../products/edit-product";
import { useState, useContext, useEffect } from "react";
import toast from 'react-hot-toast';

import axios from 'axios'
import CreateProfile from "./create-profile";
const Profile = () => {
    const { data, Loading, Error } = useGet('/profile/user');
    const profile = data ? data.userProfile : null;
    const [editprofile, setEditProfile] =  useState(profile)
    console.log(editprofile);
    let endpoint = process.env.REACT_APP_ENDPOINT;
    console.log(editprofile);
    let token = localStorage.getItem("_ux");
   
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditProfile((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const editProfile = async () => {
        try { 
            const response = await axios.put(endpoint + '/profile', editprofile, {
                headers: { Authorization: 'Bearer ' + token }
            })
            if (response.status) {
                toast.success('successfully added your profile');
                // window.location.href="/profile"

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
            <div className="page-body">
                {/* Container-fluid starts*/}
                <div className="container-fluid">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="page-header-left">
                                    <h3>
                                        My Profile
                                        <small>Cashiet Admin panel</small>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <ol className="breadcrumb pull-right">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
                                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                                <polyline points="9 22 9 12 15 12 15 22" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item">Settings</li>
                                    <li className="breadcrumb-item active">Profile</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Container-fluid Ends*/}
                {/* Container-fluid starts*/}
                {Loading &&
                    <div className="overflow-hidden d-block p-5">
                        <div className="">
                            <Skeleton count={1} width={100} height={10} box={true} />
                            <Skeleton count={1} width={1000} height={5} box={true} />
                            <Skeleton count={1} width={160} height={8} box={true} />
                            <Skeleton count={1} width={200} height={8} box={true} />
                        </div>
                        <div className="d-flex p-2">
                            <Skeleton count={1} width={300} height={100} box={true} />
                            <div className="d-flex px-2">
                                <Skeleton count={2} width={100} height={50} box={true} />
                            </div>
                        </div>
                        <Skeleton count={1} width={200} height={8} box={true} />
                    </div>

                }
                {profile &&
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="profile-details text-center">
                                            <img src={require('../../assets/images/dashboard/designer.jpg')} alt className="img-fluid img-90 rounded-circle blur-up lazyloaded" />
                                            <h5 className="f-w-600 mb-0">{profile.username ?? "Not set"}</h5>
                                            <span>{profile.user.email ?? "Not set"}</span>
                                            <div className="social">
                                                <div className="form-group btn-showcase">
                                                    <button className="btn social-btn btn-fb d-inline-block"><i className="fa fa-facebook" /></button>
                                                    <button className="btn social-btn btn-twitter d-inline-block"><i className="fa fa-google" /></button>
                                                    <button className="btn social-btn btn-google d-inline-block me-0"><i className="fa fa-twitter" /></button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />

                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <div className="card tab2-card">
                                    <div className="card-body">
                                        <ul className="nav nav-tabs nav-material" id="top-tab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="top-profile-tab" data-bs-toggle="tab" href="#top-profile" role="tab" aria-controls="top-profile" aria-selected="true">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user me-2">
                                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                        <circle cx={12} cy={7} r={4} />
                                                    </svg>
                                                    Profile
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="contact-top-tab" data-bs-toggle="tab" href="#top-contact" role="tab" aria-controls="top-contact" aria-selected="false">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings me-2">
                                                        <circle cx={12} cy={12} r={3} />
                                                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                                                    </svg>
                                                    Edit
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="top-tabContent">
                                            <div className="tab-pane fade show active" id="top-profile" role="tabpanel" aria-labelledby="top-profile-tab">
                                                <h5 className="f-w-600">Profile</h5>
                                                <div className="table-responsive profile-table">
                                                    <table className="table table-borderless">
                                                        <tbody>
                                                            <tr>
                                                                <td className="capitalize">First Name:</td>
                                                                <td className="capitalize">{profile.firstName ?? "Not set"}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="capitalize">Last Name:</td>
                                                                <td className="capitalize">{profile.lastName ?? "Not set"}</td>

                                                            </tr>
                                                            <tr>
                                                                <td className="capitalize">Email:</td>
                                                                <td className="capitalize">{profile.user.email ?? "Not set"}</td>

                                                            </tr>
                                                            <tr>
                                                                <td className="capitalize">Gender:</td>
                                                                <td className="capitalize">{profile.gender ?? "Not set"}</td>

                                                            </tr>
                                                            <tr>
                                                                <td className="capitalize">Mobile Number:</td>
                                                                <td className="capitalize">{profile.phoneNumber ?? "Not set"}</td>

                                                            </tr>
                                                            <tr>
                                                                <td className="capitalize">DOB:</td>
                                                                <td className="capitalize">{profile.dob ?? "Not set"}</td>

                                                            </tr>
                                                            <tr>
                                                                <td className="capitalize">Nationality :</td>
                                                                <td className="capitalize">{profile.nationality ?? "Not set"}</td>

                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="top-contact" role="tabpanel" aria-labelledby="contact-top-tab">
                                                <form onSubmit={(e) => { e.preventDefault(); editProfile() }}>
                                                    <table className="table table-borderless">
                                                        <tbody>
                                                            <tr>
                                                                <td className="capitalize">First Name:</td>
                                                                <td className="capitalize">
                                                                    Current: {profile.firstName}
                                                                    <div className="form">
                                                                        <div className="form-group mb-3 row">
                                                                            <div className="col-xl-8 col-sm-7">
                                                                                <input className="form-control" id="validationCustom01" type="text" onChange={handleInputChange} name="firstName" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="capitalize">Last Name:</td>
                                                                <td className="capitalize">Current: {profile.lastName}
                                                                    <div className="form-group mb-3 row">
                                                                        <div className="col-xl-8 col-sm-7">
                                                                            <input className="form-control" id="validationCustom01" type="text" onChange={handleInputChange} name="lastName" />
                                                                        </div>
                                                                    </div></td>

                                                            </tr>
                                                            <tr>
                                                                <td className="capitalize">Email:</td>
                                                                <td className="capitalize">Current: {profile.user.email}
                                                                    <div className="form-group mb-3 row">
                                                                        <div className="col-xl-8 col-sm-7">
                                                                            <input className="form-control" id="validationCustom01" type="text" onChange={handleInputChange} name="email" />
                                                                        </div>
                                                                    </div></td>

                                                            </tr>
                                                            <tr>
                                                                <td className="capitalize">Gender:</td>
                                                                <td className="capitalize">Current: {profile.gender}
                                                                    <div className="form-group mb-3 row">
                                                                        <div className="col-xl-8 col-sm-7">

                                                                            <select className="form-control" id="validationCustom01" onChange={handleInputChange} name="dob" >
                                                                                <option value="male">male</option>
                                                                                <option value="female">female</option>
                                                                            </select>
                                                                        </div>
                                                                    </div></td>

                                                            </tr>
                                                            <tr>
                                                                <td className="capitalize">Mobile Number:</td>
                                                                <td className="capitalize">Current: {profile.phoneNumber}
                                                                    <div className="form-group mb-3 row">
                                                                        <div className="col-xl-8 col-sm-7">
                                                                            <input className="form-control" id="validationCustom01" type="text" onChange={handleInputChange} name="phoneNumber" />
                                                                        </div>
                                                                    </div></td>

                                                            </tr>
                                                            <tr>
                                                                <td className="capitalize">DOB:</td>
                                                                <td className="capitalize">Current: {profile.dob}
                                                                    <div className="form-group mb-3 row">
                                                                        <div className="col-xl-8 col-sm-7">
                                                                            <input className="form-control" id="validationCustom01" type="date" onChange={handleInputChange} name="dob" />
                                                                        </div>
                                                                    </div></td>

                                                            </tr>
                                                            <tr>
                                                                <td className="capitalize">Nationality :</td>
                                                                <td className="capitalize">Current: {profile.nationality}
                                                                    <div className="form-group mb-3 row">
                                                                        <div className="col-xl-8 col-sm-7">
                                                                            <input className="form-control" id="validationCustom01" type="text" onChange={handleInputChange} name="nationality" />
                                                                        </div>
                                                                    </div></td>

                                                            </tr>
                                                        </tbody>
                                                        <button type="submit" className="btn btn-primary">Edit</button>
                                                    </table>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {profile == null && <>

                    {!Loading && <CreateProfile />}

                </>}

                {/* Container-fluid Ends*/}
            </div></>
    );
}

export default Profile;