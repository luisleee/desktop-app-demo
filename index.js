/*
oi-14-desktop is the desktop app for oi-14
Copyright (C) 2020  李嘉嵘

oi-14-desktop is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

oi-14-desktop is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with oi-14-desktop.  If not, see <https://www.gnu.org/licenses/>. 
*/

const electron = require("electron");
const { app, BrowserWindow } = electron;
const ipc = electron.ipcMain;

let windows = new Set();

function createWindow() {
    let newWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    newWindow.loadFile("app/index.html");
    newWindow.on("closed", function() {
        windows.delete(newWindow);
        newWindow = null;
    });
    windows.add(newWindow);
    return newWindow;
}

app.on("ready", createWindow);

app.on("window-all-closed", function() {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", function() {
    if(windows.size === 0){
        createWindow();
    }
});

ipc.on("oi-14-link", function(event, arg) {
    let window = new BrowserWindow({
        width: 600,
        height: 700
    });
    window.loadURL("https://github.com/oi-14");
    window.on("closed", function() {
        windows.delete(window);
        window = null;
    });
    windows.add(window);
    event.sender.send("oi-14-link", "Handled!");
});
