const express = require("express")//express模块
let app = express()

app.listen(8888)//监听端口8888

app.use("/",(req,res,next)=>{
    res.send("这是通过use方法监听到的路由")//中间件 use可以监听各种请求 可以有多个中间件 !!可以不写路由,默认根路由
    next();//中间件必须要next后才能执行后面的
})
app.get("/",(req,res)=>{//得到根路由请求
    res.send("hellow express!")//发送相关信息
})

