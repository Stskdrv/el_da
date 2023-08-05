
const {ipcRenderer} = require('electron');
import 'application.css';
const remote = require('@electron/remote');
const { BrowserWindow } = remote;



ipcRenderer.on('mainchannel', (_, data) => {
  alert(data.message);
});

const loadAndDisplayData = () => {
  loadData().then(data => {
    document.getElementById('message').innerHTML = data.number
  });
};

const loadData = () => {
  return new Promise((res, rej) => {
    ipcRenderer.send('loaddata');
    ipcRenderer.once('data', (_, data) => res(data))
  })
};


window.onload = () => {
  const action = document.getElementById('action');
  action.addEventListener('click', () => {
    let win = new BrowserWindow({
      width: 500,
      height: 500,
    });
    // dialog.showMessageBox({message: 'You have clicked here!?'})
  });
};

// window.onload = () => {
//   const action = document.getElementById('action');
//   action.addEventListener('click', loadAndDisplayData);
// }