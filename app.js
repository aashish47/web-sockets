var express = require('express');
var app = express();
var socket = require('socket.io');

app.set('view engine','ejs');
app.use(express.static('public'));



var server = app.listen(3000,function(){
    console.log('Listening to port 3000');
})

var io = socket(server);
io.on('connection',function(socket){
    console.log('made socket connection',socket.id);

    socket.on('chat',function(data){
        io.emit('chat',data);
    })

    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data);
    })
})