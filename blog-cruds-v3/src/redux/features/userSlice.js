import axios from "axios"

export const getUserActionResponse = (id) => {
    return axios.get(`http://localhost:8000/users/${id}`)
}