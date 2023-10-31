import React from "react";
import { BlogsList } from "../components";

const Blogs = () => {
    return (
        <>
            <h4 className="py-3 breadcrumb-wrapper mb-4">
                <span className="text-muted fw-light">Blogs /</span> List All
            </h4>
            <BlogsList />
        </>
    );
};

export default Blogs;
