const url = require("url")
// console.log(url);
let URL = url.URL
let u = new URL("https://www.shiguangkey.com/video/1616?classId=3422&videoId=47155")
console.log(u);
console.log(u.searchParams);
// console.log(u.searchParams.get("classId"));




