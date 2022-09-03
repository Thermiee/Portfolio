const mobileMenu = document.querySelector('.mobile-menu');
const linksInMobileMenu = document.querySelectorAll('.mobile-menu-content li a');
const openButton = document.getElementById('open-button');
const closeButton = document.getElementById('close-button');

openButton.addEventListener('click', (event) => {
  event.preventDefault();
  mobileMenu.style.display = 'block';
});

closeButton.addEventListener('click', (event) => {
  event.preventDefault();
  mobileMenu.style.display = 'none';
});

linksInMobileMenu.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
});

const works = [
  {
    name: 'Flighfull',
    description: 'Flighfull allows users to signup/login to reserve and book a flight.',
    imageURL: './images/projects/FLIGHTFULL.png',
    technologies: ['React', 'Redux', 'Ruby', 'Postgres'],
    liveURL: 'https://flightfull.netlify.app/',
    sourceURL: 'https://github.com/ZahraArshia/book-flight-frontend',
    details: {
      organization: 'Microverse',
      role: 'Full-Stack Developer',
      year: '2022',
    },
    backgroundColor: '#97bd34',
  },
  {
    name: 'Anime World',
    description: 'This is a web application that will return a list of animes and some facts from a provided API',
    imageURL: './images/projects/animeworld.png',
    technologies: ['React', 'Redux', 'CSS'],
    liveURL: 'https://graceful-baklava-ba0862.netlify.app/',
    sourceURL: 'https://github.com/Thermiee/Anime-World.git',
    details: {
      organization: 'Microverse',
      role: 'Front-End Developer',
      year: '2022',
    },
    backgroundColor: '#548dfe',
  },
  {
    name: 'Math Magicians',
    description: 'Math Magicians is a Single Page Application (SPA) created in React that allows users to make simple calculations & Read some famous Math Quotes - with some witty gifs and a fun UI.',
    imageURL: './images/projects/math-magicians.png',
    technologies: ['React', 'CSS'],
    liveURL: 'https://brilliant-semifreddo-5fcc98.netlify.app/',
    sourceURL: 'https://github.com/Thermiee/Math-magicians.git',
    details: {
      organization: 'Microverse',
      role: 'Front-End Developer',
      year: '2022',
    },
    backgroundColor: '#f5deb3',
  },
  {
    name: 'Smart Brain',
    description: 'A Face recognition Web application',
    imageURL: './images/projects/smart-icon.png',
    technologies: ['React', 'Node'],
    liveURL: 'https://smart-icon.herokuapp.com',
    sourceURL: 'https://github.com/Thermiee/smart-brain-ui',
    details: {
      organization: 'Freelance',
      role: 'Full Stack Developer',
      year: '2019',
    },
    backgroundColor: '#24BEDC',
  },
  {
    name: 'Football Highlights',
    description: 'Football Highlist website of recent football matches',
    imageURL: './images/projects/football.png',
    technologies: ['React', 'Redux', 'CSS'],
    liveURL: 'https://lustrous-lebkuchen-41a060.netlify.app/',
    sourceURL: 'https://github.com/Thermiee/upgraded-invention.git',
    details: {
      organization: 'Microverse',
      role: 'Front-End Developer',
      year: '2022',
    },
    backgroundColor: '#eeeeee',
  },
  {
    name: 'Showtime',
    description: 'ShowTime is a web application based on an external TV Maze API. The API provides data about TV Shows. We then built the webapp around it. The webapp has 2 user interfaces (pages): The Homepage and the Comment modal. On the Homepage, each Show can be liked and commented on.',
    imageURL: './images/projects/showtime.png',
    technologies: ['Webpack', 'HTML5', 'CSS3', 'JavaScript'],
    liveURL: 'https://show-time-202.netlify.app/',
    sourceURL: 'https://github.com/Thermiee/Javascript-Capstone',
    details: {
      organization: 'Microverse',
      role: 'Front-End Developer',
      year: '2022',
    },
    backgroundColor: '#78b5e2',
  },
  {
    name: 'Space-Travelers-Hub',
    description: 'The web application provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions using real live data from the SpaceX API.',
    imageURL: './images/projects/spacehub.png',
    technologies: ['React', 'Redux', 'CSS'],
    liveURL: 'bavon-emmanuel-space-hub.herokuapp.com/',
    sourceURL: 'https://github.com/Thermiee/space-travelers-hub',
    details: {
      organization: 'Microverse',
      role: 'Front-End Developer',
      year: '2022',
    },
    backgroundColor: '#0290ff',
  },
];

const languages = [
  {
    name: 'Ruby',
    icon: './images/languages/ruby.svg',
  },
  {
    name: 'JavaScript',
    icon: './images/languages/javaScript.svg',
  },
  {
    name: 'HTML5',
    icon: './images/languages/html.svg',
  },
  {
    name: 'CSS3',
    icon: './images/languages/css.svg',
  },

];

const frameworks = [
  {
    name: 'React',
    icon: './images/frameworks/react.svg',
  },
  {
    name: 'Ruby on Rails',
    icon: './images/frameworks/rails.svg',
  },
  {
    name: 'PostgreSQL',
    icon: './images/frameworks/postgresql.svg',
  },
  {
    name: 'Rspec',
    icon: './images/frameworks/rspec.png',
  },
  {
    name: 'Jest',
    icon: './images/frameworks/jest.svg',
  },
  {
    name: 'MongoDB',
    icon: './images/frameworks/mongodb.svg',
  },
  {
    name: 'Node',
    icon: './images/frameworks/nodejs.svg',
  },
];

const skills = [
  {
    name: 'Pair-Programming',
    icon: './images/skills/pair.png',
  },
  {
    name: 'Remote Work',
    icon: './images/skills/remote-work.png',
  },
  {
    name: 'Git',
    icon: './images/skills/git.svg',
  },
  {
    name: 'GitHub',
    icon: './images/skills/github.svg',
  },
];

const worksSection = document.getElementById('portfolio');

works.forEach((work) => {
  let techs = '';

  work.technologies.forEach((tech) => { techs += `<li class="tag">${tech}</li>`; });

  worksSection.innerHTML += `<div class="card">
  <div class="project-image" style="background-color: ${work.backgroundColor}">
      <img src="${work.imageURL}" alt="${work.name} Screenshot">
  </div>
  <div class="project-description">
      <h3>${work.name}</h3>
      <div class="project-details">
          <p>${work.details.organization}</p>
          <p class="dot">&#x2B24;</p>
          <p class="project-details-color">${work.details.role}</p>
          <p class="dot">&#x2B24;</p>
          <p class="project-details-color">${work.details.year}</p>
      </div>
      <p>${work.description}</p>
      <ul class="tags-section">
          ${techs}  
      </ul>
      <input class="alignment-start button" type="button" value="See Project" id="${work.name}">
  </div>
</div>
`;
});

works.forEach((work) => {
  let techs = '';

  work.technologies.forEach((tech) => { techs += `<li class="tag">${tech}</li>`; });

  document.getElementById(work.name).addEventListener(
    'click', () => {
      document.body.style.overflow = 'hidden';

      document.getElementById('popup-window').innerHTML
        += `<div class="blended-background"></div>
        <div class="popup-window-content">
            <div class="card">
                <div class="project-title">
                    <div>
                        <h3>${work.name}</h3>
                        <div class="project-details">
                            <p>${work.details.organization}</p>
                            <p class="dot">&#x2B24;</p>
                            <p class="project-details-color">${work.details.role}</p>
                            <p class="dot">&#x2B24;</p>
                            <p class="project-details-color">${work.details.year}</p>
                        </div>
                    </div>
                    <a href="" id="popup-close-button"><i class="fas fa-times"></i></a>
                </div>
                <img src="${work.imageURL}" alt="Work 4 Screenshot">
                <div class="project-description">
                    <p>${work.description}</p>
                    <div class="description-wrapper">
                        <ul class="tags-section">
                            ${techs}
                        </ul>
                        <div class="button-wrapper">
                            <a href="${work.liveURL}" target="_blank" class="alignment-start button">See Live <i class="fas fa-link"></i></a>
                            <a href="${work.sourceURL}" target="_blank" class="alignment-start button">See Source <i class="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

      document.getElementById('popup-close-button').addEventListener(
        'click', (event) => {
          event.preventDefault();
          document.getElementById('popup-window').innerHTML = '';
          document.body.style.overflow = 'auto';
        },
      );
    },
  );
});

const languagesSection = document.getElementById('languages');
const frameworksSection = document.getElementById('frameworks');
const skillsSection = document.getElementById('skills');

languages.forEach((language) => {
  languagesSection.innerHTML += `
    <li>
        <img src="${language.icon}" alt="${language.name} icon" height="50">
        <p>${language.name}</p>
    </li>
  `;
});

frameworks.forEach((framework) => {
  frameworksSection.innerHTML += `
    <li>
        <img src="${framework.icon}" alt="${framework.name} icon" height="50">
        <p>${framework.name}</p>
    </li>
  `;
});

skills.forEach((skill) => {
  skillsSection.innerHTML += `
    <li>
        <img src="${skill.icon}" alt="${skill.name} icon" height="50">
        <p>${skill.name}</p>
    </li>
  `;
});

const coll = document.getElementsByClassName('list-heading');

for (let i = 0; i < coll.length; i += 1) {
  coll[i].addEventListener('click', function _() {
    const icon = this.getElementsByClassName('fas')[0];
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-right');

    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = `${content.scrollHeight}px`;
    }
    content.classList.toggle('active');
  });
}

// Validate email field to have only lowercase characters
const contactForm = document.querySelector('#contact form');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailField = contactForm.elements.email;

  if (emailField.value === emailField.value.toLowerCase()) {
    contactForm.submit();
  } else {
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.innerText = 'Use lowercase for Email Address';

    contactForm.insertBefore(
      errorMessage,
      contactForm.querySelector('.button'),
    );
  }
});
