import 'application.css';

window.onload = () => {
  const button = document.getElementById('action');
  button.addEventListener('click', () => {
    window.open('https://github.com');
  })
}