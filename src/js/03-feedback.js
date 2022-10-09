import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

const LOCALSTORAGE_KEY = 'feedback-form-state';

feedbackForm.addEventListener('input', throttle(onInput, 500));
feedbackForm.addEventListener('submit', onSubmit);

function onInput() {
  const dataObj = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataObj));
}

function onSubmit(e) {
  e.preventDefault();
  feedbackForm.reset();
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
function checkDataStorage() {
  const storage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (storage) {
    email.value = storage.email;
    message.value = storage.message;
  } else {
    email.value = '';
    message.value = '';
  }
}
checkDataStorage();
