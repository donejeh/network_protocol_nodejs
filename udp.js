const dgram = require('dgram');
const socket = dgram.createSocket('udp4'); //udp4 or udp6

socket.on('message',(msg, rinfo) =>{
    console.log(`Server got: ${msg} form ${rinfo.address} : ${rinfo.port}`)
})

socket.bind(8081);