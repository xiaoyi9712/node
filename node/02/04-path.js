const path = require('path')
//path 模块主要处理路径
// console.log(path);
// console.log(__dirname);只找到文件名
// console.log(__filename);一直找到文件名后面的文件
// let p =path.join("node","05","test.txt")
// console.log(p);
// let p = path.join(__dirname,"03")
// console.log(p);
// let p =path.join("./a","../b","work/3.txt")
// console.log(p);
// let p =path.join("./a","/c","work/3.txt")
// console.log(p);
let p =path.resolve("./a","/c","work/3.txt")
console.log(p);





