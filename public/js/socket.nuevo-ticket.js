// Comando para establecer la conexion
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.info('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.info('Desconectado del servidor');
});

socket.on('estadoActual', function(resp) {
    console.info(resp);
    label.text(resp.actual);
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});