import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useGet from "../../hooks/get";
import { Carousel } from 'react-carousel-minimal';

const Product = () => {
    var CurrencyFormat = require('react-currency-format');

    let { _id } = useParams();
    const { data, Loading, Error } = useGet('/products/' + _id);
    const Products = data ? data.product : '';
    const ProductsGallery = Products.gallery ? Products.gallery.images.map((image) => image.url) : [];
    // const dataCarousel = ;
    const AddKeyToArr = (item, index) => {
        var fullname = {image: item};
        return fullname;
      }
      var output = ProductsGallery.map(AddKeyToArr);
    const CarouselData = [...output, { image: Products ? Products.image.url : '' }]
    console.log(CarouselData);
    console.log(ProductsGallery);
    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    } 
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
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
                                        Product Detail
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
                                    <li className="breadcrumb-item">Physical</li>
                                    <li className="breadcrumb-item active">Product Detail</li>
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
                        {Products &&
                            <div className="row product-page-main card-body">
                                <div className="col-xl-4">
                                    {/* <div className="img-td" style={{ width: '200px', maxHeight: '200px' }}><img src={ : ''} alt={"Products" + Products._id} className="img-fluid"></img></div> */}
                                    <Carousel
                                        data={CarouselData}
                                        time={3000}
                                        width="850px"
                                        height="500px"
                                        radius="10px"
                                        slideNumberStyle={slideNumberStyle}
                                        captionPosition="bottom"
                                        dots={true}
                                        automatic={true}
                                        pauseIconColor="white"
                                        pauseIconSize="40px"
                                        slideBackgroundColor="black"
                                        slideImageFit="fit"
                                        thumbnails={true}
                                        thumbnailWidth="100px"
                                        style={{
                                            textAlign: "center",
                                            maxWidth: "850px",
                                            maxHeight: "500px",
                                            margin: "40px auto",
                                        }}
                                    />
                                </div>
                                <div className="col-xl-6">
                                    <div className="product-page-details product-right mb-0">
                                        <h2>{Products.name}</h2>
                                        <div className="d-flex"> keywords: <p className="mx-2">{Products.keywords.toString()}</p></div>
                                        <hr />
                                        <h6 className="product-title">product details</h6>
                                        <p>
                                            {Products.description}
                                        </p>
                                        <div className="product-price digits mt-2">
                                            <h4><CurrencyFormat value={Products.price} displayType={'text'} thousandSeparator={true} prefix={'₦'} /></h4>
                                        </div>

                                        <hr />
                                        <h6 className="product-title size-text">
                                            Dimensions:
                                        </h6>
                                        <div>
                                            width:{Products.dimension.width}
                                        </div>
                                        <div>
                                            length:{Products.dimension.length}
                                        </div>
                                        <div>
                                            width:{Products.dimension.width}
                                        </div>
                                        <div>
                                            width:{Products.dimension.width}
                                        </div>
                                        <hr />
                                        <h6 className="product-title">Description</h6>
                                        <p>{Products.description}</p>
                                        <div className="m-t-15">
                                            <button className="btn btn-primary m-r-10" type="button">Delete</button>
                                            <a className="btn btn-secondary" href={"/product/edit/" + Products._id}>Edit</a>
                                        </div>
                                    </div>
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

export default Product;