function toggleClasses() {
  const mobileMenu = document.getElementsByClassName('mobile-menu')[0];
  mobileMenu.classList.toggle('open');
}
toggleClasses();
toggleClasses();

// pop window
const cards = [
  {
    image: 'images/Snapshoot-Portfolio5.png',
    title: 'Tonic',
    tech: ['CANOPY', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
  },
  {
    image: 'images/c2d.png',
    title: 'Multi-Post Stories',
    tech: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends...',
    skills: ['html', 'css', 'javascript'],
  },
  {
    image: 'images/c3d.png',
    title: 'Facebook 360',
    tech: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends...',
    skills: ['html', 'css', 'javascript'],
  },
  {
    image: 'images/c4d.png',
    title: 'Uber Navigation',
    tech: ['Uber', 'Lead Developer', '2015'],
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    skills: ['html', 'css', 'javascript'],
  },
];
const works = document.querySelector('#portfolio');
function addCards(card, index) {
  const {
    image, title, tech, description, skills,
  } = card;

  const techHtml = tech.map(
    (t) => `<li class="canopy">${t}</li>
    ${
  t === tech[tech.length - 1]
    ? ''
    : '<li><img src="images/Counter.png" alt="counter" /></li>'
}`,
  ).join('');

  const skillsHtml = skills.map(
    (s) => `<li class="highlight font-1">${s}</li>`,
  ).join('');
  works.innerHTML += `
  <div class="card card-${(index === 0 || index % 2 === 0) ? '1' : '2'}">
        <a href="#"
          ><img src="${image}" alt="Snapshoot-Portfolio" class="snapshot"
        /></a>
        <div class="${(index === 0 || index % 2 === 0) ? 'right' : 'left'}-cont">
          <h3 class="tonic flex0">${title}</h3>
          <ul class="ul-box1 flex0">
            ${techHtml}
          </ul>
          <p class="description-2 flex0">
            ${description}
          </p>
          <ul class="ul-box2 flex0">
            ${skillsHtml}
          </ul>
          <button class="highlight-2 font-4 flex0 btns">
            See Project
          </button>
        </div>
      </div>
  `;
}
cards.forEach((card, index) => {
  addCards(card, index);
});

// form validation

const form = document.getElementById('form');
const error = document.querySelector('.error');
const email = document.getElementById('email');
form.addEventListener('submit', (event) => {
  const messageError = [];
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    messageError.push('E-mail should be in lowercase Letters Only !!!');
  }
  if (messageError.length > 0) {
    error.innerHTML = messageError.join();
  }
});
