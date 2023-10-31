import axios from "axios"

export const getCategoryActionResponse = (id) => {
    return axios.get(`http://localhost:8000/categories/${id}`)
}