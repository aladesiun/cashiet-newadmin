import { useState, useContext, useEffect } from "react";

const CreateProfile = () => {
    const [product, setProduct]= useState({firstName:"", middleName:"", lastName:"", gender:"", nationality:"", dob:""});
    const [Loading, setLoading] = useState(false);
    let endpoint = process.env.REACT_APP_ENDPOINT;
    let token = process.env.REACT_APP_ADMIN_TOKEN;
    console.log(product);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const CreateProfile= ()=>{

    }
    return (
        <div className="card-body">
            <div className="row product-adding">

                <div className="col-xl-7">
                    <form className="needs-validation add-product-form" novalidate enctype='multipart/form-data' onSubmit={(e) => CreateProfile()}>
                        <div className="form">
                            <div className="form-group mb-3 row">
                                <label htmlFor="validationCustom01" className="col-xl-3 col-sm-4 mb-0">firstName :</label>
                                <div className="col-xl-8 col-sm-7">
                                    <input className="form-control" id="validationCustom01" type="text" required onChange={handleInputChange} name="name" />
                                </div>
                            </div>
                            <div className="form-group mb-3 row">
                                <label htmlFor="validationCustom01" className="col-xl-3 col-sm-4 mb-0">lastName :</label>
                                <div className="col-xl-8 col-sm-7">
                                    <input className="form-control" id="validationCustom01" type="text" required onChange={handleInputChange} name="price" />
                                </div>
                            </div>

                            <div className="form-group mb-3 row">
                                <label htmlFor="validationCustom01" className="col-xl-3 col-sm-4 mb-0">middleName :</label>
                                <div className="col-xl-8 col-sm-7">
                                    <input className="form-control" id="validationCustom01" type="text" required onChange={handleInputChange} name="keywords" />
                                </div>
                            </div>
                            <div className="form-group mb-3 row">
                                <label htmlFor="validationCustom01" className="col-xl-3 col-sm-4 mb-0">gender :</label>
                                <div className="col-xl-8 col-sm-7">
                                    <input className="form-control" id="validationCustom01" type="file" required onChange={handleInputChange} name="image" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group mb-3 row">
                            <label htmlFor="validationCustom01" className="col-xl-3 col-sm-4 mb-0">dob :</label>
                            <div className="col-xl-8 col-sm-7">
                                <input className="form-control" id="validationCustom01" type="text" required onChange={handleInputChange} name="category" />
                            </div>
                        </div>
                        <div className="form">
                            <div className="form-group row">

                                <div className="offset-xl-3 offset-sm-4 mt-4">
                                    <button type="submit" className="btn btn-primary">Add</button>
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