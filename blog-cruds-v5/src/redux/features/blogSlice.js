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
        },
        addBlog: (state, action) => {
            state.blogs.push(action.payload)
        },
        emptyBlog: (state, action) => {
            state.blog = {}
        },
        editBlog: (state, action) => {
            state.blogs = state.blogs.map(blog => {
                if (blog.id === action.payload.id) {
                    return action.payload;
                } else {
                    return blog;
                }
            })
        }
    }
})

export const { listBlogs, listBlog, addBlog, emptyBlog, editBlog } = blogSlice.actions;
export default blogSlice.reducer;

export const editBlogAction = (blog) => dispatch => {
    console.log(blog)
    axios.put(`http://localhost:8000/posts/${blog.id}`, blog)
        .then(res => {
            dispatch(editBlog(res.data))
        })
}

export const addBlogAction = (blog) => dispatch => {
    axios.post('http://localhost:8000/posts', blog)
        .then(res => {
            dispatch(addBlog(res.data))
        })
}

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