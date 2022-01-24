require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const router = require('./router')
const { getRecipes, getUserFavouritedRecipes, getLoggedInUserRecipes, getRecipeDetail } = require('./controller/recipeController')
// ! required for socket
// const { createServer } = require('http');
// const { Server } = require("socket.io");
// end of socket requirement

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use(router);

// // fetch all recipes 
// app.get('/recipes', getRecipes)
// // fetch all user favourited recipes (untested)
// app.get('/recipes/favourite', getUserFavouritedRecipes)
// // fetch all logged in user recipes (untested)
// app.get('/recipes/own', getLoggedInUserRecipes)
// // fetch recipe detail
// app.get('/recipes/:id', getRecipeDetail)

app.listen(port, () => {
    console.log(`app listening to http://localhost:${port}`)
})

// ! initial for socket
// const httpServer = createServer(app);
// const io = new Server(httpServer, {
//     cors: {
//         origin: '*',
//     }
// });

// io.on("connection", (socket) => {
//     console.log(`User connected: ${socket.id}`);

//     socket.on("join_room", (data) => {
//         socket.join(data)
//         console.log(`User with ID ${socket.id} joined room: ${data}`);
//     })

//     socket.on("send_msg", (data) => {
//         console.log(data);
//         socket.to(data.room).emit("get_msg", data);
//     })

//     socket.on('disconnect', () => {
//         console.log(`User disconnected: ${socket.id}`);
//     })
// });

// httpServer.listen(port, () => {
//     console.log(`Server running at port http://localhost:${port}`);
// })
// end of initial socket

module.exports = app