import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/assets/css/core.css";
import "../src/assets/css/theme-default.css";
import "../src/assets/fonts/boxicons.css";
import "../src/assets/fonts/flag-icons.css";
import "../src/assets/fonts/fontawesome.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Blogs, Home } from "./pages";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <Home /> },
            { path: "blog", element: <Blogs /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
