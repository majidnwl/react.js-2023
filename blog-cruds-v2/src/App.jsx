import { Outlet } from "react-router-dom";
import { Footer, Header, Navbar } from "./components";

function App() {
    return (
        <>
            <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
                <div className="layout-container">
                    <Header />
                    <div className="layout-page">
                        <div className="content-wrapper">
                            <Navbar />
                            <div className="container-xxl flex-grow-1 container-p-y">
                                <Outlet />
                            </div>
                            <Footer />
                            <div className="content-backdrop fade"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="layout-overlay layout-menu-toggle" />
            <div className="drag-target" />
        </>
    );
}

export default App;
