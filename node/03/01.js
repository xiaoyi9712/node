const EventEmitter = require("events").EventEmitter
let afei = new EventEmitter()
let fn = ()=>{console.log("goudanshijian出发了");
}
//绑定事件
afei.on("goudan",fn)
console.log(2)
//触发事件
afei.emit("goudan")
//事件解绑
afei.off("goudan",fn)