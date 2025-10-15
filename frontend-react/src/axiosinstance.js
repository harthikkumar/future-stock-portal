import axios  from "axios";

const baseURL = import.meta.env.VITE_BACKEND_BASE_API
const axiosInstance = axios.create({
    baseURL: baseURL,
})

// request interceptor 
axiosInstance.interceptors.request.use(
    function(config){
        console.log('request ===> ', config);
        const accessToken = localStorage.getItem('accessToken');
        if(accessToken){
            config.headers["authorization"] = `Bearer ${accessToken}`
        }
        return config;
    },
    function(error){
        return promise.reject(error);
    }
)



export default axiosInstance