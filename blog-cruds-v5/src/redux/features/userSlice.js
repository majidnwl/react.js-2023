import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    users: []
}
export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        listUsers: (state, action) => {
            state.users = action.payload
        }
    }
});

export const { listUsers } = userSlice.actions;
export default userSlice.reducer;

export const listUsersAction = () => dispatch => {
    axios.get('http://localhost:8000/users')
        .then(res => {
            dispatch(listUsers(res.data))
        })
}

export const getUserActionResponse = (id) => {
    return axios.get(`http://localhost:8000/users/${id}`)
}