import { app, BrowserWindow } from 'electron';
import { Storage } from './storage';
import path from 'path';

export default class TimerApp {
    constructor() {
        this.storage = new Storage();  
        this.subscribeForAppEvents();
        app.whenReady().then(() => this.createWindow());
    };

    createWindow() {
        this.window = new BrowserWindow({
            title: CONFIG.name,
            width: CONFIG.width,
            height: CONFIG.height,
            minWidth: CONFIG.width,
            minHeight:  CONFIG.height,
            maxHeight: CONFIG.height,
            maxWidth: CONFIG.width,
            titleBarStyle: 'hidden',
            webPreferences: {
                preload: path.join(app.getAppPath(), 'preload', 'index.js') // this function build path to our preload script
            }
        })
        this.window.loadFile('renderer/index.html');

        this.window.webContents.on('did-finish-load', () => {
            // here we send data taht we took from fs to renderer process -> 
            this.window.webContents.send('entries', { entries: this.storage.get('entries') });
        })

       this.window.webContents.openDevTools({ mode: 'detach' });


        this.window.on('closed', () => {
            this.window = null
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