const path = require('path');
const http = require('http');
const formatChatMsg = require('./utils/message');
const { userJoin, getCurrentUser } = require('./utils/users');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const botName = "Bot"

const socketio = require('socket.io');


const server = http.createServer(app);


const io = socketio(server);


io.on('connection', socket => {

    // Get message when join the room
    socket.on('joinRoom', ({ userName, chatRoomName }) => {
        const user = userJoin(socket.id, userName, chatRoomName);
        socket.join(user);

        console.log(user);
        // Welcome to a new user
        socket.emit('message', formatChatMsg(botName, 'Welcome to the chat'));
        // console.log(formatChatMsg(botName, 'Welcome to the chat'));

        // Broadcast when a user connect
        socket.broadcast
            .to(user.room)
            .emit('message', formatChatMsg(botName, `${user.username} joined the chat`));

    });


    // Listen for chat message
    socket.on('chatMessage', (msg) => {
        io.emit('message', msg)
        console.log(msg);
    })

    // Broadcast when a user disconnect
    socket.on('disconnect', () => {
        io.emit('message', formatChatMsg(botName, `User left the chat`));
    });
});


app.use(express.static(path.join(__dirname, 'public')));


server.listen(PORT, () => {
    console.log(`Server running @ 127.0.0.1 ${PORT}`);
});