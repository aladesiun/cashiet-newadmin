import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import toast from 'react-hot-toast';

import axios from 'axios'
import CreateUserProfile from "./create-user-profile";
import useGet from "../../hooks/get";
const UserProfile = () => {
    let { _id } = useParams();
    const [Loading, setLoading] = useState(false);
    const [editprofile, setEditProfile] =  useState({})
    const [error, setError] = useState(false)

    console.log(editprofile);
    let endpoint = process.env.REACT_APP_ENDPOINT;
    let token = localStorage.getItem("_ux");
    let url = '/profile/' + _id;

    const getData=async()=>{
        setLoading(true)
        await axios.get(endpoint + url, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        })
        .then((data)=>{
            if (data.status) {
                let result = data.data.userProfile

                console.log(result);

                setLoading(false);
                setEditProfile(result)
            }
        }) 
        .catch((error)=> {
            setLoading(false)
            setError(true)
            toast.error(error.response.data.message)
        })
       }
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
    useEffect(()=>{
        getData();
    }, [])
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
                                        User Profile
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
               
               {editprofile &&
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="profile-details text-center">
                                            <img src={editprofile.profilePicture !== '' ? editprofile.profilePicture  :require('../../assets/images/dashboard/designer.jpg') } alt={editprofile._id } className="avater-pro img-fluid img-90 rounded-circle blur-up lazyloaded" />
                                            <h5 className="f-w-600 mb-0">{editprofile.user?.username ?? "Not set"}</h5>
                                            <span>{editprofile.user?.email ?? "Not set"}</span>
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
                                                                <td className="capitalize">{editprofile.firstName ?? "Not set"}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="capitalize">Last Name:</td>
                                                                <td className="capitalize">{editprofile.lastName ?? "Not set"}</td>

                                                            </tr>
                                                            <tr>
                                                                <td className="capitalize">Email:</td>
                                                                <td className="capitalize">{editprofile.user? editprofile.user.email :  "Not set"}</td>

                                                            </tr>
                                                            <tr>
                                                                <td className="capitalize">Gender:</td>
                                                                <td className="capitalize">{editprofile.gender ?? "Not set"}</td>

                                                            </tr>
                                                            <tr>
                                                                <td className="capitalize">Mobile Number:</td>
                                                                <td className="capitalize">{editprofile.phoneNumber ?? "Not set"}</td>

                                                            </tr>
                                                            <tr>
                                                                <td className="capitalize">DOB:</td>
                                                                <td className="capitalize">{editprofile.dob ?? "Not set"}</td>

                                                            </tr>
                                                            <tr>
                                                                <td className="capitalize">Nationality :</td>
                                                                <td className="capitalize">{editprofile.nationality ?? "Not set"}</td>

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
                                                                    <div className="form">
                                                                        <div className="form-group mb-3 row">
                                                                            <div className="col-xl-8 col-sm-7">
                                                                                <input value={editprofile.firstName} className="form-control" id="validationCustom01" type="text" onChange={handleInputChange} name="firstName" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="capitalize">Last Name:</td>
                                                                <td className="capitalize">
                                                                    <div className="form-group mb-3 row">
                                                                        <div className="col-xl-8 col-sm-7">
                                                                            <input value={editprofile.lastName} className="form-control" id="validationCustom01" type="text" onChange={handleInputChange} name="lastName" />
                                                                        </div>
                                                                    </div></td>

                                                            </tr>
                                                            <tr>
                                                                <td className="capitalize">Email:</td>
                                                                <td className="capitalize">Current:
                                                                    <div className="form-group mb-3 row">
                                                                        <div className="col-xl-8 col-sm-7">
                                                                            <input value= {editprofile?.user?.email} className="form-control" id="validationCustom01" type="text" onChange={handleInputChange} name="email" />
                                                                        </div>
                                                                    </div></td>

                                                            </tr>
                                                            <tr>
                                                                <td className="capitalize">Gender:</td>
                                                                <td className="capitalize">Current: {editprofile.gender}
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
                                                                <td className="capitalize">Current: {editprofile.phoneNumber}
                                                                    <div className="form-group mb-3 row">
                                                                        <div className="col-xl-8 col-sm-7">
                                                                            <input value= {editprofile.phoneNumber} className="form-control" id="validationCustom01" type="text" onChange={handleInputChange} name="phoneNumber" />
                                                                        </div>
                                                                    </div></td>

                                                            </tr>
                                                            <tr>
                                                                <td className="capitalize">DOB:</td>
                                                                <td className="capitalize">Current: {editprofile.dob}
                                                                    <div className="form-group mb-3 row">
                                                                        <div className="col-xl-8 col-sm-7">
                                                                            <input value= {editprofile.dob} className="form-control" id="validationCustom01" type="date" onChange={handleInputChange} name="dob" />
                                                                        </div>
                                                                    </div></td>

                                                            </tr>
                                                            <tr>
                                                                <td className="capitalize">Nationality :</td>
                                                                <td className="capitalize">Current: {editprofile.nationality}
                                                                    <div className="form-group mb-3 row">
                                                                        <div className="col-xl-8 col-sm-7">
                                                                            <input value= {editprofile.nationality} className="form-control" id="validationCustom01" type="text" onChange={handleInputChange} name="nationality" />
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
                {editprofile == null && <>

{!Loading && <CreateUserProfile/>}

</>}

                {/* Container-fluid Ends*/}
            </div></>
    );
}

export default UserProfile;