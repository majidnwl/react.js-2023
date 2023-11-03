import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { emptyBlog, listBlogAction } from "../redux/features/blogSlice";
import { getCategoryActionResponse } from "../redux/features/categorySlice";
import { getUserActionResponse } from "../redux/features/userSlice";

const BlogView = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { blog } = useSelector((state) => state.blog);
    const [category, setCategory] = useState({});
    const [user, setUser] = useState({});

    useEffect(() => {
        return () => dispatch(emptyBlog());
    }, []);

    useEffect(() => {
        if (Object.keys(blog).length > 0) {
            getCategoryActionResponse(blog.category_id).then((res) => {
                setCategory(res.data);
            });
            getUserActionResponse(blog.user_id).then((res) => {
                setUser(res.data);
            });
        }
    }, [blog]);

    useEffect(() => {
        if (id) {
            dispatch(listBlogAction(id));
        }
    }, [id]);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h1>{blog.title}</h1>
                        <p>{blog.description}</p>
                        <img
                            src={blog.photo_url}
                            alt="Blog Post"
                            className="img-fluid"
                        />
                        <div
                            dangerouslySetInnerHTML={{
                                __html: blog.content_html,
                            }}
                        ></div>
                        <p>Created at: {blog.created_at}</p>
                        <p>Updated at: {blog.updated_at}</p>
                        <p>Author: {user.first_name + " " + user.last_name}</p>
                        <p>Category: {category.title}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogView;
