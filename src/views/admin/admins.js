import { useState, useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AdminContext } from '../../contexts/Admin-context';
import toast from 'react-hot-toast';
import httpServices from "../../hooks/http-services";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useGet from "../../hooks/get";
const Admins = () => {
    const { data, Loading } = useGet("/users/admin");
    const Users = data ? data.users : '';
    console.log(Users);
    const deleteUser = async (_id) => {
        try {
            const response = await httpServices.delete('/Users/' + _id)
            if (response.data.status) {
                window.location.href = '/Users';
            }
            else {
                toast.success(response.data.message)
            }
        }
        catch (e) {
            toast.error(e.message)
        }
    }
    const deleteAllUsers = async (_id) => {
        try {
            const response = await httpServices.delete('/Users/delete/all')
            if (response.data.status) {
                window.location.href = '/Users';
            }
            else {
                toast.success(response.data.message)
            }
        }
        catch (e) {
            toast.error(e.message)
        }
    }
    return (
        <div className="page-body ">
            <div className="product-cont">
                <div className="col-xl-12 xl-100">
                    <div className="card height-equal">

                        <div className="card-header">
                            <h5>Admins</h5>
                            <div className="card-header-right">
                                <ul className="list-unstyled card-option">
                                    <li><i className="icofont icofont-simple-left"></i></li>
                                    <li><i className="view-html fa fa-code"></i></li>
                                    <li><i className="icofont icofont-maximize full-card"></i></li>
                                    <li><i className="icofont icofont-minus minimize-card"></i></li>
                                    <li><i className="icofont icofont-refresh reload-card"></i></li>
                                    <li><i className="icofont icofont-error close-card"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center bg-white p-3">

                            <a href="/users/new" className="btn btn-primary mt-md-0 mt-2">Add Users</a>
                            <a href="#" className="btn btn-warning mt-md-0 mt-2" onClick={() => { deleteAllUsers() }}>Delete all</a>
                        </div>
                        <div className="card-body">
                            <div className="user-status table-responsive Users-table">
                                <table className="table table-bordernone mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col capitalize">Username</th>
                                            <th scope="col capitalize">email</th>
                                            <th scope="col capitalize">role</th>
                                            <th scope="col capitalize">Actions</th>
                                            <th scope="col capitalize"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Loading &&
                                            <tr>
                                                <td className="w-[300px] mx-auto  my-9 flex justify-between items-center ">
                                                    <Skeleton count={1} width={200} height={100} box={true} />
                                                </td>
                                                <td className="w-[300px] mx-auto  my-9 flex justify-between items-center ">
                                                    <Skeleton count={1} width={50} height={10} box={true} />
                                                </td>
                                                <td className="w-[300px] mx-auto  my-9 flex justify-between items-center ">
                                                    <Skeleton count={1} width={50} height={10} box={true} />
                                                </td>
                                                <td className="w-[300px] mx-auto  my-9 flex justify-between items-center ">
                                                    <Skeleton count={1} width={50} height={10} box={true} />
                                                </td>
                                                <td className="w-[300px] mx-auto  my-9 flex justify-between items-center ">
                                                    <Skeleton count={1} width={50} height={10} box={true} />
                                                </td>
                                                <td className="w-[300px] mx-auto  my-9 flex justify-between items-center ">
                                                    <Skeleton count={1} width={50} height={10} box={true} />
                                                </td>

                                            </tr>
                                        }
                                        {Users && Users.map((user) => (
                                            <tr key={user._id} >
                                                <td className="capitalize">{user.username}</td>
                                                <td className="capitalize">{user.email}</td>
                                                <td className="capitalize">{user.role}</td>
                                                <td className="capitalize">
                                                    <div className="form-button m-4 flex" >
                                                        <a href={"/user/edit/" + user._id} className="m-2" >

                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                        </a>
                                                        <a href="#" className="m-2" onClick={() => { deleteUser(user._id) }}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                        </a>
                                                        <a href={"/user/" + user._id}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                                    </a>
                                                    </div>
                                                </td>
                                               


                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {!Users && <>

                                {!Loading && <div className="text-center w-full my-3 text-dangers"><h3>No Admins At This Moment</h3></div>}

                            </>}
                            <div className="code-box-copy">
                                <button className="code-box-copy__btn btn-clipboard"
                                    data-clipboard-target="#example-head4" title=""
                                    data-original-title="Copy"><i className="icofont icofont-copy-alt"></i></button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Admins;