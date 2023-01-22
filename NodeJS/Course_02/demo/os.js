import os from 'os';

console.log("Operation System", os.platform());
console.log("Архитектура системы", os.arch());
console.log("Процессоры", os.cpus());
console.log("Memory", os.freemem());
console.log("Total memeory", os.totalmem());
console.log("Home dir", os.homedir());
console.log("Time", os.uptime());