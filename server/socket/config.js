const app = require('../app')
const { createServer } = require('http');
const httpServer = createServer(app);
const io = require('socket.io')(httpServer, {
    cors: {
        origin: '*',
    }
});

let messageData = [];
io.on('connection', (socket) => {
    console.log(`User connected`);

    // socket.on("join_room", (data) => {
    //     // console.log(data);
    //     socket.join(data.room)
    //     console.log(`${data.username} joined room: ${data.room}`);
    // })

    socket.on("send_msg", (data) => {
        console.log(data);
        // socket.to(data.room).emit("get_msg", data);
        io.emit("get_msg", data);
        messageData.push(data);
        console.log(messageData);
    })

    // socket.on('disconnect', () => {
    //     console.log(`User disconnected`);
    // })
})

module.exports = io