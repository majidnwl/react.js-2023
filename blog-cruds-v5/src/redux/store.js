import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./features/blogSlice";
import categorySlice from "./features/categorySlice";
import userSlice from "./features/userSlice";

export const store = configureStore({
    reducer: {
        blog: blogSlice,
        category: categorySlice,
        user: userSlice
    }
})