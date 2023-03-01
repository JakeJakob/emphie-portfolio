import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
}) 


// const r = document.getElementById("image");
// let vw = window.innerWidth;


// for (let i = 0; i < 100; i++) {
//   r.style.backgroundPosition = `${vw}px`;
//   vw -= 1;
// }


export default app
