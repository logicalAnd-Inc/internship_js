let hbg = document.getElementById('toggle');
let menu = document.getElementById('menu');
const changeHbg = () => {
  if (hbg.checked){
    menu.classList.remove('open');
    menu.classList.add('close');
  } else {
    menu.classList.add('open');
    menu.classList.remove('close');
  }

};
hbg.onchange = changeHbg;


console.log(hbg);