import axios from 'axios';

//https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=0de2cd46b836af5dd18f


const api = axios.create({
    baseURL: 'https://free.currconv.com/api/v7/'
});


export default api;