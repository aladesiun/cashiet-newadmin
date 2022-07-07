import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from '../../contexts/Admin-context';
import toast from 'react-hot-toast';
import httpServices from "../../hooks/http-services";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useGet from "../../hooks/get";
const EditProduct = () => {
    let { _id } = useParams();
    const { data, Loading, Error} = useGet('/products/' + _id);
    const Products =data ? data.product : " ";
    console.log(Products);

    useEffect(() => {
    }, [])
    return (
        <>
        {data && data.name}
        </>
    )
}
export default EditProduct;