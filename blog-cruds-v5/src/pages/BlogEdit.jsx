import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BlogForm } from "../components";
import { editBlogAction } from "../redux/features/blogSlice";

const BlogEdit = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const editBlogHandle = (blog) => {
        blog.updated_at = new Date();
        dispatch(editBlogAction(blog));
        // console.log('edit blog', blog)
        navigate("/blog");
    };
    return (
        <>
            <h4 className="breadcrumb-wrapper py-3 mb-4">
                <span className="text-muted fw-light">Blogs /</span> Edit Blog
            </h4>
            <BlogForm handleBlog={editBlogHandle} />
        </>
    );
};

export default BlogEdit;
