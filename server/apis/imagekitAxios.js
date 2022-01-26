const axios = require('axios')

const imagekitAxios = axios.create({
    baseURL: 'https://upload.imagekit.io/api/v1/',
    auth: {
        username: process.env.IMAGEKIT_KEY
    }
})


module.exports = imagekitAxios