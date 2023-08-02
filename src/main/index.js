// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
import { app, screen, BrowserWindow, Menu, Tray, ipcMain } from 'electron';
import icon from 'eliconTemplate.png';
import path from 'path';


const ctxMenuTemplate = [
  { label: 'option1' },
  { label: 'option2' },
  { label: 'option3' },
]
const ctxMenu = new Menu.buildFromTemplate(ctxMenuTemplate);


const createMenu = () => {
  const menu = new Menu.buildFromTemplate([
    {
      label: 'el_da',
      submenu: [
        {
          role: 'about'
        },
        {
          role: 'services'
        },
        {
          role: 'hide'
        },
        {
          label: 'Option 1',
          click() {
            console.log('Option 1 clicked')
          }
        },
      ]
    },
    {
      label: 'Quit',
      submenu: [
        {
          role: 'quit'
        },
      ]
    }
  ]);

  Menu.setApplicationMenu(menu);
};

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
      nodeIntegration: true,
      contextIsolation: false
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
  window.webContents.openDevTools();

  window.webContents.on('did-finish-load', () => {
    window.webContents.send('mainchannel', { message: 'app is running' })
  })

  window.on('ready-to-show', () => {
    window.show()
  });

  window.webContents.on('context-menu', (e, params) => {
    ctxMenu.popup(window, params.x, params.y)
  });


  ipcMain.on('loaddata', () => {
    const number = Math.random() * 10;
    window.webContents.send('data', { number });
  })

}

app.on('ready', () => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  createMenu();
  createWindow(width, height);

})