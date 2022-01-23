require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./router')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use(router);

module.exports = app