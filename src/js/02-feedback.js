import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-msg';
const USER_NAME = 'user-name';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form textarea'),
  input: document.querySelector('.js-feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.input.addEventListener('input', onInputInput);

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('send form');

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(USER_NAME);
}

function onTextareaInput(evt) {
  const message = evt.target.value;

  localStorage.setItem(STORAGE_KEY, message);
}

function onInputInput(evt) {
  const name = evt.target.value;

  localStorage.setItem(USER_NAME, name);
  refs.input.value = name;
}

function populateTextarea() {
  const savedMsg = localStorage.getItem(STORAGE_KEY);
  const savedUserName = localStorage.getItem(USER_NAME);

  if (savedMsg) {
    refs.textarea.value = savedMsg;
    refs.input.value = savedUserName;
  }
}
