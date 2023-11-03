import React from "react";
import { BlogsList } from "../components";
import { Link } from "react-router-dom";

const Blogs = () => {
    return (
        <>
            <div className="d-flex justify-content-between py-4">
                <h4 className="breadcrumb-wrapper">
                    <span className="text-muted fw-light">Blogs /</span> List
                    All
                </h4>

                <Link to='add'><button type="button" class="btn btn-primary">
                    Add New
                </button>
                </Link>
            </div>
            <BlogsList />
        </>
    );
};

export default Blogs;
