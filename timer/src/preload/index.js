import { ipcRenderer } from "electron";

window.subscribeForEntries = callback => {
  ipcRenderer.on('entries', callback);
}