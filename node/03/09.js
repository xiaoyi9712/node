const fs = require("fs")
fs.rmdir("06",err=>{if(err)throw err})//删除空文件夹remove

//已存在的文件夹会报错
fs.mkdir("../js/header",{recursive:true},err=>{if(err)throw err})//创建一个不存在的文件夹里面再创建一个不存在的文件夹