import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useGet from "../../hooks/get";
import toast from 'react-hot-toast';
import httpServices from "../../hooks/http-services";



const User = () => {
    let { _id } = useParams();
    const { data, Loading, Error } = useGet('/profile/' + _id);
    const Profile = data ? data.userProfile : '';
    console.log(Profile);
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

    useEffect(() => {
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
                                        User Profile Details
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
                                    <li className="breadcrumb-item">User</li>
                                    <li className="breadcrumb-item active">User Detail</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Container-fluid Ends*/}
                {/* Container-fluid starts*/}
                <div className="container-fluid">
                    <div className="card">
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
                        {Profile &&
                            <div className="row product-page-main card-body">
                                <div className="col-xl-10">
                                    <div className="product-page-details product-right mb-0">
                                    {Profile && <div className=" avater-rounded"><img src={Profile && Profile.profilePicture} alt={"Profile" + Profile._id} className=""></img></div>}

                                        <h2>{Profile.user.username}</h2>

                                        <hr />
                                        <div className="d-flex align-items-center">
                                       <h6 className="product-title m-r-2">FisrtName:</h6>
                                        <p className="px-2">
                                            {Profile.firstName ?? 'Not set'}
                                        </p>
                                       </div>
                                       <div className="d-flex align-items-center">
                                       <h6 className="product-title m-r-2">LastName:</h6>
                                        <p className="px-2">
                                            {Profile.lastName ?? 'Not set'}
                                        </p>
                                       </div>
                                       <div className="d-flex align-items-center">
                                       <h6 className="product-title m-r-2">MiddleName:</h6>
                                        <p className="px-2">
                                            {Profile.midddlename ?? 'not set' ?? 'Not set'}
                                        </p>
                                       </div>
                                       <div className="d-flex align-items-center">
                                       <h6 className="product-title m-r-2">Email:</h6>
                                        <p className="px-2">
                                            {Profile.user.email ?? 'Not set'}
                                        </p>
                                       </div>
                                       <div className="d-flex align-items-center">

                                        <h6 className="product-title size-text mt-2">
                                            Role:
                                        </h6>
                                        <p className="px-2">{Profile.user.role ?? 'Not set'}</p>
                                        </div>
                                       <div className="d-flex align-items-center">

                                        <h6 className="product-title size-text mt-2">
                                            Nationality:
                                        </h6>
                                        <p className="px-2">{Profile.nationality ?? 'Not set'}</p>
                                        </div>
                                       <div className="d-flex align-items-center">

                                        <h6 className="product-title size-text mt-2">
                                            isVerified:
                                        </h6>
                                        <p className="px-2">{Profile.user.isVerified ? 'true' : 'false' ?? 'Not set'}</p>
                                        </div>

                                    </div>

                                </div>
                                <div className="d-flex justify-content-between align-items-center bg-white p-3">
                                    <a href={"/user/edit/" + Profile._id} className="btn btn-primary mt-md-0 mt-2">Edit</a>
                                    <a href="#" className="btn btn-warning mt-md-0 mt-2" onClick={() => { deleteUser() }}>Delete</a>
                                </div>
                            </div>
                        }
                        {Error && <div className="text-center"><h1 className="text-danger font-bold fs-3">Unable to fetch data at this monent</h1></div>}

                    </div>
                </div>
                {/* Container-fluid Ends*/}
            </div>

        </>
    );
}

export default User;