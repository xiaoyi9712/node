const http = require("http")

http
    .createServer((req,res)=>{//创建http访问
        res.writeHead(200,{//啥头信息?200是状态码
            "content-type":"text/html;charset=utf-8",//类型 html文本类型 输出utf-8格式
            "Access-Control-Allow-Origin":"*"//允许所有域访问
        });
        res.write("<h1>abcdefg</h1>")//访问时抛出这些东西  可以多次res.write("内容")
        res.end("\nHellow world!")//访问时抛出这些东西  写了end请求就结束了 如果不写end,刷新一直转圈
    })
    .listen(3383)//监听端口3383