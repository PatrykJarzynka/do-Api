import axios from 'axios'

const baseURL = "https://connections-api.herokuapp.com";

const api = axios.create({
    baseURL
})

export default api;