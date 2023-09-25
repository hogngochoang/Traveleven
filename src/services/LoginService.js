import axios from './axios';

const loginAPI = (email, password) => {
    return axios.post("login",{email, password})
}

export {loginAPI}