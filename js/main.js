const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.nav_bar');
const navlink = document.querySelectorAll('.nav_link');
hamburger.onclick = () => {
 hamburger.classList.toggle('active');
 navbar.classList.toggle('active');
}

navlink.forEach(n => n.addEventListener('click', () => {
 hamburger.classList.remove('active');
 navbar.classList.remove('active');
}))