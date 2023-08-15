import 'application.css';

window.onload = () => {
  const button = document.getElementById('action');
  button.addEventListener('click', () => {
    window.open('https://github.com');
  })

  window.addEventListener('online', () => {
    const alert = new Notification('My app', {
      body: 'You are online'
    });
  })
  window.addEventListener('offline', () => {
    const alert = new Notification('My app', {
      body: 'You are offline'
    });
  })

}