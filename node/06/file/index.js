const express = require("express")
let index = express()
index.listen(3535)

//使用中间件来处理(格式化) 请求中的数据
index.use( express.json() )
index.use( express.urlencoded({extended:true}) );

//接受处理请求
index.post("/form",(req,res)=>{
    console.log(req.body);
    console.log(req.body.user);
    res.send("接收到了post请求")
})
