import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogItem from "./BlogItem";
import { listBlogsAction } from "../../redux/features/blogSlice";
import ViewBlog from "../../pages/BlogView";

const BlogsList = () => {
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blog.blogs);

    useEffect(() => {
        dispatch(listBlogsAction());
    }, []);

    return (
        <>
            <div className="card">
                <h5 className="card-header">List All Blogs</h5>
                <div className="table-responsive text-nowrap">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Author</th>
                                <th>Gender</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                            {blogs.map((blog) => (
                                <BlogItem key={blog.id} blog={blog} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <ViewBlog /> */}
        </>
    );
};

export default BlogsList;
