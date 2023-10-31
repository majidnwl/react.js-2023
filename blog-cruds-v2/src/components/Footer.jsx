import React from "react";

const Footer = () => {
    return (
        <footer className="content-footer footer bg-footer-theme">
            <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                <div className="mb-2 mb-md-0">
                    © , made with ❤️ by
                    <a
                        href="https://pixinvent.com"
                        target="_blank"
                        className="footer-link fw-semibold"
                    >
                        PIXINVENT
                    </a>
                </div>
                <div>
                    <a
                        href="https://themeforest.net/licenses/standard"
                        className="footer-link me-4"
                        target="_blank"
                    >
                        License
                    </a>
                    <a
                        href="https://1.envato.market/pixinvent_portfolio"
                        target="_blank"
                        className="footer-link me-4"
                    >
                        More Themes
                    </a>
                    <a
                        href="https://pixinvent.com/demo/frest-clean-bootstrap-admin-dashboard-template/documentation-bs5/"
                        target="_blank"
                        className="footer-link me-4"
                    >
                        Documentation
                    </a>
                    <a
                        href="https://pixinvent.ticksy.com/"
                        target="_blank"
                        className="footer-link d-none d-sm-inline-block"
                    >
                        Support
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
