const jwt = require('jsonwebtoken')
const secret_key = "thisissecretkey"

const getToken = (payload) => {
    return jwt.sign(payload, secret_key)
}

const convertToken = (token) => {
    return jwt.verify(token, secret_key)
}

module.exports = {getToken, convertToken}