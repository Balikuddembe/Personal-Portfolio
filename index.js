function toggleClasses() {
  const mobileMenu = document.getElementsByClassName('mobile-menu')[0];
  mobileMenu.classList.toggle('open');
}
toggleClasses();
toggleClasses();

//form validation
const form = document.getElementById('form');
const error = document.querySelector('.error');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit',function(event){
  let messageError = [];
  if(email.value!=email.value.toLowerCase()){
    event.preventDefault();
    messageError.push("E-mail should be in lowercase Letters Only !!!");
  }
  if(messageError.length > 0){
    error.innerHTML = messageError.join();
  }
})



