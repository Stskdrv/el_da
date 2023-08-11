// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
import { app, screen, BrowserWindow, Menu, Tray, ipcMain, remote, dialog } from 'electron';
import icon from 'eliconTemplate.png';
import path from 'path';
const remoteMain = require('@electron/remote/main');
remoteMain.initialize();

ipcMain.on('offline', () => {
  console.log('App is offline');
});

ipcMain.on('online', () => {
  console.log('App is offline');
});

const createWindow = (width, height) => {
  let window = new BrowserWindow({
    minWidth: 400,
    minHeight: 400,
    width: 800,
    height: 800,
    maxHeight: height,
    maxWidth: width,
    show: false,
    backgroundColor: '#778beb',
    titleBarStyle: 'hidden',
    webPreferences: {
      preload: path.join(app.getAppPath(), 'preload', 'index.js'),
      // contextIsolation: false
    }
  });

  const tray = new Tray(path.resolve(__dirname, icon));

  tray.setToolTip('Hey bro!');


  const trayMenu = new Menu.buildFromTemplate([
    {
      label: 'show/hide',
      click() {
        window.isVisible() ? window.hide() : window.show();
      }
    },
    {
      role: 'quit'
    },
  ]);

  tray.setContextMenu(trayMenu);

  window.loadFile('renderer/index.html');
  window.webContents.openDevTools({ mode: 'detach' });

  window.on('ready-to-show', () => {
    window.show()
  });

}



app.on('ready', () => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  createWindow(width, height);

})