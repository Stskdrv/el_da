import 'application.css';
const {ipcRenderer} = require('electron');


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
  action.addEventListener('click', loadAndDisplayData);
}