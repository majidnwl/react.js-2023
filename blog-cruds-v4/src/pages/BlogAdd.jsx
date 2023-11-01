import { BlogForm } from "../components";

const BlogAdd = () => {

    return (
        <>
            <h4 className="breadcrumb-wrapper py-3 mb-4">
                <span className="text-muted fw-light">Blogs /</span> Add New
            </h4>
            <BlogForm />
        </>
    );
};

export default BlogAdd;
