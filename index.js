function toggleClasses() {
  const mobileMenu = document.getElementsByClassName('mobile-menu')[0];
  mobileMenu.classList.toggle('open');
}
toggleClasses();
toggleClasses();

// form validation

const form = document.getElementById('form');
const name = document.getElementById('name');
const error = document.querySelector('.error');
const message = document.getElementById('message');
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

// preserve data in local storage

let localForm = { name: '', email: '', message: '' };
if (localStorage.localForm) {
  localForm = JSON.parse(localStorage.localForm);
  name.value = localForm.name;
  email.value = localForm.email;
  message.value = localForm.message;
}

form.addEventListener('input', () => {
  localStorage.localForm = JSON.stringify(localForm);
  localForm.name = name.value;
  localForm.email = email.value;
  localForm.message = message.value;
});