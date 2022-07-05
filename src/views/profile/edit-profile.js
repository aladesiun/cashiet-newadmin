const EditProfile = ({t}) => {
    console.log('edit');
    console.log(t);
    return (
        <>
            <table className="table table-borderless">
                <tbody>
                    <tr>
                        <td>First Name:</td>
                        <td>{profile.firstName}</td>
                    </tr>
                    <tr>
                        <td>Last Name:</td>
                        <td>{profile.lastName}</td>

                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{profile.user.email}</td>

                    </tr>
                    <tr>
                        <td>Gender:</td>
                        <td>{profile.gender}</td>

                    </tr>
                    <tr>
                        <td>Mobile Number:</td>
                        <td>{profile.phoneNumber}</td>

                    </tr>
                    <tr>
                        <td>DOB:</td>
                        <td>{profile.dob}</td>

                    </tr>
                    <tr>
                        <td>Nationality :</td>
                        <td>{profile.nationality}</td>

                    </tr>
                </tbody>
            </table>
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
        </>
    );
}

export default EditProfile;