const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.nav_bar');
const navlink = document.querySelectorAll('.nav_link');
hamburger.onclick = () => {
 hamburger.classList.toggle('open');
 navbar.classList.toggle('open');
}

navlink.forEach(n => n.addEventListener('click', () => {
 hamburger.classList.remove('open');
 navbar.classList.remove('open');
}))

window.addEventListener('scroll', reveal);

function reveal() {
 let reveals = document.querySelectorAll('.reveal');

 for(let i = 0; i < reveals.length; i++) {
  let windowHeight = window.innerHeight;
  let revealtop = reveals[i].getBoundingClientRect().top;
  let revealpoint = 150;

  if(revealtop < windowHeight - revealpoint) {
   reveals[i].classList.add('showup');
  }else {
   reveals[i].classList.remove('showup');
  }
 }
}