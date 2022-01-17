const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.listen(port, () => {
    console.log(`app listening to http://localhost:${port}`)
})