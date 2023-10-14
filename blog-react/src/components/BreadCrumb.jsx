import { Link } from "react-router-dom";

const BreadCrumb = ({ heading }) => {
    return (
        <div
            className="breadcrumbs section-padding bg-[url('../../assets/images/all-img/bred.html')] bg-cover bg-center bg-no-repeat"
            style={{ paddingBottom: "0px" }}
        >
            <div className="container text-center">
                <h2>{heading}</h2>
                <nav>
                    <ol className="flex items-center justify-center space-x-3">
                        <li className="breadcrumb-item">
                            <Link to="/">Home </Link>
                        </li>
                        <li className="breadcrumb-item">-</li>
                        <li className="text-primary">{heading}</li>
                    </ol>
                </nav>
            </div>
        </div>
    );
};

export default BreadCrumb;
