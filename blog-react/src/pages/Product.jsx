import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import axios from "axios";
import { useParams } from "react-router-dom";
import Imageslider from "../components/ImageSlider";

const Product = () => {
    const [product, setProduct] = useState({});
    const { productId } = useParams();
    useEffect(() => {
        if (productId) {
            axios
                .get("https://dummyjson.com/products/" + productId)
                .then((res) => {
                    setProduct(res.data);
                });
        }
    }, [productId]);
    return (
        <>
            <BreadCrumb heading={product.title} />
            <div className="nav-tab-wrapper tabs  section-padding">
                <div className="container">
                    <div className="grid grid-cols-12 gap-[30px]">
                        <div className="lg:col-span-12 col-span-12">
                            <div className="bg-[#F8F8F8] rounded-md">
                                <Imageslider images={product.images} />
                                {/* <img
                                    src="/src/assets/images/all-img/b-s-1.png"
                                    alt
                                    className=" rounded-t-md mb-10"
                                /> */}
                                <div className="px-10 pb-10">
                                    <div className="flex  flex-wrap  xl:space-x-10 space-x-5 mt-6 mb-6">
                                        <a
                                            className=" flex items-center space-x-2"
                                            href="#"
                                        >
                                            <img
                                                src="/src/assets/images/svg/user3.svg"
                                                alt
                                            />
                                            <span>Edumim</span>
                                        </a>
                                        <a
                                            className=" flex items-center space-x-2"
                                            href="#"
                                        >
                                            <img
                                                src="/src/assets/images/svg/calender.svg"
                                                alt
                                            />
                                            <span>3 21 Feb, 22</span>
                                        </a>
                                        <a
                                            className=" flex items-center space-x-2"
                                            href="#"
                                        >
                                            <img
                                                src="/src/assets/images/icon/clock.svg"
                                                alt
                                            />
                                            <span>3 Min Read</span>
                                        </a>
                                        <a
                                            className=" flex items-center space-x-2"
                                            href="#"
                                        >
                                            <img
                                                src="/src/assets/images/svg/comments.svg"
                                                alt
                                            />
                                            <span>02 Comments</span>
                                        </a>
                                    </div>
                                    <h3>{product.title}</h3>
                                    <blockquote className=" bg-secondary p-8 rounded-md bg-[url('../images/all-img/bb.html')] bg-cover bg-no-repeat bg-center my-8 text-white">
                                        <img
                                            src="/src/assets/images/svg/q.svg"
                                            alt
                                        />
                                        <div className=" text-xl font-semibold my-6">
                                            {product.description}
                                        </div>
                                    </blockquote>
                                    
                                    <div className="grid xl:grid-cols-2 grid-cols-1  gap-5 md:mt-14 mt-8 ">
                                        <ul className="flex items-center space-x-3 ">
                                            <li className=" text-black font-semibold">
                                                Tags:
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className=" px-3 py-1  bg-white rounded hover:text-primary"
                                                >
                                                    Business
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className=" px-3 py-1  bg-white rounded hover:text-primary"
                                                >
                                                    Education
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className=" px-3 py-1  bg-white rounded hover:text-primary"
                                                >
                                                    Design
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="flex space-x-3 xl:justify-end items-center  ">
                                            <li className=" text-black font-semibold">
                                                Share On:
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="flex h-8 w-8"
                                                >
                                                    <img
                                                        src="/src/assets/images/icon/fb.svg"
                                                        alt
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="flex h-8 w-8"
                                                >
                                                    <img
                                                        src="/src/assets/images/icon/tw.svg"
                                                        alt
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="flex h-8 w-8"
                                                >
                                                    <img
                                                        src="/src/assets/images/icon/pn.svg"
                                                        alt
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="flex h-8 w-8"
                                                >
                                                    <img
                                                        src="/src/assets/images/icon/ins.svg"
                                                        alt
                                                    />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* related post  */}
                                    <div className="grid xl:grid-cols-2 grid-cols-1  gap-[30px] md:mt-14 mt-8">
                                        <a
                                            className=" flex space-x-4 shadow-box7 rounded p-5 bg-white"
                                            href="#"
                                        >
                                            <div className="flex-none ">
                                                <div className="h-20 w-20  rounded">
                                                    <img
                                                        src="/src/assets/images/all-img/rc-1.png"
                                                        alt
                                                        className=" w-full h-full object-cover rounded"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-1 ">
                                                <span className=" text-primary  text-base mb-1">
                                                    Prev Post
                                                </span>
                                                <div className="mb-1 font-semibold text-black">
                                                    How Technology Can Help You
                                                    Stay Healthy
                                                </div>
                                            </div>
                                        </a>
                                        {/* end single */}
                                        <a
                                            className=" flex  flex-row-reverse shadow-box7 bg-white rounded p-5"
                                            href="#"
                                        >
                                            <div className="flex-none ">
                                                <div className="h-20 w-20  rounded ml-4">
                                                    <img
                                                        src="/src/assets/images/all-img/rc-3.png"
                                                        alt
                                                        className=" w-full h-full object-cover rounded"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-1 text-right ">
                                                <span className=" text-primary  text-base mb-1">
                                                    Next Post
                                                </span>
                                                <div className="mb-1 font-semibold text-black">
                                                    How Technology Can Help You
                                                    Stay Healthy
                                                </div>
                                            </div>
                                        </a>
                                        {/* end single */}
                                    </div>
                                </div>
                            </div>
                            {/* comments start */}
                            <div className=" mt-14">
                                <h3 className=" mb-6">3 Comments</h3>
                                <ul className="comments space-y-4">
                                    <li className="block border-b border-[#ECECEC] pb-6 mt-6 last:border-0 last:pb-0">
                                        <div className="flex">
                                            <div className="flex-none">
                                                <div className="h-[72px] w-[72px] rounded-full mr-6">
                                                    <img
                                                        src="../../..//src/assets/images/all-img/ins-1.html"
                                                        alt
                                                        className="w-full block h-full object-contain rounded-full"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex flex-wrap justify-between mb-2">
                                                    <div>
                                                        <span className="text-xl  font-semibold text-black block mb-1">
                                                            Ferira Watson
                                                        </span>
                                                        <span className=" block">
                                                            Oct 09, 2021
                                                        </span>
                                                    </div>
                                                    <a
                                                        href="#"
                                                        className=" inline-flex px-3 py-1 rounded text-secondary bg-[#E3F9F6] hover:text-white hover:bg-secondary h-[35px]
                      items-center space-x-2 leading-[1]"
                                                    >
                                                        <span className=" text-xl leading-[1] top-[3px] relative">
                                                            <iconify-icon
                                                                icon="charm:forward"
                                                                rotate="180deg"
                                                            />
                                                        </span>
                                                        <span className=" leading-[1]">
                                                            Reply
                                                        </span>
                                                    </a>
                                                </div>
                                                <p>
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form
                                                </p>
                                            </div>
                                        </div>
                                        <ul className="comments mt-6 space-y-4 ml-14 border-t border-[#ECECEC]">
                                            <li className="block border-b border-[#ECECEC] pb-6 mt-6 last:border-0 last:pb-0">
                                                <div className="flex">
                                                    <div className="flex-none">
                                                        <div className="h-[72px] w-[72px] rounded-full mr-6">
                                                            <img
                                                                src="../../..//src/assets/images/all-img/ins-3.html"
                                                                alt
                                                                className="w-full block h-full object-contain rounded-full"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex flex-wrap justify-between mb-2">
                                                            <div>
                                                                <span className="text-xl  font-semibold text-black block mb-1">
                                                                    Ferira
                                                                    Watson
                                                                </span>
                                                                <span className=" block">
                                                                    Oct 09, 2021
                                                                </span>
                                                            </div>
                                                            <a
                                                                href="#"
                                                                className=" inline-flex px-3 py-1 rounded text-secondary bg-[#E3F9F6] hover:text-white hover:bg-secondary h-[35px]
                              items-center space-x-2 leading-[1]"
                                                            >
                                                                <span className=" text-xl leading-[1] top-[3px] relative">
                                                                    <iconify-icon
                                                                        icon="charm:forward"
                                                                        rotate="180deg"
                                                                    />
                                                                </span>
                                                                <span className=" leading-[1]">
                                                                    Reply
                                                                </span>
                                                            </a>
                                                        </div>
                                                        <p>
                                                            There are many
                                                            variations of
                                                            passages of Lorem
                                                            Ipsum available, but
                                                            the majority have
                                                            suffered alteration
                                                            in some form
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="block">
                                        <div className="flex">
                                            <div className="flex-none">
                                                <div className="h-[72px] w-[72px] rounded-full mr-6">
                                                    <img
                                                        src="../../..//src/assets/images/all-img/ins-2.html"
                                                        alt
                                                        className="w-full block h-full object-contain rounded-full"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex flex-wrap justify-between mb-2">
                                                    <div>
                                                        <span className="text-xl  font-semibold text-black block mb-1">
                                                            Ferira Watson
                                                        </span>
                                                        <span className=" block">
                                                            Oct 09, 2021
                                                        </span>
                                                    </div>
                                                    <a
                                                        href="#"
                                                        className=" inline-flex px-3 py-1 rounded text-secondary bg-[#E3F9F6] hover:text-white hover:bg-secondary h-[35px]
                      items-center space-x-2 leading-[1]"
                                                    >
                                                        <span className=" text-xl leading-[1] top-[3px] relative">
                                                            <iconify-icon
                                                                icon="charm:forward"
                                                                rotate="180deg"
                                                            />
                                                        </span>
                                                        <span className=" leading-[1]">
                                                            Reply
                                                        </span>
                                                    </a>
                                                </div>
                                                <p>
                                                    There are many variations of
                                                    passages of Lorem Ipsum
                                                    available, but the majority
                                                    have suffered alteration in
                                                    some form
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* Reply start */}
                            <div className=" mt-14">
                                <h3 className=" mb-4">Leave A Reply</h3>
                                <div>
                                    Your email address will not be published.
                                    Requires fields are marked*
                                </div>
                                <div className=" md:grid-cols-2 grid grid-cols-1 gap-[30px] mt-6 ">
                                    <div>
                                        <input
                                            type="text"
                                            className=" from-control"
                                            placeholder="Name*"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            className=" from-control"
                                            placeholder="Email*"
                                        />
                                    </div>
                                    <div className="md:col-span-2 col-span-1">
                                        <input
                                            type="url"
                                            className=" from-control"
                                            placeholder="Website Address"
                                        />
                                    </div>
                                    <div className="md:col-span-2 col-span-1">
                                        <textarea
                                            className=" from-control"
                                            placeholder="Your Message*"
                                            rows={5}
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                                <button className="btn btn-primary mt-[30px]">
                                    Post Comment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
