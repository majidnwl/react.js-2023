import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { useState } from "react";

const BlogForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [contentHtml, setContentHtml] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");

    console.log(contentHtml)
    return (
        <div className="card mb-4">
            <form className="card-body">
                <div className="row g-3">
                    <div className="col-md-6">
                        <label
                            className="form-label"
                            htmlFor="multicol-username"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            id="multicol-username"
                            className="form-control"
                            placeholder="john.doe"
                        />
                    </div>
                    <div className="col-md-6">
                        <label
                            className="form-label"
                            htmlFor="multicol-username"
                        >
                            Description
                        </label>
                        <input
                            type="text"
                            id="multicol-username"
                            className="form-control"
                            placeholder="john.doe"
                        />
                    </div>
                    <div className="col-md-4">
                        <label
                            className="form-label"
                            htmlFor="multicol-username"
                        >
                            Photo URL
                        </label>
                        <input
                            type="text"
                            id="multicol-username"
                            className="form-control"
                            placeholder="john.doe"
                        />
                    </div>
                    <div className="col-md-4">
                        <label
                            className="form-label"
                            htmlFor="multicol-username"
                        >
                            Author
                        </label>
                        <input
                            type="text"
                            id="multicol-username"
                            className="form-control"
                            placeholder="john.doe"
                        />
                    </div>
                    <div className="col-md-4">
                        <label
                            className="form-label"
                            htmlFor="multicol-username"
                        >
                            Category
                        </label>
                        <input
                            type="text"
                            id="multicol-username"
                            className="form-control"
                            placeholder="john.doe"
                        />
                    </div>
                    <div className="col-md-12">
                        <label
                            className="form-label"
                            htmlFor="multicol-username"
                        >
                            Blog Content
                        </label>
                        <CKEditor
                            // config={{
                            //     extraPlugins: [uploadPlugin],
                            // }}
                            editor={ClassicEditor}
                            data={contentHtml}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setContentHtml(data);
                            }}
                        />
                        {/* <textarea
                            rows={10}
                            type="text"
                            id="multicol-username"
                            className="form-control"
                            placeholder="john.doe"
                        ></textarea> */}
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
                    <button type="reset" className="btn btn-label-secondary">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BlogForm;
