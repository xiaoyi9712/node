const fs = require("fs")
fs.link("../03/01.js","../03/02.js",err=>{if(err)throw err})
//复制粘贴同时可以改名字  文件才行