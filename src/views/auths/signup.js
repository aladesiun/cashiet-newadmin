const Signup = () => {
    return (
        <div className="tab-pane fade" id="top-contact" role="tabpanel"
            aria-labelledby="contact-top-tab">
            <form className="form-horizontal auth-form">
                <div className="form-group">
                    <input required="" name="login[username]" type="email"
                        className="form-control" placeholder="Username"
                        id="exampleInputEmail12"></input>
                </div>
                <div className="form-group">
                    <input required="" name="login[password]" type="password"
                        className="form-control" placeholder="Password"></input>
                </div>
                <div className="form-group">
                    <input required="" name="login[password]" type="password"
                        className="form-control" placeholder="Confirm Password"></input>
                </div>
                <div className="form-terms">
                    <div className="form-check mesm-2">
                        <input type="checkbox" className="form-check-input"
                            id="customControlAutosizing1"></input>
                        <label className="form-check-label ps-2"
                            for="customControlAutosizing1"><span>I agree all statements in
                                <Link to=" " className="pull-right">Terms &amp;
                                    Conditions</Link></span></label>
                    </div>
                </div>
                <div className="form-button">
                    <button className="btn btn-primary" type="submit">Register</button>
                </div>
                <div className="form-footer">
                    <span>Or Sign up with social platforms</span>
                    <ul className="social">
                        <li><Link className="ti-facebook" to=" "></Link></li>
                        <li><Link className="ti-twitter" to=" "></Link></li>
                        <li><Link className="ti-instagram" to=" "></Link></li>
                        <li><Link className="ti-pinterest" to=" "></Link></li>
                    </ul>
                </div>
            </form>
        </div>
    );
}

export default Signup;
