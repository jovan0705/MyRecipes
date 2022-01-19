const axios = require('axios')

const imagekitAxios = axios.create({
    baseURL: 'https://upload.imagekit.io/api/v1/',
    auth: {
        username: 'private_tuI0W9YXaMB5UZWACMAX68tpkMI='
    }
})


module.exports = imagekitAxios