var net = require('net');
var port = process.argv[2];
var server = net.createServer(socket => {
    socket.end(getNow() + '\n');
});
server.listen(port);

function getNow() {
    let date = new Date();
    let year = date.getFullYear();
    let month = completeWithZero(date.getMonth()+1,2);
    let day = completeWithZero(date.getDate(),2);
    let hour = completeWithZero(date.getHours(),2);
    let minute = completeWithZero(date.getMinutes(),2);
    return year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
}

function completeWithZero(number, length) { 
    let numberLength = number.toString().length;
    return '0'.repeat(length - numberLength) + number.toString();
}
