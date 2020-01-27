const fs = require("fs")
let rs = fs.createReadStream("./1.txt","utf8")//可读流
let ws = fs.createWriteStream("./3.txt")//可写流
// ws.write("小白同学")
rs.on("data",(d)=>{//一段一段的读,
    ws.write(d)//读完一段写入一段
})
// rs.pipe(ws)//直接读的时候就写入