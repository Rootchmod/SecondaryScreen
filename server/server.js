let ws = require("nodejs-websocket");
let os = require("os");


let server = ws.createServer(function (conn) {
    conn.on('text', function (str) {
    })

    
    // 每间隔两秒发送一次系统信息   测试正常
    setInterval(()=>{
        conn.sendText(JSON.stringify(os),()=>{
            console.log("the os data send is success!");
        })
    },2000);
 
    conn.on("close", function (code, reason) {
        console.log("关闭连接");
    })
    conn.on("error", function (code, reason) {
        console.log("异常关闭");
    });
}).listen(8082);
console.log("websocket connected")



var fs = require('fs'); // 引入fs模块
 
// 写入文件内容（如果文件不存在会创建一个文件）
// 传递了追加参数 { 'flag': 'a' }
fs.writeFile('./os.txt', JSON.stringify(os), { 'flag': 'a' }, function(err) {
    if (err) {
        throw err;
    }
 
    console.log('Hello.');
 
});