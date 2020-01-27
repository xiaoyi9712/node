/*
rename()重命名.移动,可以移动文件还有文件夹,无论文件夹内是否有东西
*/
const fs = require("fs")
fs.rename("../05/01.js","../03/09.js",err=>{if(err)throw err})
console.log(2);
