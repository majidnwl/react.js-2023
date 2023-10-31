import React, { useEffect, useState } from "react";
import { getCategoryActionResponse } from "../../redux/features/categorySlice";
import { getUserActionResponse } from "../../redux/features/userSlice";

const BlogItem = ({ blog }) => {
    const [category, setCategory] = useState({});
    const [user, setUser] = useState({});

    useEffect(() => {
        if (blog) {
            getCategoryActionResponse(blog.category_id).then((res) => {
                setCategory(res.data);
            });
            getUserActionResponse(blog.user_id).then((res) => {
                setUser(res.data);
            });
        }
    }, [blog]);

    return (
        <tr>
            <td>
                <strong>{blog.title}</strong>
            </td>
            <td>{category.title}</td>
            <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                    <li
                        data-bs-toggle="tooltip"
                        data-popup="tooltip-custom"
                        data-bs-placement="top"
                        className="avatar avatar-xs pull-up"
                        title={`${user.first_name} ${user.last_name} `}
                    >
                        <img
                            src={user.profile_picture}
                            alt="Avatar"
                            className="rounded-circle"
                        />
                    </li>
                </ul>
            </td>
            <td>
                <span className="badge bg-label-primary me-1">
                    {user.gender}
                </span>
            </td>
            <td>
                <button type="button" className="border-0">
                    <i class="bx bx-low-vision"></i>
                </button>
                <button type="button" className="border-0">
                    <i class="bx bx-edit"></i>
                </button>
                <button type="button" className="border-0">
                    <i class="bx bx-trash"></i>
                </button>
            </td>
        </tr>
    );
};

export default BlogItem;
