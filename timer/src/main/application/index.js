import { app, BrowserWindow } from 'electron';

export default class TimerApp {
    constructor() {
        this.subscribeForAppEvents();
        app.whenReady().then(() => this.createWindow());
    };

    createWindow() {
        this.window = new BrowserWindow({
            title: CONFIG.name,
            width: CONFIG.width,
            height: CONFIG.height,
            webPreferences: {
                worldSafeExecuteJavaScript: true,
            }
        })
        this.window.loadFile('renderer/index.html');

        this.window.webContents.openDevTools();


        this.window.on('closed', () => {
            win = null
        })
    };

    subscribeForAppEvents() {
        app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') {
                app.quit()
            }
        })

        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0) {
                this.createWindow()
            }
        })
    };
};