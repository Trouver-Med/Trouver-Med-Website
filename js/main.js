const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.nav_bar');
hamburger.onclick = () => {
 hamburger.classList.toggle('active');
 navbar.classList.toggle('active');
}