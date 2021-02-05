import Axios from "axios"

export const axiosInstance = Axios.create({
    baseURL: "http://mentorpaired-staging-backend.herokuapp.com/",
    timeout: 5000,
    headers: {
        Authorization: "JWT"
    }
})