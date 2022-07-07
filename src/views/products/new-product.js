import { useState, useContext, useEffect } from "react";
import toast from 'react-hot-toast';
import axios from "axios";
const AddProduct = () => {
    const [product, setProduct] = useState({ name: "", price: "", keywords: [], image: "", category: "", description: "", });
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
    const addProduct = (e) => {
        e.preventDefault()
        setLoading(true);

        axios.post({
            endpoint: endpoint + "/products",
            details: product,
        }).then((data) => {
            if (data.status) {
                setLoading(false);
                toast.success('success');

                window.location.href = "/products"

            }
            else {
                toast.error('An error occured please try again');
                setLoading(false);
                window.location.reload();
            }
        }).catch((error) => {
            setLoading(false);
            var error_message = error.response.data.message;
            toast.error(error_message);
        });
    };
    return (
        <div className="page-body">
        {/* Container-fluid starts*/}
        <div className="container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-lg-6">
                <div className="page-header-left">
                  <h3>Add Products
                    <small>Multikart Admin panel</small>
                  </h3>
                </div>
              </div>
              <div className="col-lg-6">
                <ol className="breadcrumb pull-right">
                  <li className="breadcrumb-item">
                    <a href="index.html">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                    </a>
                  </li>
                  <li className="breadcrumb-item">Digital</li>
                  <li className="breadcrumb-item active">Add Product</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* Container-fluid Ends*/}
        {/* Container-fluid starts*/}
        <div className="container-fluid">
          <div className="row product-adding">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5>General</h5>
                </div>
                <div className="card-body">
                  <div className="digital-add needs-validation">
                    <div className="form-group">
                      <label htmlFor="validationCustom01" className="col-form-label pt-0"><span>*</span>
                        Title</label>
                      <input className="form-control" id="validationCustom01" type="text" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="validationCustomtitle" className="col-form-label pt-0"><span>*</span> SKU</label>
                      <input className="form-control" id="validationCustomtitle" type="text" required />
                    </div>
                    <div className="form-group">
                      <label className="col-form-label categories-basic"><span>*</span>
                        Categories</label>
                      <select className="custom-select form-control" required>
                        <option value>--Select--</option>
                        <option value={1}>eBooks</option>
                        <option value={2}>Graphic Design</option>
                        <option value={3}>3D Impact</option>
                        <option value={4}>Application</option>
                        <option value={5}>Websites</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Sort Summary</label>
                      <textarea rows={5} cols={12} defaultValue={""} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="validationCustom02" className="col-form-label"><span>*</span>
                        Product Price</label>
                      <input className="form-control" id="validationCustom02" type="text" required />
                    </div>
                    <div className="form-group">
                      <label className="col-form-label"><span>*</span> Status</label>
                      <div className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
                        <label className="d-block" htmlFor="edo-ani">
                          <input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" />
                          Enable
                        </label>
                        <label className="d-block" htmlFor="edo-ani1">
                          <input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" />
                          Disable
                        </label>
                      </div>
                    </div>
                    <label className="col-form-label pt-0"> Product Upload</label>
                    <form className="dropzone digits dz-clickable" id="singleFileUpload" action="/upload.php">
                      <div className="dz-message needsclick"><i className="fa fa-cloud-upload" />
                        <h4 className="mb-0 f-w-600">Drop files here or click to upload.</h4>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5>Add Description</h5>
                </div>
                <div className="card-body">
                  <div className="digital-add needs-validation">
                    <div className="form-group mb-0">
                      <div className="description-sm">
                        <textarea id="editor1" name="editor1" cols={10} rows={4} style={{"display":"none"}} defaultValue={""} /><div className="ck ck-reset ck-editor ck-rounded-corners" role="application" dir="ltr" lang="en" aria-labelledby="ck-editor__label_e810245562d15852fbabc9524ebc88b7e"><label className="ck ck-label ck-voice-label" id="ck-editor__label_e810245562d15852fbabc9524ebc88b7e">Rich Text Editor</label><div className="ck ck-editor__top ck-reset_all" role="presentation"><div className="ck ck-sticky-panel"><div className="ck ck-sticky-panel__placeholder" style={{"display":"none"}} /><div className="ck ck-sticky-panel__content"><div className="ck ck-toolbar ck-toolbar_grouping" role="toolbar" aria-label="Editor toolbar"><div className="ck ck-toolbar__items"><div className="ck ck-dropdown ck-heading-dropdown"><button className="ck ck-button ck-off ck-button_with-text ck-dropdown__button" type="button" tabIndex={-1} aria-labelledby="ck-editor__aria-label_e0e958b98939a84fc3104cb7c0974a784" aria-haspopup="true"><span className="ck ck-tooltip ck-tooltip_s"><span className="ck ck-tooltip__text">Heading</span></span><span className="ck ck-button__label" id="ck-editor__aria-label_e0e958b98939a84fc3104cb7c0974a784">Paragraph</span><svg className="ck ck-icon ck-dropdown__arrow" viewBox="0 0 10 10"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z" /></svg></button><div className="ck ck-reset ck-dropdown__panel ck-dropdown__panel_se"><ul className="ck ck-reset ck-list"><li className="ck ck-list__item"><button className="ck ck-button ck-heading_paragraph ck-on ck-button_with-text" type="button" tabIndex={-1} aria-labelledby="ck-editor__aria-label_eae41ff237773097e11f86a552ccb63bd"><span className="ck ck-tooltip ck-tooltip_s ck-hidden"><span className="ck ck-tooltip__text" /></span><span className="ck ck-button__label" id="ck-editor__aria-label_eae41ff237773097e11f86a552ccb63bd">Paragraph</span></button></li><li className="ck ck-list__item"><button className="ck ck-button ck-heading_heading1 ck-off ck-button_with-text" type="button" tabIndex={-1} aria-labelledby="ck-editor__aria-label_e8c4473ce7e361063462d340e228176fc"><span className="ck ck-tooltip ck-tooltip_s ck-hidden"><span className="ck ck-tooltip__text" /></span><span className="ck ck-button__label" id="ck-editor__aria-label_e8c4473ce7e361063462d340e228176fc">Heading 1</span></button></li><li className="ck ck-list__item"><button className="ck ck-button ck-heading_heading2 ck-off ck-button_with-text" type="button" tabIndex={-1} aria-labelledby="ck-editor__aria-label_e47b3b11a6843ed9eb2b874ddb24fac9a"><span className="ck ck-tooltip ck-tooltip_s ck-hidden"><span className="ck ck-tooltip__text" /></span><span className="ck ck-button__label" id="ck-editor__aria-label_e47b3b11a6843ed9eb2b874ddb24fac9a">Heading 2</span></button></li><li className="ck ck-list__item"><button className="ck ck-button ck-heading_heading3 ck-off ck-button_with-text" type="button" tabIndex={-1} aria-labelledby="ck-editor__aria-label_e422a9a48d199ddbc1e7465fbc3086326"><span className="ck ck-tooltip ck-tooltip_s ck-hidden"><span className="ck ck-tooltip__text" /></span><span className="ck ck-button__label" id="ck-editor__aria-label_e422a9a48d199ddbc1e7465fbc3086326">Heading 3</span></button></li></ul></div></div><span className="ck ck-toolbar__separator" /><button className="ck ck-button ck-off" type="button" tabIndex={-1} aria-labelledby="ck-editor__aria-label_e0a7a08672ad293dc801fe87b65d5a015" aria-pressed="false"><svg className="ck ck-icon ck-button__icon" viewBox="0 0 20 20"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z" /></svg><span className="ck ck-tooltip ck-tooltip_s"><span className="ck ck-tooltip__text">Bold (Ctrl+B)</span></span><span className="ck ck-button__label" id="ck-editor__aria-label_e0a7a08672ad293dc801fe87b65d5a015">Bold</span></button><button className="ck ck-button ck-off" type="button" tabIndex={-1} aria-labelledby="ck-editor__aria-label_e45102bcc52e7b6dfc2bc8f727dceda93" aria-pressed="false"><svg className="ck ck-icon ck-button__icon" viewBox="0 0 20 20"><path d="m9.586 14.633.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z" /></svg><span className="ck ck-tooltip ck-tooltip_s"><span className="ck ck-tooltip__text">Italic (Ctrl+I)</span></span><span className="ck ck-button__label" id="ck-editor__aria-label_e45102bcc52e7b6dfc2bc8f727dceda93">Italic</span></button><button className="ck ck-button ck-off" type="button" tabIndex={-1} aria-labelledby="ck-editor__aria-label_eddc64657ca8ec56d7c15a4846d21c75f" aria-pressed="false"><svg className="ck ck-icon ck-button__icon" viewBox="0 0 20 20"><path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z" /></svg><span className="ck ck-tooltip ck-tooltip_s"><span className="ck ck-tooltip__text">Link (Ctrl+K)</span></span><span className="ck ck-button__label" id="ck-editor__aria-label_eddc64657ca8ec56d7c15a4846d21c75f">Link</span></button><button className="ck ck-button ck-off" type="button" tabIndex={-1} aria-labelledby="ck-editor__aria-label_e1bd8be536c43bf889ad103160153501e" aria-pressed="false"><svg className="ck ck-icon ck-button__icon" viewBox="0 0 20 20"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z" /></svg><span className="ck ck-tooltip ck-tooltip_s"><span className="ck ck-tooltip__text">Bulleted List</span></span><span className="ck ck-button__label" id="ck-editor__aria-label_e1bd8be536c43bf889ad103160153501e">Bulleted List</span></button><button className="ck ck-button ck-off" type="button" tabIndex={-1} aria-labelledby="ck-editor__aria-label_ec3bf47b54ae9072c12955c1099a9def0" aria-pressed="false"><svg className="ck ck-icon ck-button__icon" viewBox="0 0 20 20"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z" /></svg><span className="ck ck-tooltip ck-tooltip_s"><span className="ck ck-tooltip__text">Numbered List</span></span><span className="ck ck-button__label" id="ck-editor__aria-label_ec3bf47b54ae9072c12955c1099a9def0">Numbered List</span></button><span className="ck ck-toolbar__separator" /><button className="ck ck-button ck-disabled ck-off" type="button" tabIndex={-1} aria-labelledby="ck-editor__aria-label_e1c450778a500eab0dce5b026117af79e" aria-disabled="true"><svg className="ck ck-icon ck-button__icon" viewBox="0 0 20 20"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zm1.618-9.55L.98 9.358a.4.4 0 0 0 .013.661l3.39 2.207A.4.4 0 0 0 5 11.892V7.275a.4.4 0 0 0-.632-.326z" /></svg><span className="ck ck-tooltip ck-tooltip_s"><span className="ck ck-tooltip__text">Decrease indent</span></span><span className="ck ck-button__label" id="ck-editor__aria-label_e1c450778a500eab0dce5b026117af79e">Decrease indent</span></button><button className="ck ck-button ck-disabled ck-off" type="button" tabIndex={-1} aria-labelledby="ck-editor__aria-label_e448898e196d104723421b80997070ab0" aria-disabled="true"><svg className="ck ck-icon ck-button__icon" viewBox="0 0 20 20"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zM1.632 6.95 5.02 9.358a.4.4 0 0 1-.013.661l-3.39 2.207A.4.4 0 0 1 1 11.892V7.275a.4.4 0 0 1 .632-.326z" /></svg><span className="ck ck-tooltip ck-tooltip_s"><span className="ck ck-tooltip__text">Increase indent</span></span><span className="ck ck-button__label" id="ck-editor__aria-label_e448898e196d104723421b80997070ab0">Increase indent</span></button><span className="ck ck-toolbar__separator" /><span className="ck-file-dialog-button"><button className="ck ck-button ck-off" type="button" tabIndex={-1} aria-labelledby="ck-editor__aria-label_ef875ce702fa8f5bd0305894cf4681c8b"><svg className="ck ck-icon ck-button__icon" viewBox="0 0 20 20"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z" /></svg><span className="ck ck-tooltip ck-tooltip_s"><span className="ck ck-tooltip__text">Insert image</span></span><span className="ck ck-button__label" id="ck-editor__aria-label_ef875ce702fa8f5bd0305894cf4681c8b">Insert image</span></button><input className="ck-hidden" type="file" tabIndex={-1} accept="image/jpeg,image/png,image/gif,image/bmp,image/webp,image/tiff" multiple="true" /></span></div><span className="ck ck-toolbar__separator" /><div className="ck ck-dropdown ck-toolbar__grouped-dropdown ck-toolbar-dropdown"><button className="ck ck-button ck-off ck-dropdown__button" type="button" tabIndex={-1} aria-labelledby="ck-editor__aria-label_e227654f4322dccf5695a3d35bf26579f" aria-haspopup="true"><svg className="ck ck-icon ck-button__icon" viewBox="0 0 20 20"><circle cx="9.5" cy="4.5" r="1.5" /><circle cx="9.5" cy="10.5" r="1.5" /><circle cx="9.5" cy="16.5" r="1.5" /></svg><span className="ck ck-tooltip ck-tooltip_sw"><span className="ck ck-tooltip__text">Show more items</span></span><span className="ck ck-button__label" id="ck-editor__aria-label_e227654f4322dccf5695a3d35bf26579f">Show more items</span><svg className="ck ck-icon ck-dropdown__arrow" viewBox="0 0 10 10"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z" /></svg></button><div className="ck ck-reset ck-dropdown__panel ck-dropdown__panel_se"><div className="ck ck-toolbar" role="toolbar" aria-label="Dropdown toolbar"><div className="ck ck-toolbar__items"><button className="ck ck-button ck-off" type="button" tabIndex={-1} aria-labelledby="ck-editor__aria-label_e70abd1c27484e55d96b62fd484e6a8cb" aria-pressed="false"><svg className="ck ck-icon ck-button__icon" viewBox="0 0 20 20"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z" /></svg><span className="ck ck-tooltip ck-tooltip_s"><span className="ck ck-tooltip__text">Block quote</span></span><span className="ck ck-button__label" id="ck-editor__aria-label_e70abd1c27484e55d96b62fd484e6a8cb">Block quote</span></button><div className="ck ck-dropdown"><button className="ck ck-button ck-off ck-dropdown__button" type="button" tabIndex={-1} aria-labelledby="ck-editor__aria-label_ecf60154e8797a3aa2671e577aad33408" aria-haspopup="true"><svg className="ck ck-icon ck-button__icon" viewBox="0 0 20 20"><path d="M3 6v3h4V6H3zm0 4v3h4v-3H3zm0 4v3h4v-3H3zm5 3h4v-3H8v3zm5 0h4v-3h-4v3zm4-4v-3h-4v3h4zm0-4V6h-4v3h4zm1.5 8a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 17V4c.222-.863 1.068-1.5 2-1.5h13c.932 0 1.778.637 2 1.5v13zM12 13v-3H8v3h4zm0-4V6H8v3h4z" /></svg><span className="ck ck-tooltip ck-tooltip_s"><span className="ck ck-tooltip__text">Insert table</span></span><span className="ck ck-button__label" id="ck-editor__aria-label_ecf60154e8797a3aa2671e577aad33408">Insert table</span><svg className="ck ck-icon ck-dropdown__arrow" viewBox="0 0 10 10"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z" /></svg></button><div className="ck ck-reset ck-dropdown__panel ck-dropdown__panel_se" /></div><div className="ck ck-dropdown"><button className="ck ck-button ck-off ck-dropdown__button" type="button" tabIndex={-1} aria-labelledby="ck-editor__aria-label_ef3ebb48f423fdad28304e41c588023e2" aria-haspopup="true"><svg className="ck ck-icon ck-button__icon" viewBox="0 0 20 20"><path d="M18.68 3.03c.6 0 .59-.03.59.55v12.84c0 .59.01.56-.59.56H1.29c-.6 0-.59.03-.59-.56V3.58c0-.58-.01-.55.6-.55h17.38zM15.77 15V5H4.2v10h11.57zM2 4v1h1V4H2zm0 2v1h1V6H2zm0 2v1h1V8H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zM17 4v1h1V4h-1zm0 2v1h1V6h-1zm0 2v1h1V8h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zM7.5 7.177a.4.4 0 0 1 .593-.351l5.133 2.824a.4.4 0 0 1 0 .7l-5.133 2.824a.4.4 0 0 1-.593-.35V7.176v.001z" /></svg><span className="ck ck-tooltip ck-tooltip_s"><span className="ck ck-tooltip__text">Insert media</span></span><span className="ck ck-button__label" id="ck-editor__aria-label_ef3ebb48f423fdad28304e41c588023e2">Insert media</span><svg className="ck ck-icon ck-dropdown__arrow" viewBox="0 0 10 10"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z" /></svg></button><div className="ck ck-reset ck-dropdown__panel ck-dropdown__panel_se"><form className="ck ck-media-form ck-responsive-form" tabIndex={-1}><div className="ck ck-labeled-field-view ck-labeled-field-view_empty"><div className="ck ck-labeled-field-view__input-wrapper"><input type="text" className="ck ck-input ck-input-text ck-input-text_empty" id="ck-labeled-field-view-e7aa8dd4a205ddb1acae148b554cfbb05" aria-describedby="ck-labeled-field-view-status-e45ae659257555d3cdf21df41570a7a56" /><label className="ck ck-label" id="ck-editor__label_ebf531683ae7d356f38cd1870be801840" htmlFor="ck-labeled-field-view-e7aa8dd4a205ddb1acae148b554cfbb05">Media URL</label></div><div className="ck ck-labeled-field-view__status" id="ck-labeled-field-view-status-e45ae659257555d3cdf21df41570a7a56">Paste the media URL in the input.</div></div><button className="ck ck-button ck-disabled ck-off ck-button-save" type="submit" tabIndex={-1} aria-labelledby="ck-editor__aria-label_ed5593c6887f2a543c44e864904a34888" aria-disabled="true"><svg className="ck ck-icon ck-button__icon" viewBox="0 0 20 20"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z" /></svg><span className="ck ck-tooltip ck-tooltip_s"><span className="ck ck-tooltip__text">Save</span></span><span className="ck ck-button__label" id="ck-editor__aria-label_ed5593c6887f2a543c44e864904a34888">Save</span></button><button className="ck ck-button ck-off ck-button-cancel" type="button" tabIndex={-1} aria-labelledby="ck-editor__aria-label_efeb04030497eb6cac3925a9b7d8711ef"><svg className="ck ck-icon ck-button__icon" viewBox="0 0 20 20"><path d="m11.591 10.177 4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z" /></svg><span className="ck ck-tooltip ck-tooltip_s"><span className="ck ck-tooltip__text">Cancel</span></span><span className="ck ck-button__label" id="ck-editor__aria-label_efeb04030497eb6cac3925a9b7d8711ef">Cancel</span></button></form></div></div><button className="ck ck-button ck-disabled ck-off" type="button" tabIndex={-1} aria-labelledby="ck-editor__aria-label_e413900514ea2f4eaa3c1536a34cbbd1a" aria-disabled="true"><svg className="ck ck-icon ck-button__icon" viewBox="0 0 20 20"><path d="m5.042 9.367 2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z" /></svg><span className="ck ck-tooltip ck-tooltip_s"><span className="ck ck-tooltip__text">Undo (Ctrl+Z)</span></span><span className="ck ck-button__label" id="ck-editor__aria-label_e413900514ea2f4eaa3c1536a34cbbd1a">Undo</span></button><button className="ck ck-button ck-disabled ck-off" type="button" tabIndex={-1} aria-labelledby="ck-editor__aria-label_e24261230d47e6243250597e177685499" aria-disabled="true"><svg className="ck ck-icon ck-button__icon" viewBox="0 0 20 20"><path d="m14.958 9.367-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z" /></svg><span className="ck ck-tooltip ck-tooltip_s"><span className="ck ck-tooltip__text">Redo (Ctrl+Y)</span></span><span className="ck ck-button__label" id="ck-editor__aria-label_e24261230d47e6243250597e177685499">Redo</span></button></div></div></div></div></div></div></div></div><div className="ck ck-editor__main" role="presentation"><div className="ck-blurred ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline" lang="en" dir="ltr" role="textbox" aria-label="Rich Text Editor, main" contentEditable="true"><p><br data-cke-filler="true" /></p></div></div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h5>Meta Data</h5>
                </div>
                <div className="card-body">
                  <div className="digital-add needs-validation">
                    <div className="form-group">
                      <label htmlFor="validationCustom05" className="col-form-label pt-0"> Meta
                        Title</label>
                      <input className="form-control" id="validationCustom05" type="text" required />
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Meta Description</label>
                      <textarea rows={4} cols={12} defaultValue={""} />
                    </div>
                    <div className="form-group mb-0">
                      <div className="product-buttons">
                        <button type="button" className="btn btn-primary">Add</button>
                        <button type="button" className="btn btn-light">Discard</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Container-fluid Ends*/}
      </div>
    

    );
}

export default AddProduct;