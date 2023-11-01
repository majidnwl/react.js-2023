import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    blogs: [],
    blog: {}
}

export const blogSlice = createSlice({
    name: 'blogSlice',
    initialState,
    reducers: {
        listBlogs: (state, action) => {
            state.blogs = action.payload
        },
        listBlog: (state, action) => {
            state.blog = action.payload
        }
    }
})

export const { listBlogs, listBlog } = blogSlice.actions;
export default blogSlice.reducer;

export const listBlogAction = (id) => dispatch => {
    axios.get(`http://localhost:8000/posts/${id}`)
    .then(res => {
        dispatch(listBlog(res.data))
    })
}
export const listBlogsAction = () => dispatch => {
    axios.get('http://localhost:8000/posts')
        .then(res => {
            dispatch(listBlogs(res.data))
        })
}