const os= require("os");
const freeMemory = os.freemem();
const totalMemory= os.totalmem();

console.log(os.freemem());
console.log(os.hostname());
console.log(os.homedir());
console.log(os.platform());
console.log(os.arch());
console.log(`${freeMemory/1024/1024/1024}`);
console.log(`${totalMemory/1024/1024/1024}`);
console.log(os.tmpdir());
console.log(os.type());