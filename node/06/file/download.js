const request = require("request")
const fs = require("fs")

let Word = "圣诞礼物"//搜索关键词
new Promise((res,rej)=>{
    request({//访问网址
        method:"GET",//请求信息
        headers:{//客户端信息,假装是一个用户浏览器
            "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36"
        },
        url:encodeURI("https://search.jd.com/Search?keyword="+Word+"&enc=utf-8")//把中文替换为URI编码格式
    },(err,resp,body)=>{ // 报错信息/body请求内容
        if(err)throw err;
        let urlArr = body.match(/\/\/.+?\.(jpg|png|jpeg|gif|webp)/gi);
        res(urlArr)//把body 内容传过去,then函数msg接收 
    })
}).then((msg)=>{
    // fs.mkdir("./main",(err)=>{//创建不存在的文件夹
    //     if(err)throw err;
    //     fs.writeFile("./main/1.txt",msg,err=>{if(err)throw err})//写入不存在的文件
    // })
    // let reg = /\/\/.+?\.(jpg|png|jpeg|gif)/gi;
    // let srcArr = msg.match(reg);
    msg.forEach((e,i)=>{
            let ext = e.match(/jpg|png|jpeg|gif|webp/)[0];//正则匹配 返回的是数组,[value,index,all]
            request(e).pipe(fs.createWriteStream("./images"+i+"."+ext))//写入流
    })
})