// Modules to control application life and create native browser window
const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    // show: false,
    backgroundColor: "#FFF", // DEFAULT: '#FFF'
    width: 800, // DEFAULT: 800
    height: 600, // DEFAULT: 600
    minWidth: 800, // DEFAULT: 0
    maxWidth: 1024, // DEFAULT: UNLIMITED
    minHeight: 600, // DEFAULT: 0
    maxHeight: 768, // DEFAULT: UNLIMITED
    resizable: true, // DEFAULT: true
    movable: true, // DEFAULT: true
    alwaysOnTop: false, //DEFAULT: false
    
    // title: "Goodbye, Moon?", //DEFAULT: "Electron"
    // frame: false, //DEFAUL: true
    // titleBarOverlay: 'hidden', //DEFAULT: 'default'
    // titleBarStyle: 'hidden-inset', //DEFAULT: 'default'

    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile("index.html");

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // //Wait for 'ready-to-show' to display our window
  // mainWindow.once("ready-to-show", () => {
  //   mainWindow.show();
  // });

  // //Emitted when the window is closed
  // mainWindow.on("closed", function () {
  //   // Dereference the window object, usually you would store windows
  //   // in an array if your app supports multi windows, this is the time
  //   // when you should delete the corresponding element.
  //   mainWindow = null;
  // });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
