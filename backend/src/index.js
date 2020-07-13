const express = require('express');
const routes = require('./routes');

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);

io.on('connection', socket => {
    console.log('a user connected :D');
    socket.on('chat message', msg => {
        console.log(msg);
        io.emit('chat message', msg);
    });
});

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('api running on port:' + 3333));   
server.listen(6666, () => console.log('socket server running on port:' + 6666));
