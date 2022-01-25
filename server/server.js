const server = require('./socket/config')
const http = require('./bin/www')
server.attach(http)

// nodemon server.js