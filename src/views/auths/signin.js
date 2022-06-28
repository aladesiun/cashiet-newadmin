import { Link } from "react-router-dom";
const Signin = () => {
    return (
        <div className="page-wrapper">
            <div className="authentication-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 p-0 card-right">
                            <div className="card tab2-card card-login">
                                <div className="card-body">
                                   
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active"
                                            aria-labelledby="top-profile-tab">
                                            <form className="form-horizontal auth-form">
                                                <div className="form-group">
                                                    <input required="" name="login[username]" type="email"
                                                        className="form-control" placeholder="Username" id="exampleInputEmail1"></input>
                                                </div>
                                                <div className="form-group">
                                                    <input required="" name="login[password]" type="password"
                                                        className="form-control" placeholder="Password"></input>
                                                </div>
                                                <div className="form-terms">
                                                    <div className="form-check mesm-2">
                                                        <input type="checkbox" className="form-check-input"
                                                            id="customControlAutosizing"></input>
                                                        <label className="form-check-label ps-2"
                                                            for="customControlAutosizing">Remember me</label>
                                                        <Link to=" javascript:void(0)"
                                                            className="btn btn-default forgot-pass">Forgot Password!</Link>
                                                    </div>
                                                </div>
                                                <div className="form-button">
                                                    <button className="btn btn-primary" type="submit">Login</button>
                                                </div>
                                              
                                            </form>
                                        </div>
                                       

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;