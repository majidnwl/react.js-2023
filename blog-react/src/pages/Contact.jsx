import React from "react";
import BreadCrumb from "../components/BreadCrumb";

const Contact = () => {
    return (
        <>
        <BreadCrumb heading="Contact Us" />
        <div className="nav-tab-wrapper tabs  section-padding">
            <div className="container">
                <div className=" grid grid-cols-12 gap-[30px]">
                    <div className="xl:col-span-5 lg:col-span-6 col-span-12 ">
                        <div className="mini-title">Contact Us</div>
                        <h4 className="column-title ">
                            Get In Touch
                            <span className="shape-bg">Today</span>
                        </h4>
                        <div>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered.
                        </div>
                        <ul className=" list-item space-y-6 pt-8">
                            <li className="flex">
                                <div className="flex-none mr-6">
                                    <div className>
                                        <img
                                            src="/src/assets/images/svg/mail.svg"
                                            alt
                                            className
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h4 className=" lg:text-xl text-lg mb-1">
                                        Email-Us :
                                    </h4>
                                    <div>
                                        <a
                                            href="https://bestwpware.com/cdn-cgi/l/email-protection"
                                            className="__cf_email__"
                                            data-cfemail="8dcee2e3f9eceef9f4e2f8ffe0ece4e1cdeae0ece4e1a3eee2e0"
                                        >
                                            [email&nbsp;protected]
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="flex">
                                <div className="flex-none mr-6">
                                    <div className>
                                        <img
                                            src="/src/assets/images/svg/call.svg"
                                            alt
                                            className
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h4 className=" lg:text-xl text-lg mb-1">
                                        Call Us:
                                    </h4>
                                    <div>
                                        +88012 2910 1781, +88019 6128 1689
                                    </div>
                                </div>
                            </li>
                            <li className="flex">
                                <div className="flex-none mr-6">
                                    <div className>
                                        <img
                                            src="/src/assets/images/svg/map.svg"
                                            alt
                                            className
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h4 className="lg:text-xl text-lg mb-1">
                                        Office :
                                    </h4>
                                    <div>Mountain Green Road 2389, NY, USA</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="xl:col-span-7 lg:col-span-6 col-span-12">
                        <div className="bg-white shadow-box7 p-8 rounded-md">
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
                                <div>
                                    <input
                                        type="text"
                                        className=" from-control"
                                        placeholder="Phone No *"
                                    />
                                </div>
                                <div>
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
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Contact;
