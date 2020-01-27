const express=require("express")
const path = require("path")
let ico = express()
ico.listen(6161)
ico.use( express.static("./pub"))//客户端访问6161端口/pub文件  端口输入localhost6161/1.gif就可以了
ico.get("/",(req,res)=>{
    res.send("xixiix")
})
ico.get("/favicon.ico",(req,res)=>{//图标路由
    res.sendFile(path.join(__dirname,"./pub/1.gif"))//发送文件 title图标变了必须要绝对路径
})