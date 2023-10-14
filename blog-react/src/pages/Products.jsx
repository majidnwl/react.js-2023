import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products?skip=0&limit=15")
            .then((res) => {
                setProducts(res.data.products);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                console.log("request finished...");
            });
    }, []);
    return (
        <>
            <BreadCrumb heading="Products" />
            <div className="nav-tab-wrapper tabs  section-padding">
                <div className="container">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className=" bg-white shadow-box12 rounded-[8px] transition duration-100 hover:shadow-box13"
                            >
                                <div className="course-thumb h-[260px] rounded-t-[8px]  relative">
                                    <img
                                        src={product.thumbnail}
                                        alt
                                        className=" w-full h-full object-cover rounded-t-[8px]"
                                    />
                                    <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">
                                        {product.category}
                                    </span>
                                </div>
                                <div className="course-content p-8">
                                    <div className="flex   lg:space-x-10 space-x-5 mb-5">
                                        <a
                                            className=" flex items-center space-x-2"
                                            href="blog-single.html"
                                        >
                                            <img
                                                src="/src/assets/images/svg/admin.svg"
                                                alt
                                            />
                                            <span>{product.brand}</span>
                                        </a>
                                        <a
                                            className=" flex items-center space-x-2"
                                            href="blog-single.html"
                                        >
                                            <img
                                                src="/src/assets/images/svg/calender.svg"
                                                alt
                                            />
                                            <span>${product.price}</span>
                                        </a>
                                    </div>
                                    <h4 className=" text-xl mb-5 font-bold">
                                        <Link
                                            to={'/products/' + product.id}
                                            className=" hover:text-primary transition duration-150"
                                        >
                                            {product.title}
                                        </Link>
                                    </h4>
                                    <a
                                        href="blog-single.html"
                                        className=" text-black font-semibold hover:underline transition duration-150"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;
