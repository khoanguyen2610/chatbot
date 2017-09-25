// server.js
// Import all our dependencies
var express     = require('express');
var mongoose    = require('mongoose');
var app         = express();
var server      = require('http').Server(app);
var io          = require('socket.io').listen(8080);


/*============================================================
 * Socket.io
 *============================================================*/
io.sockets.on('connection',function(socket){
    console.log('Connected server socker-id:' + socket.id);

    /*=============================================
     * Join room
     * @input: room_id
     *=============================================*/
    socket.on('join-room', function(params){
        socket.join(params.room_id);
        console.log(socket.adapter.rooms);
    });

    /*=============================================
     * Get request from client
     * @input: room_id, content
     *=============================================*/
    socket.on('send-message', function(params){
        // io.sockets.emit('get-message', msg); //emait all
        // socket.broadcast.emit('get-message', msg); //emit all without socket send request
        socket.emit('get-message', params.content); //emit only socket request
        socket.in(params.room_id).emit('get-message', params.content); //emit only socket in room request without socket request
    })

    /*=============================================
     * Event when session disconnect
     *=============================================*/
    socket.on('disconnect', function () {
        console.log('User disconnect');
    });
})
