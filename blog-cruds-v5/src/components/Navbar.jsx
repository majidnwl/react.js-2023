import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <aside
            id="layout-menu"
            className="layout-menu-horizontal menu-horizontal menu bg-menu-theme flex-grow-0"
        >
            <div className="container-xxl d-flex h-100">
                <ul className="menu-inner">
                    <li className="menu-item active">
                        <Link
                            to="/"
                            className="menu-link menu-toggle"
                        >
                            <i className="menu-icon tf-icons bx bx-home-circle" />
                            <div data-i18n="Dashboards">Home</div>
                        </Link>
                    </li>
                    <li className="menu-item active">
                        <Link
                            to="/blog"
                            className="menu-link menu-toggle"
                        >
                            <i className="menu-icon tf-icons bx bx-home-circle" />
                            <div data-i18n="Dashboards">Blogs</div>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Navbar;
