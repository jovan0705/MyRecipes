const app = require('../app')
const { createServer } = require('http');
const httpServer = createServer(app);
const io = require('socket.io')(httpServer, {
    cors: {
        origin: '*',
    }
});

let msgPro = [];
let msgAmt = [];
let homeCook = [];
io.on('connection', (socket) => {
    console.log(`User connected`);

    // socket.on("join_room", (data) => {
    //     // console.log(data);
    //     socket.join(data.room)
    //     console.log(`${data.username} joined room: ${data.room}`);
    // })

    socket.on("send_msg_pro", (data) => {
        console.log(data);
        // socket.to(data.room).emit("get_msg", data);
        msgPro.push(data);
        io.emit("get_msg_pro", data);
        console.log(msgPro);
    })

    socket.on("send_msg_amateur", (data) => {
        console.log(data);
        // socket.to(data.room).emit("get_msg", data);
        msgAmt.push(data);
        io.emit("get_msg_amateur", data);
        console.log(msgAmt);
    })

    socket.on("send_msg_home_cook", (data) => {
        console.log(data);
        // socket.to(data.room).emit("get_msg", data);
        homeCook.push(data);
        io.emit("get_msg_home_cook", data);
        console.log(homeCook);
    })

    // socket.on('disconnect', () => {
    //     console.log(`User disconnected`);
    // })
})

module.exports = io