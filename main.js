function openNav() {
  document.getElementById('myNav').style.display = 'block';
}

function closeNav() {
  document.getElementById('myNav').style.display = 'none';
}

document.querySelector('.hamburger-span').addEventListener('click', openNav);
document.querySelector('.closebtn').addEventListener('click', closeNav);
document.querySelectorAll('.pop-nav').forEach((link) => {
  link.addEventListener('click', () => {
    document.getElementById('myNav').style.display = 'none';
  });
});

const email = document.querySelector('#email');
const validationAlert = document.querySelector('.alert');
const contactForm = document.querySelector('#contact-form');


