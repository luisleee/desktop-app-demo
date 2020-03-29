// Show version
var nodeVer = process.version;
var electronVer = process.versions["electron"]
document.getElementById("node-version").innerText = nodeVer;
document.getElementById("electron-version").innerText = electronVer;
// Handle button
var ipc = require("electron").ipcRenderer;
document.getElementById("oi-14-link").onclick = function () {
    ipc.send("oi-14-link","Clicked!");
}
ipc.on("oi-14-link",function(event,arg){
    console.log(arg);
});