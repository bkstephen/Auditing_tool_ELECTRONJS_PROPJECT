
const cons = require('./cons')
const { app, BrowserWindow, Menu } = require('electron')


function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 1250,
    height: 920,
    webPreferences: {
      nodeIntegration: true,
      additionalArguments: ["test"]
    }
  })
  // and load the index.html of the app.
  win.loadFile('index.html')
}
app.on('ready', createWindow)