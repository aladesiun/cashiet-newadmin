import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useGet from "../../hooks/get";
import CreateProfile from "./create-profile";
const Profile = () => {
    const { data, Loading, Error} = useGet('/profile/user');
    const profile =data ? data.product : null;
    console.log(profile);
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
                                        <small>Multikart Admin panel</small>
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
                                    <img src="assets/images/dashboard/designer.jpg" alt className="img-fluid img-90 rounded-circle blur-up lazyloaded" />
                                    <h5 className="f-w-600 mb-0">John deo</h5>
                                    <span>johndeo@gmail.com</span>
                                    <div className="social">
                                        <div className="form-group btn-showcase">
                                            <button className="btn social-btn btn-fb d-inline-block"><i className="fa fa-facebook" /></button>
                                            <button className="btn social-btn btn-twitter d-inline-block"><i className="fa fa-google" /></button>
                                            <button className="btn social-btn btn-google d-inline-block me-0"><i className="fa fa-twitter" /></button>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="project-status">
                                    <h5 className="f-w-600">Employee Status</h5>
                                    <div className="media">
                                        <div className="media-body">
                                            <h6>Performance<span className="pull-right">80%</span></h6>
                                            <div className="progress sm-progress-bar">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ "width": "90%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-body">
                                            <h6>Overtime <span className="pull-right">60%</span></h6>
                                            <div className="progress sm-progress-bar">
                                                <div className="progress-bar bg-secondary" role="progressbar" style={{ "width": "60%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-body">
                                            <h6>Leaves taken<span className="pull-right">70%</span></h6>
                                            <div className="progress sm-progress-bar">
                                                <div className="progress-bar bg-danger" role="progressbar" style={{ "width": "70%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                            Contact
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
                                                        <td>First Name:</td>
                                                        <td>Johan</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Last Name:</td>
                                                        <td>Deo</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Email:</td>
                                                        <td>johndeo@gmail.com</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gender:</td>
                                                        <td>Male</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Mobile Number:</td>
                                                        <td>2124821463</td>
                                                    </tr>
                                                    <tr>
                                                        <td>DOB:</td>
                                                        <td>Dec, 15 1993</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Location:</td>
                                                        <td>USA</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="top-contact" role="tabpanel" aria-labelledby="contact-top-tab">
                                        <div className="account-setting">
                                            <h5 className="f-w-600">Notifications</h5>
                                            <div className="row">
                                                <div className="col">
                                                    <label className="d-block" htmlFor="chk-ani">
                                                        <input className="checkbox_animated" id="chk-ani" type="checkbox" />
                                                        Allow Desktop Notifications
                                                    </label>
                                                    <label className="d-block" htmlFor="chk-ani1">
                                                        <input className="checkbox_animated" id="chk-ani1" type="checkbox" />
                                                        Enable Notifications
                                                    </label>
                                                    <label className="d-block" htmlFor="chk-ani2">
                                                        <input className="checkbox_animated" id="chk-ani2" type="checkbox" />
                                                        Get notification for my own activity
                                                    </label>
                                                    <label className="d-block mb-0" htmlFor="chk-ani3">
                                                        <input className="checkbox_animated" id="chk-ani3" type="checkbox" defaultChecked />
                                                        DND
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="account-setting deactivate-account">
                                            <h5 className="f-w-600">Deactivate Account</h5>
                                            <div className="row">
                                                <div className="col">
                                                    <label className="d-block" htmlFor="edo-ani">
                                                        <input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" defaultChecked />
                                                        I have a privacy concern
                                                    </label>
                                                    <label className="d-block" htmlFor="edo-ani1">
                                                        <input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" />
                                                        This is temporary
                                                    </label>
                                                    <label className="d-block mb-0" htmlFor="edo-ani2">
                                                        <input className="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" defaultChecked />
                                                        Other
                                                    </label>
                                                </div>
                                            </div>
                                            <button type="button" className="btn btn-primary">Deactivate Account</button>
                                        </div>
                                        <div className="account-setting deactivate-account">
                                            <h5 className="f-w-600">Delete Account</h5>
                                            <div className="row">
                                                <div className="col">
                                                    <label className="d-block" htmlFor="edo-ani3">
                                                        <input className="radio_animated" id="edo-ani3" type="radio" name="rdo-ani1" defaultChecked />
                                                        No longer usable
                                                    </label>
                                                    <label className="d-block" htmlFor="edo-ani4">
                                                        <input className="radio_animated" id="edo-ani4" type="radio" name="rdo-ani1" />
                                                        Want to switch on other account
                                                    </label>
                                                    <label className="d-block mb-0" htmlFor="edo-ani5">
                                                        <input className="radio_animated" id="edo-ani5" type="radio" name="rdo-ani1" defaultChecked />
                                                        Other
                                                    </label>
                                                </div>
                                            </div>
                                            <button type="button" className="btn btn-primary">Delete Account</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                }

                {profile == null && <>
                    <h4>You have no profile yet create one</h4>
                    <CreateProfile/>

                </>}
                
                {/* Container-fluid Ends*/}
            </div></>
    );
}

export default Profile;