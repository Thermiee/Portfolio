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

const email = document.querySelector('#useremail');
const validationAlert = document.querySelector('.alert');
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (event) => {
  const regex = /[A-Z]/;
  const emailContent = email.value;
  if (regex.test(emailContent)) {
    validationAlert.innerHTML = 'Your email address should not contain uppercase letters';
    event.preventDefault();
  }
});

const modelContainer = document.querySelector('.modelContainer');
const project = document.querySelector('.name');
const company = document.querySelector('.company');
const role = document.querySelector('.role');
const year = document.querySelector('.year');
const imageLink = document.querySelector('.image');
const modalContainer = document.querySelector('.modelContainer');
const workSections = document.querySelector('.work__sections');

const projectsList = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: 'images/Snapshoot2.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Back end dev',
    company: 'canopy',
    year: '2015',
    sourceLink: 'https://github.com/thermiee/Portofolio/',
    demoLink: 'https://thermiee.github.io/Portofolio/',
  },
  {
    name: 'Multi-post stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: 'images/Snapshoot.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Full Stack Dev',
    company: 'Facebook',
    year: '2015',
    sourceLink: 'https://github.com/thermiee/Portofolio/',
    demoLink: 'https://thermiee.github.io/Portofolio/',
  },
  {
    name: 'Facebook 360',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. ',
    imageLink: 'images/Snapshoot1.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Back end Dev',
    company: 'Facebook',
    year: '2015',
    sourceLink: 'https://github.com/thermiee/Portofolio/',
    demoLink: 'https://thermiee.github.io/Portofolio/',
  },
  {
    name: 'Uber Navigattion',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: 'images/Snapshoot3.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Lead developer',
    company: 'Uber',
    year: '2015',
    sourceLink: 'https://github.com/thermiee/Portofolio/',
    demoLink: 'https://thermiee.github.io/Portofolio/',
  },
];

workSections.innerHTML = '';
for (let i = 0; i < projectsList.length; i += 1) {
  let languages = '';
  projectsList[i].technologies.forEach((language) => {
    languages += `
      <li><a href='' class='lang1' title='${language}' class='lang-2'>${language}</a></li>
    `;
  });
  workSections.innerHTML += `
      <div class='works'>
          <div class='works__image'>
            <img src='${projectsList[i].imageLink}' alt='work 1' class='img1' />
          </div>
          <div class='work__description'>
            <h2>${projectsList[i].name}</h2>
            <div class='short_desc'>
              <h4>${projectsList[i].company}</h4>
              <span></span>
              <h4>${projectsList[i].role}</h4>
              <span></span>
              <p>${projectsList[i].year}</p>
            </div>
            <div class='long_desc'>
              <p>
                ${projectsList[i].description}
              </p>

              <ul class='work__lang'>
                ${languages}
              </ul>
            </div>
            <button type='button' class='btn btn-enabled project-modal-${i}'>See project</button>
          </div>
    </div>
  `;
}

for (let i = 0; i < projectsList.length; i += 1) {
  document.querySelector(`.project-modal-${i}`).addEventListener('click', () => {
    project.innerHTML = projectsList[i].name;
    imageLink.src = projectsList[i].imageLink;
    role.innerHTML = projectsList[i].role;
    company.innerHTML = projectsList[i].company;
    year.innerHTML = projectsList[i].year;

    document.querySelector('.work__sections').classList.add('blur');
    document.querySelector('.header').classList.add('blur');
    document.querySelector('.content').classList.add('blur');
    document.querySelector('.proj-myself').classList.add('blur');
    document.querySelector('.contact-me').classList.add('blur');
    modalContainer.classList.add('show');
  });
}
document.querySelector('.closeModal').addEventListener('click', () => {
  modelContainer.style.display = 'none';
  window.location.reload();
  document.querySelector('.header').classList.remove('blur');
  document.querySelector('.showcase').classList.remove('blur');
});