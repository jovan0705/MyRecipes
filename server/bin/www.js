// const app = require('../app')
// const port = process.env.PORT || 5000

// app.listen(port, () => {
//     console.log(`app listening to http://localhost:${port}`)
// })

const app = require('../app')
const http = require('http')
const server = http.createServer(app)
const PORT = process.env.PORT || 3000
    server.listen(PORT, _ => {
        console.log(`server listening on http://localhost:${PORT}`)
    })

module.exports = server