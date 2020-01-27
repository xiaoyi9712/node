const fs = require("fs")
const path = require("path")
let p = path.join(__dirname,"test.txt")

fs.readFile(p,"utf8",(err,data)=>{//读取之后data返回读取到的数据已utf8的模式....readFile异步读取文件
    if(err)throw err;//如果出错了 抛出错误
    console.log(data);//如果没错执行下面代码   异步比同步执行慢
    
})

let data = fs.readFileSync(p,"utf8")//readFileSync同步操作 如果错误.用try catch解决  try{let data = fs.readFileSync(p,"utf8");console.log(data);}catch(e){log(错误代码)}
console.log(data);
console.log(2);




fs.writeFile(//写入文件,文件不存在默认创建文件,不能创建文件夹 也没有返回内容
        "1.txt",
        "小白好好学习!",
        {flag:"w"},
        (err)=>{
            if(err)throw err;
        }
)
fs.writeFileSync("2.txt","加油")//同步写入文件,cry catch 抛出错误;没有返回内容


fs.unlink("test.txt",err=>{if(err)throw err})// 删除文件




