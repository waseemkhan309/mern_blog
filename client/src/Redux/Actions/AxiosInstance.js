import axios from 'axios';
import Store from '../Store';
import { setToken, getToken, removeToken } from '../../utils/Token';

// create a new instance of axios
const api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_DOMAIN,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
})

// request
api.interceptors.request.use(
    (config) => {
        const accessToken = getToken('access_token');
        if (accessToken) {
            // config.headers.Authorization = `Bearer ${JSON.parse(accessToken)}`;
            config.headers.Authorization = accessToken;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)
// response
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default api;