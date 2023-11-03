import { useDispatch } from "react-redux";
import { BlogForm } from "../components";
import { useNavigate } from "react-router-dom";
import { addBlogAction } from "../redux/features/blogSlice";

const BlogAdd = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addBlogHandle = (blog) => {
        blog.updated_at = new Date();
        blog.created_at = new Date();
        dispatch(addBlogAction(blog));
        navigate("/blog");
    };
    return (
        <>
            <h4 className="breadcrumb-wrapper py-3 mb-4">
                <span className="text-muted fw-light">Blogs /</span> Add New
            </h4>
            <BlogForm handleBlog={addBlogHandle} />
        </>
    );
};

export default BlogAdd;
