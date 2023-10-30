import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    blogs: []
}

export const blogSlice = createSlice({
    name: 'blogSlice',
    initialState,
    reducers: {
        listBlogs: (state, action) => {
            state.blogs = action.payload
        }
    }
})

export const { listBlogs } = blogSlice.actions;
export default blogSlice.reducer;

export const listBlogsAction = () => dispatch => {
    axios.get('http://localhost:8000/posts')
        .then(res => {
            dispatch(listBlogs(res.data))
        })
}