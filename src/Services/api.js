const axios = require('axios');

const api = axios.create({
    baseUrl: "http://localhost:3333"
});

export default api;