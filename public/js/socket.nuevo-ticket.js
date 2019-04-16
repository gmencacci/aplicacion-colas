var socket = io();

let label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado al servidor');
});


socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});



$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguiente) {
        label.text(siguiente);
    });
})


socket.on('estadoActual', function(data) {
    label.text(data.actual);
})