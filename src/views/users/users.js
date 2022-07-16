import { useEffect, useState, } from "react";
import toast from 'react-hot-toast';
import Pagination from "react-js-pagination";
import httpServices from "../../hooks/http-services";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";

const Users = () => {
    let endpoint = process.env.REACT_APP_ENDPOINT;
    let token = localStorage.getItem('_ux');
    const [data, setData] = useState();
    const [NoUsers, setNoUsers] = useState(false);
    const [Loading, setLoading] = useState(false)
    const getUsers = async (pageNumber = 1) => {
        setLoading(true)
        let url = `https://cashiet-server.herokuapp.com/api/v1/users/?page=${pageNumber}`;
        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: 'Bearer ' + token,
                }
            })
            if (response.status) {
                setLoading(false)
                setData(response.data.users)
                toast.success('successfully added your profile');
            }
            else {

            }
        }
        catch (error) {
            var error_message = error.response.data.message;
            toast.error(error_message);
        }

    }
    const Users = data ? data.results : '';
    console.log(Users);

    const deleteUser = async (_id) => {
        try {
            const response = await httpServices.delete('/Users/' + _id)
            if (response.status) {
                toast.success(response.data.message)

                window.location.href = '/Users';
            }
            else {
                toast.error('failed to delete')
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
    useEffect(() => {
        getUsers()
    }, [])
    return (
        <div className="page-body ">
            <div className="product-cont">
                <div className="col-xl-12 xl-100">
                    <div className="card height-equal">

                        <div className="card-header">
                            <h5>Users</h5>
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

                            <a href="/user/new" className="btn btn-primary mt-md-0 mt-2">Add Users</a>
                            <a href="#" className="btn btn-warning mt-md-0 mt-2" onClick={() => { deleteAllUsers() }}>Delete all</a>
                        </div>
                        <div className="card-body">
                            <div className="user-status table-responsive Users-table">
                                <table className="table table-bordernone mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">Username</th>
                                            <th scope="col">email</th>
                                            <th scope="col">role</th>
                                            <th scope="col">Actions</th>
                                            <th scope="col"></th>
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
                                                <td>{user.username}</td>
                                                <td>{user.email}</td>
                                                <td>{user.role}</td>
                                                <td>
                                                    <div className="form-button m-4 flex" >
                                                        <Link to={"/user/edit/" + user._id} className="m-2" >

                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                        </Link>
                                                        <Link to="#" className="m-2" onClick={() => { deleteUser(user._id) }}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                        </Link>
                                                        <Link to={"/user/" + user._id}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                                    </Link>
                                                    </div>
                                                </td>
                                              


                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {Users &&
                                <Pagination
                                    activePage={2}
                                    totalItemsCount={4}
                                    itemsCountPerPage={10}
                                    onChange={(pageNumber) => getUsers(pageNumber)}
                                    itemClassLast=""
                                    pageRangeDisplayed={2}
                                    linkClassPrev="icofont icofont-simple-left"
                                    linkClassNext="icofont icofont-simple-right"
                                    prevPageText=""
                                    nextPageText=""
                                    hideFirstLastPages="false"
                                />
                            }
                            {!Users && <>

                                {!Loading && <div className="text-center w-full my-3 text-dangers"><h3>No Users At This Moment</h3></div>}

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

export default Users;