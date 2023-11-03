import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCategoriesAction } from "../../redux/features/categorySlice";
import { listUsersAction } from "../../redux/features/userSlice";
import { useNavigate, useParams } from "react-router-dom";
import { emptyBlog, listBlogAction } from "../../redux/features/blogSlice";

const BlogForm = ({ handleBlog }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { categories } = useSelector((state) => state.category);
    const { users } = useSelector((state) => state.user);
    const { blog } = useSelector((state) => state.blog);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [contentHtml, setContentHtml] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const [blogId, setBlogId] = useState(-1);

    useEffect(() => {
        dispatch(listCategoriesAction());
        dispatch(listUsersAction());

        return () => dispatch(emptyBlog());
    }, []);

    useEffect(() => {
        if (id) {
            dispatch(listBlogAction(id));
        }
    }, [id]);

    useEffect(() => {
        if (Object.keys(blog).length > 0) {
            setBlogId(blog.id);
            setTitle(blog.title);
            setCategory(blog.category_id);
            setAuthor(blog.user_id);
            setDescription(blog.description);
            setContentHtml(blog.content_html);
            setPhotoUrl(blog.photo_url);
            setCreatedAt(blog.created_at);
        }
    }, [blog]);

    const addBlogSubmit = (e) => {
        e.preventDefault();
        const blog = {
            title,
            description,
            photo_url: photoUrl,
            user_id: author,
            category_id: category,
            content_html: contentHtml,
            created_at: createdAt,
        };
        if (blogId !== -1) {
            blog.id = blogId;
        }
        handleBlog(blog);
    };

    return (
        <div className="card mb-4">
            <form className="card-body" onSubmit={addBlogSubmit}>
                <div className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Title</label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            placeholder="Blog Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Description</label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            placeholder="Blog Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Photo URL</label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            placeholder="Blog Image Link"
                            value={photoUrl}
                            onChange={(e) => setPhotoUrl(e.target.value)}
                        />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Author</label>
                        <select
                            required
                            className="form-control"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        >
                            <option value="">Select Author</option>
                            {users.map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.first_name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Category</label>
                        <select
                            required
                            className="form-control"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">Select Category</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Blog Content</label>
                        <CKEditor
                            editor={ClassicEditor}
                            required
                            data={contentHtml}
                            onChange={(event, editor) => {
                                setContentHtml(editor.getData());
                            }}
                        />
                    </div>
                </div>
                <hr className="my-4 mx-n4" />
                <div className="pt-4">
                    <button
                        type="submit"
                        className="btn btn-primary me-sm-3 me-1"
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        className="btn btn-label-secondary"
                        onClick={() => navigate("/blog")}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BlogForm;
