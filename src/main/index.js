// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
import path from 'path'
import { app, screen,  BrowserWindow } from 'electron'

app.on('ready', () => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

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
   });

   window.loadFile('renderer/index.html');
   window.webContents.openDevTools();

   window.on('ready-to-show', () => {
    window.show()
   })

  
})