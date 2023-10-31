const os = require('node:os');

console.log('info os:');
console.log('__________________________');

console.log('Nombre os ', os.platform());
console.log('Version os ', os.release());
console.log('Arquitectura os ', os.arch());
console.log('cpu ', os.cpus());

console.log('uptime os ', os.uptime() / 60 / 60);