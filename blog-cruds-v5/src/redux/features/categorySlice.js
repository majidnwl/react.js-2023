import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    categories: []
}

export const categorySlice = createSlice({
    name: 'categorySllice',
    initialState,
    reducers: {
        listCategories: (state, action) => {
            state.categories = action.payload;
        }
    }

})

export const { listCategories } = categorySlice.actions;
export default categorySlice.reducer;

export const listCategoriesAction = () => dispach => {
    axios.get('http://localhost:8000/categories')
        .then(res => {
            dispach(listCategories(res.data))
        })
}

export const getCategoryActionResponse = (id) => {
    return axios.get(`http://localhost:8000/categories/${id}`)
}