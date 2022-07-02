import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from '../../contexts/Admin-context';
import toast from 'react-hot-toast';
import httpServices from "../../services/http-services";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Product = () => {
    let {_id}=useParams();
    const [Loading, setLoading] = useState(false);
    const [NotifySuccess, setNotifySuccess] = useState({ status: false, message: "" })
    const [NotifyFailed, setNotifyFailed] = useState({ status: false, message: "" })
    const [Products, setProducts] = useState([]);
    const getProduct = async () => {
        setLoading(true);
        try {
            const response = await httpServices.get('/products')
            if (response.status) {
                setLoading(false)
                let result = response.data.products.results;
                console.log(response.data.products.results);
                setProducts(result)
                toast.success(response.data.message)
            }
            else {
                setNotifyFailed(
                    {
                        ...NotifyFailed,
                        status: true,
                        message: response.message
                    })
                setTimeout(() => {
                    setNotifyFailed(
                        {
                            ...NotifyFailed,
                            status: false,
                        })
                }, 3000);
            }
        }
        catch (e) {
            setLoading(false)
            toast.error(e.message)
        }
    }
    return ( 
        <>
        <div className="page-body">
    <div className="container-fluid">
        <div className="page-header">
            <div className="row">
                <div className="col-lg-6">
                    <div className="page-header-left">
                        <h3>
                            Product Detail
                            <small>Multikart Admin panel</small>
                        </h3>
                    </div>
                </div>
                <div className="col-lg-6">
                    <ol className="breadcrumb pull-right">
                        <li className="breadcrumb-item">
                            <a href="index.html">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-home"
                                >
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                            </a>
                        </li>
                        <li className="breadcrumb-item">Physical</li>
                        <li className="breadcrumb-item active">Product Detail</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid">
        <div className="card">
            <div className="row product-page-main card-body">
                <div className="col-xl-4">
                    <div className="product-slider owl-carousel owl-theme owl-loaded owl-drag" id="sync1">
                        <div className="owl-stage-outer">
                            <div className="owl-stage" style={{transform: 'translate3d(-3581px, 0px, 0px)', transition: 'all 0.25s ease 0s', width: '8187px'}}>
                                <div className="owl-item cloned" style={{width: '511.656px'}}>
                                    <div className="item"><img src="assets/images/pro3/2.jpg" alt="" className="blur-up lazyloaded" /></div>
                                </div>
                                <div className="owl-item cloned" style={{width: '511.656px'}}>
                                    <div className="item"><img src="assets/images/pro3/1.jpg" alt="" className="blur-up lazyloaded" /></div>
                                </div>
                                <div className="owl-item cloned" style={{width: '511.656px'}}>
                                    <div className="item"><img src="assets/images/pro3/27.jpg" alt="" className="blur-up lazyloaded" /></div>
                                </div>
                                <div className="owl-item cloned" style={{width: '511.656px'}}>
                                    <div className="item"><img src="assets/images/pro3/2.jpg" alt="" className="blur-up lazyloaded" /></div>
                                </div>
                                <div className="owl-item" style={{width: '511.656px'}}>
                                    <div className="item"><img src="assets/images/pro3/2.jpg" alt="" className="blur-up lazyloaded" /></div>
                                </div>
                                <div className="owl-item" style={{width: '511.656px'}}>
                                    <div className="item"><img src="assets/images/pro3/27.jpg" alt="" className="blur-up lazyloaded" /></div>
                                </div>
                                <div className="owl-item" style={{width: '511.656px'}}>
                                    <div className="item"><img src="assets/images/pro3/1.jpg" alt="" className="blur-up lazyloaded" /></div>
                                </div>
                                <div className="owl-item active" style={{width: '511.656px'}}>
                                    <div className="item"><img src="assets/images/pro3/27.jpg" alt="" className="blur-up lazyloaded" /></div>
                                </div>
                                <div className="owl-item" style={{width: '511.656px'}}>
                                    <div className="item"><img src="assets/images/pro3/2.jpg" alt="" className="blur-up lazyloaded" /></div>
                                </div>
                                <div className="owl-item" style={{width: '511.656px'}}>
                                    <div className="item"><img src="assets/images/pro3/1.jpg" alt="" className="blur-up lazyloaded" /></div>
                                </div>
                                <div className="owl-item" style={{width: '511.656px'}}>
                                    <div className="item"><img src="assets/images/pro3/27.jpg" alt="" className="blur-up lazyloaded" /></div>
                                </div>
                                <div className="owl-item" style={{width: '511.656px'}}>
                                    <div className="item"><img src="assets/images/pro3/2.jpg" alt="" className="blur-up lazyloaded" /></div>
                                </div>
                                <div className="owl-item cloned" style={{width: '511.656px'}}>
                                    <div className="item"><img src="assets/images/pro3/2.jpg" alt="" className="blur-up lazyloaded" /></div>
                                </div>
                                <div className="owl-item cloned" style={{width: '511.656px'}}>
                                    <div className="item"><img src="assets/images/pro3/27.jpg" alt="" className="blur-up lazyloaded" /></div>
                                </div>
                                <div className="owl-item cloned" style={{width: '511.656px'}}>
                                    <div className="item"><img src="assets/images/pro3/1.jpg" alt="" className="blur-up lazyloaded" /></div>
                                </div>
                                <div className="owl-item cloned" style={{width: '511.656px'}}>
                                    <div className="item"><img src="assets/images/pro3/27.jpg" alt="" className="blur-up lazyloaded" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-nav disabled">
                            <button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button>
                        </div>
                        <div className="owl-dots disabled"></div>
                    </div>
                    <div className="owl-carousel owl-theme owl-loaded owl-drag" id="sync2">
                        <div className="owl-stage-outer">
                            <div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '1054px'}}>
                                <div className="owl-item active" style={{width: '116.664px', marginRight: '15px'}}>
                                    <div className="item"><img src="assets/images/pro3/2.jpg" alt="" className="blur-up lazyloaded" /></div>
                                </div>
                                <div className="owl-item active" style={{width: '116.664px', marginRight: '15px'}}>
                                    <div className="item"><img src="assets/images/pro3/27.jpg" alt="" className="blur-up lazyloaded" /></div>
                                </div>
                                <div className="owl-item active" style={{width: '116.664px', marginRight: '15px'}}>
                                    <div className="item"><img src="assets/images/pro3/1.jpg" alt="" className="blur-up lazyloaded" /></div>
                                </div>
                                <div className="owl-item active current" style={{width: '116.664px', marginRight: '15px'}}>
                                    <div className="item"><img src="assets/images/pro3/27.jpg" alt="" className="blur-up lazyloaded" /></div>
                                </div>
                                <div className="owl-item" style={{width: '116.664px', marginRight: '15px'}}>
                                    <div className="item"><img src="assets/images/pro3/2.jpg" alt="" className="blur-up lazyloaded" /></div>
                                </div>
                                <div className="owl-item" style={{width: '116.664px', marginRight: '15px'}}>
                                    <div className="item"><img src="assets/images/pro3/1.jpg" alt="" className="blur-up lazyloaded" /></div>
                                </div>
                                <div className="owl-item" style={{width: '116.664px', marginRight: '15px'}}>
                                    <div className="item"><img src="assets/images/pro3/27.jpg" alt="" className="blur-up lazyloaded" /></div>
                                </div>
                                <div className="owl-item" style={{width: '116.664px', marginRight: '15px'}}>
                                    <div className="item"><img src="assets/images/pro3/2.jpg" alt="" className="blur-up lazyloaded" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-nav disabled">
                            <button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button>
                        </div>
                        <div className="owl-dots disabled"></div>
                    </div>
                </div>
                <div className="col-xl-8">
                    <div className="product-page-details product-right mb-0">
                        <h2>WOMEN PINK SHIRT</h2>
                        <div className="br-wrapper br-theme-fontawesome-stars-o">
                            <select id="u-rating-fontawesome-o" name="rating" data-current-rating="5" autocomplete="off" style={{display: 'none'}}>
                                <option onChange={()=>{}} value="1">1</option>
                                <option onChange={()=>{}} value="2">2</option>
                                <option onChange={()=>{}} value="3">3</option>
                                <option onChange={()=>{}} value="4">4</option>
                                <option onChange={()=>{}} value="5">5</option>
                            </select>
                            <div className="br-widget">
                                <a href="#" data-rating-value="1" data-rating-text="1" className="br-selected"></a><a href="#" data-rating-value="2" data-rating-text="2" className="br-selected"></a>
                                <a href="#" data-rating-value="3" data-rating-text="3" className="br-selected"></a><a href="#" data-rating-value="4" data-rating-text="4" className="br-selected"></a>
                                <a href="#" data-rating-value="5" data-rating-text="5" className="br-selected br-current"></a>
                            </div>
                        </div>
                        <hr />
                        <h6 className="product-title">product details</h6>
                        <p>
                            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt,
                            explicabo. Nemo enim ipsam voluptatem,
                        </p>
                        <div className="product-price digits mt-2">
                            <h3>$26.00 <del>$350.00</del></h3>
                        </div>
                        <ul className="color-variant">
                            <li className="bg-light0"></li>
                            <li className="bg-light1"></li>
                            <li className="bg-light2"></li>
                        </ul>
                        <hr />
                        <h6 className="product-title size-text">
                            select size <span className="pull-right"><a href="" data-bs-toggle="modal" data-bs-target="#sizemodal">size chart</a></span>
                        </h6>
                        <div className="modal fade" id="sizemodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Sheer Straight Kurta</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                    </div>
                                    <div className="modal-body"><img src="assets/images/size-chart.jpg" alt="" className="img-fluid blur-up lazyloaded" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="size-box">
                            <ul>
                                <li className="active"><a href="javascript:void(0)">s</a></li>
                                <li><a href="javascript:void(0)">m</a></li>
                                <li><a href="javascript:void(0)">l</a></li>
                                <li><a href="javascript:void(0)">xl</a></li>
                            </ul>
                        </div>
                        <div className="add-product-form">
                            <h6 className="product-title">quantity</h6>
                            <fieldset className="qty-box mt-2 ms-0">
                                <div className="input-group bootstrap-touchspin">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-primary btn-square bootstrap-touchspin-down" type="button"><i className="fa fa-minus"></i></button>
                                    </div>
                                    <div className="input-group-prepend"><span className="input-group-text bootstrap-touchspin-prefix" style={{display: 'none'}}></span></div>
                                    <input className="touchspin form-control" type="text" onChange={()=>{}} value="1" style={{display: 'block'}} />
                                    <div className="input-group-append"><span className="input-group-text bootstrap-touchspin-postfix" style={{display: 'none'}}></span></div>
                                    <div className="input-group-append ml-0">
                                        <button className="btn btn-primary btn-square bootstrap-touchspin-up" type="button"><i className="fa fa-plus"></i></button>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <hr />
                        <h6 className="product-title">Sales Ends In</h6>
                        <div className="timer">
                            <p id="demo">
                                <span>25 <span className="padding-l">:</span> <span className="timer-cal">Days</span> </span><span>22 <span className="padding-l">:</span> <span className="timer-cal">Hrs</span> </span>
                                <span>13 <span className="padding-l">:</span> <span className="timer-cal">Min</span> </span><span>57 <span className="timer-cal">Sec</span></span>
                            </p>
                        </div>
                        <div className="m-t-15">
                            <button className="btn btn-primary m-r-10" type="button">Add To Cart</button>
                            <button className="btn btn-secondary" type="button">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        </>
     );
}
 
export default Product;