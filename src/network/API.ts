import axios from 'axios';
const token = localStorage.getItem('accessToken')
    ? localStorage.getItem('accessToken')
    : '';
const API = axios.create({
    baseURL: 'http://localhost:5000',
    // headers: { 'Access-Control-Allow-Origin': true },
    headers: {
        Authorization: `Bearer ${token}`,
    },
});
export default API;
